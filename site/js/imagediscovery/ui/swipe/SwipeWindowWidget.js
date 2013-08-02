define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/topic",
    "dojo/window",
    "dojo/dom-style",
    "esriviewer/ui/window/WindowWidget"
],
    function (declare, lang, topic, window, domStyle, WindowWidget) {
        return declare(
            [WindowWidget],
            {
                defaultPositioning: {
                    x: 400,
                    y: 125
                },
                windowWidth: "245px",
                windowHeaderText: "Swipe",
                windowIconAltText: "Swipe",
                windowIconClass: "commonIcons16 slider",
                positioningParamName: "paramName",
                constructor: function () {
                    this.firstShowListener = this.on("firstWindowShow", lang.hitch(this, this.handleFirstWindowShow));
                },
                handleFirstWindowShow: function () {
                    this.firstShowListener.remove();
                    require(["imagediscovery/ui/swipe/SwipeWidget"], lang.hitch(this, function (SwipeWidget) {
                        this.swipeWidget = new SwipeWidget();
                        this.setContent(this.swipeWidget.domNode);
                    }));
                },
                initListeners: function () {
                    this.inherited(arguments);
                    this.subscribes.push(topic.subscribe(IMAGERY_GLOBALS.EVENTS.SWIPE.WINDOW.SHOW, lang.hitch(this, this.show)));
                    this.subscribes.push(topic.subscribe(IMAGERY_GLOBALS.EVENTS.SWIPE.WINDOW.HIDE, lang.hitch(this, this.hide)));
                    this.subscribes.push(topic.subscribe(IMAGERY_GLOBALS.EVENTS.SWIPE.WINDOW.TOGGLE, lang.hitch(this, this.toggle)));
                    topic.subscribe(IMAGERY_GLOBALS.EVENTS.LAYER.FOOTPRINTS_LAYER_DISPLAYED, lang.hitch(this, this.handleImageryLayersVisible));
                    topic.subscribe(IMAGERY_GLOBALS.EVENTS.LAYER.CLUSTER_LAYER_DISPLAYED, lang.hitch(this, this.handleImageryLayersHidden));

                },
                hide: function () {
                    this.inherited(arguments);
                    if (this.swipeWidget) {
                        this.swipeWidget.stopSwipe();
                    }
                },
                handleImageryLayersVisible: function () {
                    if (this.swipeWidget) {
                        this.swipeWidget.handleImageryLayersVisible();
                    }
                },
                handleImageryLayersHidden: function () {
                    if (this.swipeWidget) {
                        this.swipeWidget.handleImageryLayersHidden();
                    }
                }
            });
    });
