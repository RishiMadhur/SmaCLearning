import React, { useState } from "react";
import Image from "next/image";
//import '';
//import { useSelector, useDispatch } from "react-redux";
//import { login} from "redux/slice/auth";
//import InputField from "src/components/PrimaryButton/InputField";
//import Button from "src/components/PrimaryButton/Button";
import { useRouter } from "next/router";

const StudentLogin = () => {
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });
  const router = useRouter();
 // const dispatch = useDispatch();

 /*  const handleSubmit = (e) => {
    e.preventDefault();
   // dispatch(login(userCreds));
  }; */

  const handleChange = ({ target: { name, value } }) => {
    setUserCreds({ ...userCreds, [name]: value });
  };

  return (
    <div className="bg-menu min-h-screen text-center">
      <form
        action=""
        method="post"
      //  onSubmit={handleSubmit}
      >
        <div className ="text-white">
          <div className="">
            <div>
              <Image
                src="/icons/vector.svg"
                alt="NavLogo"
                width="300px"
                height="300px"
              />
            </div>
            <h2 className="pb-6 font-bold font-mono">Student Login</h2>
          </div>
          <div className="pb-6">
            <p >Sign in and start managing your Profile</p>
            </div> 
          <div className="bg-menu">
            <div className="pb-6 bg-menu " >
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                required
                value={userCreds.email}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <input
                type="password"
                className=""
                name="password"
                required
                id="password"
                placeholder="Password"
                value={userCreds.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <div className="">
                <input type="checkbox" id="checkbox-remember" />{" "}
                &nbsp;Remember me
              </div>
              <div className="">
                <span onClick={() => router.push("/forgotpassword")}>Forgot Your Password</span>
              </div>
            </div>
            <div className="btn justify-center align w-84">
              <button
                type="button"
                color="blue"
                label="Login"
               onClick={handleSubmit}
               >Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;


/* For credits counter is used we have to create a store and create a reducer declare as state:{counter:0}, action
for decrement action state.counter -1 and for increment action state.counter+1 we use create reducer to point this func ref:react 234*/