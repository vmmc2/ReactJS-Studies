import ReactDOM from 'react-dom/client';

import './index.css'; // This is responsible for inserting the styles from this CSS file into our application.
import App from './App';

/*
The method "createRoot" basically creates the main entry point (the main hook) of the overall User Interface you are building with React.
It tells React where this User Interface should be placed in the web page that is loaded. In our case, the User Interface (UI) will be loaded
inside the ```<div></div>``` of the "index.html" file inside the "public" folder tag whose id attribute is equal to "root".

Moreover, the "index.html" file is the single HTML file that will be used by us.

We'll inject our UI inside the <div id="root"></div> by using the "render" method. Here, we'll inject the <App /> thing inside such <div></div>.
This <App /> is a React component.
*/
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);
