//>>built
require({cache:{"url:esriviewer/ui/query/theme/QueryBuilderResultsTheme.css":".clearQueryBuilderResultsHeader{cursor:pointer;color:blue;text-decoration:underline;margin-bottom:5px;font-size:8pt;}.queryBuilderResultsRowClickLbl{position:absolute;right:15px;top:5px;}.queryBuilderResultGridContainer * .dgrid-row-table{cursor:pointer;}.queryBuilderResultGridContainer, .queryBuilderResultsContainer{height:100%;}","url:esriviewer/ui/query/template/QueryBuilderResultsTemplate.html":"<div style=\"height: 100%\" class=\"queryBuilderResultsContainer\">\r\n    <div class=\"clearQueryBuilderResultsHeader\">\r\n        <div data-dojo-attach-event=\"click:clearResults\">Clear Results</div>\r\n    </div>\r\n    <div class=\"queryBuilderResultsRowClickLbl\">Click result row to pan</div>\r\n    <div class=\"queryBuilderResultGridContainer\" data-dojo-attach-point=\"queryBuilderResultGridContainer\"></div>\r\n</div>"}});define("esriviewer/ui/query/QueryBuilderResultsWidget",["dojo/_base/declare","xstyle/css!./theme/QueryBuilderResultsTheme.css","dojo/text!./template/QueryBuilderResultsTemplate.html","dojo/topic","dojo/_base/lang","dojo/dom-style","../base/UITemplatedWidget","./base/QueryBuilderResultsGrid","dojo/dom-construct","esri/layers/GraphicsLayer","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleMarkerSymbol","esri/renderers/SimpleRenderer","esri/renderers/UniqueValueRenderer","esri/renderers/ClassBreaksRenderer","esri/InfoTemplate","dojo/_base/Color"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12){return _1([_7],{useCustomResultGraphics:false,maxResults:300,templateString:_3,postCreate:function(){this.inherited(arguments);this.initSymbology();this.createResultGraphicsLayer();},loadViewerConfigurationData:function(){var _13=null;_4.publish(VIEWER_GLOBALS.EVENTS.CONFIGURATION.GET_ENTRY,"queryBuilder",function(_14){_13=_14;});if(_13&&_13.useCustomResultGraphics!=null){this.useCustomResultGraphics=_13.useCustomResultGraphics;}},handlePointSymbolChanged:function(_15){this.pointSymbol=_15;},handleLineSymbolChanged:function(_16){this.lineSymbol=_16;},handlePolygonSymbolChanged:function(_17){this.polygonSymbol=_17;},initSymbology:function(){this.polygonSymbol=new _b(_b.STYLE_SOLID,new _c(_c.STYLE_SOLID,new _12("yellow"),2),new _12("yellow"));this.pointSymbol=new _d(_d.STYLE_X,1,new _c(_c.STYLE_SOLID,new _12("yellow")));this.lineSymbol=new _c(_c.STYLE_SOLID,new _12("yellow"),2);},_setGridResults:function(_18){if(this.queryBuilderResultGrid==null){this.createResultsGrid();}this.queryBuilderResultGrid.populateResults(_18);},_setGraphicResults:function(_19){var _1a=this.pointSymbol;if(_19.geometryType==VIEWER_GLOBALS.ESRI_GEOMETRY_TYPES.POLYGON){_1a=this.polygonSymbol;}else{if(_19.geometryType==VIEWER_GLOBALS.ESRI_GEOMETRY_TYPES.LINE){_1a=this.lineSymbol;}}var _1b;var _1c=false;for(var i=0;i<_19.features.length;i++){if(i+1==this.maxResults){_1c=true;break;}_1b=_19.features[i];if(!this.useCustomResultGraphics||this.graphicsRenderer==null){_1b.setSymbol(_1a);}else{_1b.setSymbol(this.graphicsRenderer.getSymbol(_1b));}_1b.setInfoTemplate(this.getInfoTemplate(_1b));this.resultsGraphicsLayer.add(_1b);}},setLayerGraphicInfo:function(_1d){if(_1d.drawingInfo&&_1d.drawingInfo.renderer){var _1e=_1d.drawingInfo.renderer;if(_1e.type==VIEWER_GLOBALS.ESRI_RENDERER_TYPES.SIMPLE){this.graphicsRenderer=new _e(_1e);}else{if(_1e.type==VIEWER_GLOBALS.ESRI_RENDERER_TYPES.UNIQUE_VALUE){this.graphicsRenderer=new _f(_1e);}else{if(_1e.type==VIEWER_GLOBALS.ESRI_RENDERER_TYPES.CLASS_BREAKS){this.graphicsRenderer=new _10(_1e);}}}}},destroyResultsGrid:function(){if(this.queryBuilderResultGrid){_9.destroy(this.queryBuilderResultGrid.domNode);this.queryBuilderResultGrid=null;}},createResultsGrid:function(){this.queryBuilderResultGrid=new _8({maxResults:this.maxResults});_9.place(this.queryBuilderResultGrid.domNode,this.queryBuilderResultGridContainer);},handleQueryResponse:function(_1f){this.clearGraphics();if(_1f==null||_1f.features==null||!_5.isArray(_1f.features)){this.handleQueryError();}this._setGraphicResults(_1f);var _20=_1f.features.length>this.maxResults;var _21=_20?this.maxResults:_1f.features.length;var _22=_1f.features.length===1?"Result":"Results";_4.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"Query Complete ("+_21+" "+_22+")");VIEWER_UTILS.log("SQL Query Returned "+_21+" "+_22,VIEWER_GLOBALS.LOG_TYPE.INFO);this._setGridResults(_1f);},clearGraphics:function(){if(this.resultsGraphicsLayer){this.resultsGraphicsLayer.clear();}},createResultGraphicsLayer:function(){if(this.resultsGraphicsLayer==null){this.resultsGraphicsLayer=_a();this.resultsGraphicsLayer.on("mouse-over",function(evt){_6.set(evt.target,"cursor","pointer");});_4.publish(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.ADD_EXTERNAL_MANAGED_LAYER,this.resultsGraphicsLayer);}},getInfoTemplate:function(_23){var _24=new _11();_24.setTitle("Result");var _25=_9.create("div");var _26=_9.create("div");_9.place(_26,_25);var _27;var _28=_23.attributes;for(var key in _28){var _29=_9.create("div",{className:"infoTemplateEntry"});var _2a=_9.create("span",{className:"infoTemplateEntryLbl",innerHTML:key+":"});_27=_28[key];var _2b=_9.create("span",{className:"infoTemplateEntryValue",innerHTML:_27});_9.place(_2a,_29);_9.place(_2b,_29);_9.place(_29,_26);}_24.setContent(_25.innerHTML);return _24;},clearResults:function(){this.clearGraphics();if(this.queryBuilderResultGrid){this.queryBuilderResultGrid.clearResults();}}});});