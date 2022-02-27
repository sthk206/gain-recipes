import React from "react";
import { Route, Routes,  useHistory } from "react-router-dom";
import './App.css';
import HomePage from "./views/homepage"
import Category from "./views/category"
import Search from "./views/search"
import Meal from "./views/meal"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route
            path = "/"
            element = {<HomePage/>}
          />
          <Route
            path = "/category"
            element = {<Category/>}
          />
          <Route
            path = "/search"
            element = {<Search/>}
          />
          <Route
            path = "/meal"
            element = {<Meal/>}
          />
        </Routes>
      
    </div>
  );
}

export default App;
