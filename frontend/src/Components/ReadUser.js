import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import './styles/style_Read.css'
import { useParams } from "react-router-dom";

function ReadUser ()
{
    const urll='http://localhost:8000'
    const [userData, setuserData] = useState({
        name: "",
        email: "",
        contact: "",
        position: "",
        experience: "",
        salary: "",
      });

    
    const{id}= useParams();

    useEffect ( ()=>
    {
        LoadData();
    } ,[])

    const LoadData = async() =>
    {
        let show =  await axios.get(`${urll}/read/${id}`);
        setuserData(show.data);
        // let respoData =await axios.get(`${urll}/${id}`)
        // setInputVal(respoData.data)
    }
   return (
    <div className="parent-read">
     <div className="read-box">
    <div className="heading">
     <h2>Read User Details</h2>
    </div>

    <div className="infor">
        <table className="read-table">
            <tr className="read-table-row">
                <th className="read-table-head"> Name : </th>
                <td className="read-table-data">
                    {userData.name}
                </td>
            </tr>

            <tr className="read-table-row">
                <th className="read-table-head">Email : </th>
                <td className="read-table-data">
                    {userData.email}

                </td>
            </tr>

            <tr className="read-table-row">
                <th className="read-table-head">Contact : </th>
                <td className="read-table-data">
                    {userData.contact}

                </td>
            </tr>

            <tr className="read-table-row">
                <th className="read-table-head">Position : </th>
                <td className="read-table-data">
                    {userData.position}

                </td>
            </tr>

            <tr className="read-table-row">
                <th className="read-table-head">Experience : </th>
                <td className="read-table-data">
                    {userData.experience}

                </td>
            </tr>

            <tr className="read-table-row">
                <th className="read-table-head">Salary : </th>
                <td className="read-table-data">
                    {userData.salary}

                </td>
            </tr>

        </table>

    </div>
     </div>
   </div>
   )
}
export default ReadUser;