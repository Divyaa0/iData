import React, {  useState , useEffect } from "react";
import "./styles/login.png";
import "./styles/style_update.css";
import "./styles/style.css"; 
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";

const urll='http://localhost:8000'

function CreateUser() {
  const [InputVal, setInputVal] = useState({
    name: "",
    email: "",
    contact: "",
    position: "",
    experience: "",
    salary: "",
  });
  const[errors,setErrors]=useState({});


  // navigation : to redirect on display page after creating /updating account
  const Navigation =useNavigate();

  // to access id
  const {id} = useParams();

  // useEffect () : to load the previous data also while updating ..useEffect will only run one time
  useEffect (()=>
  {
    loadUserDetails(); 
  },[])

  const loadUserDetails = async() =>
  {
    let respoData =await axios.get(`${urll}/${id}`)
    setInputVal(respoData.data)
  }


  const inputEvent = (event) => {
    setInputVal({ ...InputVal, [event.target.name]: event.target.value });
  };

  const submitEvent = async() => {
    console.log("edit event");
    console.log(InputVal)
    setErrors(formValidate(InputVal));
    
    if (formValidate(InputVal))
    {
      console.log('Form submitted with data:', InputVal);
       await axios.post(`${urll}/${id}`,InputVal)
      Navigation("/all");
      
    } 
    else 
    {
      console.log('Form has validation errors');
    }

  };

  const formValidate=(inputs)=>
  {
    let bugs = {};
    if(!inputs.name || inputs.name.length>25 )
    {
      bugs.name="Fill Name Field Correctly!!"
    }
    if(!inputs.email)
    {
      bugs.email="Email is Required !"
    }
    else if(!/\S+@\S+\.\S+/.test(inputs.email))
    {
      bugs.email="Invalid Email Address ! ";
    }
    if(!inputs.contact)
    {
      bugs.contact="Contact is Required !";
    }
    else if(inputs.contact.length !==10  || isNaN(inputs.contact))
    {
      bugs.contact="Invalid Contact !";
    }
    if(!inputs.position)
    {
      bugs.position="Position is Required !";
    }
    if(!inputs.experience)
    {
      bugs.experience="Experience is Required !";
    }
    else if(inputs.experience <0 || inputs.experience >10)
    {
      bugs.experience="Experience must be between 0 - 10 only !"
    }
    if(!inputs.salary)
    {
      bugs.salary="Salary is Required !";
    }
    else if(inputs.salary<1 || inputs.salary>50)
    {
      bugs.salary="Salary must be between 1LPA - 50LPA";
    }


   setErrors(bugs);
   console.log(bugs);
   return Object.keys(bugs).length===0
  }




  return (
    <div className="parent-box update-box">
     

      <div className="form-box update-form-box">
        <div className="txts">
          <h2>
           Edit <strong>User</strong>
           {/* <FontAwesomeIcon icon="fa-regular fa-pen-to-square" style={{color: "#ffffff",}} /> */}
          </h2>

        </div>

        <div className="inputs">
          <form>
            <table>
              <tr>
                <td>
                  <input
                    className="create update"
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    onChange={inputEvent}
                    value={InputVal.name}
                  />
                   {errors.name ? <p className="error-class">Fill Name Correctly !</p> : ""}
                  </td>
                  <td>
                  <input
                    className="create update"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    onChange={inputEvent}
                    value={InputVal.email}
                  ></input>
                   {errors.email ? <p className="error-class">{errors.email}</p> :""}
                </td>
               
              </tr>

              <tr>
                <td>
                  <input
                    className="create update"
                    type="text"
                    placeholder="Enter Contact"
                    onChange={inputEvent}
                    name="contact"
                    value={InputVal.contact}
                  ></input>
                  {errors.contact ? <p className="error-class">{errors.contact}</p> :"" } 
                </td>
                <td>
                  <select
                    className="create update"
                    name="position"
                    onChange={inputEvent}
                    value={InputVal.position}
                  >
                    <option
                      className="option create"
                      selected
                      value="Enter Position"
                    >
                      Enter Position
                    </option>
                    <option className="option" value="SDE">
                      Software Engineer
                    </option>
                    <option className="option" value="BDE">
                      Business Development Executive
                    </option>
                    <option className="option" value="HR">
                      HR
                    </option>
                    <option className="option" value="DA">
                      Data Analyst
                    </option>
                  </select>
                  {errors.position? <p className="error-class">{errors.position}</p> : ""}
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    className="create update"
                    type="number"
                    min={0}
                    max={10}
                    placeholder="Enter Experience"
                    onChange={inputEvent}
                    name="experience"
                    value={InputVal.experience}
                  ></input>
                   {errors.experience? <p className="error-class">{errors.experience}</p> : ""}
                </td>
                <td>
                  <input
                    className="create update"
                    type="number"
                    min={1}
                    max={50}
                    placeholder="Enter Salary PA"
                    onChange={inputEvent}
                    name="salary"
                    value={InputVal.salary}
                  ></input>
                  {errors.salary ? <p className="error-class">{errors.salary}</p> : ""}
                </td>
              </tr>

            </table>
          </form>

          <div className="create-btn">
            <button onClick={submitEvent} className="c-btn">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
