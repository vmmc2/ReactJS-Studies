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