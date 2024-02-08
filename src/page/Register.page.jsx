import React, { useState } from 'react'
import { ButtonsComponents, ContainerComponents, FormComponents, LoadingComponents } from '../components'
import {useNavigate} from "react-router-dom";

import useApi from '../hook/useApi';
import { Register } from '../service/auth.service';



const RegisterPage = () => {
  const nav = useNavigate();
  const {handleDealApi, loading, error, data } = useApi(Register);
  // const [fun] =useApi(Register);
    const [formData, setFormData] = useState({name:"",email:"", password:"",password_confirmation:""});

  
  
    const handleinputchange = (e) =>
    setFormData((pre) => ({...pre ,[e.target.name]:e.target.value}));
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      handleDealApi(formData);
    };

    console.log(loading, error, data);
    
  return (
    <div>
       <ContainerComponents>
        {loading ? <LoadingComponents /> :  <div className="Center">
          <div className="w-2/6 h-auto">
            <h1 className="font-serif text-4xl text-center mb-10">
              Register Your Account
            </h1>
            <div>
              <h1>Error !</h1>
            </div>
            <form className=" space-y-5 " onSubmit={handleSubmit}>
              <FormComponents
              value={formData.name}
              onChange={handleinputchange}
                name="name"
                type= "text"
                label={"enter username"}
              
              />
               
               <FormComponents
              value={formData.email}
              onChange={handleinputchange}
                name="email"
                type="email"
                label={"enter your email"}
                placeholder="example@gmail.com"
              />
              <FormComponents
                value={formData.password}
                onChange={handleinputchange}
                name="password"
                type="password"
                label={"Enter Your Password"}
                placeholder="....."
              />
                <FormComponents
                value={formData.password_confirmation}
                onChange={handleinputchange}
                name="password_confirmation"
                type="password"
                label={"Confirm Your Password"}
                placeholder="confirm password"
              />
              <ButtonsComponents type="submit" style={"!rounded-lg"} >Resgister</ButtonsComponents>
            </form>
            <p className="mt-5">You haven't Account Pls login <button className="text-blue-400 underline" onClick={() => nav("/")} >Login</button></p>

          </div>
        </div> }
       
      </ContainerComponents>
    </div>
  )
}

export default RegisterPage