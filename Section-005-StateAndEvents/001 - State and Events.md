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