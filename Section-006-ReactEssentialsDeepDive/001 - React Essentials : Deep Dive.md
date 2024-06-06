# 001 - React Essentials: Deep Dive

## Recalling how React works and its build process
* When coding a React project, you will almost always use JSX to write the components that made your application. This code is called the __React Code.__
* However, as we've already learned, the JSX code that we write is not the code that is running on the browser. Instead, there's a process called __building__ which will transform and optimize the code that we have written in JSX into code that can actually run on the browser.
* Also, remember that a building process may potentially optimizes other assets of your project like CSS and Image files.
* After the build process is completed, you get what is called __deployable files.__ This is a collection of generated files that include:
  * Your optimized code
  * Any other extra assets (CSS code files, optimized images, etc)

## JSX is optional
* __It's also worth mention that you don't need to write JSX code to construct a React project.__
* __However, doing so is very convenient. Thus, things will stays this way.__
* __You could use just vanilla JS code to do such a thing. To do such a thing, you can use the ```React.createElement``` function. However, this approach is much more verbose and also non-intuitive when compared to the JSX approach.__

## Working with fragments
* As we've already seen, when working with JSX code, we often find ourselves implementing the code for a component. In such situations, we return the JSX code that corresponds to a component but we must do so by wrapping the JSX code inside one parent element (which often is just a ```<div></div>``` element).
* __The explanation behind such approach to return JSX code is very simple: In JavaScript, we cannot return more than one value from a function. We can just return one value.__
* Even though the ```<div></div>``` solution works fine, it has a drawback: It inserts a ```<div></div>``` element into the DOM, which might not be what we want.
* We have two ways of working around this nuisance:
  * We can use the ```Fragment``` component, made available to us by the React library. The code snippet below shows how to do such a thing:
  ```jsx
  import { Fragment } from "react"; 

  function App(){
    return(
      <Fragment>
        <AComponent />
        <OtherComponent />
        <YetAnotherComponent />
      </Fragment>
    );
  }
  ```
  * In modern projects, we don't need to import the ```Fragment``` component. There is a specific syntax that allows us to achieve the same result writing less code. Such approach is shown below:
  ```jsx
  function App(){
    return(
      <>
        <AComponent />
        <OtherComponent />
        <YetAnotherComponent />
      </>
    );
  }
  ```

## When you should split components?
* In a React project, you dont't want to have a component that has multiple responsabilities. By responsabilities, I mean:
  * Rendering a lot of different subcomponents inside it that are not related.
  * Managing the state of different subcomponents that are also inside it.
* When you notice situations like this in your project, then you have a great signal that it's time to refactor your project and split these big and complex components into smaller ones.

## Splitting components by feature and state
* First of all, it's considered a good idea and pattern to split a big component that has a lot of features, into smaller ones that represent a single feature. You can think of a features as being a "section" rendered in the screen.
* It's also important to mentio that when performing such refactor, it's also essential to see what are the dependencies for each of these components (by dependencies, I mean external functions, data, packages, etc).
* It's also a good idea to perform such refactor/splitting to avoid scenarions where componenets that should not be re-rendered are re-rendered. Such thing happens when there is a state update.

## Props are not forwarded to inner elements
* As the title already suggests to us, in React there is no magic that automatically takes a the value of a certain prop passed to a component and applies it to the inner components.
* It's better to explain such a thing with an example. Take a look at the code snippet shown below:
  * File #1: ```App.jsx```
  ```jsx
  //...
  return (
    <Section title="someTitle" id="examples">
      //...
    </Section>
    //...
  );
  //...
  ```
  * File #2: ```Section.jsx```
  ```jsx
  export default function Section({ title, id, children }){
    return(
      <section id={id}> // This approach solve the problem, but as the project grows, it leads to a very verbose code.
        <h2> {title} </h2>
        {children}
      </section>
    );
  }
  ```
* The ```id``` prop that we have set to the ```Section``` component is not forwarded to the its inner components.

## Forwarding props to wrapped components/elements
* Given the problem presented in the previous subsection of this doc, here is the solution to solve it: We are going to use the rest and spread operator to solve it for us. Below, you'll find code snippets that explain how this can be achieved:
  * File #1: ```App.jsx```
  ```jsx
  //...
  return (
    <Section title="someTitle" id="examples" className="examples">
      //...
    </Section>
    //...
  );
  //...
  ```
  * File #2: ```Section.jsx```
  ```jsx
  export default function Section({ title, children, ...props }){ // Here we are using the rest operator to group into an object (called 'props') all props that are not named 'title' or 'children'.
    return(
      <section {...props}> // Here, we are using the spread operator to forward all props that we received from outside to this section element (in our case, such props are 'id' and 'className').
        <h2> {title} </h2>
        {children}
      </section>
    );
  }
  ```

## Working with multiple JSX slots
* This scenario happens a lot when we are dealing with tab buttons because such components usually appears a lot inside an application.
* If you think about it for a second, you'll realize that such tab buttons can be grouped into a tab component that has theses buttons and also a section below them where the content related to each button is presented in the screen.
* There is a pattern that allows us to perform such a thing, even though it's not a common one. Take a look at the examples below:
  * File #1: ```Examples.jsx```
  ```jsx
  export default function Examples(){
    // ...
    return (
      <Tabs buttons={
        <>
          <TabButton isSelected={selectedTopic === "components"} onClick={() => {handleSelect("components")}}> Components </TabButton>
          <TabButton isSelected={selectedTopic === "JSX"} onClick={() => {handleSelect("JSX")}}> JSX </TabButton>
          <TabButton isSelected={selectedTopic === "State"} onClick={() => {handleSelect("State")}}> State </TabButton>
          //...
        </>
      }>
      // Children props...
      </Tabs>
    );
  }
  ```
  * File #2: ```Tabs.jsx```
  ```jsx
  export default function Tabs({ children, buttons }){ // Both of these parameters (props) will receive JSX code as their values (In the end, JSX is just a value).
    return (
      <>
        <menu>{buttons}</menu>
        {children}
      </>
    );
  }
  ```

## Setting Component Types Dynamically
* Imagine the following scenario: You have a custom component that you have implemented in React. Such component is returning a few elements. However, you want to choose the wrapper element that will store such few elements.
* How can you dynamically pass such wrapper element when instantiating this React component?
  * The answer to this is: __Simply use a prop to pass which kind of element you want to be used as the wrapper.__ However, one must learn how to pass the element as a prop. __The rule to do such a thing is the following: If the element you want to use is a default, built-in HTML element, you just pass its name as a string to the value of the prop. If the element you want to use is a custom React component, then you pass its name between {}.__
  * Take a look at the example below:
  ```jsx
  export default function Tabs({ children, buttons, buttonsContainer}){
    const ButtonsContainer = buttonsContainer;

    return (
      <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
      </>
    );
  }
  ```
  * Now, this raises another question: How do we pass such prop to the React component when instantiating it?
  ```jsx
  //...
  <Tabs buttonContainer="div" className="some-class" id="some-id"> // If the wrapper is a built-in HTML element, we pass its name as a string. If it's a custom React component, we pass it as a value, like: {CustomReactComponent}.
    // Children props of "Tabs" custom component
  </Tabs>
  //...
  ```

## Not every content must go inside a React Component
* It's a very important (and yet very simple thing): You don't need to put static HTML content inside a component. If necessary, you can straight up write plain HTML code directly inside the ```index.html``` file from your project (the file that has the ```<div></div>``` with the ```id="root"```). 

## When to create a React Component?
* In a React project implementatio, whenever you find yourself writing repeated HTML content, then that's a good sign to create a separate React component to store that HTML content to avoid repetition. __Remember: DRY.__

## Components instances work in isolation
* You can think of a component as a class and a component instance as an object/instance of a class. We think about it in this manner, because each component instance has its own individual state. That's why we say that component instances work in isolation.

## Best Practice: Updating the state of a component based on its previous state:
* When performing the update of a state inside a component, such that the new state is based on the previous state, we would normally do the following as shown in the code snippet below:
```jsx
import { useState } from "react";

export default function Player({name, symbol}){
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(){
    setIsEditing(!isEditing); // Here is where the state update based on the previous state happens.
  }
  
  return (
    <li>
      <span className="player">
        {isEditing ? <input type="text" required value={name} /> : <span className="player-name"> {name} </span>}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}
```
* __However, this is not the best practice recommended by React devs.__
  * __If your new state value depends on your previous state, you should not update it directly like shown below:__
  ```jsx
  setIsEditing(!isEditing);
  ```
  * __Instead of passing the value attached to the previous state, it's better to pass a function (to your state updating function) that returns the updated state based on the previous state. The function will automatically be called by React and will receive the guaranteed latest state value:__
  ```jsx
  setIsEditing(wasEditing => !wasEditing);
  ```
* __Why is it considered a best practice to pass a function to the state updating function of a React component?__
  1. State updates are __not performed instantly__ but at some point in the future (when React has time for it). It usually takes 1 or 2 miliseconds to React perform the state update. In other words, React schedule the state update.
  2. In most cases, those state updates of course still are executed __almost instantly.__
  3. Also, pay attention to the fact that, when you don't use the best practice approach, the used value to represent the previous state is not updated automatically if you use the update state function. Remember that React schedules such updates. Thus, the result might not be what we expect.
  4. The approch with a function always receives the latest component state as its parameter, so we don't face this problem of receiving unexpected results.

## User Input and Two-Way Binding
* __In React, nothing stops you from having more than one state to manage inside the same React component. You are free to manage as many states as you want.__
* __React also does some magic for us in certain scenarios. For example, suppose that we want to perform updates on a state variable based on the value that the user enters in an ```<input />``` element. In order to that work in a proper way, we need to first set the ```onChange``` attribute of this element to point to a function inside the React component. Now is where React executes is magic trick. It will automatically take the event that triggered the ```onChange``` attribute and pass it as an argument to the function that such attribute points to.__
* Therefore, the code snippet below works just fine, as explained above:
```jsx
import { useState } from "react";

export default function Player({initialName, symbol}){
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(){
    setIsEditing((isEditing) => !isEditing); // Always working with the latest updated state of this component.
  }

  function handleTextChange(event){
    setPlayerName(event.target.value); // This state update does not depend on a previous state. Thus, there's no need to pass a function to this state-update function.
  }
  
  return (
    <li>
      <span className="player">
        {isEditing ? <input type="text" required value={playerName} onChange={handleTextChange} /> : <span className="player-name"> {playerName} </span>}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}
```
* Finally, we also have a pattern that we can apply to certain components called __two-way binding.__ Through this pattern we the component absorbs input data from the user and outputs such data to the user in the same component. We just have to use 2 functions (one to deal with input and another to deal with output).

## Rendering Multi-Dimensional Lists
* When working with our Tic-Tac-Toe project, we need to iterate through multi-dimensional lists (arrays) in order to display/render the game board in the screen.
* By using JSX code, we have an easy way of doing such a thing, as shown below:
```jsx
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard(){
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button> {playerSymbol} </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
```

## Best Practice: Updating Object State Immutably
* __As we've seen that there are best practices when it comes to update the state of a component based on the previous state (use a function).__
* __There are also best practices when updating the state of a component when the thing we are updating is an array or an object:__
* __Such best practice is to update an array state or an object state immutably:__
  * Objects and array are __reference values__ in JavaScript.
  * __Thus, you should not mutate an array or an object directly. Instead, the best practice is to create a deep copy of the array or object first.__
  * To do such a thing (create a deep copy), use the spread operator.
  * If we didn't create the deep copy first, we would be updating the old value in-memory immediately even before the update scheduled by React was executed. This approach can lead to strange bugs and side-effects if we have multiple locations in our application that are changing/updating the same state.

  ## Lifting The State Up
  * In our Tic-Tac-Toe project, we need to make sure that the players take turns when playing the game. For example, Player #1 makes the first move (which will be represented by 'X'), then Player #2 makes its move (which will be represented by 'O'), and so on. Not only that, but we also want to highlight which player is currently making the move.
  * In the way that we structured our project, this means that there are two different components (```Player``` and ```GameBoard```) that should have knowledge about certain information.
  * To implement such a thing, we can use a strategy called __Lifting State Up.__
  * __How does the "Lifting State Up" strategy work?__
    * __This strategy works by lifting the state up to the closest ancestor component that has access to all components that need to work with that state.__
    * __In the case of our Tic-Tac-Toe project, we need to lift the state up to the ```App``` component since it's the one that has access to both the ```Player``` component and the ```GameBoard``` component.__
    * __The information that these child components need can be passed to them via props from the closest ancestor component.__
  * Other things that are features of the __```lifting the state up```__ strategy:
    * The ancestor component passes the state value via props to the child component.
    * The ancestor component passes a function that eventually changes the state via props to the child component. This allows the child component to initiate the state change.
  * __In short, we have the following behavior:__
    * __The Ancestor Component manages the state (which is needed by Child Component #1 and Child Component #2).__
    * __Child Component #1 and Child Component #2 need the state (which is managed by the Ancestor Component).__

  ## Avoid Intersecting States
  * In React, adding a new state to store kind of the same information (just with a little bit of extra data) is typically something that you, as a developer, want to avoid.
  * This guideline is not always easy to follow. Moreover, it requires practice and also that you, as a developer, think about how your project is growing and how you want to scale it.
  * Sometimes, to follow this guideline, you need to use the __lifting the state up__ strategy that was previously seen.