import React, {useState, useEffect} from "react";
import "./style.css"
import NavBar from "../../components/NavBar"
import axios from "axios";

const Search = () => {
    return(
        <>
            <NavBar style="s2"/>
            <div className="search-container">
                <div className="searchby">
                    <p>Search by: </p>
                    <input name="search" type="radio" id="mealname" defaultChecked/>
                    <label>Meal Name</label>
                    <input name="search" type="radio" id="ingredient"/>
                    <label>Ingredient</label>
                </div>
                <div className="searchbar-container">
                    <input id="searchbar" type="text"/>
                </div>
                <button>
                    Search
                </button>

            </div>
        </>
    )
}

export default Search;