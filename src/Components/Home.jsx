import React from 'react'
import Nav from './Nav'

function Home() {
// 2nd component with nav Bar and some information with paragraph.

  return (
    <div>
        <Nav></Nav>
       <div className='Homediv'>
        <h1 style={{color:"white"}}>Welcome To React</h1>
        <p  style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Commodi voluptatem modi similique pariatur molestias libero, 
           harum aspernatur dignissimos cumque odio consequatur tempora quidem maiores veniam deserunt dicta illo eius ab!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi expedita maiores iste blanditiis temporibus assumenda eveniet earum corporis ipsam, in suscipit minima, doloribus quia molestiae sit dolorem sapiente fuga magnam!
        </p>
        <button className='homebutton'> Explore More!!! </button>
       </div>
    </div>
  )
}

export default Home