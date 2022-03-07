import React, {useState, useEffect} from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const navigate = useNavigate();
    return(
        <div>
            <NavBar style="s1"/>
            <div className="login-1">
                <div className="login-container">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form>
                            <input onChange={console.log(1)}  type="text" className="login-input" placeholder="Email Address"/>
                            <input onChange={console.log(1)}  type="text" className="login-input" placeholder="Password"/>


                            <input value="Log In" type="submit" id="searchBtn"/>
                        </form>
                    </div>
                    <div className="login-alt">
                        <h6>Don't have an account? <a onClick={()=>navigate("/register")}>Sign Up</a></h6>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default Login;