import React, {useState, useEffect} from "react"
import "./style.css"
import NavBar from "../../components/NavBar"
import axios from 'axios'

const Meal = () => {
    const [meal, setMeal] = useState([])

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`).then((res)=>{
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
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Amount</th>
                                </tr>

                                {[...Array(20).keys()].map((i)=>{
                                    return(
                                        meal[i+9] != "" &&
                                        <tr>
                                            <td>{meal[i+9]}</td>
                                            <td>{meal[i+9]}</td>
                                            {console.log(meal[1])}
                                        </tr>
                                    )
                                })}

                            </table>
                            <h1>Instructions</h1>
                            <ol>
                                {meal.strInstructions.split("\r\n").map((ins)=>(
                                    <li>{ins}</li>
                                    ))}
                            </ol>

                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Meal;