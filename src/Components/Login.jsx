import React, { useState } from 'react'
import{Link,useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';

function Login() {
   
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    // const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);
        e.preventDefault();

        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("user");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
          alert('email field is requred');
        } else if (!email.includes("@")) {
          alert('plz enter valid email addres');
        } else if (password === "") {
          alert('password field is requred');
        } else if (password.length < 5) {
          alert('password length greater five');
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/Home")
                }
            }
        }

    }

    
      
  return (
    <div className='MainLogin'>
        <div className='LeftLogin'>
            <h1>Welcome Back To Pretty login</h1>
            <h4>Its Great to have You back!</h4>
            <form type="submit">
                <label>Email</label>
                <input type={'email'} placeholder={'enter email id'} name="email" onChange={getdata}></input>
                <label>Password</label>
                <input type={'password'} placeholder={'enter password'} name="password" onChange={getdata}></input>
                <Button type='submit' onClick={addData} variant="outlined" > Login</Button>  
            </form>
            <Button variant="outlined"><Link to={"/"}>Create Account</Link></Button>
        </div>
        <div className='RightLogin'>
            <img className="RightLoginimg"src={"https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}  alt=""></img>
           
        </div>
    </div>
  )
}

export default Login