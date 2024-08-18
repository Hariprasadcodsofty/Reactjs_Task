import React from "react";

function Home() {
  let Checkuser = () => {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    alert(`Hello, ${firstname} ${lastname}!`);
    alert("The details have been submitted successfully");
  };

  return (
    <>
      <h1>Homepage</h1>
      <form>
        <label>First Name:</label>
        <input type="text" id="firstname" placeholder="First Name"/><br/><br/>
        <label>Last Name:</label>
        <input type="text" id="lastname" placeholder="Last Name"/><br/><br/>
        <label>10th Percentage:</label>
        <input type="number" id="10thpercentage" name="10thpercentage"/><br/><br/>
        <label>12th Percentage:</label>
        <input type="number" id="12thpercentage" name="12thpercentage"/><br/><br/>
        <label>Degree Percentage:</label>
        <input type="number" id="ugpercentage" name="ugpercentage"/><br/><br/>
        <label>Date of Birth:</label>
        <input type="date" id="dob" name="dob"/><br/><br/>
        <button onClick={Checkuser}>Submit</button>
      </form>
    </>
  );
}
export default Home;