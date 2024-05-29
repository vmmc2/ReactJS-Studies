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