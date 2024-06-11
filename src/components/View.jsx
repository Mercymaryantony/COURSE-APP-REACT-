import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const[data,changedata]=useState([])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">COURSE TITLE</th>
      <th scope="col">DURATION</th>
      <th scope="col">TRAINER</th>
      <th scope="col">VENUE</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=>{
        <tr>
        <th scope="row">{value.title}</th>
        <td>{value.du}</td>
        <td>{value.tr}</td>
        <td>{value.ve}</td>
      </tr>
    }
   )}
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View