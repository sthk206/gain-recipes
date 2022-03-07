import React, {useState, useEffect} from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            <NavBar style="s1"/>
            <div className="register-1">
                <div className="register-container">
                    <div className="register-form">
                        <h2>Register</h2>
                        <form>
                            <input onChange={console.log(1)}  type="text" className="register-input" placeholder="Email Address"/>
                            <input onChange={console.log(1)}  type="text" className="register-input" placeholder="Confirm Email Address"/>
                            <input onChange={console.log(1)}  type="text" className="register-input" placeholder="Password"/>


                            <input value="Sign Up" type="submit" id="searchBtn"/>
                        </form>
                    </div>
                    <div className="register-alt">
                        <h6>Already have an account? <a onClick={()=>navigate("/login")}>Log In</a></h6>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default Register;