import React, {useState, useEffect} from "react";
import "./style.css"
import NavBar from "../../components/NavBar"
import axios from "axios";
import { useNavigate  } from "react-router-dom";


const Search = () => {
    let navigate = useNavigate();
    const [results, setResults] = useState([]);
    const [option, setOption] = useState(0);
    const [input, setInput] = useState("");
    
    function search(e){
        e.preventDefault();
        if(option===0){
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`).then((res)=>{
                setResults(res.data.meals)
            })
        }
        else if(option===1){
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`).then((res)=>{
                setResults(res.data.meals)
            })
        }

    }

    return(
        <>
            <NavBar style="s2"/>
            <form className="search-container" onSubmit={search}>

                    <div className="searchby">

                        <p>Search by: </p>
                        <input onClick={()=>{setOption(0)}} name="search" type="radio" id="mealname" defaultChecked/>
                        <label>Meal Name</label>
                        <input onClick={()=>{setOption(1)}} name="search" type="radio" id="ingredient"/>
                        <label>Ingredient</label>
                    </div>
                    <div className="searchbar-container">
                        <input onChange={(e)=>{setInput(e.target.value)}} id="searchbar" type="text"/>
                    </div>

                    <input value="Search" type="submit" id="searchBtn"/>
                
                <div className="search-grid">
                {
                    results && results.map(result=>
                        <div key={result.idMeal} onClick={()=>{navigate(`/meal/${result.idMeal}`)}} className="search-placard">
                            <img  src={result.strMealThumb}/>
                            <div className="caption">
                                    <h4>{result.strMeal}</h4>
                            </div>
                        </div>
                    )
                    
                }
                    
                </div>

            </form>
        </>
    )
}

export default Search;