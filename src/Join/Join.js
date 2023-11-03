import React from 'react'
import "../Join/join.css"

function Join() {
  return (
    <div className='join'>
      <div className="container8">
    <div className="content">
       <img src="https://gleritaly.sirv.com/gler/2.png" alt="header-image" className="cld-responsive"/>
            <h1 className="form-title">Register Here</h1>
            <form>
               <input type="text" placeholder="NAME"/>
            <div className="beside">
                <input type="number" placeholder="PHONE NUMBER"/>
                <select>
                    <option>GENDER</option>
                    <option>MALE</option>
                    <option>FEMALE</option>
                    <option>NON-BINARY</option>
                </select>
            </div>
                <input type="email" placeholder="EMAIL ADDRESS"/>
                <input type="number" placeholder="CODE"/><br />
                <button className='but1' type="button">Submit</button>
            </form>
        </div>
 </div>

    </div>
  )
}

export default Join
