var app = angular.module('GalleryApp', ['ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
	  templateUrl: 'views/home.html',
      controller: 'HomeController'
       
    }) 
	.when('/photos/:id', { 
	  templateUrl: 'views/photo.html',
      controller: 'PhotoController'
       
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
	/* $routeProvider 
    .when('/', { 
      template : "<h1>Main</h1><p>Click on the links to change this content</p>" 
    }) 
	.when('/photos/:id', { 
      template : "<h1>Main</h1><p>Click on the links to change this content</p>"
    })
    .otherwise({ 
      redirectTo: '/' 
    }); */
});