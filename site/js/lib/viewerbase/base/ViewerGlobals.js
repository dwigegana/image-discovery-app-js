//>>built
define("esriviewer/base/ViewerGlobals",["dojo/_base/declare"],function(_1){return _1([],{EVENTS:{CSS:{CORE_UI_THEME_LOADED:"css:coreUILoaded"},MAP:{GET_MAP_DIV:"map:getMapDiv",GET:"map:get",INFO_WINDOW:{HIDE:"mapInfoWin:hide"},LEGEND:{CREATE:"legend:create"},RESIZE:"map:resize",LOADED:"map:loaded",ACTIONS:{TOOL_CHANGED:"MapMan:tlChngd"},FLASH:{POINT:"mapFlash:point"},LAYERS:{TRANSPARENCY:{WINDOW:{SHOW:"layerTransWindow:show",HIDE:"layerTransWindow:hide",TOGGLE:"layerTransWindow:toggle"},SET:"layerTrans:setTransparency"},WIDGET:{SHOW:"layersWidget:show"},OPERATIONAL:{GET:"operationalLayers:get"},ADD_GRAPHICS_LAYER:"layers:addGraphicsLayer",ADD_FROM_URL:"layers:addFromUrl",ADD:"layers:add",REMOVE:"layers:remove",REMOVED:"layers:removed",ADDED:"layers:added",ADD_REFERENCE_LAYER:"reference:addLayer",REMOVE_REFERENCE_LAYER:"reference:removeLayer",REFERENCE_LAYER_ADDED:"reference:added",REFERENCE_LAYER_REMOVED:"reference:removed",ADD_EXTERNAL_MANAGED_LAYER:"layers:addExternalManagedLayer",REMOVE_EXTERNAL_MANAGED_LAYER:"layers:removeExternalManagedLayer",GET_FEATURE_LAYER_IF_EXISTS:"layers:getFeatureLayerIfExists",MOVE_LAYER_TO_TOP:"layers:moveLayerToTop",QUERY_LAYER:"layers:queryLayer",MAKE_VISIBLE:"layers:makeLayerVisible",MAKE_INVISIBLE:"layers:makeLayerInvisible"},TOOLS:{DRAW_POINT:"tldr:dPt",DRAW_POLYGON:"tldr:dPoly",DRAW_RECTANGLE:"tldr:dRect",DRAW_FREEHAND_POLYGON:"tldr:dFPoly",DRAW_FREEHAND_LINE:"tldr:dFln",DRAW_LINE:"tldr:dLn",DRAW_POLYLINE:"tldr:dPLn",DRAW_TEXT:"tldr:dTx"},GRAPHICS:{ADD:"mapGraphics:add",REMOVE:"mapGraphics:remove",CENTER_AND_FLASH:"mapGraphics:centerAndFlash"},BASEMAP:{SET:"map:setBasemap",GET_CURRENT:"map:getCurrentBasemap",GET_CURRENT_URL:"map:getCurrentBasemapUrl",ADD:"map:addBasemap",ADDED:"map:basemapAdded",REMOVE:"map:removeBasemap",REMOVED:"map:basemapRemoved",GALLERY:{TOGGLE:"map:basemapGalleryToggle",HIDE:"map:basemapGalleryHide",SHOW:"map:basemapGalleryShow",IS_HIDDEN:"map:basemapGalleryIsHidden",GET:"map:basemapGalleryGet"},CHANGED:"map:basemapChanged"},EXTENT:{GET_EXTENT:"extent:getExtent",GET_CENTER:"extent:getCenter",GET_LEVEL:"extent:getLevel",SET_LEVEL:"extent:setLevel",PAN_TO:"extent:panTo",SET_EXTENT:"extent:setExtent",CHANGED:"extent:changed",GO_PREV_EXTENT:"extent:prevExtent",GO_NEXT_EXTENT:"extent:nextExtent",GO_INITIAL_EXTENT:"extent:initialExtent",GO_LAST_EXTENT:"extent:lastExtent",PREV_EXTENT_EXISTS:"extent:prevExtentExists",NEXT_EXTENT_EXISTS:"extent:nextExtentExists"},LEVEL:{CHANGED:"zoomLevel:changed",GET_LEVEL_COUNT:"zoomLevel:getCount",LEVEL_COUNT_CHANGED:"zoomLevel:lvlCountChanged"},LABEL_SERVICES:{SHOW:"lblServices:show",HIDE:"lblServices:hide",SERVICE_EXISTS:"lblServices:exist"},DIMENSIONS:{GET:"dimensions:get"},TIME:{TIME_LAYER_FOUND:"time:timeLayerFound",GET_TIME_ENABLED_SERVICES:"time:getTimeEnabledServices",SHOW_TIME_SLIDER:"time:showTimeSlider",TOGGLE_TIME_SLIDER:"time:toggleTimeSlider",MAP_TIME_EXTENT_CLEARED:"map:timeExtentCleared",CLEAR_TIME_EXTENT:"time:clearTimeExtent",SET_MAP_TIME_SLIDER:"time:setMapTimeSlider",MAP_TIME_EXTENT_SET:"time:mapTimeExtentSet",MAP_TIME_CHANGED:"time:mapTimeChanged"}},PORTAL:{USER_LOGGED_OUT:"portal:userLoggedOut",USER_LOGGED_IN:"portal:userLoggedIn",IS_USER_LOGGED_IN:"portal:isUserLoggedIn",LOG_IN:"portal:logIn",LOG_OUT:"portal:logOut",SEARCH_WEBMAPS:"portal:searchWebmaps",SEARCH_FEATURE_SERVICES:"portal:searchFeatureServices",SEARCH_MAP_SERVICES:"portal:searchMapServices",SEARCH_IMAGE_SERVICES:"portal:searchImageServices",SEARCH_FEATURE_SERVICE_LAYERS:"portal:searchFeatureServiceLayers",SEARCH_GEOCODE_SERVICES:"portal:searchGeocodeServices",GET_INSTANCE:"portal:getInstance"},TOOLS:{ACCORDION:{TOGGLE:"accordion:toggle",SHOW:"accordion:show",HIDE:"accordion:hide",ADD_ITEM:"accordion:addItem",LOAD_DEFAULT_TOOLS:"accordion:loadDefaultTools",HIDE_COMPLETE:"accordion:hideComplete"},MENU:{ADD_TOOL:"toolMenu:addTool",HIDE_TOOLS_BUTTON:"toolMenu:hideToolsButton",SHOW_TOOLS_BUTTON:"toolMenu:showToolsButton",HIDE_LAYERS_BUTTON:"toolMenu:hideLayersButton",SHOW_LAYERS_BUTTON:"toolMenu:showLayersButton"}},QUERY_BUILDER:{SET_IMAGE_SERVICE_LAYER:"queryBuilder:setImgSrvLyr",SET_MAP_SERVICE_LAYER:"queryBuilder:setMapServiceLayer",SET_FEATURE_SERVICE_LAYER:"queryBuilder:setFeatureServiceLayer"},WINDOW:{REPOSITION_ALL:"window:repositionAll",SOCIAL_MEDIA:{SHOW:"socialMedia:show",HIDE:"socialMedia:hide",TOGGLE:"socialMedia:toggle"},WEATHER:{SHOW:"weatherWindow:show",HIDE:"weatherWindow:hide",TOGGLE:"weatherWindow:toggle"},DRAW:{SHOW:"drawWindow:show",HIDE:"drawWindow:hide",TOGGLE:"drawWindow:toggle"},LEGEND:{SHOW:"legendWindow:show",HIDE:"legendWindow:hide"},QUERY_BUILDER:{SHOW:"queryBuilder:show",HIDE:"queryBuilder:hide",TOGGLE:"queryBuilder:toggle",},FEATURE_EDITOR:{SHOW:"featureEditor:show",HIDE:"featureEditor:hide",TOGGLE:"featureEditor:toggle"},MEASURE:{SHOW:"measureWindow:show",HIDE:"measureWindow:hide",TOGGLE:"measureWindow:toggle"},IDENTIFY:{SHOW:"identifyWindow:show",HIDE:"identifyWindow:hide",TOGGLE:"identifyWindow:toggle"},REVERSE_GEOCODE:{SHOW:"reverseGeocodeWindow:show",HIDE:"reverseGeocodeWindow:hide",TOGGLE:"reverseGeocodeWindow:toggle"},PORTAL_PUBLISH:{SHOW:"portalPublish:show",HIDE:"portalPublish:hide",TOGGLE:"portalPublish:toggle"},PORTAL_SEARCH:{SHOW:"portalSearch:show",HIDE:"portalSearch:hide",TOGGLE:"portalSearch:toggle"},ZOOM_TO:{SHOW:"zoomTo:show",HIDE:"zoomTo:hide",TOGGLE:"zoomTo:toggle"},REFLECTIVITY:{SHOW:"reflect:show",HIDE:"reflect:hide",TOGGLE:"reflect:toggle"},PRINT:{SHOW:"print:show",HIDE:"print:hide",TOGGLE:"print:toggle"},PLOTTING:{SHOW:"plotting:show",HIDE:"plotting:hide",TOGGLE:"plotting:toggle"}},DRAW:{USER:{LINE_INPUT:"draw:usrLnIn",POINT_INPUT:"draw:usrPointIn",POLYGON_INPUT:"draw:usrPolyIn",POLYLINE_INPUT:"draw:usrPLnIn",RECTANGLE_INPUT:"draw:usrRectIn",DRAW_CANCEL:"draw:usrDrawCncl",FREEHAND_POLYLINE_INPUT:"draw:usrFrLnIn",FREEHAND_POLYGON_INPUT:"draw:usrFrPolyIn",GET_USER_GRAPHICS:"draw:usrGGraphics"},SYMBOLOGY:{SET_POLYGON:"drawSym:setPolygon",SET_POINT:"drawSym:setPoint",SET_LINE:"drawSym:setLine",SET_ENVELOPE:"drawSym:setEnvelope",SET_TEXT:"drawSym:setText"},DRAW_GRAPHICS_LAYER_CREATED:"draw:drawGraphicsLayerCreated"},NAVIGATION:{DISABLE:"nav:disable",DISABLE_TOOLBAR:"nav:disableToolbar",ENABLE_TOOLBAR:"nav:enableToolbar",PAN:"nav:pan",ZOOM_IN:"nav:zoomIn",ZOOM_OUT:"nav:zoomOut"},LOCATOR:{REVERSE_GEOCODE:"locator:reverseGeocode",SINGLE_LINE_ADDRESS_TO_LOCATION:"locator:addressToLocation",LOCATOR_REQUEST_COMPLETE:"locator:locatorRequestComplete",LOCATOR_REQUEST_ERROR:"locator:locatorRequestError",ADD_LOCATOR:"locator:addLocator",GET_LOCATORS:"locator:getLocators",LOCATOR_ADDED:"locator:locatorAdded",REMOVE_LOCATOR:"locator:remove",LOCATOR_REMOVED:"locator:removed"},BOOKMARK:{STORAGE:{GET:"bookmark:getBookmarks"},CREATE_WINDOW:{SHOW:"bookmark:show",HIDE:"bookmark:hide"},REMOVED:"bookmark:removed",CREATED:"bookmark:created"},CONFIGURE:{WINDOW:{SHOW:"configureWindow:show",HIDE:"configureWindow:hide"}},THROBBER:{SHOW:"throbber:show",HIDE:"throbber:hide",BLOCK_HIDE:"throbber:blockHide",RELEASE_HIDE_BLOCK:"throbber:unblockHide"},TOOLTIP:{CREATE_CONFIRM:"tooltip:createCOnfirm"},MESSAGING:{SHOW:"messaging:show",HIDE:"messaging:hide"},GEOMETRY_SERVICE:{EXISTS:"geometryService:exists",TASKS:{PROJECT_TO_MAP_SR:"geometry:project",CALCULATE_AREA:"geometry:calculateArea",CALCULATE_DISTANCE:"geometry:calculateDistance",PROJECT_TO_LAT_LON:"geometry:projectToLatLon"},BUFFER_POINT:"geometryService:bufferPoint",MGRS_TO_LAT_LON:"geometryService:mrgsToLatLon"},LOGGING:{ADD:"logging:add",CLEAR:"logging:clear",WINDOW:{SHOW:"logging:windowShow",HIDE:"logging:windowHide",TOGGLE:"logging:windowToggle"}},FOOTER:{TOGGLE:"footer:toggle",COLLAPSE:"footer:collapse",EXPAND:"footer:expand",COLLAPSED:"footer:collapsed",EXPANDED:"footer:expanded",IS_EXPANDED:"footer:isExpanded"},CONFIGURATION:{GET:"config:get",GET_ENTRY:"config:getEntry"},PLACEMENT:{GLOBAL:{PLACE:{NAVIGATION_TOOLBAR:"place:navTool",HEADER:"place:header",VIEWER_ACCORDION:"place:vAccor",MAIN_TOOLBAR:"place:mTbar",MAIN_TOOLBAR_DROP_DOWN:"place:mTbardd",FOOTER:"place:ftr",MESSAGING:"place:msging",THROBBER:"place:throbber",BASEMAP_GALLERY:"place:basemapGallery",MAP_SCALE_AND_COORDINATES:"place:mSACoords",CREATE_BOOOKMARK:"place:createBmrk",MENU_BAR:"place:menuBar",USER_LOCATION:"place:usrLoc"}}}},STORAGE:{LABELS:{BOOKMARKS:"bookmarks",USER_GRAPHICS:"userGraphics","BASEMAPS":"basemaps","LOCATORS":"locators","REFERENCE_LAYERS":"referenceLayers","LAYERS":"userLayers"}},SERVICE_TYPES:{GEOMETRY_SERVER:"GeometryServer",GLOBE_SERVER:"GlobeServer",GP_SERVER:"GPServer",GP_TASK:"GPTask",IMAGE_SERVER:"ImageServer",MAP_SERVER:"MapServer",WEB_MAP:"WebMap",PORTAL_SERVER:"PortalServer",GEOCODE_SERVER:"GeocodeServer",FEATURE_LAYER:"FeatureLayer",FEATURE_SERVER:"FeatureServer",KML:"KMLLayer",OPEN_STREET_MAP:"OpenStreetMap",WMS_LAYER:"WMSLayer"},LAYER_TYPES:{IMAGE_SERVER:{LABEL:"Image Service",VALUE:"ImageServer"},MAP_SERVER:{LABEL:"Map Service",VALUE:"MapServer"},FEATURE_LAYER:{LABEL:"Feature Layer",VALUE:"FeatureLayer"},KML:{LABEL:"KML Layer",VALUE:"KMLLayer"}},LOG_TYPE:{WARNING:"warning",ERROR:"error",INFO:"info"},ESRI_FIELD_TYPES:{DATE:"esriFieldTypeDate",DOUBLE:"esriFieldTypeDouble",STRING:"esriFieldTypeString",INTEGER:"esriFieldTypeInteger",SMALL_INTEGER:"esriFieldTypeSmallInteger",GEOMETRY:"esriFieldTypeGeometry",OBJECT_ID:"esriFieldTypeOID"},ESRI_GEOMETRY_TYPES:{POINT:"esriGeometryPoint",LINE:"esriGeometryPolyline",POLYGON:"esriGeometryPolygon",ENVELOPE:"esriGeometryEnvelope"},ESRI_LAYER_TYPES:{FEATURE_LAYER:"Feature Layer",RASTER:"Raster Layer"},ESRI_LAYER_DECLARED_CLASSES:{GRAPHICS_LAYER:"esri.layers.GraphicsLayer",FEATURE_LAYER:"esri.layers.FeatureLayer",TILED_MAP_SERVICE:"esri.layers.ArcGISTiledMapServiceLayer",DYNAMIC_MAP_SERVICE:"esri.layers.ArcGISDynamicMapServiceLayer",IMAGE_SERVICE:"esri.layers.ArcGISImageServiceLayer"},ESRI_UNITS:{ACRES:"esriAcres",METERS:"esriMeters",FEET:"esriFeet",YARDS:"esriYards",MILES:"esriMiles",NAUTICAL_MILES:"esriNauticalMiles",MILLIMETERS:"esriMillimeters",CENTIMETERS:"esriCentimeters",DECIMETERS:"esriDecimeters",KILOMETERS:"esriKilometers",SQUARE_MILES:"esriSquareMiles",SQUARE_METERS:"esriSquareMeters",SQUARE_KILOMETERS:"esriSquareKilometers",SQUARE_ARES:"esriAres",SQUARE_HECTARES:"esriHectares",SQUARE_CENTIMETERS:"esriSquareCentimeters",SQUARE_DECIMETERS:"esriSquareDecimeters",SQUARE_FEET:"esriSquareFeet",SQUARE_INCHES:"esriSquareInches",SQUARE_MILLIMETERS:"esriSquareMillimeters",SQUARE_YARDS:"esriSquareYards",SQUARE_UNKNOWN:"esriUnknownAreaUnits",DECIMAL_DEGREES:"esriDUDecimalDegrees",DEGREE_MINUTE_SECONDS:"esriDegreeMinuteSeconds"},AGS_PORTAL_TYPES:{GEOPROCESSING_SERVICE:"Geoprocessing Service",MAP_SERVICE:"Map Service",WEB_MAP:"Web Map",MAPPING_APPLICATION:"Web Mapping Application",FEATURE_SERVICE:"Feature Service",FEATURE_SERVICE_LAYER:"Feature Service Layer",GEOCODE_SERVICE:"Geocoding Service",DESKTOP_TEMPLATE:"Desktop Application Template",FEATURE_COLLECTION_TEMPLATE:"Feature Collection Template",FEATURED_ITEMS:"Featured Items",LAYER_PACKAGE:"Layer Package",IMAGE_SERVICE:"Image Service",GRAPHICS_LAYER:"Graphics Layer",UNKNOWN:"Unknown",OPEN_STREET_MAPS:"OpenStreetMap"},DEFAULT_PORTAL_ENDPOINTS:{SEARCH_URL_PART:"/sharing/search",VIEWER_URL_PART:"home/webmap/viewer.html",CONTENT_URL_PART:"sharing/content",ITEMS_URL_PART:"sharing/content/items",DEFAULT_MAX_RESULTS:15,USER_CONTENT_PREPEND:"sharing/content/users/",USER_GROUPS_PREPEND:"/sharing/community/users",USER_SHARE_APPEND:"/shareItems",ADD_ITEM_PART_APPEND:"/addItem",PRINT_SERVICE_APPEND:"sharing/tools/print",GENERATE_TOKEN_APPEND:"/sharing/generateToken",PORTAL_VALIDATOR_ENDPOINT:"sharing",DATA_APPEND:"data"},ESRI_RENDERER_TYPES:{SIMPLE:"simple",UNIQUE_VALUE:"uniqueValue",CLASS_BREAKS:"classBreaks"},WINDOW:{TOP_POSITION_MOVE_OFFSET:30},VIEWER_MODES:{SIDEBAR:"sidebar",WINDOW:"window",MOBILE:"mobile"},GP_PARAMETER_DIRECTION:{INPUT:"esriGPParameterDirectionInput",OUTPUT:"esriGPParameterDirectionOutput"},GP_MESSAGE_TYPES:{INFO:["esriJobMessageTypeInformative","esriGPMessageTypeInformative"],WARNING:["esriJobMessageTypeWarning","esriGPMessageTypeWarning"],ERROR:["esriJobMessageTypeAbort","esriGPMessageTypeError","esriJobMessageTypeError","esriGPMessageTypeAbort"]},DEFAULT_REVERSE_GEOCODE_DISTANCE:50,PORTAL_SHARING_REST_URL_PART:"/sharing/rest"});});