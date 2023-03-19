import { Link } from "react-router-dom"
function Nav() {
  return (
    <div className="NavBar">
    
        <Link to={"/Home"}><h3>Home</h3></Link>
        <Link to={"/Product"}> <h3>Product</h3></Link>
        <Link to={"/User"}> <h3>User</h3></Link>
        <Link to={"/ContactUs"}> <h3>Contact Us</h3></Link>
        <Link to={"/"}> <h3>Login</h3></Link>
     


    </div>
  )
}

export default Nav