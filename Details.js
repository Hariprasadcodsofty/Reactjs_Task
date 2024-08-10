import React from "react";
export function Details()
{
    let from = () => {
        let name=document.getElementById('name').value;
        let age=document.getElementById('age').value;
        let num=document.getElementById('num').value;
        let email=document.getElementById('email').value;
        let dob=document.getElementById('dob').value;
        alert("Hi "+name+"your details have been registered");
    }
    return(
        <>
        <h1>Registration Form</h1><br></br>
        <label>Enter your Name:</label><br></br>
        <input type="text" id="name" name="name"></input><br></br>
        <label>Enter your Age:</label><br></br>
        <input type="age" id="age" name="age"></input><br></br>
        <label>Enter your phone number:</label><br></br>
        <input type="tel" id="num" name="num"></input><br></br>
        <label>Enter your email address:</label><br></br>
        <input type="email" id="email" name="email"></input><br></br>
        <label>Enter your date of birth:</label><br></br>
        <input type="date" id="dob" name="dob"></input>
        <input type="button" value="click" onClick={from}></input>
        </>
    )
}
