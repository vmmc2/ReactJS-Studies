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


## Dynamic Content in JSX
* As you might have already guessed, in JSX we won't always work with hardcoded values. In fact, this is the exception.
* Thus, we need a way of outputting dynamic content (maybe data sent by an user) in JSX.
* Remember that a React component is just a JavaScript function. Thus, we can use "normal" JS code when writing our components.
* __To output dynamic content in JSX, all we need to do is put a JS expression inside ```{}``` and the result of such expression will be evaluated. For example, if we put ```{1 + 1}``` we would get the value ```2``` as the output.__
* Take a look at the JS code snippet below that shows how this works:
```js
import "./ExpenseItem.css";

function ExpenseItem(){
    const expenseData = new Date(2021, 2, 28);
    const expenseTitle = "Car Insurance";
    const expensePrice = 294.67;

    return (
        <div className="expense-item">
            <div> {expenseData.toISOString()} </div>
            <div className="expense-item__description">
                <h2> {expenseTitle} </h2>
                <div className="expense-item__price"> ${expensePrice} </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
```


## React Project & 'The Building Process'
* The building process of a React project consists of the few following steps:
    1. __React Code:__ This consists of the React code you wrote and tested in your code editor.
    2. __Build Process:__ The build process will take your React project code and will apply a few things to it:
        * Changes and optimizes your code.
        * Transforms your code in such way that it runs in the browser.
        * Also, (potentially) optimizes other assets like CSS and image files (static files).
    3. __Deployable Files:__ A collection of generated files that include our optimized code and any other extra assets (example: CSS code files, optimized images, etc).

## Importing Images in a React project
* Usually, in a pure HTML code you would load an image from your assets folder by using the ```src``` attribute of the ```<img/>``` tag.
```html
<img src="./assets/images/some-image.png" alt="Here goes the description of the loaded image."/>
```
* However, in a React project, this is not the correct approach. This happens due to the fact that, when deploying your project, the path to the image could change and then you wouldn't be able to load it.
```jsx
import reactImg from "./assets/images/some-image.png";

<img src={reactImg} alt="Here goes the description of the loaded image."/>
```


## Components can be potentially reused in React
* This means that just because you can reuse a React component, it doesn't mean that you need to reuse such component.
* __In short: reusability is an option, not a norm or a rule.__
* To reforce this concept of reusability in React components, React provides a concept called __props__.
* Such concept of __props__ allows us to pass data into components.
* __You can think about it in other manners, such as: You are passing arguments (props) to a function (component), and inside the component you will use such props (arguments) to render something that is specific to a certain instance of the component (function).__


## Passing Data and Props
* Right now, our custom React components are not reusable. I mean, nothing is stopping us from spamming several ```<ExpenseItem></ExpenseItem>``` elements inside the ```App.js``` file.
* But remember, a React component is just a JavaScript function. __We can obtain more flexibility and reusability by passing parameters to the React component (JavaScript function).__
* __On top of that, we'll need to use a React concept called Props.__
* __Props are just the "attributes" of your custom "HTML element" (React components).__ Props simply means properties. They will work as the properties of our React components.
* __By using the props concept, the data will not be stored inside the React component. Instead, the React component will receive such data from the outside. One could also say that props allows us to pass data from one component to another.__
* In order to be able to correctly use props inside our components, we have to make some changes to our current files. Let's see which changes are those:
    * File #1 - ```App.js```:
    ```js
    import ExpenseItem from "./components/ExpenseItem";

    function App() {
    const expenses = [
        {id: "e1", title: "Toilet Paper", price: 2.99, date: new Date(2021, 2, 3)},
        {id: "e2", title: "New TV", price: 299.99, date: new Date(2021, 2, 4)},
        {id: "e3", title: "Car Insurance", price: 956.83, date: new Date(2021, 2, 5)},
        {id: "e4", title: "New Copic Marker Set", price: 99.99, date: new Date(2021, 2, 6)}
    ];

    return (
        <div>
        <h2>Let's get started!</h2>
        <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} price={expenses[3].price} date={expenses[3].date}></ExpenseItem>
        </div>
    );
    }

    export default App;
    ```
    * File #2 - ```ExpenseItem.js```:
    ```js
    function ExpenseItem(props){
        return (
            <div className="expense-item">
                <div> {props.date.toISOString()} </div>
                <div className="expense-item__description">
                    <h2> {props.title} </h2>
                    <div className="expense-item__price"> ${props.price} </div>
                </div>
            </div>
        );
    }
    ```
* __Basically, as we can see above, we can pass different values to a React component by using a key-value approach, in which the keys are "attributes" and the values are the "values" related to the said attributes.__ All of these key-value pairs are put inside a JS object (this is done by React, behind the scenes), which is passed as a parameter to the React component (JavaScript function). By convention, such parameter is named __```props```.__
* Props can handle not only dynamic data but also hardcoded data.


## Alternate Prop Syntaxes
* Here we'll show how to deal with different prox syntaxes that React provides to us.
* Let's take a look at the different options, one by one:

#### Shorter syntax with the Spread (```...```) operator
* Suppose you have a React component called ```CoreConcept```. Such React component has 3 attributes (props): ```title```, ```description``` and ```image```.
* If you want to make an instance of such component, you would need to write the following:
```jsx
<CoreConcept
    title={coreConcepts[0].title}
    description={coreConcepts[0].description}
    image={coreConcepts[0].image}
/>
```
* __The syntax above is the standard syntax in React to deal with the passing of props to a React component.__
* However, there are better ways of doing this.
* __For example, if you are certain that the name of the props that you are using inside the component (function) implementation, you can simply pass the whole object as a prop, with the use of the spread operator and React will automatically bind the key-value pairs you are passing in, to the key-value pairs that you implemented inside the component (function).__
* Therefore, the code below would be written as follows:
```jsx
<CoreConcept {...coreConcepts[0]} />
```

#### Shorter syntax with object destructuring
* We can make the React component syntax even shorter. But now, we'll approach things on the side of the React component implementation.
* Instead of receiving only one parameter in the React component, we can use object destructuring to perform an implicit assignment of the key-value pairs received to the variables used in the destructuring:
```jsx
function CoreConcept({title, description, image}){ // This is an example of object destructuring that makes the React component code shorter.
    return (
        <li>
            <img src={image} alt={title}/>
            <h3> {title} </h3>
            <p> {description} </p>
        </li>
    );
}
```

## Default prop values
* There are certain scenarios where you are going to build components that may receive an optional prop.
* For example, suppose that you are implementing a ```CustomButton``` component that may (or may not) receive a ```type``` prop.
* Therefore, we should be able to call ```CustomButton``` with or without such prop, as the examples below show:
```jsx
<CustomButton type="submit" caption="My Button"/>

<CustomButton caption="My Button"/>
```
* To make such a thing work, you need to set a default parameter inside the implementation (function) that corresponds to such component, as shown below:
```jsx
export default function CustomButton({ caption, type = "submit" }) { 
    // caption has no default value, type has a default value of "submit"
}
```

## Storing React components inside different JSX files
* First of all, create a ```components``` folder inside the ```src``` folder.
* The rule of thumb when creating new React components is the following: __One React component per JSX file.__
* If your project becomes to complex, then it might be a good idea to take a look into other ways of structuring your React components, such as the __atom, molecule, organism__ approach.
* __Another important thing to keep in mind is the fact that React does not automatically apply the styles inside a ```.css``` file. You have to do this manually.
* The way to do such a thing is by importing the ```.css``` file, similarly to what we do with common ```.js``` files:
```jsx
// Inside the "Header.jsx" file, which implements the "Header" React component.

import "./Header.css";
```
* __IMPORTANT: In React, this approach of dealing with ```.css``` files is implemented behind the scenes in such a way that the styles are not scoped (restricted) to the component. In short, you can essentially use such styles anywhere inside your application.__


## Storing style component files next to component files
* Currently, we are using plain CSS to style our React components.
* When doing this, the rule of thumb is to not use a single ```.css``` file to store all styles of all components. Instead, one should use different ```.css``` files to write the styles related to a React component.
* Moreover, such ```.css``` files should be stored inside the ```components``` folder, right next to the ```.jsx``` files (where each of these files represent a React component).
* __Important: It's often a good idea to create folders for each component that you implement. Such component folder would store the ```.jsx``` file that implements the component itself, the ```.css``` file that has the styles related to the component and any other files related to the particular component in question.__


## Separating Logic from JSX
* __It's considered a best practice to separate the "normal" logic JS code from the JSX code inside a React component.__
* __In other words, we shouldn't put complex expressions inside the ```{}``` of a JSX code snippet.__


## Splitting Components into Multiple Components
* There is no hard rule that tells us when we need to breakdown a React component into smaller React components.
* Basically, one could say that when the React component starts getting too big, then it's time for dividing it into smaller components.
* In the example project of this section, the instructor recomends that we split the ```ExpenseItem``` component into two components: A ```ExpenseItem``` components with less code and a brand new ```ExpenseDate``` component.


## Component Composition ("Children Props")
* Composition is an approach of building user interfaces that uses "building blocks" in order to create a complex UI.
* Some HTML built-in elements trivia:
    * First of all, it's a good idea to separate different sections of a webpage by using the ```<section></section>``` tag. 
    * Second, if you want to implement a list of buttons (like a sequence of tab buttons), then it might be a very good idea to use the ```<menu></menu>``` built-in element combined with several ```<li><button></button></li>``` tags.
* A very important concept that one almost always will need to apply is the one of __wrapper components + "children" props.__
* This concept is very useful in the following scenario: Suppose that I have a component that implements a button that works like a tab. Moreover, suppose that I want such a custom component to work like a built-in ```<button></button>``` HTML element (in the way that I could add something between the opening and the closing tag in order to define a label/name to appear inside the button).
* How can I achieve the behavior shown in the code snippet below in React?
```jsx
import TabButton from './TabButton.jsx';

// ...

<TabButton> Component </TabButton>
```
* To achieve such a thing, you need to use the default __"children" props__.
* This is a special props, managed by React itself.
* __Every React component receives this specific prop inside the ```props``` parameter.__
* __To pass a value to the specific ```children``` prop of a component, we don't use the attribute syntax that we were using previously.__
* __Instead, we pass the value directly between the opening and the closing tags of the custom React component that was implemented.__
* __In terms of code/implementation, the React component would be implemented as follows:__
```jsx
export function TabButton(props){
    return(
        <li>
            <button> {props.children} </button>
        </li>
    );
}
```
* __YOU DO NOT NEED TO PASS ONLY TEXT. THIS SPECIAL PROPS IS SO POWERFUL THAT ALLOWS YOU TO PASS COMPLEX JSX STRUCTURES INSIDE IT. THEREFORE, IT ALLOWS YOU WORK WITH COMPONENT COMPOSITION IN AN APPROPRIATE WAY.__
* __In short, these two approaches work just fine. The question is: When we should use one over the other? The answer: It depends on the scenario and on your personal preference.__


## A Closer Look at JSX
* As we've already discussed, JSX is basically just syntatic sugar.
* This means that, behind the scenes, several transformations are performed over this JSX code. This is done in order to make the code viable to be executed inside different versions of different web browsers.
* One thing that is important to be mentioned is that in the React project of this section, we have 2 React packages imported (```react``` and ```react-dom```). However, we are just importing the ```react-dom``` one inside the ```index.js``` file. So you might be wondering "where does the ```react``` package gets imported?" The answer to this question is: In previous versions of React, whenever we used JSX syntax inside a ```.js``` file, we needed to import this ```react``` package. We had to do this because this package is the one responsible for applying transformations to the JSX syntatic sugar so it can be understood by different versions of different browsers. Such transformations will result in code that uses the ```React.createElement``` method a lot.
* __However, current versions of React automatically apply this transformation during the building process of the application. Therefore, we don't need to explicitly import this package inside our project. It's enough to have it installed inside it.__


## Organizing Component Files
* At the end of the day, the organization of React component files can be done in very different ways. It all depends on the members of a team.
* However, we can all agree that it's not a good idea to store dozens, hundreds or thousands of React component files inside a unique ```components``` folder.
* One could argue that we can separate our component files inside subfolders that are related to the specific functionality of the component. For example, we might have general purpose components that are used accross our project in different pages (thus, we could put all of them inside a ```UI``` subfolder). On the other hand, we might have other components whose purpose is related to expenses (therefore, it might be a good idea to put all of them inside a ```Expenses``` subfolder).