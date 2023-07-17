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