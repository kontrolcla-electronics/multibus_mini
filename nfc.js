var ID = function(elementId) {
    return document.getElementById(elementId);
};
const grid_cfg = ID('grid_cfg');
const footer = ID('footer');
const navbar_model = ID('navbar_model');
const navbar_wifi = ID('navbar_wifi');
const navbar_nfc = ID('navbar_nfc');
const navbar_ir = ID('navbar_ir');
//
const nfc_0_start = ID('nfc_0_start');
const nfc_1_start = ID('nfc_1_start');
const nfc_0_speed = ID('nfc_0_speed');
const nfc_1_speed = ID('nfc_1_speed');;
const nfc_0_block_from = ID('nfc_0_block_from');
const nfc_1_block_from = ID('nfc_1_block_from');
const nfc_0_block_to = ID('nfc_0_block_to');
const nfc_1_block_to = ID('nfc_1_block_to');
const nfc_0_auth_key = ID('nfc_0_auth_key');
const nfc_1_auth_key = ID('nfc_1_auth_key');
//
const nfc_0_sub_serial = ID('nfc_0_sub_serial');
const nfc_0_sub_chn1 = ID('nfc_0_sub_chn1');
//
const nfc_1_sub_serial = ID('nfc_1_sub_serial');
const nfc_1_sub_chn0 = ID('nfc_1_sub_chn0');
//
//
const linkEl = document.head.querySelector('link[href*="style.css"]');
//
const container = document.getElementsByClassName('container')[0];
const container_wait = ID('container_wait');
const modal = document.getElementsByClassName('modal')[0];
const label_load_data = ID("label_load_data");
const theLabel = ID("label_wait");
const loader = ID("loader");
const d_red = "#DD5555";
const black = "#212529";
const enum_port_ref_num = 13;
const max_bytes_recv = 1024;
//
var load_interval = "";
var load_interval_2 = 0;
var ciclic_interval = 0;
var get_serial_interval = 0;
//
var loaded = false;
var loaded_css = false;
var event = new Event('change');
var modal_counter = 0;
//
var links_block = false;
// 2d arrays
var nfc_0_subs_hex_array = [];
for ( var i = 0; i <= enum_port_ref_num; i++ ) 
{ nfc_0_subs_hex_array.push('0');
}
var nfc_1_subs_hex_array = [];
for ( var i = 0; i <= enum_port_ref_num; i++ ) 
{ nfc_1_subs_hex_array.push('0');
}
//*********
// LOAD DATA on open port -> callback 1
function loadData_start() {
  // necessaris per reconnexio serial
  loaded = false;
  grids_all.style.display = "none";
  footer.style.display = "none";
  clearInterval(ciclic_interval);
  //
  window.setTimeout(loadData("start"), 100);
  load_interval = setInterval( function() { loadData("start"); }, 5000 );
  };

function loadData( value ) {
  if ( loaded == true )
	{	clearInterval(load_interval);
		return;
	}
  var now = get_time();
	var objecte = {};
	objecte.action = "load_data";
	var parametres = JSON.stringify(objecte);
	console.log( now + " - call load data - " + value + ' / ' + parametres);
  send_serial(1, parametres);
 }
//*********
// BUTTON UPDATE CFG -> callback 2
document.querySelector("#btn_update").addEventListener("click", e => {
  container.style.display = "none";
  var r = confirm("Are you sure you want to update and restart the device?");
  if ( r == false){
    container.style.display = "block";
    return;
  }
  container_wait.style.display = "block";
  // dades
	var objecte = {};
  objecte.action = "update_cfg";
  objecte.nfc_0_start = nfc_0_start.selectedIndex;
  objecte.nfc_1_start = nfc_1_start.selectedIndex;
  //
  objecte.nfc_0_speed = nfc_0_speed.selectedIndex;
  objecte.nfc_1_speed = nfc_1_speed.selectedIndex;
  //
  objecte.nfc_0_block_from = parseInt(nfc_0_block_from.value, 16 );
  objecte.nfc_1_block_from = parseInt(nfc_1_block_from.value, 16 );
  objecte.nfc_0_block_to = parseInt(nfc_0_block_to.value, 16 );
  objecte.nfc_1_block_to = parseInt(nfc_1_block_to.value, 16 );
  //
  objecte.nfc_0_auth_key = nfc_0_auth_key.value;
  objecte.nfc_1_auth_key = nfc_1_auth_key.value;
  // usb serials
  checked = '0';
  if ( nfc_0_sub_serial.checked == true )
    checked = '1';
  nfc_0_subs_hex_array[11] = checked;
  checked = '0';
  if ( nfc_1_sub_serial.checked == true )
    checked = '1';
  nfc_1_subs_hex_array[11] = checked;
  checked = '0';
  // uarts
  checked = '0';
  if ( nfc_0_sub_chn1.checked == true )
    checked = '1';
  nfc_0_subs_hex_array[10] = checked;
  checked = '0';
  if ( nfc_1_sub_chn0.checked == true )
    checked = '1';
  nfc_1_subs_hex_array[9] = checked;
  // subs arrays to string
  var bin;
  bin = nfc_0_subs_hex_array.reverse().join("");
  objecte.nfc_0_sub = parseInt(bin, 2).toString(16);
  bin = nfc_1_subs_hex_array.reverse().join("");
  objecte.nfc_1_sub = parseInt(bin, 2).toString(16);
  //
	var parametres = JSON.stringify(objecte);
  console.log("call update cfg - "+ parametres);
  clearInterval(ciclic_interval);
	setTimeout(() => {
	  send_serial(2, parametres);;
	}, 100);
  });
//*********
//  CICLIC DATA -> callback 3 ( l'inicia en cicle la callback 1 answer )
function ciclic() {
  var objecte = {};
  objecte.action = "ciclic";
  var parametres = JSON.stringify(objecte);
  console.log("call ciclic - " + parametres);
  send_serial(3, parametres);
  ciclic_timeout();
}
//*******************************************
// CALLBACKS
function parse_frame(frame) 
{ var data = JSON.parse(frame);
  if ( data != "") 
  { if ( data.received != undefined )
      console.log("received: " + data.received);
    if ( data.action == "load_data" )
      callback_load_data(data);
    else if ( data.action == "update_cfg" )
      callback_update_cfg(data);
    else if ( data.action == "ciclic" )
      callback_ciclic(data);
    else if ( data.action == "box is in update mode" )
      { label_load_data.style.display = "block";
        label_load_data.innerHTML = data.action + " - re connect it";
      }
  } 
}
//*******************************************
// CONFIG LOAD DATA - callback 1
function callback_load_data(data) 
{ if ( loaded_css )
    container.style.display = "block";
  console.log("received_1: " + data.received);
  if (data.received == "successfully") {
    label_load_data.style.display = "none";
    label_load_data.innerHTML = "";
    // stop mes repeaticions
    loaded = true;
    window.setTimeout(ciclic, 100);
    ciclic_interval = window.setInterval(ciclic, 3000);
    // navbar
    if (data.model != undefined) {
      model_check( data.model );
    }
    // start
    if (data.nfc_0_start != undefined) {
      nfc_0_start.selectedIndex = data.nfc_0_start;
    }
    if (data.nfc_1_start != undefined) {
      nfc_1_start.selectedIndex = data.nfc_1_start;
    }
    // speed
    if (data.nfc_0_speed != undefined) {
      nfc_0_speed.selectedIndex = data.nfc_0_speed;
    }
    if (data.nfc_1_speed != undefined) {
      nfc_1_speed.selectedIndex = data.nfc_1_speed;
    }
    // key
    if (data.nfc_0_auth_key != undefined) {
      nfc_0_auth_key.value = data.nfc_0_auth_key.toUpperCase();
    }
    if (data.nfc_1_auth_key != undefined) {
      nfc_1_auth_key.value = data.nfc_1_auth_key.toUpperCase();
    }
    // block from
    if (data.nfc_0_block_from != undefined) {
      nfc_0_block_from.value = data.nfc_0_block_from;
    }
    if (data.nfc_1_block_from != undefined) {
      nfc_1_block_from.value = data.nfc_1_block_from;
    }
    // block to
    if (data.nfc_0_block_to != undefined) {
      nfc_0_block_to.value = data.nfc_0_block_to;
    }
    if (data.nfc_1_block_to != undefined) {
      nfc_1_block_to.value = data.nfc_1_block_to;
    }
    // subs 
    for ( var i = 0; i < enum_port_ref_num; i++ )
    { var aux, value, mask;
      mask = 1 << i;
      if ( data.nfc_0_sub != undefined )
      { aux = parseInt( data.nfc_0_sub, 16 );
        value = '0';
        if ( ( aux & mask) != 0 )
          value = '1';
        nfc_0_subs_hex_array[i] = value;
      }
      if ( data.nfc_1_sub != undefined )
      { aux = parseInt( data.nfc_1_sub, 16 );
        value = '0';
        if ( ( aux & mask) != 0 )
          value = '1';
        nfc_1_subs_hex_array[i] = value;
      }
    }
    set_sub_checks( 0 );
    set_sub_checks( 1 );
    //
    grids_all.style.display = "inline-grid";
    footer.style.display = "block";
    links_block = false;
  }
}
//*********
// UPDATE CFG - callback 2
function callback_update_cfg(data) 
{ console.log("received_2: " + data.received);
  if (data.received == "successfully") {
    waiting();
  }
  else
  { container_wait.style.display = "none"; 
    alert("the box failed to be updated");
  }
  links_block = false;
}
//*********
// CICLIC DATA callback 3
function callback_ciclic(data) 
{ closeModal();
  if ( data.hasOwnProperty("error_num"))
  { if ( data.error_num != 0 )
    { container_wait.style.display = "none";
      error_check( data );
      return;
    }
  }
  // subs has changed
  if ( data.subs_has_changed_chn_0 != undefined )
  {   subs_has_changed ( data.subs_has_changed_chn_0, 0 )
  }   
  if ( data.subs_has_changed_chn_1 != undefined )
  {   subs_has_changed ( data.subs_has_changed_chn_1, 1 )
  }
  // run has changed
  if ( data.run_has_changed_chn_0 != undefined )
  {   run_has_changed ( data.run_has_changed_chn_0, 0 )
  }   
  if ( data.run_has_changed_chn_1 != undefined )
  {   run_has_changed ( data.run_has_changed_chn_1, 1 )
  }
  links_block = false;
}
//*********
function model_check( model )
{ switch ( model )
  { case 0:
      navbar_model.innerHTML = "Basic";
      break;
    case 1:
      navbar_model.innerHTML = "Wifi";
      navbar_wifi.style.display = "block";
      break;
    case 2:
      navbar_model.innerHTML = "Nfc";
      navbar_nfc.style.display = "block";
      break;
    case 3:
      break;
    case 4:
      navbar_model.innerHTML = "Ir";
      navbar_ir.style.display = "block";
      break;
  }
}
//*********
// SET SUBS
//*********
function set_sub_checks( chn )
{ var flag;
  if ( chn == 0 )
  { // no hi han wports 4-8 - ni 9 chn 0
    flag = false;
    if ( nfc_0_subs_hex_array[10] == 1 )
      flag = true;
    nfc_0_sub_chn1.checked = flag;
    flag = false;
    if ( nfc_0_subs_hex_array[11] == 1 )
      flag = true;
    nfc_0_sub_serial.checked = flag;

  }
  else if ( chn == 1 )
  { // no hi han wports 4-8
    flag = false;
    if ( nfc_1_subs_hex_array[9] == 1 )
      flag = true;
    nfc_1_sub_chn0.checked = flag;
    // no hi ha 10 chn 1
    flag = false;
    if ( nfc_1_subs_hex_array[11] == 1 )
      flag = true;
    nfc_1_sub_serial.checked = flag;
    flag = false;
  }
}
//*********
// SUBS HAS CHANGED
//*********
function subs_has_changed ( str_hex, chn  )
{  var nodes, child, bit;
  var num = parseInt( str_hex, 16 );
  if ( chn == 0 )
  {   // 1a line
      nodes = document.getElementById("nfc_0_subs_line_1").childNodes;
      // usb
      bit = 11;
      child = 1;
      has_changed_2 ( bit, num, child, nodes );
      // chn 1
      bit = 10;
      child = 3;
      has_changed_2 ( bit, num, child, nodes );
      // 2a line
      nodes = document.getElementById("nfc_0_subs_line_2").childNodes;
      // w0
      bit = 4;
      child = 1;
      has_changed_2 ( bit, num, child, nodes );
      // w1
      bit = 5;
      child = 3;
      has_changed_2 ( bit, num, child, nodes );
      // w2
      bit = 6;
      child = 5;
      has_changed_2 ( bit, num, child, nodes );
      // w3
      bit = 7;
      child = 7;
      has_changed_2 ( bit, num, child, nodes );
  }
  else if ( chn == 1 )
  {  // 1a line
      nodes = document.getElementById("nfc_1_subs_line_1").childNodes;
      // usb
      bit = 11;
      child = 1;
      has_changed_2 ( bit, num, child, nodes );
      // chn 0
      bit = 9;
      child = 3;
      has_changed_2 ( bit, num, child, nodes );
      // 2a line
      nodes = document.getElementById("nfc_1_subs_line_2").childNodes;
      // w0
      bit = 4;
      child = 1;
      has_changed_2 ( bit, num, child, nodes );
      // w1
      bit = 5;
      child = 3;
      has_changed_2 ( bit, num, child, nodes );
      // w2
      bit = 6;
      child = 5;
      has_changed_2 ( bit, num, child, nodes );
      // w3
      bit = 7;
      child = 7;
      has_changed_2 ( bit, num, child, nodes );        
  }
}
function has_changed_2 ( bit, num, child, nodes )
{   var c = black;
    var mask = 1 << bit;
    if ( ( num & mask) != 0 )
        c = d_red;
    if ( nodes[child] != undefined )
        nodes[child].style.color = c;
}
//*********
// RUN HAS CHANGED
function run_has_changed ( value, chn )
{   var c = black;
    if ( value == 1 )
      c = d_red;
    switch ( chn )
    {   case 0:
          nfc_0_start.style.color = c;
          break;
        case 1:
          nfc_1_start.style.color = c;
          break;
    }
}
//*********
//  WAITING UPDATE
function waiting(){
  var i = 59;
  var r = setInterval(function(){ 
    if (i < 10 ){    
      clearInterval(r); 
      loader.style.display = "none";
      container.style.display = "block";
      container_wait.style.display = "none";
    }
    else{
      theLabel.innerHTML = "re starting the box: " + i; 
    }
    i--;
    }, 100);
}
//*********
// MODAL Open
function openModal() {
  modal.style.display = "block";
};

// MODAL Close
function closeModal() {
  modal.style.display = "none";
  modal_counter = 0;
}
//*********
//  FOLLOW THE LINKS ?
window.addEventListener("click", e => {
  if ( links_block == true )
  { if (e.target.nodeName === 'A') {
    e.preventDefault();
    }
  }
});
//*******
// CHECK CSS IS LOADED
if ( Boolean( linkEl.sheet ) )
  loaded_css = true;
//*******
function send_serial( number, params )
{ links_block = true;
  var now = get_time();
  if ( get_serial_interval == 0 )
  { console.log( now + " - no serial connection");
    return;
  }
  var len = params.length;
  var len_hex = ('0000' + len.toString(16).toUpperCase()).slice(-4);
  var frame = "POST_" + len_hex;
  // LOAD DATA - callback 1
  if ( number == 1 )
    frame += "_nfc_load:";
  // UPDATE CFG -> callback 2
  else if ( number == 2 )
    frame += "_nfc_cfg:";
  // CICLIC - callback 3
  else if ( number == 3 )
    frame += "_nfc_ciclic:";
  frame += params;
  serial_obj.write(frame);
  console.log( now + " - serial_write - "+ params );
}
//*****************************************************************************
const serial_obj = new serial_class();
const connect = document.getElementById('connect');
const recv_div = document.getElementById('recv_div');

connect.addEventListener('pointerdown', () => {
  serial_obj.init().then(() => 
    { get_serial_interval = window.setInterval(getSerialMessage, 100) 
      console.log ( "open port" );
      theLabel.innerHTML = "";
      loader.style.display = "none";
      container_wait.style.display = "none";
      container.style.display = "block";
      loadData_start();
      closeModal();
    }); 
});

var data_recv = "";
var data_saved = "";
var data_array = [];

async function getSerialMessage() 
{ var data = await serial_obj.read();
  if( data == "$lost$" )
  { clearInterval(get_serial_interval);
    get_serial_interval = 0;
    openModal();
    links_block = false;
    theLabel.innerHTML = "";
    return;
  }
  console.log ( "recv data len: " + data.length );
  var index = data.indexOf('\r');
  while ( index != -1 )
  { data_recv = data_saved;
    data_recv += data.slice(0, index);
    // quedara
    data_saved = "";
    data = data.slice(index+1);
    // task parse
    var now = get_time();
    console.log ( now + " - data_recv: " + data_recv + '\n' );
    parse_frame(data_recv);
    //
    index = data.indexOf('\r');
  }
  if ( data )    
  { // es part del frame
    data_saved += data;
  }
  // per seguretat
  if ( data_saved.length > max_bytes_recv )
  { console.log ( now + " - data recv overflow: emptied\n" );
    data_saved = "";
  }
}
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}
function get_time()
{ const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;
  return time;
}
function ciclic_timeout() {
  modal_counter++;
  if ( modal_counter == 7 )
    openModal();
  links_block = false;
  theLabel.innerHTML = "";
}
//************
openModal();