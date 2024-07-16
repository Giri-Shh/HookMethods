sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("project1.controller.View2", {
            onInit: function () {
                debugger
                MessageToast.show("Oninit Method Executed")
                MessageToast.show("In Second")
            },
            onPress:function () {
                debugger
                this.getOwnerComponent().getRouter().navTo("RouteView1")
                // https://youtu.be/D-7_IgDHxXo?si=0PIvaUCtANgyrO2L
            }
        });
    });
