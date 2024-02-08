import React, { useState } from "react";
import { ButtonsComponents, ContainerComponents, FormComponents } from "../components";
import {useNavigate} from "react-router-dom";
import {Register} from "../service/auth.service"

const LoginPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({email:"", password:""});

  const handleinputchange = (e) =>
  setFormData((pre) => ({...pre ,[e.target.name]:e.target.value}));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // const res = await Register(formData);
    // console.log(res);
    
  }
  
  return (
    <div>
      <ContainerComponents>
        <div className="Center">
          <div className="w-2/6 h-auto">
            <h1 className="font-serif text-4xl text-center mb-10">
              Login Your Contact
            </h1>
            <form className=" space-y-7 mt-5" onSubmit={handleSubmit}>
              <FormComponents
              value={formData.email}
              onChange={handleinputchange}
                name={"email"}
                type={"email"}
                label={"enter your email"}
                placeholder="example@gmail.com"
              />
              <FormComponents
                value={formData.password}
                onChange={handleinputchange}
                name={"password"}
                type={"password"}
                label={"Password"}
               
              />
              <ButtonsComponents  type="submit" style={"!rounded-lg"} >Login </ButtonsComponents>
            </form>
            <p className="mt-5">You haven't Account Pls Register <button className="text-blue-400 underline" onClick={() => nav("/register")} >Register</button></p>
          </div>
        </div>
      </ContainerComponents>
    </div>
  );
};

export default LoginPage;
