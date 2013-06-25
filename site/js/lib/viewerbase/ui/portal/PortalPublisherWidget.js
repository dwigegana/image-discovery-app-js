//>>built
require({cache:{"url:esriviewer/ui/portal/theme/PortalPublisherTheme.css":".portalLoginClickContent{position:absolute;right:0;height:20px;margin-right:20px;cursor:pointer;text-decoration:underline;}.portalAccountLockIcon{display:inline-block;}.portalWebMapPublishTextBox{width:80%;}.portalUploadButtonContainer, .portalSubmitShareButtonContainer{margin:10px;float:right;}.portalGroupShareList{list-style-type:none;}.portalPublishShareWithLabel{margin-bottom:5px;}.portalUploadFolderSelect{width:83%;}.publishToPortalUrlLabel{float:left;}.portalPublisherActionsContent{height:20px;}","url:esriviewer/ui/portal/template/PortalPublisherTemplate.html":"<div class=\"portalPublisherOuterContainer\">\r\n    <div class=\"portalPublisherContainer\">\r\n        <div class=\"portalUploadFormContainer\" data-bind=\"visible:publishInputsVisible\">\r\n            <div class=\"portalPublisherActionsContent\">\r\n                <div data-bind=\"text: portalPublishUrl\" class=\"publishToPortalUrlLabel\"></div>\r\n                <div class=\"portalLoginClickContent\" data-bind=\"click:logPortalUserIn, visible: noUserLoggedIn\">\r\n                    <div class=\"commonIcons16 lockGo portalAccountLockIcon\">\r\n                    </div>\r\n                    <span>Log In</span>\r\n                </div>\r\n                <div class=\"portalLoginClickContent\" data-bind=\"click:logPortalUserOut, visible: userLoggedIn\">\r\n                    <div class=\"commonIcons16 lockGo portalAccountLockIcon\">\r\n                    </div>\r\n                    <span>Log Out</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"portalUploadFolderContainer portalUploadInputContainer\">\r\n                <div class=\"portalPublisherLabel\">Folder:</div>\r\n                <select class=\"portalUploadFolderSelect\"\r\n                        data-bind=\"options: userFolders,value:selectedUserFolder,optionsText: 'title', optionsValue: 'id', optionsCaption: 'Root'\"></select>\r\n            </div>\r\n            <div class=\"portalUploadNameContainer portalUploadInputContainer\">\r\n                <div class=\"portalPublisherLabel\">Name:</div>\r\n                <input class=\"portalWebMapPublishTextBox\" type=\"text\" data-bind=\"value:webMapName\"/>\r\n            </div>\r\n            <div class=\"portalUploadTagsContainer portalUploadInputContainer\">\r\n                <div class=\"portalPublisherLabel\">Tags:</div>\r\n                <input class=\"portalWebMapPublishTextBox\" type=\"text\" data-bind=\"value:webMapTags\"/>\r\n            </div>\r\n            <div class=\"portalUploadDescriptionContainer portalUploadInputContainer\">\r\n                <div class=\"portalPublisherLabel\">Description:</div>\r\n                <input class=\"portalWebMapPublishTextBox\" type=\"text\" data-bind=\"value:webMapDescription\"/>\r\n            </div>\r\n            <div class=\"portalUploadButtonContainer\">\r\n                <button data-bind=\"click:showSharingContent,enable:userLoggedIn\" class=\"portalShowPreferencesButton\">\r\n                    Next\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"portalPublishShareContainer\" data-bind=\"visible:sharingContentVisible\">\r\n        <div class=\"portalPublishShareWithLabel\">Share with:</div>\r\n        <div class=\"portalPublishShareForm\">\r\n            <div class=\"publicShareContainer\">\r\n                <input type=\"checkbox\" data-bind=\"checked:shareEveryoneChecked\"/>\r\n\r\n                <span>Everyone (public)</span>\r\n            </div>\r\n            <div class=\"groupShareContainer\">\r\n                <input type=\"checkbox\" data-bind=\"checked:shareWithGroupsChecked\"/>\r\n                <span>These Groups:</span>\r\n\r\n                <div class=\"portalPublishGroupShareListContainer\">\r\n                    <ul class=\"portalGroupShareList\" data-bind=\"foreach: userGroups\">\r\n                        <li class=\"portalPublishGroupItem\">\r\n                            <input type=\"checkbox\" data-bind=\"click:$parent.handleGroupShareToggle\"/>\r\n                            <span data-bind=\"text:$data.title\"></span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>These settings will replace your current settings.</div>\r\n        <div class=\"portalSubmitShareButtonContainer\">\r\n            <button data-bind=\"click:showPublishInputs\" class=\"portalBackButton\">Back</button>\r\n            <button data-bind=\"click:publishWebMap\" data-bind=\"enable:userLoggedIn\" class=\"portalPublishButton\">\r\n                Publish\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"}});define("esriviewer/ui/portal/PortalPublisherWidget",["dojo/_base/declare","xstyle/css!./theme/PortalPublisherTheme.css","dojo/text!./template/PortalPublisherTemplate.html","dojo/_base/lang","dojo/_base/json","dojo/topic","../base/UITemplatedWidget","./model/PortalPublisherViewModel","./base/PortalWebMapAnnotationSupport","esri/dijit/Basemap","esri/IdentityManager","esri/request","esri/layers/ArcGISImageServiceLayer"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d){return _1([_7,_9],{publishMixinParameters:{type:"Web Map",typeKeywords:"Web Map, Explorer Web Map, Map, Online Map, ArcGIS Online",overwrite:false,f:"json",description:"",accessInformation:"",licenseInfo:"",thumbnailURL:""},publishTextMixinParameters:{version:"1.8"},thumbnailMixinParameters:{format:"png",size:"200,133",cm:0,nbbox:"",bbox:"",sr:""},templateString:_3,postCreate:function(){this.inherited(arguments);this.viewModel=new _8();this.viewModel.on(this.viewModel.PUBLISH_WEB_MAP,_4.hitch(this,this.handlePublishWebMap));ko.applyBindings(this.viewModel,this.domNode);if(_b!=null&&_b.credentials!=null&&_b.credentials.length>0){this.viewModel.logPortalUserIn();}},initListeners:function(){this.inherited(arguments);_6.subscribe(VIEWER_GLOBALS.EVENTS.PORTAL.LOG_OUT,_4.hitch(this,this.setNoUserLoggedIn));_6.subscribe(VIEWER_GLOBALS.EVENTS.PORTAL.USER_LOGGED_IN,_4.hitch(this,this.setUserLoggedIn));},loadViewerConfigurationData:function(){this.inherited(arguments);var _e=null;_6.publish(VIEWER_GLOBALS.EVENTS.CONFIGURATION.GET_ENTRY,"portalPublisher",function(_f){_e=_f;});if(_e!=null&&_4.isObject(_e)){if(_e.publishVersion!=null){this.publishTextMixinParameters.version=_e.publishVersion;}if(_e.webMapProperties!=null&&_4.isObject(_e.webMapProperties)){_4.mixin(this.publishMixinParameters,_e.webMapProperties);}}},setUserLoggedIn:function(_10){if(_10!=null){this.currentPortalUser=_10;var _11=this.currentPortalUser.portal;if(_11!=null&&_4.isObject(_11)){this.viewModel.portalPublishUrl(_11.portalHostname);}this.viewModel.setUserLoggedIn();this.getUserFolders();this.getUserGoups();}else{this.setNoUserLoggedIn();}},setNoUserLoggedIn:function(){this.viewModel.setNoUserLoggedIn();this.currentPortalUser=null;this.viewModel.portalPublishUrl("");this.viewModel.userFolders.removeAll();this.viewModel.userGroups.removeAll();},handlePublishWebMap:function(){var _12;_6.publish(VIEWER_GLOBALS.EVENTS.PORTAL.GET_INSTANCE,function(_13){_12=_13;});if(_12==null){_6.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Cannot publish item. No Portal instance configured.");return;}var _14=this.getUserTokenAndId();if(_14==null||_14.token==null||_14.id==null){_6.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Cannot publish item. Could not retrieve portal token/id.");return;}var _15=_14.token;var _16=_14.id;var _17=_12.url;var _18=null;_6.publish(VIEWER_GLOBALS.EVENTS.MAP.EXTENT.GET_EXTENT,function(ext){_18=ext;});_6.publish(VIEWER_GLOBALS.EVENTS.GEOMETRY_SERVICE.TASKS.PROJECT_TO_LAT_LON,_18,_4.hitch(this,function(_19){var _1a=this.getWebMapParameters(_17,_19[0]);_1a.token=_15;this.sendAddItemRequest(_1a,_17,_16,_15);}));},sendAddItemRequest:function(_1b,_1c,_1d,_1e){var _1f=VIEWER_UTILS.joinUrl(_1c,VIEWER_GLOBALS.DEFAULT_PORTAL_ENDPOINTS.USER_CONTENT_PREPEND);var _20=this.viewModel.selectedUserFolder();_1f=VIEWER_UTILS.joinUrl(_1f,_1d);if(_20!=null&&_20!=""){_1f=VIEWER_UTILS.joinUrl(_1f,_20);}_1f=VIEWER_UTILS.joinUrl(_1f,VIEWER_GLOBALS.DEFAULT_PORTAL_ENDPOINTS.ADD_ITEM_PART_APPEND);_c({url:_1f,content:_1b,callbackParamName:"callback",load:_4.hitch(this,this._handleAddItemComplete,_1c,_1d,_1e),error:_4.hitch(this,this._handleAdItemError)},{usePost:true});},_handleAddItemComplete:function(_21,_22,_23,_24){this.viewModel.showPublishInputs();if(_24.success){this.submitSharingParameters(_21,_22,_23,_24);this.viewModel.showPublishInputs();_6.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Successfully Published Item");}else{if(_24.error){_6.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,_24.error.message);}else{_6.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Could not publish item");}}},_handleAdItemError:function(err){this.viewModel.showPublishInputs();if(err.message){_6.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,err.message);}else{_6.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Could not publish item");}},submitSharingParameters:function(_25,_26,_27,_28){var _29=_28.id;if(_29!=null&&_29!=""){var _2a=false;var _2b={f:"json",items:_29,token:_27};var _2c=this.viewModel.shareEveryoneChecked();var _2d=this.viewModel.shareWithGroupsChecked();if(!_2c&&!_2d){return;}if(_2c){_2a=true;_2b.everyone=true;}if(_2d){var _2e=[];var _2f=this.viewModel.userGroups();var _30;for(var i=0;i<_2f.length;i++){_30=_2f[i];if(_30.selected){_2e.push(_30.id);}}if(_2e.length>0){_2a=true;_2b.groups=_2e.join(",");}}if(_2a){var _31=VIEWER_UTILS.joinUrl(_25,VIEWER_GLOBALS.DEFAULT_PORTAL_ENDPOINTS.USER_CONTENT_PREPEND);_31=VIEWER_UTILS.joinUrl(_31,_26);_31=VIEWER_UTILS.joinUrl(_31,VIEWER_GLOBALS.DEFAULT_PORTAL_ENDPOINTS.USER_SHARE_APPEND);var _32=_c({url:_31,content:_2b,callbackParamName:"callback",load:_4.hitch(this,function(_33){var _34=_33.results;if(_4.isArray(_34)&&_34.length>0){if(!_34[0].success){var _35=(_34[0].error&&_34[0].error.message)?_34[0].error.message:"Error Sharing Content.";_6.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,_35);}else{_6.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Successfully Shared Item.");}}}),error:_4.hitch(this,function(err){_6.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Error Sharing Content.");})},{usePost:true});}}},getUserFolders:function(){if(this.currentPortalUser){this.currentPortalUser.getFolders().then(_4.hitch(this,function(_36){var _37;for(var i=0;i<_36.length;i++){this.viewModel.userFolders.push(_36[i]);}}));}},getUserGoups:function(){if(this.currentPortalUser){this.currentPortalUser.getGroups().then(_4.hitch(this,function(_38){var _39;for(var i=0;i<_38.length;i++){_39=_38[i];if(_39&&!_39.isViewOnly){this.viewModel.userGroups.push({title:_39.title,id:_39.id,selected:false});}}}));}},getWebMapParameters:function(_3a,_3b){var _3c=_4.mixin({services:[]},this.thumbnailMixinParameters);var _3d=_4.mixin({},this.publishMixinParameters);var _3e=_4.mixin({operationalLayers:[],baseMap:{baseMapLayers:[],title:""}},this.publishTextMixinParameters);var _3f=this.viewModel.webMapName();_3d.item=_3f.toLowerCase()+"_"+new Date().getTime();var _40=this.viewModel.webMapTags();if(_40!=null){_3d.tags=_40;}else{_3d.tags="";}var _41=this.viewModel.webMapDescription();if(_41!=null){_3d.snippet=_41;}else{_3d.snippet="";}var _42=this.getOperationalLayers();var _43;_6.publish(VIEWER_GLOBALS.EVENTS.MAP.BASEMAP.GET_CURRENT,_4.hitch(this,function(_44){_43=[_44];}));var _45=this.getExternalLayers();if(_45!=null&&_4.isArray(_45)&&_45.length>0){if(_42==null){_42=[];}_42=_42.concat(_45);}if(_3b){var _46=_3b.xmin+","+_3b.ymin+","+_3b.xmax+","+_3b.ymax;_3d.extent=_46;_3c.nbbox=_46;_3c.bbox=_46;}var i;var _47;var _48;var _49;var _4a=this.createAnnotationLayer(_3a);if(_4a!=null&&_4.isObject(_4a)){_3e.operationalLayers.push(_4a);}if(_4.isArray(_43)){var _4b;var _4c;for(i=0;i<_43.length;i++){_47=_43[i];if(_47==null){continue;}_48=_47.label;if(_48==null||_48==""){_48=_47.title?_47.title:(_47.name?_47.name:"Base Map");}if(i==0){_49=_48;}if(_47 instanceof _a&&_47.layers!=null&&_47.layers.length>0){var _4d=_47.layers[0];_4b=_4d.url;_4c=_4d.opacity;}else{if(_47.url!=null){_4b=_47.url;_4c=_47.opacity;}else{continue;}}_3e.baseMap.baseMapLayers.push({url:_4b,visibility:true,opacity:_4c!=null?_4c:1});_3c.services.push({service:_4b,extra:"",wrap:true,opacity:_4c!=null?_4c:1,title:_48});}_3e.baseMap.title=_49;}if(_4.isArray(_42)){for(i=0;i<_42.length;i++){_47=_42[i];if(_47==null){continue;}var _4e=this.layerToWebMapJson(_47);if(_4e){_3e.operationalLayers.push(_4e);_3c.services.push({service:_4e.url,extra:"&transparent=true",wrap:true,opacity:_4e.opacity});}}}_3d.thumbnailURL=VIEWER_UTILS.joinUrl(_3a,VIEWER_GLOBALS.DEFAULT_PORTAL_ENDPOINTS.PRINT_SERVICE_APPEND)+"?json="+_5.toJson(_3c);_3d.text=_5.toJson(_3e);_3d.title=_3f;return _3d;},getOperationalLayers:function(){var _4f;_6.publish(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.OPERATIONAL.GET,_4.hitch(this,function(_50){_4f=_50;}));return _4f;},getUserTokenAndId:function(){if(_b&&_b.credentials!=null&&_4.isArray(_b.credentials)){if(_b.credentials.length>0){var _51=_b.credentials[0];return {token:_51.token,id:_51.userId};}}return null;},getExternalLayers:function(){return [];},layerToWebMapJson:function(_52){if(_52){var _53=_52.label;if(_53==null||_53==""){_53=_52.name;}var _54={url:_52.url,id:_52.id,visibility:_52.visible,opacity:_52.opacity!=null?_52.opacity:1,title:_53};if(_52 instanceof _d){if(_52.bandIds!=null){_54.bandIds=_52.bandIds;}if(_52.mosaicRule!=null&&_4.isObject(_52.mosaicRule)){_54.mosaicRule={mosaicMethod:_52.mosaicRule.method,ascending:_52.mosaicRule.ascending,lockRasterIds:_52.mosaicRule.lockRasterIds,mosaicOperation:_52.mosaicRule.operation};}}return _54;}else{return null;}}});});