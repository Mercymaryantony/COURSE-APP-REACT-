import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const [data, setdata] = useState({
        "title": ""
    })
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const [result, setResult] = useState([]

    )
    // deletion
    const deletecourse = (id)=>{
        let input= {"_id":id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                if(response.data.status=="success"){
                    alert("Successfully deleted")
                }
                else{
                    alert("OOPS!!!")
                }
            }
        ).catch().finally()

    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">COURSE TITLE</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">TITLE</th>
                            <th scope="col">TRAINER</th>
                            <th scope="col">DURATION</th>
                            <th scope="col">DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                       {result.map(
                        (value,i)=>{
                            return  <tr>
                            <th scope="row">{value.title}</th>
                            <td>{value.tr}</td>
                            <td>{value.du}</td>
                            <td>{value.date}</td>
                             <td><button className="btn btn-danger" onClick={()=>{deletecourse(value._id)}}>DELETE</button></td> 
                       
                        </tr>
                        }
                       )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Search