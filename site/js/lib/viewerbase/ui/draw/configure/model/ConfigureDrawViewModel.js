//>>built
define("esriviewer/ui/draw/configure/model/ConfigureDrawViewModel",["dojo/_base/declare"],function(_1){return _1([],{constructor:function(){this.showEnvelopeIcon=ko.observable(true);this.showTextIcon=ko.observable(true);this.pointConfigurationActive=ko.observable(true);this.lineConfigurationActive=ko.observable(false);this.rectangleConfigurationActive=ko.observable(false);this.polygonConfigurationActive=ko.observable(false);this.textConfigurationActive=ko.observable(false);},showPointConfiguration:function(){this.pointConfigurationActive(true);this.lineConfigurationActive(false);this.rectangleConfigurationActive(false);this.polygonConfigurationActive(false);this.textConfigurationActive(false);},showLineConfiguration:function(){this.lineConfigurationActive(true);this.pointConfigurationActive(false);this.rectangleConfigurationActive(false);this.polygonConfigurationActive(false);this.textConfigurationActive(false);},showRectangleConfiguration:function(){this.rectangleConfigurationActive(true);this.lineConfigurationActive(false);this.pointConfigurationActive(false);this.polygonConfigurationActive(false);this.textConfigurationActive(false);},showPolygonConfiguration:function(){this.polygonConfigurationActive(true);this.rectangleConfigurationActive(false);this.lineConfigurationActive(false);this.pointConfigurationActive(false);this.textConfigurationActive(false);},showTextConfiguration:function(){this.textConfigurationActive(true);this.polygonConfigurationActive(false);this.rectangleConfigurationActive(false);this.lineConfigurationActive(false);this.pointConfigurationActive(false);}});});