import React, { Fragment } from "react"
import { render } from "react-dom";
import Header from "./components/Header"
import ToDoList from "./components/ToDoList"
import App from "./components/App";

import "./sass/style.scss";

render(<App />, document.querySelector("#main"));
