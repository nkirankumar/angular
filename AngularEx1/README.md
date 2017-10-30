Why learn AngularJS?
As a web developer, you'll need to learn how to use new frameworks on a regular basis. AngularJS is a full-featured framework that is incredibly popular among developers. For single-page applications, the AngularJS framework creates rich interactive features for a real-time experience. It's friendly to developers and has a supportive and active community. Products built with AngularJS include YouTube Video Manager, The Weather Channel site, several Google products, and Tinder.
Hello AngularJS I
AngularJS is a JavaScript web framework aimed to make web apps simple to build and easy to maintain.
In app.js:
	var app = angular.module("myApp", []);
Awesome! You built an AngularJS app. How does it work?
1.	In app.js, we created a new module named myApp. A module contains the different components of an AngularJS app.
2.	Then, in index.html we added <body ng-app="myApp">. The ng-app is called a directive. It tells AngularJS that the myApp module will live within the <body> element, termed the application's scope. In other words, we used the ng-app directive to define the application scope.
3.	In MainController.js we created a new controller named MainController. A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope.
4.	Then, in index.html, we added <div class="main" ng-controller="MainController">. Like ng-app, ng-controller is a directive that defines the controller scope. This means that properties attached to $scope in MainController become available to use within <div class="main">.
5.	Inside <div class="main"> we accessed $scope.title using {{ title }}. This is called an expression. Expressions are used to display values on the page.
6.	The value of title showed up when we viewed the app in the browser.
Workflow
So far this is our typical workflow when making an AngularJS app:
1.	Create a module, and use ng-app in the view to define the application scope.
2.	Create a controller, and use ng-controller in the view to define the controller scope.
3.	Add data to $scope in the controller so they can be displayed with expressions in the view
Filters I
Well done! In the controller, you used an object to group together related data about a product. Then in the view, you used dot notation to display the values.
Filters II
Great! The product price changed from a number to a formatted currency. How does it work?
1.	AngularJS gets the value of product.price.
2.	It sends this number into the currency filter. The pipe symbol (|) takes the output on the left and "pipes" it to the right.
3.	The filter outputs a formatted currency with the dollar sign and the correct decimal places.
In this way, filters help to separate the content in the controller from its presentation in the view.
ng-repeat I
Let's do a quick review:
•	A module contains the different components of an AngularJS app
•	A controller manages the app's data
•	An expression displays values on the page
•	A filter formats the value of an expression
ng-repeat II
Well done! You got both books in $scope.products to show up in the view. How does it work?
1.	In the controller, we used products to store an array containing two objects.
2.	Then in the view, we added <div ng-repeat="product in products">. Like ng-app and ng-controller, the ng-repeat is a directive. It loops through an array and displays each element. Here, the ng-repeat repeats all the HTML inside <div class="col-md-6"> for each element in the products array.
In this way, ng-repeat shows both products in the $scope.products array. Instead of writing the same HTML twice as before, we just use ng-repeat to generate the HTML twice.
Directives
We've used a few directives so far - ng-app, ng-controller, ng-repeat, and ng-src. What can we generalize about directives?
Directives bind behavior to HTML elements. When the app runs, AngularJS walks through each HTML element looking for directives. When it finds one, AngularJS triggers that behavior (like attaching a scope or looping through an array).
ng-click I
So far we've made a static AngularJS app by adding properties in the controller and displaying them in the view. AngularJS is a framework for building dynamic web apps, so let's start to make this app interactive
ng-click II
Great! Each time you click on the number of likes, the number goes up. How does it work?
1.	The ng-click is a directive. When <p class="likes"> is clicked, ng-click tells AngularJS to run the plusOne() function in the controller.
2.	The plusOne() function gets the index of the product that was clicked, and then adds one to that product's likes property.
Notice that the plusOne() doesn't interact with the view at all; it just updates the controller. Any change made to the controller shows up in the view.
Generalizations
Congratulations! You built an AngularJS app from scratch. What can we generalize so far?
1.	A user visits the AngularJS app.
2.	The view presents the app's data through the use of expressions, filters, and directives. Directives bind new behavior HTML elements.
3.	A user clicks an element in the view. If the element has a directive, AngularJS runs the function.
4.	The function in the controller updates the state of the data. 
5.	The view automatically changes and displays the updated data. The page doesn't need to reload at any point.
tives
Directives I
Here's an AngularJS app for a mobile app store:
•	In the controller MainController.js, there are three objects $scope.move, $scope.shutterbugg, and $scope.gameboard that each contain info about an app, like its title and price.
•	In the view index.html in the .main section, each app is displayed inside a .card div.
But looking at the view, the same code is written over and over again to display each app. This is repetitive and error-prone. Let's fix this.
Directives II
What did we just do? We wrote code to teach the browser a new HTML element <app-info>, and used it in the view to display each app's details.
First in js/directives/appInfo.js, we made a new directive. We used app.directive to create a new directive named 'appInfo'. It returns an object with three options:
1.	restrict specifies how the directive will be used in the view. The 'E' means it will be used as a new HTML element.
2.	scope specifies that we will pass information into this directive through an attribute named info. The = tells the directive to look for an attribute named info in the <app-info> element, like this:
 <app-info info="shutterbugg"></app-info>

The data in info becomes available to use in the template given by templateURL.
3.	templateUrl specifies the HTML to use in order to display the data in scope.info. Here we use the HTML in js/directives/appInfo.html.
Looking at js/directives/appInfo.html, we define the HTML to display details about an app, like its title and price. We use expressions and filters to display the data.
Then in index.html we use the new directive as the HTML element <app-info>. We pass in objects from the controller's scope ($scope.shutterbugg) into the <app-info> element's info attribute so that it displays.
Directives III
Why is creating your own directives useful?
1.	Readability. Directives let you write expressive HTML. Looking at index.html you can understand the app's behavior just by reading the HTML. 
2.	Reusability. Directives let you create self-contained units of functionality. We could easily plug in this directive into another AngularJS app and avoid writing a lot of repetitive HTML.
Built-in and Custom Directives
We know that AngularJS comes with a few built-in directives like ng-repeat and ng-click.
We've seen that AngularJS makes it possible to create your own custom directives, such as <app-info>.
We can use Angular's built-in directives together with custom directives to create more readable apps.
For reference, here's how to use ng-repeat:
<div ng-repeat="product in products">
  <img ng-src="{{ product.cover }}">
  <p class="title">{{ product.name }}</p>
</div>
installApp I
Directives are a core feature of AngularJS. So far we've used custom directives to simply display static content, but they can do more than this. It's possible to bake interactivity into directives.
Let's start creating another directive that reacts to a user's click.
installApp II
We used app.directive to create a new directive named 'installApp'.
•	The directive contains the three options restrict, scope, and templateUrl that we saw before in the 'appInfo' directive.
•	It also contains a fourth option link. The link is used to create interactive directives that respond to user actions.
The link function takes three inputs:
1.	scope refers to the directive's scope. Any new properties attached to $scope will become available to use in the directive's template.
2.	element refers to the directive's HTML element.
3.	attrs contains the element's attributes.
Inside the link function, there are two properties buttonText and installed, and the function download(). We'll use these in the directive's template next.
Generalizations
Well done! An "Install" button now shows up under each app. When you click the button, it changes to an "Uninstall" button. When you click it again, it changes back to an "Install" button.
What can we generalize so far?
•	Directives are a powerful way to create self-contained, interactive components. Unlike jQuery which adds interactivity as a layer on top of HTML, AngularJS treats interactivity as a native component of HTML.
Services I
So far we've made AngularJS apps by adding data to a controller, and then displaying it in a view.
But what happens when the data contains hundreds of items, or if it's constantly changing like weather or financial data? Hardcoding data into a controller won't work anymore.
A better solution is to read the live data from a server. We can do this by creating a service.
Services II
Well done! The city_name now shows up in the view. How does it work?
1.	First in js/services/forecast.js, we made a new service. We used app.factory to create a new service named forecast
2.	The forecast service needs to use AngularJS's built-in $http to fetch JSON from the server. Therefore, we add $http to the forecast service as a dependency, like this:
3.	 ['$http', function($http) {
4.	   // ...
 }]

Now $http is available to use inside forecast.
5.	Then, inside forecast, we use $http to construct an HTTP GET request for the weather data. If the request succeeds, the weather data is returned; otherwise the error info is returned.
6.	Next in the controller, we used the forecast service to fetch data from the server. First we added forecast into MainController as a dependency so that it's available to use. Then within the controller we used forecast to asynchronously fetch the weather data from the server and store it into $scope.fiveDay
7.	As before, any properties attached to $scope become available to use in the view. This means in index.html, we can display the city_name using an expression as done before
Generalizations
Why are services useful? Instead of filling the controller with code to fetch weather data from a server, it's better to move this independent logic into a service so that it can be reused by other parts of the app.
What can we generalize so far?
•	Directives are a way to make standalone UI components, like <app-info>
•	Services are a way to make standalone communication logic, like forecast which fetches weather data from a server
Routing I
So far we've made AngularJS apps that display data in a single view index.html.
But what happens when the app grows and needs to display more information? Stuffing more code to a single view will quickly make things messy.
A better solution is to use multiple templates that display different pieces of data based on the URL that the user is visiting. We can do this with Angular's application routes.
Routing II
Great! A gallery of images shows up. How does it work?
1.	In app.js inside the app.config() method, we use Angular's $routeProvider to define the application routes.
2.	We used .when() to map the URL / to to the controller HomeController and the template home.html. The HomeController uses the service js/services/photos.js to fetch the array of all photos from https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json and stores it into $scope.photos. The home.html uses ng-repeat to loop through each item in the photos array and display each photo.
3.	Otherwise if a user accidentally visits a URL other than /, we just redirect to / using .otherwise().
4.	Now when a user visits /, a view will be constructed by injecting home.html into the <div ng-view></div> in index.html
Routing III
What did we just do?
1.	In app.js, we mapped a URL to PhotoController and photo.html. We added a variable part named id to the URL, like this: /photos/:id.
2.	In PhotoController, we used Angular's $routeParams to retrieve id from the URL by using $routeParams.id. Notice that we injected both $routeParams and the photos service into the PhotoController dependency array to make them available to use inside the controller.
3.	Then to fetch an individual photo, we first used the photos service to fetch the array of photos from the server, and then used $routeParams.id to access the specific photo by its index.
4.	As before, any properties attached to $scope become available to use in the view. This means in photo.html, we can display the photo's detail using expressions as done before.
Notice that when you click on links, the app doesn't do a full reload. Only the part of the view specified by <div ng-view></div> changes.
Generalizations
Why are routes useful? Instead of filling a single view with more code than needed, routes let us map URLs to self-contained controllers and templates. Furthermore, now that the app has URLs, users can easily bookmark and share the app's pages.
What can we generalize so far?
•	Directives are a way to make standalone UI components, like <app-info>
•	Services are a way to make standalone communication logic, like forecast which fetches weather data from a server
•	Routes are a way to manage apps containing more views.
Automated testing:
BDD: Behavior Driven Development
TDD: Test Driven Development