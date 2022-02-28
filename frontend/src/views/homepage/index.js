import React, {useState, useEffect} from "react"
import "./style.css";
import NavBar from "../../components/NavBar"
import axios from 'axios';
import { useNavigate } from "react-router-dom";





// console.log(res)
const Homepage = () =>{
    const [categories, setCategories] = useState([])
    let navigate = useNavigate();

    function filterByCategory(category){
        navigate(`category?c=${category}`)
    }


    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then((res)=>{
            setCategories(res.data.categories)
            console.log(categories)
        })
    }, []);
    return(
        <div>
            <NavBar style="s1"/>
            <div className="home-1">
                <h1>Lorem Ipsum aute sunt ipsum ea quis do eu sit aliquip a quis do eu sit aa quis do eu sit aa quis do eu sit aa quis do eu sit a .</h1>
            </div>

            <div className="home-2">
                <h2>Choose a Category</h2>
                <div className="categories-grid">
                    {categories.map((cat)=>(
                        <div onClick={()=>navigate(`/category/${cat.strCategory}`)} key={cat.idCategory}>
                            <img width="150" src={cat.strCategoryThumb}/>
                            <h5>{cat.strCategory}</h5>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Homepage;