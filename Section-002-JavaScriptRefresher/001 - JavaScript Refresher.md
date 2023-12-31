# 001 - JavaScript Refresher

## Intro
* Here, we'll take a brief review about core JavaScript concepts that one needs to master in order to make the most of React.js.


## Adding JavaScript to React.js projects
* First of all, there are two ways of adding JavaScript to a React.js project. Both of them are very similar and use the ```<script></script>``` HTML element:
    * You can use the ```<script></script>``` tag and put the JS code directly between them. This is called the inline approach. However, it's not a very common approach because it leads to hard to maintain software.
    * You can use the ```<script></script>``` tag and reference a separate JavaScript file and set up some important configuration through the use of certain attributes of this tag. We'll stick with this approach since it's the one that produces reliable and maintanable code.
* __Setting up the second approach with ```<script></script>```:__
    * Use the __src__ attribute to provide the path inside your application to the target JavaScript file.
    * Use the __defer__ attribute to tell the browser that the JavaScript file must be loaded only after it has analyzed and parsed the whole current HTML file. Another way of obtaining the same result is by putting this tag at the end of the ```<body></body>``` tag.
    * Use the __type__ attribute with the value ```"module"``` to allow the script to use imports and exports.
* __IMPORTANT: When working with React.js, we almost never manually use the ```<script></script>``` tags by ourselves. Instead, React.js uses a build process that does this for us.__


## React uses a Build Process
* Essentialy, this means that the code that the developer writes it's not the code that it's executed. Instead, such code will be transformed (behind the scenes) by the building process before it's executed.
* We, the developers, don't "see" the execution of such build process since it happens in the background.
* However, we can figure out what is the tool that is executing such process by taking a look at the ```package.json``` file. When first creating a React app, we'll see the essential npm third-party packages that are used by such project. The list of packages is composed by:
    * ```react``` and ```react-dom```: These are the essential packages that allows us to use React.js
    * ```react-scripts```: This is the package responsible for executing the mentioned building process. In other words, this is the package responsible for transforming the code we have written into the code that will be injected to the browser.
    * ```loader-utils```: This package provides utility functions for creating custom Webpack loaders in React applications. It simplifies tasks such as accessing loader options, generating unique identifiers, interpolating placeholder names, and handling query parameters, making it easier to develop and configure custom loaders efficiently.


## Why use a Build Process?
1. __Raw, unprocessed React.js code won't execute inside the browser:__ The most common reason for this is the fact that React.js projects use a feature called JSX that allows us to write HTML-like code inside ```.js``` files (however, this is not a default JavaScript feature. Thus, such code must be transformed). This allows us to define and render React components in a more concise and simple way. This code will be transpiled into a JS code that is actually understandable by the browser. Example of a React.js code that uses JSX is shown below:
```js
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a simple React component written in JSX.</p>
    </div>
  );
};

export default MyComponent;
```
2. __A build process also optimizes your code for production:__ The most common use case for this is the minification process applied to the written code. Such process is responsible for making the JS code as short as possible, so it will be lighter and easier to inject into the browser and download by the clients.


## Import and Export
* In a React.js project it's recommended to split your code into different files in order to keep it manageable and concise.
* This is where we use the ```export``` and ```import``` keywords.
* First of all, we need to make sure that the ```<script></script>``` HTML elements have the attribute ```type``` set to the value ```module```.
* Good! Now, we need to understand how to use such keywords. It's important to mention that there are two ways of exporting/importing things when using JS modules:

### Export/Import Separately (Named Exports/Imports)
* If we go through this way, we'll be exporting and importing things in a separate/individual way. This means that we'll import variables, constants and functions in a separate/individual manner. To explain how this will work in details, we'll take a look at an example that has involves two ```.js``` files (```app.js``` and ```util.js```):
* File #1: ```util.js```
```js
export const apiKey = "someThirdPartyServiceAPIKeyHere";
```
* File #2: ```app.js```
```js
import {apiKey} from "./util.js"; // Here, I am suposing that both files are inside the same folder. Also, I am suposing that I am not using React.js. Thus, I need to put the file extension (.js) at the end of the file name. Moreover, the name in the import must match the name in the export.

// Rest of the file content...
```
* It's important to mention that by using the export in the way mentioned above, I can export several things from a ```.js``` file without getting any errors.

### Export/Import Default
* If we go through this way, we'll need to use the ```default``` keyword.
* Moreover, here, we won't export a variable or a constant of a function. Instead, we'll be exporting a value.
* It's also important to mention that, if we go through this way, only one ```export default``` is allowed per ```.js``` file. If we try to use it more times, we'll receive an error.
* Example of how to use it by following the same approach with two files (```app.js``` and ```util.js```):
* File #1: ```util.js```
```js
export default "someThirdPartyServiceAPIKeyHere";
```
* File #2: ```app.js```
```js
import apiKey from "./util.js"; // We can use any name here, since we exported just a value.
```

### Mixing Named Exports/Imports and Exports/Imports Default
* There's also another way of using the ```export```, ```import``` and ```default``` keywords to export and import things in the browser with JavaScript.
* We can import the whole content of a ```.js``` file (Named and Default Exports/Imports) in a unique object by using the following syntax (again, we'll use the example with two files):
* File #1: ```util.js```
```js
export const apiKey1 = "sdfsduhfsduhfsdhf";
export let apiKey2 = "quiouiyutrasdfghjklhgfdsaazzxcvbvnm";
export default "someRandomString";
```
* File #2: ```app.js```
```js
import * as objectName from "./util.js"; // "objectName" will be a JS object whose keys are the names from the exported file.

/* In other words, we would have the following structure:
objectName = {
    "apiKey1": "sdfsduhfsduhfsdhf",
    "apiKey2": "quiouiyutrasdfghjklhgfdsaazzxcvbvnm",
    "default": "someRandomString",
};
*/
```


## Variables
### Null and Undefined values
* ```undefined```: Default value of a variable, if no value was assigned to it.
* ```null```: Explicitly assigned by the developer. Usually works as a reset value.

### Usually, when writing JavaScript code, it's a best practice to use camelCase to define the name of the variables


## Destructuring
* This is a JavaScript feature that allows us to destructure both JavaScript Arrays and Objects in a way that we can assign their values to new variables with more ease.

### Destructuring Arrays
* __First of all, we'll focus on destructuring JS Arrays:__ The destructuring happens in an ordered manner. This means that it follows an approach by using the indexes of the array:
```js
const [firstName, lastName] = ["Victor", "Costa"];

console.log(firstName); // "Victor"
console.log(lastName); // "Costa"
```
* __The values inside the right-side array are assigned to the variables inside the left-side array in a 1:1 manner.__
* __If there are more variables in the left-side array than values inside the right-side array, the remaining/unused variables will be assigned the ```undefined``` value.__
* __Moreover, you can name your variables inside the left-side array any way you want.__

### Destructuring Objects
* __First of all, we'll focus on destructuring JS Objects:__ The destructuring happens in an key-value pair manner. This means that it follows an approach by using the key-value pairs that are present inside the JS Object:
```js
const {firstName, lastName} = {
  firstName: "Victor",
  lastName: "Costa"
};

console.log(firstName); // "Victor"
console.log(lastName); // "Costa"
```
* __The values inside the right-side array are assigned to the variables inside the left-side array in a 1:1 manner.__
* __Moreover, you must name your variables inside the left-side object using the same names used in the key-value pairs present in the right-side object. Otherwise, the variable inside your left-side object will receive the ```undefined``` value.__


## Spread Operator
* The symbol for the Spread Operator is ```...```
* Such operator is used to pull out values (in the case of JS Arrays) or key-value pairs (in the case of JS Objects).
* Such operator is commonly used when creating new JS Arrays or new JS Objects.
* Below, you can find an example using the Spread Operator:
```js
const evenNumbers = [2,4,6,8,10];
const oddNumbers = [1,3,5,7,9];
const zero = 0;

const numbersFromZeroToTen = [0, ...oddNumbers, ...evenNumbers]; // [0,1,3,5,7,9,2,4,6,8,10];
```


## Types of For Loops in JavaScript
* JavaScript provides us with a few ways of writing For Loops.
* Here are the most important ones (the ones that we'll use the most):

### ```for``` statement
* This type of for loop is the most common and simple one. It's also the most similar to the ones we're used to coming from languages such a C, C++ or Java:
```js
for(initialization; stopCondition; afterThought){
  // statements...
}
```

### ```for ... in``` statement
* __This type of for loop acts in the following way: It iterates a specified variable over all the enumerable properties (the property names!!!!) of an object, and for each distinct property, this for loop will execute the statements present inside it.__
```js
for(variable in object){
  // statements...
}
```

### ```for ... of``` statement
* __This type of for loop acts in the following way: It iterates a specified variables over all values of each distinct property of an iterable object (Array, Map, Set, Arguments).__
```js
for(variable of object){
  // statements...
}
```
* __IMPORTANT: Pay attention to the fact the ```for ... in``` focuses on the properties of an object while the ```for ... of``` focuses on the values of an object.__


## Defining Functions inside Functions
* JavaScript, as Python, allows us to define functions inside functions. However, a nested function can only be called inside the nesting function (as expected).
