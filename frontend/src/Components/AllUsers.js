import React, { useEffect, useState } from 'react';
import '../Components/styles/style_AllUser.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function AllUsers()
{
  const urll='http://localhost:8000'
  const [userData,setuserData]=useState([]);

  const DeleteData = async(id) =>
  {
    await axios.delete(`${urll}/${id}`)
  }

  
  useEffect ( ()=>
  {
    getData();
  } , [])


  const getData = async() =>
  {
    let respo =  await axios.get(`${urll}/all`);
    setuserData(respo.data)
  }
   userData.map(data => {
    console.log(data._id);})
    return (
      <div className="card-box ">
        {
          userData.map( printData => (
            <div className="card">
          <div className="pic">
           <div className='pic-img'>
           </div>
          </div>

          <div className="info">
           <table className='allt' >
            <tr className='alltr'>
              <th className='allth'>Name : </th>
              <td className='alltd'>{printData.name}</td>
            </tr>
            <tr className='alltr'>
            <th className='allth'>Email : </th>
              <td className='alltd'>{printData.email}</td>
            </tr>
            <tr className='alltr'>
            <th className='allth'>Contact : </th>
              <td className='alltd'>{printData.contact}</td>
            </tr>
           </table>
            
          </div>

          <div className="btns">
            <Link className="btn " to={`/read/${printData._id}`} >Read</Link>
            <Link className="btn "  to={`/update/${printData._id}`}>Update</Link>
            <Link className="btn " onClick={ () =>  DeleteData(printData._id)}>Delete</Link>
          </div>        
        </div>
          ))
        }
      </div>
    );
}
export default AllUsers;