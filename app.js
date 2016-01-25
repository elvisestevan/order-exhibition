(function () {
    "use strict";
    
    /*global angular*/
    var app = angular.module('erp', []);
    
    app.controller('OrderController', ['$http', function ($http) {
        var erp = this;
        
        erp.order = {};
        
        $http.get('order.json').success(function (data) {
            erp.order = data;
        });
    }]);
    
    app.controller('TabController', function () {
        var tab = 1;
        
        this.setTab = function (tabSelected) {
            tab = tabSelected;
        };
        
        this.tabIsSetted = function (tabSelected) {
            return tab === tabSelected;
        };
    });
}());