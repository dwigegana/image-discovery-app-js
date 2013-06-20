//>>built
define("esriviewer/ui/editor/FeatureServiceEditor",["dojo/_base/declare","dojo/_base/lang","dojo/topic","dojo/dom-style","dojo/_base/connect","../draw/DrawWidget","esri/layers/FeatureLayer","esri/geometry/Point","esri/geometry/Polyline","esri/geometry/Polygon","esri/graphic"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b){return _1([_6],{constructor:function(_c){_2.mixin(this,_c||{});this.featureLayers=[];this.loadFeatureLayerErrors=[];this.pointLayers=[];this.lineLayers=[];this.polygonLayers=[];},postCreate:function(){this.inherited(arguments);this.featureLayerLoadedCallback=_2.hitch(this,this.handleFeatureLayerLoaded);this.viewModel.showDrawWindowActions(false);_4.set(this.domNode,"display","none");this.viewModel.showDrawTextIcon(false);this.viewModel.showDrawPointIcon(false);this.viewModel.showDrawPolylineIcon(false);this.viewModel.showDrawLineIcon(false);this.viewModel.showDrawPolygonIcon(false);this.viewModel.showDrawRectangleIcon(false);_4.set(this,this.drawWindowInputIconsContainer,"marginLeft","0");_4.set(this,this.drawWindowInputIconsContainer,"marginTop","0");if(this.service){VIEWER_UTILS.getServiceDescription(this.service.url,_2.hitch(this,this.handleFeatureServiceDescriptionLoaded,this.service.url),_2.hitch(this,this.handleFeatureServiceDescriptionLoadError,this.service.url));}},loadViewerConfigurationData:function(){this.inherited(arguments);var _d=null;_3.publish(VIEWER_GLOBALS.EVENTS.CONFIGURATION.GET_ENTRY,"featureEditorWidget",function(_e){_d=_e;});if(_d){this.featureEditorConfiguration=_d;this.service=this.featureEditorConfiguration.service;}},applyBindings:function(){},createUserPersistedGraphicsListWidget:function(){},onAnnotationCreated:function(_f){},createConfigureDrawWidget:function(){},createGraphicsListWidget:function(){},handleFeatureServiceDescriptionLoaded:function(_10,_11){this.featureServiceLayerDescription=_11;if(_11&&_11.layers&&_11.layers.length>0){var _12;var _13;for(var i=0;i<_11.layers.length;i++){_13=null;_12=_11.layers[i];var _14=VIEWER_UTILS.joinUrl(_10,_12.id);_3.publish(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.GET_FEATURE_LAYER_IF_EXISTS,_14,function(lyr){_13=lyr;});if(_13==null){_13=new _7(_14);_5.connect(_13,"onLoad",this.featureLayerLoadedCallback);}else{this.handleFeatureLayerLoaded(_13,false);}}}else{_3.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Feature editor service does not contain feature layers");VIEWER_UTILS.log("Feature editor service does not contain feature layers",VIEWER_GLOBALS.LOG_TYPE.ERROR);}},showFeatureLayers:function(){for(var i=0;i<this.featureLayers.length;i++){this.featureLayers[i].show();}},hideFeatureLayers:function(){for(var i=0;i<this.featureLayers.length;i++){this.featureLayers[i].hide();}},handleFeatureLayerLoaded:function(_15,_16){if(_16==null){_16=true;}this.featureLayers.push(_15);if(_15.geometryType==VIEWER_GLOBALS.ESRI_GEOMETRY_TYPES.POLYGON){this.viewModel.showDrawPolygonIcon(true);this.polygonLayers.push(_15);}if(_15.geometryType==VIEWER_GLOBALS.ESRI_GEOMETRY_TYPES.POINT){this.viewModel.showDrawPointIcon(true);this.pointLayers.push(_15);}if(_15.geometryType==VIEWER_GLOBALS.ESRI_GEOMETRY_TYPES.LINE){this.viewModel.showDrawPolylineIcon(true);this.lineLayers.push(_15);}if(_16){_3.publish(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.ADD_EXTERNAL_MANAGED_LAYER,_15);}this.applyBindingsIfReady();},handleFeatureServiceDescriptionLoadError:function(_17,_18){this.loadFeatureLayerErrors.push(_18);_3.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Could not load feature service for feature editor");VIEWER_UTILS.log("Could not load feature service for feature editor: "+_17,VIEWER_GLOBALS.LOG_TYPE.ERROR);this.applyBindingsIfReady();},applyBindingsIfReady:function(){if((this.featureLayers.length+this.loadFeatureLayerErrors.length)===this.featureServiceLayerDescription.layers.length){this._applyBindings();this.setWindowWidthToDrawIconCount();_4.set(this.domNode,"display","block");}},geometryAdded:function(_19){this.inherited(arguments);if(_19&&_19.type){var _1a=null;if(_19 instanceof _8){_1a=this.pointLayers.length>0?this.pointLayers[0]:null;}else{if(_19 instanceof _9){_1a=this.lineLayers.length>0?this.lineLayers[0]:null;}else{if(_19 instanceof _a){_1a=this.polygonLayers.length>0?this.polygonLayers[0]:null;}}}if(_1a){var _1b=new _b(_19,_1a.renderer.symbol);_1a.applyEdits([_1b]);}}},setWindowWidthToDrawIconCount:function(){var _1c=105;if(this.viewModel.showDrawTextIcon()){_1c+=32;}if(this.viewModel.showDrawPointIcon()){_1c+=32;}if(this.viewModel.showDrawPolylineIcon()){_1c+=32;}if(this.viewModel.showDrawPolygonIcon()){_1c+=32;}if(this.viewModel.showDrawRectangleIcon()){_1c+=32;}this.onSetParentWidth(_1c);},onSetParentWidth:function(){}});});