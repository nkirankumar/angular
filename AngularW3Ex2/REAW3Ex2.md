###AngularJS Extends HTML
AngularJS extends HTML with ng-directives.
The 'ng-app' directive defines an AngularJS application.
The 'ng-model' directive binds the value of HTML controls (input, select, textarea) to application data.
The ng-bind directive binds application data to the HTML view. 
###AngularJS Directives
As you have already seen, AngularJS directives are HTML attributes with an ng prefix.
###AngularJS Expressions
AngularJS expressions are written inside double braces: {{ expression }}.
AngularJS will "output" data exactly where the expression is written:
AngularJS expressions bind AngularJS data to HTML the same way as the ng-bind directive.
AngularJS expressions can be written inside double braces: {{ expression }}.
AngularJS expressions can also be written inside a directive: ng-bind="expression".
AngularJS will resolve the expression, and return the result exactly where the expression is written.
AngularJS expressions are much like JavaScript expressions: They can contain literals, operators, and variables.
Example {{ 5 + 5 }} or {{ firstName + " " + lastName }}
###AngularJS Numbers
AngularJS numbers are like JavaScript numbers:
###AngularJS Strings
AngularJS strings are like JavaScript strings:
###AngularJS Objects
AngularJS objects are like JavaScript objects:
###AngularJS Arrays
AngularJS arrays are like JavaScript arrays:
###AngularJS Expressions vs. JavaScript Expressions
Like JavaScript expressions, AngularJS expressions can contain literals, operators, and variables.
Unlike JavaScript expressions, AngularJS expressions can be written inside HTML.
AngularJS expressions do not support conditionals, loops, and exceptions, while JavaScript expressions do.
AngularJS expressions support filters, while JavaScript expressions do not.
*index.html*
AngularJS starts automatically when the web page has loaded.
The ng-app directive tells AngularJS that the <div> element is the "owner" of an AngularJS application.
The ng-model directive binds the value of the input field to the application variable name.
The ng-bind directive binds the innerHTML of the <p> element to the application variable name. 
###AngularJS Applications###
AngularJS modules define AngularJS applications.
AngularJS controllers control AngularJS applications. 
The ng-app directive defines the application, the ng-controller directive defines the controller.
An AngularJS module defines an application.
The module is a container for the different parts of an application.
The module is a container for the application controllers.
Controllers always belong to a module.
###Creating a Module
A module is created by using the AngularJS function angular.module
The "myApp" parameter refers to an HTML element in which the application will run.
Now you can add controllers, directives, filters, and more, to your AngularJS application.
###Adding a Controller
Add a controller to your application, and refer to the controller with the ng-controller directive:
Adding a Directive
AngularJS has a set of built-in directives which you can use to add functionality to your application.
In addition you can use the module to add your own directives to your applications:
Modules and Controllers in Files
It is common in AngularJS applications to put the module and the controllers in JavaScript files.
The [] parameter in the module definition can be used to define dependent modules.
Without the [] parameter, you are not creating a new module, but retrieving an existing one.
###Functions can Pollute the Global Namespace
Global functions should be avoided in JavaScript. They can easily be overwritten or destroyed by other scripts.
AngularJS modules reduces this problem, by keeping all functions local to the module.
While it is common in HTML applications to place scripts at the end of the <body> element, it is recommended that you load the AngularJS library either in the <head> or at the start of the <body>.
This is because calls to angular.module can only be compiled after the library has been loaded.	
*modules.html*
 In this example, "myApp.js" contains an application module definition, while "myCtrl.js" contains the controller:
AngularJS Directives
AngularJS lets you extend HTML with new attributes called Directives.
AngularJS has a set of built-in directives which offers functionality to your applications.
AngularJS also lets you define your own directives.
AngularJS directives are extended HTML attributes with the prefix ng-.
The ng-app directive initializes an AngularJS application.
The ng-init directive initializes application data.
The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
###Repeating HTML Elements
The ng-repeat directive repeats an HTML element:
###The ng-app Directive
The ng-app directive defines the root element of an AngularJS application. 
The ng-app directive will auto-bootstrap (automatically initialize) the application when a web page is loaded.
The ng-init directive defines initial values for an AngularJS application.
Normally, you will not use ng-init. You will use a controller or module instead.
The ng-model Directive
The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
The ng-model directive can also:
*Provide type validation for application data (number, email, required).
*Provide status for application data (invalid, dirty, touched, error).
*Provide CSS classes for HTML elements.
*Bind HTML elements to HTML forms.
TODO: Read more about the ng-model directive in the next chapter.
###Create New Directives
In addition to all the built-in AngularJS directives, you can create your own directives.
New directives are created by using the .directive function.
To invoke the new directive, make an HTML element with the same tag name as the new directive.
When naming a directive, you must use a camel case name, w3TestDirective, but when invoking it, you must use - separated name, w3-test-directive:
You can invoke a directive by using:
*Element name
*Attribute
*Class
*Comment
###Restrictions
You can restrict your directives to only be invoked by some of the methods.
By adding a restrict property with the value "A", the directive can only be invoked by attributes:
The legal restrict values are:
*E for Element name
*A for Attribute
*C for Class
*M for Comment
By default the value is EA, meaning that both Element names and attribute names can invoke the directive.
*directives.html*
The examples will all produce the same result:

AngularJS ng-model Directive
The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
With the ng-model directive you can bind the value of an input field to a variable created in AngularJS.
###Validate User Input
The ng-model directive can provide type validation for application data (number, e-mail, required):
*model.html*