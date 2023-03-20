import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Login() {
  const history = useNavigate();//to travel on Homepage after succesful Login 


  const [inputvalue, setinputvalue] = useState({
    email: "",
    password: "",
  });
//On Above i have Created usState and store initial object inside it

  console.log(inputvalue);
 //basically we have two input feild here for getting Onchange Data i have created getData function 
  const getdata = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    //To prevent default Behaviour of the Input

    const { value, name } = e.target;
    // console.log(value,name);

    setinputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };

  //onclick of Login button it will check enterd Email or passWord is correct or Not and also to check multiple cnditions i have created this AddData Function.
  const addData = (e) => {
    e.preventDefault();
//i have use Localstorage to get and matc data which we are used at the time of create Account.
    const getuserArr = localStorage.getItem("user");
    console.log(getuserArr);
//here i have destructuring email and password from inputvalue
//and check the conditions
    const { email, password } = inputvalue;

    if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);//convert Json Data in to parse and adding filter property on them.
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password; //enterd email and password and stored email and password match or not
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/Home"); //if email and password match then travel on Home page
        }
      }
    }
  };

  return (
    <div className="MainLogin">
      <div className="LeftLogin">               
        <h1>Welcome Back To Pretty login</h1>
        <h4>Its Great to have You back!</h4>
        <form type="submit">
          <Box
            sx={{
              width: 350,
              maxWidth: "100%",
            }}
          >
            {" "}
            <TextField
              fullWidth
              label="Email"
              type={"email"}
              placeholder={"enter email id"}
              name="email"
              onChange={getdata}
            ></TextField>
          </Box>
          <Box
            sx={{
              width: 350,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Password"
              type={"password"}
              placeholder={"enter password"}
              name="password"
              onChange={getdata}
            ></TextField>
          </Box>

          <Button type="submit" onClick={addData} variant="outlined">
            {" "}
            Login
          </Button>
        </form>
        <Button variant="outlined">
          <Link to={"/"}>Create Account</Link>
        </Button>
      </div>
      <div className="RightLogin">
        <img
          className="RightLoginimg"
          src={
            "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Login;
