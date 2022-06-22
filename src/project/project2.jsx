import { useState } from "react";
import "./add.css";
const Project=() => {
    const [inp,SetInp]= useState({});
    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        SetInp(values => ({...values,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       const box = document.getElementById("container");
       const data = document.createElement("div");
       data.setAttribute("class","date");
       data.append("Name: ",inp.uname);
       data.append(" / ");
       data.append("Department: ",inp.udept);
       data.append(" / ");
       data.append("Rating: ",inp.urat);
       box.appendChild(data);
    }
  return (
    <html className="class1">
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <br />
      <br />

      <form className="class2" onSubmit={handleSubmit}>
        Name-
        <input className="class3"type="text" name="uname" value={inp.uname} onChange={handleChange}/><br />
        <br />
        Department-
        <input className="class3" type="text" name="udept" value={inp.udept} onChange={handleChange}/> <br />
        <br />
        Rating-
        <input className="class3"type="number" name="urat" value={inp.urat} onChange={handleChange}/> <br />
        <br />
        <input className="class4" type="submit" />
      </form>
      <div id="container"></div>
    </html>
  );
};

export default Project;
