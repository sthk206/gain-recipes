import React, {useState, useEffect} from "react";
import "./style.css"
import NavBar from "../../../components/NavBar";

const AddMeal = () =>{
    const [ingredients, setIngredients] = useState([
        { name: '', amount: '' },
      ])
    const [instructions, setInstructions] = useState([
        { step: '' },
      ])
    
      const handleIngredientChange = (event, index) => {
        let data = [...ingredients];
        data[index][event.target.name] = event.target.value;
        setIngredients(data);
      }
      const handleInstructionChange = (event, index) => {
        let data = [...instructions];
        data[index][event.target.name] = event.target.value;
        setInstructions(data);
      }
    
      const submit = (e) => {
        e.preventDefault();
        console.log(ingredients)
        console.log(instructions)
      }
    
      const addIngredient = () => {
        let object = {
          name: '',
          amount: ''
        }
    
        setIngredients([...ingredients, object])
      }
      const addInstruction = () => {
        let object = {
          step: '',
        }
    
        setInstructions([...instructions, object])
      }
    
      const removeIngredient = (index) => {
        let data = [...ingredients];
        data.splice(index, 1)
        setIngredients(data)
      }
      const removeInstruction = (index) => {
        console.log(index)
        let data = [...instructions];
        console.log(data[index])
        data.splice(index, 1)
        console.log(data)
        setInstructions(data)
      }
    
    return(
        <>
            <NavBar style="s2"/>
            <div className="addmeal-container">
                <h2>Add Recipe</h2>
                <div className="addmeal-name">
                    <h4>Recipe Name</h4>
                    <input type="text" id="name"/>
                </div>
                <div className="addmeal-ingredients">
                    <h4>Ingredients</h4>
                    <form onSubmit={submit}>
                        {ingredients.map((form, index) => {
                            return (
                                <div className="ingredient-row" key={index}>
                                <input
                                    className="ingredient-name"
                                    name='name'
                                    placeholder='Name'
                                    onChange={event => handleIngredientChange(event, index)}
                                    value={form.name}
                                />
                                <input
                                    className="ingredient-amt"
                                    name='amount'
                                    placeholder='Amount'
                                    onChange={event => handleIngredientChange(event, index)}
                                    value={form.amount}
                                />
                                <button className="removeitem" onClick={() => removeIngredient(index)}>&#10005;</button>
                                </div>
                            )
                            })}
                    </form>
                    <button className="additem" onClick={addIngredient}>Add an Ingredient</button>
                </div>
                <div className="addmeal-instructions">
                <h4>Instructions</h4>

                    <form onSubmit={submit}>
                            {instructions.map((form, index) => {
                                return (
                                    <div className="instruction-row" key={index}>
                                    <input
                                        name='step'
                                        placeholder='Step'
                                        onChange={event => handleInstructionChange(event, index)}
                                        value={form.step}
                                    />

                                    <button className="removeitem" onClick={() => removeInstruction(index)}>&#10005;</button>
                                    </div>
                                )
                                })}
                        </form>
                        <button className="additem" onClick={addInstruction}>Add a Step</button>
                </div>
                <button onClick={submit}>Save</button>
            </div>

        
        </>
    )
}
export default AddMeal;