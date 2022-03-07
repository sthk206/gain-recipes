import React from "react";
import { Route, Routes,  useHistory } from "react-router-dom";
import './App.css';
import HomePage from "./views/homepage";
import Category from "./views/category";
import Search from "./views/search";
import Meal from "./views/meal";
import Login from "./views/login";
import Register from "./views/register";
import AddMeal from "./views/user/addMeal";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route
            path = "/"
            element = {<HomePage/>}
          />
          <Route
            path = "/category/:categoryId"
            element = {<Category/>}
          />
          <Route
            path = "/search"
            element = {<Search/>}
          />
          <Route
            path = "/meal/:mealId"
            element = {<Meal/>}
          />
          <Route
            path = "/login"
            element = {<Login/>}
          />
          <Route
            path = "/register"
            element = {<Register/>}
          />
          <Route
            path = "/addmeal"
            element = {<AddMeal/>}
          />
        </Routes>
      
    </div>
  );
}

export default App;
