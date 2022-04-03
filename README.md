# **Cambio FUNDAMENTAL en React JS 18**

En index.js, se tenía:

```
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
```
La forma tradicional arrojaba una advertencia severa en consola.

Ahora, en React 18, se tiene:

```
import React from 'react';
import {createRoot} from 'react-dom/client'; // ahora se exige en React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Notar que ya no se invoca a la clase ReactDOM ni al metodo render
 * como tradicionalmente se hacía hasta la version 17.
 */
const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App />
  </React.StrictMode>);

reportWebVitals();
```

Más cambios importantes en [este enlace](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html).
