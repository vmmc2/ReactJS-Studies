# 001 - State and Events

## Intro
* __IMPORTANT: The code related to this section is present inside Section-003-ReactBasics.__


## Events
* Events are actions that can be performed inside the web page such as a click or a hover at the top of a ```<button></button>``` element, or a ```<div></div>``` element.
* Usually, if we were using vanilla JavaScript, we would have to add some imperative code in order to execute some action when such element is pressed, for example.
* __However, we are working with React here. And, as we remember, React uses a declarative approach. This means that we don't spend too much effort on how we should achieve a certain state. Instead, we define the desired state and, then, let the framework figure out how to get to such state.__
* __IMPORTANT: In this case, when writing JSX code, we can add certain props to default HTML tags. As an example, we can add a prop (attribute) called ```onClick```, whose value is expected to be a function.__
* These special props always start with the preffix "on". They are equivalent to certain HTML attributes and you can learn more about them by reading the MDN docs. It's important to mention that some event handlers are only available to some kind of elements. __Moreover, one thing we need to keep in mind is that such props always expect a function as its value.__
* __Remember that you can define a function inside the Component code (which is also a function). JavaScript allows us to define functions inside functions without trouble. You can also define such functions in an anonymous or non-anonymous way.__
* __Code Convention: Functions responsible for dealing with events should be named using the camelCase convetion and should also end with the word "Handler".__


## How React parses, considers and brings JSX code to the screen
* Remember, a React component is just a JavaScript function.
* However, a React component is a function with a specific characteristic. __It returns JSX code.__
* __IMPORTANT: But now, we need to question ourselves... Who is calling the React component (which, in the end, is just a JavaScript function)? Basically, we just use them as HTML elements inside the JSX code. However, it turns out that, by doing so, we are almost making a function call (behind the scenes).__
* In fact, when a web page is visited, React is responsible for rendering the content that will be displayed on the screen. To do that, React will create a DOM made of custom components and default HTML elements. The start of creating such DOM is very similar to the one of traversing a tree by its depth. The starting point is the ```index.js``` file because that is the place that starts the rendering process. In our particular case, the rendering process starts with the custom component ```<App />```. When React arrives at this component, it automatically calls the React Component (JS function). It will then execute such function and when it reaches the ```return``` statement followed by JSX code it will traverse such code in a depth-first style until it finds another custom React component. Think of it like it's a execution of the depth-first search algorithm. __However, one must keep in mind that this process of rendering only happens once: when the webpage is visited and the DOM is rendered. It doesn't happen automatically after that.__
* __If we want to "force" an update on the DOM rendered by React, then we need to make React aware that something changed inside a React component.__


## State
* The concept of state is not a concept restricted to React but a concept that is used very frequently by React.
* Right now, if we change the value of a variable or have an eventHandler triggered, React will completely ignore such things. Therefore, the components will not be re-evaluated (remade) and the content inside the screen will stay the same.
* Therefore, we need a way of "notifying" React that the value of some custom component or HTML default element changed and, thus, the DOM should be re-rendered so it can be properly shown inside the screen.
* To do such thing, we use the concept of state and also use a special function provided by the React package called ```useState```.
* The ```useState``` function is a so called React Hook. We'll learn more about them throughout the course, but right now, what we need to keep in mind is that there are several kinds of hooks provided by React. __Moreover, all hooks start with the preffix ```use```.__
* __A React hook must be always directly called inside a React component function. (There's one exception which we'll talk about later on the course).__


## The ```useState``` hook
* As we've already seen, this is a hook that is actually a function.
* Such function receives a variable (value) as an argument (in our case, the variable is ```props.title```) and it returns an array with two values:
    * A stateful version of the value that was passed as an argument. In our case, as stateful version of the value stored inside ```props.title```.
    * A function that will be responsible for automatically updating such value for us.
* __Therefore, we won't update the value of a variable through assignments. Instead, we'll use functions. More specifically, we'll use the second item (which is a function) returned by the ```useState``` function. We need to do this, because by using such function we'll automatically schedule this component function to be re-evaluated (tho, such re-evaluation happens almost immediately). Hence, the changes that were made will be reflected inside the UI.__
* The code snippet shown below demonstrates how one can use this ```useState``` hook:
```js
function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Newly updated title.");
        console.log("Button was clicked!");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2> {title} </h2>
                <div className="expense-item__price"> ${props.price} </div>
            </div>
            <button onClick={clickHandler}> Click Me! </button>
        </Card>
    );
}
```
* __IMPORTANT: If you have data that might change over time, and whose changes should be reflected in the UI, then you need to use this concept of state.__


## A closer look at the ```useState``` hook
* __The ```useState``` function registers some value (it doesn't need to be a variable tho, could be a literal) as a state for a component instance in which it's being called.__
* __Basically, we'll have separate states even if we create a specific component more than once. Each of these states is managed independently in a separate way by React.__
* When we use this function, we ask React to manage such variable/value for us. React will then do so in a separate manner that is different from vanilla JavaScript.
* You might be asking yourself how the use of the ```const``` keyword with the variable ```title``` doesn't result in any errors since we are changing its value by calling the ```setTitle``` function. The answer is that such change in the value of this variable is not made through an assignment. Instead, this variable will be managed in a separate way by React, as already mentioned, and, thus, we won't need to worry ourselves about such thing.
* Another important thing that you might be asking yourself is the following: __If we call the React component function everytime that we want to re-render it, then why it doesn't keep re-rendering its initial state again and again? The answer is that React keeps track of the first time such function is called. When it happens, it renders the component with its initial value as we would expect. However, the later calls won't re-render the initial state again because the ```useState``` function kind of returns the latest state. Therefore, it can deal with state management.__


## State in a nutshell
* __In React, the idea of state is pretty simple tho: You register state by using the ```useState``` function. Such function will return an array with two elements (the value itself and the updating function). You call the updating function whenever the state should change and you use the first element wherever you want to use its value (in JSX code, for example). React will then do the rest.__
* __Whenever the state changes, React will re-execute the component function and re-evaluate the JSX code returned by it, so its content can be rendered in the screen.__
* __State and Events is what add reactivity to our React applications.__


## State can be updated in many ways
* Up to now, we've only seen a single way of updating state. That is: through user actions (a button click, for example).
* However, there are other ways of updating state in React. For example, we can update a state upon a HTTP request (i.e., the state changes based on the HTTP response that was received). Another example is, we can update a state because a timer (set with ```setTimeout``` function) expired.


## Reacting to user input
* Right now, we have an ```ExpenseForm``` component. Such component is responsible for gathering the information that was being given by the user by using a ```<form></form>``` HTML element.
* We have also seen that such form has 3 different inputs. One related to the title, another one related to the price and, finally, a last one related to the date.
* __For the input related to the title, we want to make the web application react to every change (keystroke) that happens when the user is typing something inside such field. To do that, we can use the ```onChange``` attribute of the ```<input></input>``` HTML element. The value of this attribute would be a JS function that receives as its unique argument an event related to such attribute. By inspecting such event, we can find important information about this element, including its current value.__


## Side Note (VERY IMPORTANT)
* __Whenever we need to store a value that must "survive" different React component calls (function calls), we can use the concept of State.__
* __By doing this, we'll be storing a value inside a variable that is dettached from the life-cycle of the component function. In other words, even if the component function is called multiple times in the future, this value related to the variable won't be lost.__


## Multiple States
* In React, it's possible (and quite common) to have and manage multiple states per component.
* __To do so, all you need to do is use the ```useState``` function provided by React to store different states into different variables that are dettached from the life-cycle of the component function.__
* One must keep in mind that such multiple states will be handling different things inside the same component in an independent way.
* __Such possibility also raises the following question: "When should we use a single state approach vs. a multiple state approach?__


## Multiple-State vs. Single-State
* Basically, it depends on the preference of the developer. 
* __Both ways of managing the state of a React component are considered to be fine.__
* However, according to the instructor, __Multiple-State approach is usually more common in React projects.__
* __This tends to happen, because when you are dealing with a Single-State approach, you must make sure that only certain parts of data are being updated while the others remain the same (To do that, we usually use a JS object to represent the state, and use the ```...``` spread operator along with overwriting to make sure that the data is saved in a consistent way).__
* The code snippet below shows how this can be done:
```js
import React, { useState } from "react";

function someComponent(){
    //...
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });

    function titleChangeHandler(event){
        setUserInput({
            ...userInput,
            title: event.target.value // Overwriting the value associated with the "enteredTitle" key.
        });
    }
}
```


## Updating state that depends on the previous state
* In React, whenever we need to update state that depends on the previous state, we should use a different approach from the one that we showed above.
* __Instead of passing a value to the function responsible for updating the state, we will pass an anonymous function to it. Such anonymous function will receive only one parameter, which is the previous state (this is automatically handled by React), and it will return the new state.__
* The code snippet below shows how this can be done:
```js
import React, { useState } from "react";

function someComponent(){
    //...
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });

    function titleChangeHandler(event){
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value // Overwriting the value associated with the "enteredTitle" key.
            };
        });
    }
}
```


## Creating a shared handler function
* Up to now, in our project we've created separate handler functions, each one of them for a specific user input (enteredTitle, enteredAmount, enteredData).
* __However, we can also alternatively create a single shared handler function that will be responsible for dealing with the three different types of user input at once. The code snippet below shows how this can be done:__
```js
// Code shown below is stored inside a React Component function (JS function)
function inputChangeHandler(identifier, value){
    if(identifier === "title"){
        setEnteredTitle(value);
    }else if(identifier === "amount"){
        setEnteredAmount(value);
    }else if(identifier === "date"){
        setEnteredDate(value);
    }
}

// inside the JSX code...
<input type="text" onChange={(event) => inputChangeHandler("title", event.target.value) }/>
<input type="number" onChange={(event) => inputChangeHandler("amount", event.target.value) } min="0.01" step="0.01"/>
<input type="date" onChange={(event) => inputChangeHandler("date", event.target.value) } min="2019-01-01" max="2022-12-31"/>
```


