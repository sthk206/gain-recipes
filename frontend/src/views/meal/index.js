import React, {useState, useEffect} from "react"
import "./style.css"
import NavBar from "../../components/NavBar"
import axios from 'axios'
import { Routes, Route, useParams } from "react-router-dom";

const Meal = () => {
    const [meal, setMeal] = useState([])
    let params = useParams();

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`).then((res)=>{
            console.log(res.data.meals);
            setMeal(res.data.meals);
        })

    }, [])

    return(
        <>
            <NavBar style="s2"/>

            {meal.map((meal)=>{
                return(
                    <div className="meal-container">

                        <div className="mealbanner">
                            <div className="meal-cover"></div>
                            <h1 className="meal-title">{meal.strMeal}</h1>
                            <img src={meal.strMealThumb}/>
                        </div>
                        <div className="meal-content">
                            <h1>Ingredients</h1>
                            <table id="ingredient-table">
                                <thead>
                                    
                                    <tr>
                                        <th>Ingredient</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(20).keys()].map((i)=>{
                                        let ingredient = "strIngredient".concat(i+1);
                                        let measure = "strMeasure".concat(i+1);
                                        return(
                                            meal[ingredient] && meal[measure] &&
                                            <tr>
                                                <td>{meal[ingredient]}</td>
                                                <td>{meal[measure]}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>

                            </table>
                            <h1>Instructions</h1>
                            <ol>
                                {meal.strInstructions.split("\r\n").map((ins)=>(
                                    ins && <li>{ins}</li>
                                    ))}
                            </ol>
                            <iframe width="650" height="350"
                                src={meal.strYoutube.replace("watch?v=", "embed/")}>
                            </iframe>

                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Meal;