'use strict';

angular.module('ProductApp.controllers', []).

    controller('ProductsController', ['$scope', 'ProductService',
        function($scope, ProductService) {
        	$scope.products = [];
        	
//        	$scope.searchFilter = function(product) {
//        	    var keyword = new RegExp($scope.nameFilter, 'i');
//        	    return keyword.test(product.shortname);
//        	};
        	
            ProductService.getProductsJSON().success(function (response) {
            	$scope.products = response.products;
            });
        }
    ]).
    
    controller('ProductController', ['$scope', '$routeParams', 'ProductService',
        function($scope, $routeParams, ProductService) {
    		$scope.product = null;
	        var shortname = $routeParams.shortname;

	        ProductService.getProductJSON(shortname).success(function (response) {
	        	$scope.product = response;
	        });
    	}
    ]).
    
    controller('NewProductController', ['$scope', 'ProductService',
        function($scope, ProductService) {
    		$scope.addProduct = function() {
    			var productjson '{\"shortname\" : \"' + $scope.newProduct.brand + ' "\",';
    			productjson += '<description>' + $scope.newProduct.description + '</description>';
    			productjson += '\"brand\" : ' + $scope.newProduct.id + '</id>';
    			productjson += '\"description\" : ' + $scope.newProduct.price + '</price>';
    			productjson += '\"id\" : ' + $scope.newProduct.shortname + '</shortname>';
    			productjson += '\"id\" : ' + $scope.newProduct.sku + '</sku></product>';

    			ProductService.addProduct(productXML);
    			
    			jsonString += "{\"shortname\" : \"" + strings.getString("name") + "\",";
				jsonString += "\"id\" : " + strings.getString("id") + ",";
				jsonString += "\"brand\" : \"" + strings.getString("brand") + "\",";
				jsonString += "\"description\" : \"" + strings.getString("discription") + "\",";
				jsonString += "\"price\" : " + strings.getString("price") + "},";
    			
    			
    		};
    	}
    ]);
