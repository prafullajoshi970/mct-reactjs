import React from 'react'
import Nav from './Nav'
import { useState, useEffect } from "react";

function User() {
  //All user store in user array
  const [users, setUsers] = useState([]);
  //All filterd users store in below array
  const [filteredUsers, setFilteredUsers] = useState([]);
  //realtime change on click of radio buttons.
  const [selectedGender, setSelectedGender] = useState("all");

//fetch property to fetch data from API
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=40")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setFilteredUsers(data.results);
      });
  },[]);

  //to set value of radio buttons and filter data from it
  const handleGenderChange = (event) => {
    const gender = event.target.value;
    setSelectedGender(gender);

    if (gender === "all") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) => user.gender === gender);
      setFilteredUsers(filtered);
    }
  };


  return (
    <div>
        <Nav></Nav>
       <div>
        <h1>User Details</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere dicta totam odit, repudiandae cumque quod numquam officia neque distinctio. Eius, quod dolor! Ad nemo repellendus dolorum possimus cupiditate ducimus.</p>
       
        <div>
        <label>
          <input
            type="radio"
            value="all"
            className='userInputbutton'
            checked={selectedGender === "all"}
            onChange={handleGenderChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="male"
            className='userInputbutton'
            checked={selectedGender === "male"}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            className='userInputbutton'
            checked={selectedGender === "female"}
            onChange={handleGenderChange}
          />
          Female
        </label>
      </div>
      <tr className='tablehead'>
          <th>Image</th>
            <th>Name</th>
              <th>Email</th>
                <th>Gender</th>
                </tr>
      <ul>
        {filteredUsers.map((user) => (
          <table >
           <tr>
            <td> <img src={user.picture.medium} alt=""></img></td>
          
           <td>{user.name.first} </td>

           <td>{user.email}</td>
           <td>{user.gender}</td>
           </tr>
           
           
            
          </table>
        ))}
      </ul>
    </div>
  
       </div>
    
  )
}

export default User










 

 

  

 