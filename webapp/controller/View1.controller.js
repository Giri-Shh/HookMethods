sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                debugger
                MessageToast.show("Oninit Method Executed")
            },
            onBeforeRendering:function () {
                debugger
                MessageToast.show("onBeforeRendering Method Executed")
            },
            onAfterRendering:function () {
                debugger
                MessageToast.show("onAfterRendering Method Executed")
            },
            onExit:function () {
                debugger
                MessageToast.show("OnExit Method Executed")

            },
            onPress:function(){
                debugger
                MessageToast.show("Started to Navigate")
                this.getOwnerComponent().getRouter().navTo('View2')

            }
        });
    });
