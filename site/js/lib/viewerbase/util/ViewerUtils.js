//>>built
define("esriviewer/util/ViewerUtils",["dojo/_base/declare","dojo/keys","dojo/_base/lang","dojo/dom-style","dojox/uuid/Uuid","dojox/uuid/generateTimeBasedUuid","dojo/topic","esri/request"],function(_1,_2,_3,_4,_5,_6,_7,_8){return _1([],{isDebug:false,constructor:function(_9){_3.mixin(this,_9||{});_5.setGenerator(_6);},debug:function(_a){if(this.isDebug){this.log(_a,VIEWER_GLOBALS.LOG_TYPE.INFO);}},log:function(_b,_c){if(_b==null||_b===""){return;}_7.publish(VIEWER_GLOBALS.EVENTS.LOGGING.ADD,_b,_c);},handleContainerMoved:function(_d,_e){var _f=false;var _10=false;if(_e.l<3){_4.set(_d.node,"left","3px");_f=true;}var _11=(VIEWER_GLOBALS.WINDOW&&VIEWER_GLOBALS.WINDOW.TOP_POSITION_MOVE_OFFSET)?(VIEWER_GLOBALS.WINDOW.TOP_POSITION_MOVE_OFFSET):3;if(_e.t<_11){_4.set(_d.node,"top",_11+"px");_10=true;}if(_f&&_10){return;}var _12=dijit.getViewport();if(!_f){var _13=_4.get(_d.node,"width");var _14=_4.get(_d.node,"left");var _15=_14+_13;if(_15>(_12.w-3)){_4.set(_d.node,"left",(_12.w-_13-3)+"px");}}if(!_10){var _16=_4.get(_d.node,"height");var _17=_4.get(_d.node,"top");var _18=_17+_16;if(_18>(_12.h-3)){_4.set(_d.node,"top",(_12.h-_16-5)+"px");}}},generateUUID:function(){var _19=new _5();return _19.toString();},getTimeStamp:function(){var _1a=new Date();var _1b=_1a.getHours();if(_1b<12){if(_1b==0){_1b=12;}}else{if(_1b!=12){_1b=_1b-12;}}_1b=_1b.toString();if(_1b.length<2){_1b="0"+_1b;}var _1c=_1a.getMinutes().toString();if(_1c.length<2){_1c="0"+_1c;}var _1d=_1a.getSeconds().toString();if(_1d.length<2){_1d="0"+_1d;}return _1b+":"+_1c+":"+_1d;},sendJsonPQuery:function(url,_1e,_1f,_20,_21){if(_20==null){_20=_3.hitch(this,function(_22){var msg="Could not resource : "+url+". Please verify URL is accessible.";VIEWER_UTILS.log(msg,VIEWER_GLOBALS.LOG_TYPE.ERROR);_7.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,msg);});}if(_21==null){_21="callback";}var _23={callbackParamName:_21,content:_1e,url:url};_8(_23).then(_1f,_20);},isEnterKey:function(e){return e.keyCode==_2.ENTER;},joinUrl:function(url,_24){var _25=url.lastIndexOf("/")==url.length-1;if(!_25){url+="/";}if(_24[0]==="/"){_24=_24.substring(1);}return url+_24;},getLayerInfoFromService:function(_26,_27,_28,_29){if(_29==null){_29="callback";}var _2a=_3.hitch(this,function(_2b){var msg="could not load layer from service: "+_2c;VIEWER_UTILS.log(msg,VIEWER_GLOBALS.LOG_TYPE.ERROR);_7.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,msg);});if(_26!=null&&_27!=null&&_28){var _2c=_26+"/"+_27;}var _2d={callbackParamName:_29,content:{f:"json"},url:_2c};_8(_2d).then(_28,_2a);},trim:function(str){return str.replace(/^\s*/,"").replace(/\s*$/,"");},endsWith:function(_2e,_2f){var _30=_2e.lastIndexOf(_2f);return (_30!=-1)&&(_30+_2f.length==_2e.length);},getFileExtension:function(_31){var _32=_31.lastIndexOf(".");if(_32<0||_32===_31.length-1){return "";}return _31.substr(_32+1);},getFileExtensionLower:function(_33){return this.getFileExtension(_33).toLowerCase();},getServiceTypeFromUrl:function(url){if(this.endsWith(url,VIEWER_GLOBALS.SERVICE_TYPES.MAP_SERVER)||this.endsWith(url,VIEWER_GLOBALS.SERVICE_TYPES.MAP_SERVER+"/")){return VIEWER_GLOBALS.SERVICE_TYPES.MAP_SERVER;}else{if(this.endsWith(url,VIEWER_GLOBALS.SERVICE_TYPES.IMAGE_SERVER)||this.endsWith(url,VIEWER_GLOBALS.SERVICE_TYPES.IMAGE_SERVER+"/")){return VIEWER_GLOBALS.SERVICE_TYPES.IMAGE_SERVER;}else{if(this.endsWith(url,VIEWER_GLOBALS.SERVICE_TYPES.GP_SERVER)||this.endsWith(url,VIEWER_GLOBALS.SERVICE_TYPES.GP_SERVER+"/")){return VIEWER_GLOBALS.SERVICE_TYPES.GP_SERVER;}else{if(this.endsWith(url,VIEWER_GLOBALS.SERVICE_TYPES.GLOBE_SERVER)||this.endsWith(url,VIEWER_GLOBALS.SERVICE_TYPES.GLOBE_SERVER+"/")){return VIEWER_GLOBALS.SERVICE_TYPES.GLOBE_SERVER;}else{if(this.endsWith(url,VIEWER_GLOBALS.SERVICE_TYPES.GEOCODE_SERVER)||this.endsWith(url,VIEWER_GLOBALS.SERVICE_TYPES.GEOCODE_SERVER+"/")){return VIEWER_GLOBALS.SERVICE_TYPES.GEOCODE_SERVER;}else{if(REG_EXP_UTILS.isKMLExtension(url)){return VIEWER_GLOBALS.SERVICE_TYPES.KML;}else{if(REG_EXP_UTILS.isFeatureLayer(url)){return VIEWER_GLOBALS.SERVICE_TYPES.FEATURE_SERVER;}else{return null;}}}}}}}},getServiceDescription:function(_34,_35,_36,_37){if(_37==null){_37="callback";}if(_36==null){_36=_3.hitch(this,function(_38){var msg="Could not load service description for : "+_34+". Please verify service is online.";});}if(_34!=null&&_35){var _39={callbackParamName:_37,content:{f:"json"},url:_34};_8(_39).then(_35,_36);}},getLayerNameFromLayer:function(_3a){if(_3a.layerAliasName!=null&&_3a.layerAliasName!=""){return _3a.layerAliasName;}else{if(_3a.name!=null&&_3a.name!=""){return _3a.name;}else{if(_3a.id!=null){return _3a.id;}else{if(_3a.url!=null){return _3a.url;}}}}return "Layer";},getLabelForEsriUnit:function(_3b){if(_3b===VIEWER_GLOBALS.ESRI_UNITS.METERS){return "meters";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.FEET){return "feet";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.YARDS){return "yards";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.MILES){return "miles";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.NAUTICAL_MILES){return "nautical miles";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.MILLIMETERS){return "millimeters";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.CENTIMETERS){return "centimeters";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.DECIMETERS){return "decimeters";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.KILOMETERS){return "kilometers";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_MILES){return "square miles";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_METERS){return "square meters";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_KILOMETERS){return "square kilometers";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_ARES){return "square ares";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_HECTARES){return "square hectares";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_CENTIMETERS){return "square centimeters";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_DECIMETERS){return "square decimeters";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_FEET){return "square feet";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_INCHES){return "square inches";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_MILLIMETERS){return "square millimeters";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_YARDS){return "square yards";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_UNKNOWN){return "square unknown";}else{if(_3b===VIEWER_GLOBALS.ESRI_UNITS.DECIMAL_DEGREES){return "decimal degrees";}}}}}}}}}}}}}}}}}}}}}}return "unknown";},getShortLabelForEsriUnit:function(_3c){if(_3c===VIEWER_GLOBALS.ESRI_UNITS.METERS){return "m";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.FEET){return "f";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.YARDS){return "y";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.MILES){return "M";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.NAUTICAL_MILES){return "NM";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.MILLIMETERS){return "mm";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.CENTIMETERS){return "cm";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.DECIMETERS){return "dm";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.KILOMETERS){return "KM";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_MILES){return "square miles";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_METERS){return "Sq m";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_KILOMETERS){return "Sq KM";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_ARES){return "Sq Ares";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_HECTARES){return "Sq Hectares";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_CENTIMETERS){return "Sq cm";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_DECIMETERS){return "Sq dm";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_FEET){return "Sq f";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_INCHES){return "Sq in";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_MILLIMETERS){return "Sq mm";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_YARDS){return "Sq y";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.SQUARE_UNKNOWN){return "Sq unknown";}else{if(_3c===VIEWER_GLOBALS.ESRI_UNITS.DECIMAL_DEGREES){return "Dec. Deg.";}}}}}}}}}}}}}}}}}}}}}}return "Unknown";},getFieldTypeFromLayer:function(_3d,_3e){var _3f=_3e.fields?_3e.fields:(_3e.serviceDescription?_3e.serviceDescription.fields:[]);if(_3e&&_3f&&_3d){for(var i=0;i<_3f.length;i++){if(_3f[i].alias===_3d||_3f[i].name===_3d){return _3f[i].type;}}}return null;},getFileNameFromAtEndOfUrl:function(_40){if(_40==null||_40.lastIndexOf("/")<0){return "";}_40=_40.substring(0,(_40.indexOf("#")==-1)?_40.length:_40.indexOf("#"));_40=_40.substring(0,(_40.indexOf("?")==-1)?_40.length:_40.indexOf("?"));return _40.substring(_40.lastIndexOf("/")+1,_40.length);},getFileNameFromAtEndOfPath:function(_41){if(_41==null||_41.lastIndexOf("\\")<0){return "";}return _41.substring(_41.lastIndexOf("\\")+1,_41.length);},_intSorter:function(a,b){return a-b;},sortIntegerArray:function(arr){return arr.sort(this._intSorter);}});});