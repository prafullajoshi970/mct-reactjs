import React from 'react'
import{Link} from 'react-router-dom' 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
function CreateAccount() {
    
    
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


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

        const { name, email, password } = inpval;

        if (name === "") {
            alert(' name field is requred!');
        } else if (email === "") {
             alert('email field is requred');
        } else if (!email.includes("@")) {
             alert('plz enter valid email addres');
        }  else if (password === "") {
             alert('password field is requred');
        } else if (password.length < 5) {
             alert('password length greater five');
        } else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("user",JSON.stringify([...data,inpval]));

        }

    }


  return (
    <div className='MainLogin'>
        <div className='LeftLogin'>
            <h1>Welcome To Create Account page</h1>
            <h4>fill all Details Below to Create Account</h4>
            <form type="submit">
            <label>Name</label>
                <input type={'text'} placeholder={'enter Name'} name="name" onChange={getdata}></input>
                <label>Email</label>
                <input type={'email'} placeholder={'enter email id'} name="email" onChange={getdata}></input>
                <label>Password</label>
                <input type={'password'} placeholder={'enter password'} name="password" onChange={getdata}></input>
                <Button type='submit' onClick={addData} variant="outlined"> Submit Details</Button>  
            </form>
            <p>Already Have Account<Link to={"/Login"} > SignUp</Link></p>
        </div>
        <div className='RightLogin'>
            <img className="RightLoginimg"src={"https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}  alt=""></img>
           
        </div>
    </div>
  )
}

export default CreateAccount