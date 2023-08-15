# 001 - React Basics

## Intro
* React.js is a front-end framework used to build User Interfaces (UIs) more easily.
* By using it, you'll be able to build more complex UIs with less work.
* React is all about components.


## Components
* __Components are reusable building blocks that make up the User Interface (UI) of your web application. Every single UI is made up of dozens, hundreds, if not thousands of components.__
* Moreover, components, in the end, are just a combination of HTML (for its structure), CSS (for its styling) and JS (for its functionality/logic) code.
* Even the simplest things inside a UI can be considered components. You make such this distinction in a very granular way (or not).
* __Why use React?__
    * __Reusability:__ Don't Repeat Yourself.
    * __Separation of Concerns:__ Dont't do too many thing inside the same place (in this case, inside a function).


## How We Build a Component?
* A component is just an amalgamation of HTML, CSS and JS code, as already stated above.
* Then, we use the components to build the UI itself.
* __React allows us to create re-usable and reactive components consisting of the three technologies mentioned above.__
* __React also uses a Declarative Approach. This means that we, the developers, define the desired target state(s) and let React figure out the actual JavaScript DOM instructions. We don't manipulate the DOM by ourselves.__


## Creating a React Project
* Must have Node.js installed in your local system.
* Then, choose a folder/directory where you'll create your React App project inside it and run the following commands in the order shown below:
    * ```npx create-react-app react-app-name ```
    * ```npm install```
    * ```npm start```


## Structure of a React Project
* First thing to keep in mind: React code is not more, not less than JavaScript code. Thus, we'll essentialy be writing JS code.
* __Now, we'll dive into the structure of a default/initial/standard JS project:__
    * ```node_modules```: It's a folder that contains the files related to the npm packages that we've installed inside our application.
    * ```public```: It's a folder that contains the files considered public to the whole application.
    * ```src```: It's a folder that contains the source code of our application. This is the place where we'll spend the vast majority of our time.
        * ```index.js```: A JavaScript file that works as the starting point of our application.
        * ```index.css```: A CSS file whose styles are "injected" into the whole application.
        * ```App.js```: A JavaScript file that represents the sole component of this default React project.
    * ```package.json```: It's a JSON file that contains some specification info about our application.
* __Some important details that everyone should know:__
    * The npm packages ```react``` and ```react-dom``` together form the React library. They are separate entities because they have different responsabilities.
    * __A more detailed walkthrough about the structure of a React standard/default project can be found inside the files of the folder ```Section-003-Project```.__

## JSX
* It's a language whose syntax is very similar to that of HTML.
* This language is commonly used inside React projects.
* Indeed, JSX stands for __JavaScript XML.__
* Moreover, this JSX code is not the code that the browser reads. This is merely a syntatic sugar that allow us, developers, to write code with more ease. In fact, this code will be transformed to JS code that is "understandable" by every browser.

## How React Works
* Basically, in React, we work with components. Talking in a more specific way, components are just custom HTML elements.
* __A component in React is just a JavaScript function.__

## React Components
* __Basically, the best practice when implementing React components is to implement one component per file. In other words, 1 file = 1 component.__
* __Another common best practice is to create a ```components``` folder inside the ```src``` folder. There, all files that implement components will be stored with the exception of the file ```App.js``` file.__
* __This ```App.js``` file implements the ```App``` component and is considered a special component (root component) since the rendering of every other React component will start from it.__
* When creating new custom React components, the best way to name them is by using this special CamelCase convention.
* To use your custom React components, remember to export/import them correctly inside your project.
* __You can use your custom React elements by simply writing them as HTML elements.__
* __IMPORTANT: React uses the following rule to differentiate a custom React HTML-ish element from a default HTML element: If the first letter of the element name is upper-case, then it's a custom React HTML-ish element. Otherwise, it's a default one.__

## More Complex JSX Code
* __One important thing to keep in mind when writing React components is that when writing the function related to that component the return statement must contain only one single "root" element. If you try to write more than one side by side, it will throw an error. However, this doesn't prevent us from writing several HTML (or custom React) elements inside the "root" element.__
* __TLDR: JSX expressions must contain only one parent element.__

## Styling React Components
* As we've previously done with Vanilla JavaScript, to style React components, we'll use CSS.
* For this purpose, in this course, we'll write our own ```.css``` files.
* __IMPORTANT: It's considered a best practice to put the ```.css``` file (the style of the React component) and the ```.js``` file (the React component itself) side-by-side inside the same folder.__
* You'll also need to import the ```.css``` inside the ```.js``` file. This will tell the React build process that we want to apply the styles defined inside the ```.css``` file to the React component inside the ```.js``` file.
* __After doing so, you will be able to use the CSS classes (or any other CSS selector) defined inside the ```.css``` file without getting any errors. However, you will not use the attribute ```class``` to do so. Instead, you will use an attribute called ```className```.__
* __If you want to learn more about CSS, take a look at the Google WebDev CSS Course.__