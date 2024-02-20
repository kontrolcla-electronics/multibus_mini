var ID = function(elementId) {
    return document.getElementById(elementId);
};
const grids_all = ID('grids_all');
const footer = ID('footer');
const navbar_model = ID('navbar_model');
const navbar_wifi = ID('navbar_wifi');
const navbar_nfc = ID('navbar_nfc');
const navbar_ir = ID('navbar_ir');
//
const chn_0_bus_option = ID('chn_0_bus_option');
const chn_0_bus_speed = ID('chn_0_bus_speed');
const chn_0_powered = ID('chn_0_powered');
const chn_0_powered_current = ID('chn_0_powered_current');
const chn_0_booster = ID('chn_0_booster');
const chn_0_booster_label = ID('chn_0_booster_label');
const chn_0_booster_current = ID('chn_0_booster_current');
const chn_0_poll_option = ID('chn_0_poll_option');
const chn_0_poll_address = ID('chn_0_poll_address');
const chn_0_poll_direction = ID('chn_0_poll_direction');
const chn_0_poll_direction_info = ID('chn_0_poll_direction_info');
//
const chn_0_subs_line_1 = document.querySelectorAll( "#chn_0_subs_line_1 input" );  // altres: select, textarea, button, etc
const chn_0_subs_line_2 = document.querySelectorAll( "#chn_0_subs_line_2 input" );
const chn_0_sub_serial = ID('chn_0_sub_serial');
const chn_0_sub_chn1 = ID('chn_0_sub_chn1');
const chn_0_group_sub_wp0 = ID('chn_0_group_sub_wp0');
const chn_0_sub_wp0 = ID('chn_0_sub_wp0');
const chn_0_group_sub_wp1= ID('chn_0_group_sub_wp1');
const chn_0_sub_wp1 = ID('chn_0_sub_wp1');
const chn_0_group_sub_wp2 = ID('chn_0_group_sub_wp2');
const chn_0_sub_wp2 = ID('chn_0_sub_wp2');
const chn_0_group_sub_wp3 = ID('chn_0_group_sub_wp3');
const chn_0_sub_wp3 = ID('chn_0_sub_wp3');
const chn_0_frame_ascii = ID('chn_0_frame_ascii');
const chn_0_frame_hex = ID('chn_0_frame_hex');
const chn_0_sel_input = ID('chn_0_sel_input');
//
const chn_1_bus_option = ID('chn_1_bus_option');
const chn_1_bus_speed = ID('chn_1_bus_speed');
const chn_1_powered = ID('chn_1_powered');
const chn_1_powered_current = ID('chn_1_powered_current');
const chn_1_booster = ID('chn_1_booster');
const chn_1_booster_label = ID('chn_1_booster_label');
const chn_1_booster_current = ID('chn_1_booster_current');
const chn_1_poll_option = ID('chn_1_poll_option');
const chn_1_poll_address = ID('chn_1_poll_address');
const chn_1_poll_direction = ID('chn_1_poll_direction');
const chn_1_poll_direction_info = ID('chn_1_poll_direction_info');
//
const linkEl = document.head.querySelector('link[href*="style.css"]');
//
const chn_1_subs_line_1 = document.querySelectorAll("#chn_1_subs_line_1 input");
const chn_1_subs_line_2 = document.querySelectorAll("#chn_1_subs_line_2 input");
const chn_1_sub_serial = ID('chn_1_sub_serial');
const chn_1_sub_chn0 = ID('chn_1_sub_chn0');
const chn_1_sub_ep0 = ID('chn_1_sub_ep0');
const chn_1_sub_ep1 = ID('chn_1_sub_ep1');
const chn_1_sub_ep2 = ID('chn_1_sub_ep2');
const chn_1_sub_ep3 = ID('chn_1_sub_ep3');
const chn_1_group_sub_wp0 = ID('chn_1_group_sub_wp0');
const chn_1_sub_wp0 = ID('chn_1_sub_wp0');
const chn_1_group_sub_wp1 = ID('chn_1_group_sub_wp1');
const chn_1_sub_wp1 = ID('chn_1_sub_wp1');
const chn_1_group_sub_wp2 = ID('chn_1_group_sub_wp2');
const chn_1_sub_wp2 = ID('chn_1_sub_wp2');
const chn_1_group_sub_wp3 = ID('chn_1_group_sub_wp3');
const chn_1_sub_wp3 = ID('chn_1_sub_wp3');
const chn_1_frame_ascii = ID('chn_1_frame_ascii');
const chn_1_frame_hex = ID('chn_1_frame_hex');
const chn_1_sel_input = ID('chn_1_sel_input');
//
const container = document.getElementsByClassName('container')[0];
const container_wait = ID('container_wait');
const modal = document.getElementsByClassName('modal')[0];
const label_load_data = ID("label_load_data");
const theLabel = ID("label_wait");
const loader = ID("loader");
const red = "#ee0000";
const green = "#00bb00";
const d_red = "#DD5555";
const black = "#212529";
const max_bytes_recv = 1024;
//
const PCF8574A_addr = ["0x38 ( A )","0x39 ( A )","0x3A ( A )","0x3B ( A )","0x3C ( A )","0x3D ( A )","0x3E ( A )","0x3F ( A )"];
const PCF857x_MCP230xx_addr = ["0x20","0x21","0x22","0x23","0x24","0x25","0x26","0x27"];
const TCA9539_addr = ["0x74","0x75","0x76","0x77"];
const MPR121_addr = ["0x5A","0x5B","0x5C","0x5D"];
const chips_bits_number = [0, 8, 16, 16, 8, 16, 12];
const error_1 = "error: invalid hex character !!";
const frame_test_sent = "Frame test sent ";
const went_wrong = "Something went wrong !!\nTry again";
const enum_port_ref_num = 13;
const logic_inputs_num = 19;
const i2c_speed_normal = ["100 khz","200 khz","400 khz"];
const i2c_speed_PCF8574 = ["100 khz"];
const uart_speeds = ["9600 baud","19200 baud","38400 baud","57600 baud","115200 baud"];
//
var load_interval = 0;
var load_interval_2 = 0;
var ciclic_interval = 0;
var get_serial_interval = 0;
//
var loaded = false;
var loaded_css = false;
var event = new Event('change');
var modal_counter = 0;

var load_data_index = 0;
var update_cfg_index = 0;
//
var chn_0_i2c_booster = 0;
var chn_1_i2c_booster = 0;
//
var links_block = false;
//
var chn_0_frame_hex_array = [];
var chn_1_frame_hex_array = [];
for ( var i = 0; i <= logic_inputs_num; i++ )
{ chn_0_frame_hex_array[i] = "";
  chn_1_frame_hex_array[i] = "";
}
// 2d arrays
var chn_0_subs_hex_array = [];
var chn_1_subs_hex_array = [];
for ( var i = 0; i <= logic_inputs_num; i++ ) 
{ var row_0 = [];
  var row_1 = [];
  for ( var j = 0; j < enum_port_ref_num; j++ ) 
  { row_0.push('0');
    row_1.push('0');
  }
  chn_0_subs_hex_array.push(row_0);
  chn_1_subs_hex_array.push(row_1);
}
// reg hex chars? - no spaces - until the end of string $
var reg_hex = /[0-9A-Fa-f]$/;
//*********
// LOAD DATA on open port -> callback 1
function loadData_start() {
  load_data_index = 0;
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
  objecte.index = load_data_index;
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
  update_cfg_index = 0;
  update_cfg();
});
function update_cfg() {
  // dades
	var objecte = {};
  var aux, list_add;
  objecte.action = "update_cfg";
  objecte.index = update_cfg_index;
  if ( update_cfg_index < logic_inputs_num )
  { // frames
    objecte.chn_0_frame = chn_0_frame_hex_array[update_cfg_index];
    objecte.chn_1_frame = chn_1_frame_hex_array[update_cfg_index];
    // subs
    var bin;
    bin = chn_0_subs_hex_array[update_cfg_index].reverse().join("");
    objecte.chn_0_sub = parseInt(bin, 2).toString(16);
    bin = chn_1_subs_hex_array[update_cfg_index].reverse().join("");
    objecte.chn_1_sub = parseInt(bin, 2).toString(16);
  }
  else
  { // chn 0
    objecte.chn_0_bus_option = chn_0_bus_option.selectedIndex;
    objecte.chn_0_bus_speed = chn_0_bus_speed.selectedIndex;
    objecte.chn_0_powered = 0;
    objecte.chn_0_booster = 0;
    if ( chn_0_powered.checked == true )
      objecte.chn_0_powered = 1;
    if ( chn_0_booster.checked == true )
      objecte.chn_0_booster = 1;
    objecte.chn_0_poll_option = chn_0_poll_option.selectedIndex;
    //
    list_add = get_list ( chn_0_poll_option.selectedIndex );
    aux = parseInt( list_add[chn_0_poll_address.selectedIndex], 16 );
    objecte.chn_0_poll_address = aux;
    //
    aux = parseInt( chn_0_poll_direction.value, 2 );
    if ( isNaN( aux ) == 0 )
      objecte.chn_0_poll_direction = aux;
    // chn1
    objecte.chn_1_bus_option = chn_1_bus_option.selectedIndex;
    objecte.chn_1_bus_speed = chn_1_bus_speed.selectedIndex;
    objecte.chn_1_powered = 0;
    objecte.chn_1_booster = 0;
    if ( chn_1_powered.checked == true )
      objecte.chn_1_powered = 1;
    if ( chn_1_booster.checked == true )
      objecte.chn_1_booster = 1;
    objecte.chn_1_poll_option = chn_1_poll_option.selectedIndex;
    //
    list_add = get_list ( chn_1_poll_option.selectedIndex );
    aux = parseInt( list_add[chn_1_poll_address.selectedIndex], 16 );
    objecte.chn_1_poll_address = aux;
    //
    aux = parseInt( chn_1_poll_direction.value, 2 );
    if ( isNaN( aux ) == 0 )
      objecte.chn_1_poll_direction = aux;
  }
	var parametres = JSON.stringify(objecte);
  console.log("call update cfg - "+ parametres);
  clearInterval(ciclic_interval);
	setTimeout(() => {
	  send_serial(2, parametres);;
	}, 100);
 }
//*********
//  CICLIC -> callback 3 ( l'inicia en cicle la callback 1 answer )
function ciclic() {
  var objecte = {};
  objecte.action = "ciclic";
  objecte.input_chn_0 = parseInt(chn_0_sel_input.value);
  objecte.input_chn_1 = parseInt(chn_1_sel_input.value);
  var parametres = JSON.stringify(objecte);
  console.log("call ciclic - " + parametres);
  send_serial(3, parametres);
  ciclic_timeout();
}
//*********
// BUTTON TEST FRAME CHANNELS -> callback 4
document.querySelector("#btn_chn_0_test").addEventListener("click", e => { 
  test_channel( 0 );
});
document.querySelector("#btn_chn_1_test").addEventListener("click", e => { 
  test_channel( 1 );
});
function test_channel( chn ) {
  if ( alert_inputs_check( chn ) )
    return;
  var objecte = {};
  objecte.action = "test_channel";
  objecte.channel = chn;
  var bin = get_sub_checks( chn );
  // reverse string
  var bin_2 = bin.split("").reverse().join("");
  // check
  if ( bin_2.indexOf("1") == -1 )
  { alert( "There is no input subscription selected !!" );
    return;
  }
  objecte.subs = parseInt(bin_2, 2).toString(16);
  var idx;
  if( chn == 0 )
  { idx = parseInt(chn_0_sel_input.value);
    // no cal - objecte.input = chn_0_sel_input[idx].value;
    objecte.frame = chn_0_frame_hex_array[idx];
  }
  else if( chn == 1 )
  { idx = parseInt(chn_1_sel_input.value);
    // no cal - objecte.input = chn_1_sel_input[idx].value;
    objecte.frame = chn_1_frame_hex_array[idx];
  }
  // send
  var parametres = JSON.stringify(objecte);
  console.log("call frame test chn " + chn + " - "+ parametres);
  setTimeout(() => {
    send_serial(4, parametres);
  }, 100);
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
// LOAD DATA - callback 1
function callback_load_data( data ) 
{ if ( loaded_css )
    container.style.display = "block";
  if ( data.received == "next" ) 
  { if ( data.index != undefined ) 
    { var idx = data.index;
      // navbar
      if ( data.model != undefined ) {
        model_check( data.model );
      }
      label_load_data.style.display = "block";
      label_load_data.innerHTML = "loading: " + ( logic_inputs_num - load_data_index );
      if ( load_data_index <= logic_inputs_num )
      { load_data_index++;
        load_interval_2 = window.setTimeout(loadData("next"), 100);
        clearInterval(load_interval);
        load_interval = setInterval( function() { loadData("re start"); },5000 );
      }
      // frames
      if ( data.chn_0_frame != undefined )
        chn_0_frame_hex_array[idx] = data.chn_0_frame;
      if (  data.chn_1_frame != undefined )
        chn_1_frame_hex_array[idx] = data.chn_1_frame;
      // subs - 1 bit/port_ref
      for ( var i = 0; i < enum_port_ref_num; i++ )
      { var aux, value, mask;
        mask = 1 << i;
        if ( data.chn_0_sub != undefined )
        { aux = parseInt( data.chn_0_sub, 16 );
          value = '0';
          if ( ( aux & mask) != 0 )
            value = '1';
          chn_0_subs_hex_array[idx][i] = value;
        }
        if ( data.chn_1_sub != undefined )
        { aux = parseInt( data.chn_1_sub, 16 );
          value = '0';
          if ( ( aux & mask) != 0 )
            value = '1';
          chn_1_subs_hex_array[idx][i] = value;
        }
      }
    }
    else
      return;
  }
  else if ( data.received == "successfully") 
  { label_load_data.style.display = "none";
    label_load_data.innerHTML = "";
    loaded = true;
    clearInterval(load_interval_2);
    window.setTimeout(ciclic, 500);
    ciclic_interval = window.setInterval(ciclic, 3000);
    // navbar
    if ( data.model != undefined ) {
      model_check( data.model );
    }
    // 0
    if ( data.chn_0_bus_option != undefined ) {
      chn_0_bus_option.selectedIndex = data.chn_0_bus_option;
    }
    if ( data.chn_0_powered != undefined ) {
      if ( data.chn_0_powered == 1) 
        chn_0_powered.checked = true;
      else 
        chn_0_powered.checked = false;
    }
    if ( data.chn_0_booster != undefined ) {
      if ( data.chn_0_booster == 1) 
        chn_0_booster.checked = true;
      else 
        chn_0_booster.checked = false;
    }
    chn_0_i2c_booster = chn_0_booster.checked;
    if( data.chn_0_poll_direction != undefined ) {
      chn_0_poll_direction.value = data.chn_0_poll_direction.toString(2);
    }
    if ( data.chn_0_poll_option != undefined ) {
      chn_0_poll_option.selectedIndex = data.chn_0_poll_option;
      chn_0_bus_option.dispatchEvent( new Event("input") );
      // address
      if ( data.chn_0_poll_address != undefined ) {
        var hex_string = "0x" + data.chn_0_poll_address.toString(16).toUpperCase();
        var list = get_list ( data.chn_0_poll_option );
        for ( var i = 0; i < list.length; i++ )
        {   if ( list[i] == hex_string )
            { chn_0_poll_address.selectedIndex = i;
              break;
            }
        }
      }
    }
    if ( data.chn_0_bus_speed != undefined ) {
      chn_0_bus_speed.selectedIndex = data.chn_0_bus_speed;
    }
    // 1
    if ( data.chn_1_bus_option != undefined ) {
      chn_1_bus_option.selectedIndex = data.chn_1_bus_option;
    }
    if ( data.chn_1_powered != undefined ) {
      if ( data.chn_1_powered == 1) 
        chn_1_powered.checked = true;
      else 
        chn_1_powered.checked = false;
    }
    if ( data.chn_1_booster != undefined ) {
      if ( data.chn_1_booster == 1) 
        chn_1_booster.checked = true;
      else 
        chn_1_booster.checked = false;
    }
    chn_1_i2c_booster = chn_1_booster.checked;
    if( data.chn_1_poll_direction != undefined ) {
      chn_1_poll_direction.value = data.chn_1_poll_direction.toString(2);
    }
    if ( data.chn_1_poll_option != undefined ) {
      chn_1_poll_option.selectedIndex = data.chn_1_poll_option;
      chn_1_bus_option.dispatchEvent( new Event("input") );
      // address
      if ( data.chn_1_poll_address != undefined ) {
        var hex_string = "0x" + data.chn_1_poll_address.toString(16).toUpperCase();
        var list = get_list ( data.chn_1_poll_option );
        for ( var i = 0; i < list.length; i++ )
        {   if ( list[i] == hex_string )
            { chn_1_poll_address.selectedIndex = i;
              break;
            }
        }
      }
    }
    if ( data.chn_1_bus_speed != undefined ) {
      chn_1_bus_speed.selectedIndex = data.chn_1_bus_speed;
    }
    //
    grids_all.style.display = "inline-grid";
    footer.style.display = "block";
    links_block = false;
    chn_0_sel_input.dispatchEvent( new Event("change") );
    chn_1_sel_input.dispatchEvent( new Event("change") );
  }
}
//*********
// UPDATE CFG - callback 2
function callback_update_cfg(data) 
{ console.log("received: " + data.received);
  if ( data.received == "next" && update_cfg_index <= logic_inputs_num ) {
    theLabel.innerHTML = "sending: " + ( logic_inputs_num - update_cfg_index ); 
    update_cfg_index ++;
    window.setTimeout(update_cfg, 100);
  }
  else if ( data.received == "successfully")
    waiting();
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
  if ( data.chn_0_powered_current != undefined ) {
    if ( data.chn_0_powered_current == 1) 
      chn_0_powered_current.style.background = green;
    else 
      chn_0_powered_current.style.background = red;
  }
  if ( data.chn_1_powered_current != undefined ) {
    if ( data.chn_1_powered_current == 1) 
      chn_1_powered_current.style.background = green;
    else 
      chn_1_powered_current.style.background = red;
  }
  if ( data.chn_0_booster_current != undefined ) {
    if ( data.chn_0_booster_current == 1) 
      chn_0_booster_current.style.background = green;
    else 
      chn_0_booster_current.style.background = red;
  }
  if ( data.chn_1_booster_current != undefined ) {
    if ( data.chn_1_booster_current == 1) 
      chn_1_booster_current.style.background = green;
    else 
      chn_1_booster_current.style.background = red;
  }
  // subs has changed
  if ( data.subs_has_changed_chn_0 != undefined )
  {   subs_has_changed ( data.subs_has_changed_chn_0, 0 )
  }   
  if ( data.subs_has_changed_chn_1 != undefined )
  {   subs_has_changed ( data.subs_has_changed_chn_1, 1 )
  } 
  links_block = false;
}
//*********
// TEST FRAME CHN 0 - callback 4
function ajax4_complete(evt) {
  console.log("event: " + evt.type);
  // data = req.responseText;
  var data = JSON.parse(req.responseText);
  if ( data != "") {
    console.log("received: " + data.received);
    if ( data.received != undefined ) {
      alert( frame_test_sent + data.received );
    }
    else
    {   alert(went_wrong);
    }
    links_block = false;
  }
}
//*********
// TEST FRAME CHN 1 - callback 5
function ajax5_complete(evt) {
  console.log("event: " + evt.type);
  // data = req.responseText;
  var data = JSON.parse(req.responseText);
  if ( data != "") {
    console.log("received: " + data.received);
    if ( data.received != undefined ) {
      alert( frame_test_sent + data.received );
    }
    else
    {   alert(went_wrong);
    }
    links_block = false;
  }
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
      chn_0_group_sub_wp0.style.display = "block";
      chn_0_group_sub_wp1.style.display = "block";
      chn_0_group_sub_wp2.style.display = "block";
      chn_0_group_sub_wp3.style.display = "block";
      chn_1_group_sub_wp0.style.display = "block";
      chn_1_group_sub_wp1.style.display = "block";
      chn_1_group_sub_wp2.style.display = "block";
      chn_1_group_sub_wp3.style.display = "block";
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
// BUS OPTIONS
chn_0_bus_option.addEventListener("input", e => {
  var option_idx = chn_0_bus_option.selectedIndex;
  bus_check( 0, option_idx );
  speed_option_chn_0 ( option_idx );
});
chn_1_bus_option.addEventListener("input", e => {
  var option_idx = chn_1_bus_option.selectedIndex;
  bus_check( 1, option_idx );
  speed_option_chn_1 ( option_idx );
});
chn_0_booster.addEventListener("input", e => {
  chn_0_i2c_booster = chn_0_booster.checked;
});
chn_1_booster.addEventListener("input", e => {
  chn_1_i2c_booster = chn_1_booster.checked;
});
function bus_check( channel, idx )
{ // ch 0
  if ( channel == 0 )
  { if ( idx == 1 )
    { chn_0_booster.disabled = false;
      chn_0_booster.checked = chn_0_i2c_booster;
      chn_0_booster_label.style.color = "#000";
      chn_0_poll_option.disabled = false;
    }
    else
    { chn_0_booster.disabled = true;
      chn_0_booster.checked = 0;
      chn_0_booster_label.style.color = "#888";
      // poll option
      chn_0_poll_option.selectedIndex = 0;
      chn_0_poll_option.disabled = true;
    }
    chn_0_poll_option.dispatchEvent( new Event("input") );
  }
  // ch 1
  else if ( channel == 1 )
  { if ( idx == 1 )
    { chn_1_booster.disabled = false;
      chn_1_booster.checked = chn_1_i2c_booster;
      chn_1_booster_label.style.color = "#000";
      chn_1_poll_option.disabled = false;
    }
    else
    { chn_1_booster.disabled = true;
      chn_1_booster.checked = 0;
      chn_1_booster_label.style.color = "#888";
      // poll
      chn_1_poll_option.selectedIndex = 0;
      chn_1_poll_option.disabled = true;
    }
    chn_1_poll_option.dispatchEvent( new Event("input") );
  }
}
function speed_option_chn_0 ( option_idx )
{ // remove all select options
  while ( chn_0_bus_speed.options.length > 0) {
    chn_0_bus_speed.remove(0);
  }
  chn_0_bus_speed.disabled = true;
  // i2c or uart
  if ( option_idx == 1 || option_idx == 2 )
  { chn_0_bus_speed.disabled = false;
  }
  // get list speeds
  var list_speeds = get_list_speed ( option_idx, chn_0_poll_option.selectedIndex );
  // add list
  for (var i = 0; i < list_speeds.length; i++ )
  { // text, value
    var newOption = new Option( list_speeds[i], i );
    // undefined: add at the end
    chn_0_bus_speed.add( newOption, undefined );
  }
  // al maxim by default
  chn_0_bus_speed.selectedIndex = list_speeds.length - 1;
  
}
function speed_option_chn_1 ( option_idx )
{ // remove all select options
  while ( chn_1_bus_speed.options.length > 0) {
    chn_1_bus_speed.remove(0);
  }
  chn_1_bus_speed.disabled = true;
  // i2c or uart
  if ( option_idx == 1 || option_idx == 2 )
  { chn_1_bus_speed.disabled = false;
  }
  // get list speeds
  var list_speeds = get_list_speed ( option_idx, chn_1_poll_option.selectedIndex );
  // add list
  for (var i = 0; i < list_speeds.length; i++ )
  { // text, value
    var newOption = new Option( list_speeds[i], i );
    // undefined: add at the end
    chn_1_bus_speed.add( newOption, undefined );
  }
  // al maxim by default
  chn_1_bus_speed.selectedIndex = list_speeds.length - 1; 
}
//*********
// POLL OPTION
chn_0_poll_option.addEventListener("input", e => {
  poll_option_chn_0_addr( chn_0_poll_option.selectedIndex );
  pins_check( 0, chn_0_poll_option.selectedIndex );
  speed_option_chn_0( chn_0_bus_option.selectedIndex );
});
chn_1_poll_option.addEventListener("input", e => {
  poll_option_chn_1_addr( chn_1_poll_option.selectedIndex );
  pins_check( 1, chn_1_poll_option.selectedIndex );
  speed_option_chn_1( chn_1_bus_option.selectedIndex );
});
function poll_option_chn_0_addr ( idx )
{ // remove all select options
  while ( chn_0_poll_address.options.length > 0) {
    chn_0_poll_address.remove(0);
  }
  // get list addresses
  var list_addr = get_list ( idx );
  // direction dissable for none or MPR121?
  if ( idx == 0 || idx == 6 )
  { chn_0_poll_direction.disabled = true;
    if ( idx == 6 )
      chn_0_poll_direction.value = "111111111111";
    else
      chn_0_poll_direction.value = ""; 
  }
  else
  { chn_0_poll_direction.disabled = false;
  }
  // add list
  for (var i = 0; i < list_addr.length; i++ )
  { // text, value
    var newOption = new Option( list_addr[i], i );
    // undefined: add at the end
    chn_0_poll_address.add( newOption, undefined );
  }
  chn_0_poll_direction.dispatchEvent( new Event("input") );
}
function poll_option_chn_1_addr ( idx )
{ // remove all select options
  while ( chn_1_poll_address.options.length > 0) {
    chn_1_poll_address.remove(0);
  }
  // get list addresses
  var list_addr = get_list ( idx );
  // direction dissable for none or MPR121?
  if ( idx == 0 || idx == 6 )
  { chn_1_poll_direction.disabled = true;
    if ( idx == 6 )
      chn_1_poll_direction.value = "111111111111";
    else
      chn_1_poll_direction.value = ""; 
  }
  else
  { chn_1_poll_direction.disabled = false;
  }
  // add list
  for (var i = 0; i < list_addr.length; i++ )
  { var newOption = new Option( list_addr[i], i );
    // undefined: add at the end
    chn_1_poll_address.add( newOption, undefined );
  }
  chn_1_poll_direction.dispatchEvent( new Event("input") );
}
function get_list ( idx )
{ var list_addr = [];
  var list_speed = [];
  list_speed = i2c_speed_normal;
  switch ( idx )
  { case 1:
      list_addr = PCF857x_MCP230xx_addr.concat(PCF8574A_addr);
      break;
    case 2:
    case 4:
    case 5:
      list_addr = PCF857x_MCP230xx_addr;
      break;
    case 3: 
      list_addr = TCA9539_addr;
      break;
    case 6:
      list_addr = MPR121_addr;
      break;
  }
  return list_addr;
}
function get_list_speed ( option_idx, poll_idx )
{ var list_speed = [];
  // i2c
  if ( option_idx == 1)
  { if ( poll_idx == 1 )
      list_speed = i2c_speed_PCF8574;
    if ( poll_idx > 1 )
      list_speed = i2c_speed_normal;
  }
  // uart
  else if ( option_idx == 2 )
    list_speed = uart_speeds;
  return list_speed;
}
//*********
// POLL DIRECTION
chn_0_poll_direction.addEventListener("input", e => {
  chn_0_poll_direction_info.innerText = bin2dec( chn_0_poll_option.selectedIndex, chn_0_poll_direction.value );
});
chn_1_poll_direction.addEventListener("input", e => {
  chn_1_poll_direction_info.innerText = bin2dec( chn_1_poll_option.selectedIndex, chn_1_poll_direction.value );
});
function bin2dec( idx, bin ) {
  var bits_number = chips_bits_number[idx];
  var text = "";
  if ( bits_number > 0  )
  { if ( bin == "" )
    {  text = "Enter binary value";
    }
    else
    { if ( bin.length > bits_number ) {
        text = bits_number.toString() + " digits max";
      } 
      else if ( /[^01]/.test(bin) ) {
        text = "Enter binary value";
      } 
      else {
          text = parseInt(bin, 2).toString(16).toUpperCase();
          if ( bits_number <= 8 )
            text = text.padStart( 2, '0' );
          else
            text = text.padStart( 4, '0' );
          text = "0x" + text;
      }     
    }
  }
  return text;
}
//*********
// PINS
//*********
function pins_check( chn, option_idx )
{ var bits_number = chips_bits_number[option_idx];
  // chn 0
  if ( chn == 0 )
  { // index 0-15
    for ( var opt of chn_0_sel_input.options ) 
    { // select by value
      var value = parseInt(opt.value);
      if ( value < bits_number )
      { opt.disabled = false;
      }
      else
        opt.disabled = true;
    }
    // pins 3-4 and uart, status by bus option index
    var subs_dissabled = false;
    var frames_dissabled = false;
    chn_0_sel_input[18].disabled = true;      // uart
    switch ( chn_0_bus_option.selectedIndex )
    { case 0:   // off
        subs_dissabled = true;
      case 1:   // i2c
        chn_0_sel_input[0].disabled = true;   // pin 3
        chn_0_sel_input[1].disabled = true;   // pin 4 
        chn_0_sel_input.selectedIndex = 2;    // 0
        break;
      case 2:   // uart
        chn_0_sel_input[0].disabled = true;   // pin 3
        chn_0_sel_input[1].disabled = true;   // pin 4
        chn_0_sel_input[18].disabled = false; // uart
        chn_0_sel_input.selectedIndex = 18;   // uart
        break;
      case 3:   // in-in
      case 4:   // out-out
      case 5:   // in-out
        chn_0_sel_input[0].disabled = false;  // pin 3
        chn_0_sel_input[1].disabled = false;  // pin 4
        chn_0_sel_input.selectedIndex = 0;    // pin 3
        break;
    }
    // frame in dissabled?
    var option_idx = chn_0_bus_option.selectedIndex;
      frames_dissabled = false;
    // option off, uart or out-out pins
    if ( option_idx == 0 || option_idx == 2 || option_idx == 4 )
      frames_dissabled = true;
    // option in-out pins for pin 4 ( 17 )
    else if ( option_idx == 5 && value ==  17 )
      frames_dissabled = true;
    // option i2c and poll option off )
    else if ( option_idx == 1 && chn_0_poll_option.selectedIndex == 0 )
    { frames_dissabled = true;
      subs_dissabled = true;
    }
    //
    chn_0_sel_input.dispatchEvent( new Event("change") );
    subs_check( 0, subs_dissabled );
    in_frames_check( 0, frames_dissabled )
  }
  // chn 1
  if ( chn == 1 )
  { // index 0-15
    for ( var opt of chn_1_sel_input.options ) 
    { // select by value
      var value = parseInt(opt.value);
      if ( value < bits_number )
      { opt.disabled = false;
      }
      else
        opt.disabled = true;
    }
    // pins 3-4 and uart, status by bus option index
    var subs_dissabled = false;
    var frames_dissabled = false;
    chn_1_sel_input[18].disabled = true;      // uart
    switch ( chn_1_bus_option.selectedIndex )
    { case 0:   // off
        subs_dissabled = true;
      case 1:   // i2c
        chn_1_sel_input[0].disabled = true;   // pin 3
        chn_1_sel_input[1].disabled = true;   // pin 4 
        chn_1_sel_input.selectedIndex = 2;    // 0
        break;
      case 2:   // uart
        chn_1_sel_input[0].disabled = true;   // pin 3
        chn_1_sel_input[1].disabled = true;   // pin 4
        chn_1_sel_input[18].disabled = false; // uart
        chn_1_sel_input.selectedIndex = 18;   // uart
        break;
      case 3:   // in-in
      case 4:   // out-out
      case 5:   // in-out
        chn_1_sel_input[0].disabled = false;  // pin 3
        chn_1_sel_input[1].disabled = false;  // pin 4
        chn_1_sel_input.selectedIndex = 0;    // pin 3
        break;
    }
    // frame in dissabled?
    var option_idx = chn_1_bus_option.selectedIndex;
      frames_dissabled = false;
    // option off, uart or out-out pins
    if ( option_idx == 0 || option_idx == 2 || option_idx == 4 )
      frames_dissabled = true;
    // option in-out pins for pin 4 ( 17 )
    else if ( option_idx == 5 && value ==  17 )
      frames_dissabled = true;
    // option i2c and poll option off )
    else if ( option_idx == 1 && chn_1_poll_option.selectedIndex == 0 )
    { frames_dissabled = true;
      subs_dissabled = true;
    }
    //
    chn_1_sel_input.dispatchEvent( new Event("change") );
    subs_check( 1, subs_dissabled );
    in_frames_check( 1, frames_dissabled )
  }
}
//*********
// SUBS CHECK
//*********
function subs_check( chn, dissabled )
{ if ( chn == 0 )
  { for ( var el of chn_0_subs_line_1 ) 
    { el.disabled = dissabled;
    }
    for ( var el of chn_0_subs_line_2 ) 
    { el.disabled = dissabled;
    }
  }
  else if ( chn == 1 )
  { for ( var el of chn_1_subs_line_1 ) 
    { el.disabled = dissabled;
    }
    for ( var el of chn_1_subs_line_2 ) 
    { el.disabled = dissabled;
    }
  } 
}
//*********
// IN FRAME CHECK
//*********
function in_frames_check( chn, dissabled )
{ if ( chn == 0 )
  { chn_0_frame_ascii.disabled = dissabled;
    chn_0_frame_hex.disabled = dissabled;
  }
  else if ( chn == 1 )
  { chn_1_frame_ascii.disabled = dissabled;
    chn_1_frame_hex.disabled = dissabled;
  }
}

function get_sub_checks( chn )
{ var sub_string = "";
  if ( chn == 0 )
  { // w ports, bits 4-7
    sub_string = get_sub_check_2( chn_0_sub_wp0.checked, sub_string );
    sub_string = get_sub_check_2( chn_0_sub_wp1.checked, sub_string );
    sub_string = get_sub_check_2( chn_0_sub_wp2.checked, sub_string );
    sub_string = get_sub_check_2( chn_0_sub_wp3.checked, sub_string );
    // wport_cfg, no hi ha bit 8 
    sub_string = get_sub_check_2( false, sub_string );
    // chn 0, no hi ha bit 9
    sub_string = get_sub_check_2( false, sub_string );
    // chn 1, bit 10
    sub_string = get_sub_check_2( chn_0_sub_chn1.checked, sub_string );
    // serial, bit 11
    sub_string = get_sub_check_2( chn_0_sub_serial.checked, sub_string );
  }
  else if ( chn == 1 )
  { // e ports, bits 0-3
    sub_string = get_sub_check_2( chn_1_sub_ep0.checked, sub_string );
    sub_string = get_sub_check_2( chn_1_sub_ep1.checked, sub_string );
    sub_string = get_sub_check_2( chn_1_sub_ep2.checked, sub_string );
    sub_string = get_sub_check_2( chn_1_sub_ep3.checked, sub_string );
    // w ports, bits 4-7
    sub_string = get_sub_check_2( chn_1_sub_wp0.checked, sub_string );
    sub_string = get_sub_check_2( chn_1_sub_wp1.checked, sub_string );
    sub_string = get_sub_check_2( chn_1_sub_wp2.checked, sub_string );
    sub_string = get_sub_check_2( chn_1_sub_wp3.checked, sub_string );
    // wport_cfg, no hi ha bit 8  
    sub_string = get_sub_check_2( false, sub_string );
    // chn 0, bit 9
    sub_string = get_sub_check_2( chn_1_sub_chn0.checked, sub_string );
    // chn 1, no hi ha bit 10 
    sub_string = get_sub_check_2( false, sub_string );
    // serial, bit 11
    sub_string = get_sub_check_2( chn_1_sub_serial.checked, sub_string );
  }
  return sub_string;
}
function get_sub_check_2( checked, sub_string )
{ if ( checked == true )
    sub_string += "1";
  else
    sub_string += "0";
  return sub_string;
}
//*********
chn_0_sub_wp0.addEventListener("change", e => {
  checked = '0';
  if ( chn_0_sub_wp0.checked == true )
    checked = '1';
  chn_0_subs_hex_array[parseInt(chn_0_sel_input.value)][4] = checked;
});
chn_0_sub_wp1.addEventListener("change", e => {
  checked = '0';
  if ( chn_0_sub_wp1.checked == true )
    checked = '1';
  chn_0_subs_hex_array[parseInt(chn_0_sel_input.value)][5] = checked;
});
chn_0_sub_wp2.addEventListener("change", e => {
  checked = '0';
  if ( chn_0_sub_wp2.checked == true )
    checked = '1';
  chn_0_subs_hex_array[parseInt(chn_0_sel_input.value)][6] = checked;
});
chn_0_sub_wp3.addEventListener("change", e => {
  checked = '0';
  if ( chn_0_sub_wp3.checked == true )
    checked = '1';
  chn_0_subs_hex_array[parseInt(chn_0_sel_input.value)][7] = checked;
});
//
chn_0_sub_chn1.addEventListener("change", e => {
  checked = '0';
  if ( chn_0_sub_chn1.checked == true )
    checked = '1';
  chn_0_subs_hex_array[parseInt(chn_0_sel_input.value)][10] = checked;
});
chn_0_sub_serial.addEventListener("change", e => {
  checked = '0';
  if ( chn_0_sub_serial.checked == true )
    checked = '1';
  chn_0_subs_hex_array[parseInt(chn_0_sel_input.value)][11] = checked;
});
chn_1_sub_wp0.addEventListener("change", e => {
  checked = '0';
  if ( chn_1_sub_wp0.checked == true )
    checked = '1';
  chn_1_subs_hex_array[parseInt(chn_1_sel_input.value)][4] = checked;
});
chn_1_sub_wp1.addEventListener("change", e => {
  checked = '0';
  if ( chn_1_sub_wp1.checked == true )
    checked = '1';
  chn_1_subs_hex_array[parseInt(chn_1_sel_input.value)][5] = checked;
});
chn_1_sub_wp2.addEventListener("change", e => {
  checked = '0';
  if ( chn_1_sub_wp2.checked == true )
    checked = '1';
  chn_1_subs_hex_array[parseInt(chn_1_sel_input.value)][6] = checked;
});
chn_1_sub_wp3.addEventListener("change", e => {
  checked = '0';
  if ( chn_1_sub_wp3.checked == true )
    checked = '1';
  chn_1_subs_hex_array[parseInt(chn_1_sel_input.value)][7] = checked;
});
//
chn_1_sub_chn0.addEventListener("change", e => {
  checked = '0';
  if ( chn_1_sub_chn0.checked == true )
    checked = '1';
  chn_1_subs_hex_array[parseInt(chn_1_sel_input.value)][9] = checked;
});
chn_1_sub_serial.addEventListener("change", e => {
  checked = '0';
  if ( chn_1_sub_serial.checked == true )
    checked = '1';
  chn_1_subs_hex_array[parseInt(chn_1_sel_input.value)][11] = checked;
});
//*********
// SET SUB CHECKS - faig servir una array aqui
//*********
function set_sub_checks( inner_array, chn )
{ var flag;
  if ( chn == 0 )
  { // w ports
    flag = false;
    if ( inner_array[4] == 1 )
      flag = true;
    chn_0_sub_wp0.checked = flag;

    flag = false;
    if ( inner_array[5] == 1 )
      flag = true;
    chn_0_sub_wp1.checked = flag;

    flag = false;
    if ( inner_array[6] == 1 )
      flag = true;
    chn_0_sub_wp2.checked = flag;

    flag = false;
    if ( inner_array[7] == 1 )
      flag = true;
    chn_0_sub_wp3.checked = flag;

    // no hi ha 8, wport_cfg - ni 9 chn 0
    flag = false;
    if ( inner_array[10] == 1 )
      flag = true;
    chn_0_sub_chn1.checked = flag;

    flag = false;
    if ( inner_array[11] == 1 )
      flag = true;
    chn_0_sub_serial.checked = flag;
  }
  else if ( chn == 1 )
  { // w ports
    flag = false;
    if ( inner_array[4] == 1 )
      flag = true;
    chn_1_sub_wp0.checked = flag;

    flag = false;
    if ( inner_array[5] == 1 )
      flag = true;
    chn_1_sub_wp1.checked = flag;

    flag = false;
    if ( inner_array[6] == 1 )
      flag = true;
    chn_1_sub_wp2.checked = flag;

    flag = false;
    if ( inner_array[7] == 1 )
      flag = true;
    chn_1_sub_wp3.checked = flag;

    // no hi ha 8, wport_cfg
    flag = false;
    if ( inner_array[9] == 1 )
      flag = true;
    chn_1_sub_chn0.checked = flag;
    // no hi ha 10 chn 1
    flag = false;
    if ( inner_array[11] == 1 )
      flag = true;
    chn_1_sub_serial.checked = flag;
  }
}
//*********
// CLEAR FRAME
//*********
document.querySelector("#btn_chn_0_clear").addEventListener("click", e => {
  if ( alert_inputs_check( 0 ) )
    return;
  chn_0_frame_ascii.value = "";
  chn_0_frame_hex.value = "";
  chn_0_frame_ascii.dispatchEvent( new Event("input") );
});
document.querySelector("#btn_chn_1_clear").addEventListener("click", e => {
  if ( alert_inputs_check( 1 ) )
    return;
  chn_1_frame_ascii.value = "";
  chn_1_frame_hex.value = "";
  chn_1_frame_ascii.dispatchEvent( new Event("input") );
});
//*********
// SHOW FRAME AND SUBS
//*********
chn_0_sel_input.addEventListener("change", e => {
  var value = parseInt(chn_0_sel_input.value);
  chn_0_frame_hex.value = chn_0_frame_hex_array[ value ];
  chn_0_frame_ascii.value = hex_to_ascii(chn_0_frame_hex.value);
  var inner_array = chn_0_subs_hex_array[ value ];
  set_sub_checks( inner_array, 0 );
  // dissable in frames wihen pin 4 at option in-out
  var option_idx = chn_0_bus_option.selectedIndex;
  if ( option_idx == 5 && value ==  17 )
    in_frames_check( 0, true );
});
chn_1_sel_input.addEventListener("change", e => {
  var value = parseInt(chn_1_sel_input.value);
  chn_1_frame_hex.value = chn_1_frame_hex_array[ value ];
  chn_1_frame_ascii.value = hex_to_ascii(chn_1_frame_hex.value);
  var inner_array = chn_1_subs_hex_array[ value ];
  set_sub_checks( inner_array, 1 );
  //
  var option_idx = chn_1_bus_option.selectedIndex;
  if ( option_idx == 5 && value ==  17 )
    in_frames_check( 1, true );
});
//*********
// CHANGE FRAME
//*********
// chn 0
chn_0_frame_ascii.addEventListener("input", e => {
  chn_0_frame_hex.value = ascii_to_hex( chn_0_frame_ascii.value );
  if ( chn_0_frame_hex.value != error_1 )
    chn_0_frame_hex_array[parseInt(chn_0_sel_input.value)] = chn_0_frame_hex.value;
});
chn_0_frame_hex.addEventListener("input", e => {
  var flag = reg_hex.test( chn_0_frame_hex.value );
  if ( flag )
  { chn_0_frame_hex_array[parseInt(chn_0_sel_input.value)] = chn_0_frame_hex.value;
    chn_0_frame_ascii.value = hex_to_ascii(chn_0_frame_hex.value);
  }
  else
    chn_0_frame_ascii.value = error_1;
  // reset the index after using .text()
  re.lastIndex = 0;
});
// chn 1
chn_1_frame_ascii.addEventListener("input", e => {
  chn_1_frame_hex.value = ascii_to_hex( chn_1_frame_ascii.value );
  if ( chn_1_frame_hex.value != error_1 )
    chn_1_frame_hex_array[parseInt(chn_1_sel_input.value)] = chn_1_frame_hex.value;
});
chn_1_frame_hex.addEventListener("input", e => {
  var flag = reg_hex.test( chn_1_frame_hex.value );
  if ( flag )
  { chn_1_frame_hex_array[parseInt(chn_1_sel_input.value)] = chn_1_frame_hex.value;
    chn_1_frame_ascii.value = hex_to_ascii(chn_1_frame_hex.value);
  }
  else
    chn_1_frame_ascii.value = error_1;
  re.lastIndex = 0;
});
//*********
// FRAME ASCII TO HEX
//*********
function ascii_to_hex( text )
{ var hex = "";
  var $_flag = 0;
  var $_first_chr = '';
  //
  for( var i = 0; i < text.length; i++ )
  { if ( $_flag > 0 )
    { if ( reg_hex.test( text[i] ) )
      { if ( $_flag == 1 )
        { $_first_chr = text[i];
          $_flag = 2;
        }
        else
        { hex =  hex + $_first_chr + text[i];
          $_flag = 0;
        }
      }
      else
      { // error
        $_flag = 0;
        hex = error_1;
      }
    }
    else
    { if ( text[i] != '$' )
      { hex =  hex + text[i].charCodeAt(0).toString(16);
        $_flag = 0;
      }
      else
        $_flag = 1;
    }
  }
  return hex;
}
//*********
// HAS CHANGED
//*********
function subs_has_changed ( str_hex, chn  )
{   var nodes, child, bit;
    var num = parseInt( str_hex, 16 );
    if ( chn == 0 )
    {   // 1a line
        nodes = document.getElementById("chn_0_subs_line_1").childNodes;
        // usb
        bit = 11;
        child = 1;
        has_changed_2 ( bit, num, child, nodes );
        // chn 1
        bit = 10;
        child = 3;
        has_changed_2 ( bit, num, child, nodes );
        // 2a line
        nodes = document.getElementById("chn_0_subs_line_2").childNodes;
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
        nodes = document.getElementById("chn_1_subs_line_1").childNodes;
        // usb
        bit = 11;
        child = 1;
        has_changed_2 ( bit, num, child, nodes );
        // chn 0
        bit = 9;
        child = 3;
        has_changed_2 ( bit, num, child, nodes );
        // 2a line
        nodes = document.getElementById("chn_1_subs_line_2").childNodes;
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
// FRAME HEX TO ASCII
//*********
function hex_to_ascii( hex )
{ var ascii = "";
  var char, part, decimal;
  for ( var i = 0; i < hex.length; i += 2 ) 
  { var part = hex.substring(i, i + 2);
    // change it into base 16 and typecast as the character
    decimal = parseInt( part, 16 );
    // check is a printable char and not the decimal value of $, 36
    if ( decimal >= 32 && decimal <= 126 && decimal != 36 )
      char = String.fromCharCode( decimal );
    else
      // show as formated hex
      char = '$' + part;
    ascii = ascii + char;
  }
  return ascii;
}
//*********
// ALERT INPUTS
//*********
function alert_inputs_check( chn ) {
  var idx;
  var flag = false;
  if ( chn == 0 )
  { idx = chn_0_sel_input.selectedIndex;
    if ( chn_0_sel_input[idx].disabled == true )
      flag = true
  }
  else
  { idx = chn_1_sel_input.selectedIndex;
    if ( chn_1_sel_input[idx].disabled == true )
      flag = true
  }
  if ( flag )
    alert ( "Invalid !!" )
  return flag;
}
//*********
//  WAITING UPDATE
function waiting(){
  var i = 59;
  var r = setInterval(function()
  { if (i < 1 ){   
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
    frame += "_ch_load:";
  // UPDATE CFG -> callback 2
  else if ( number == 2 )
    frame += "_ch_cfg:";
  // CICLIC - callback 3
  else if ( number == 3 )
    frame += "_ch_ciclic:";
  // TEST FRAME - callback 4
  else if ( number == 4 )
    frame += "_ch_test:";
  else 
    return;
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