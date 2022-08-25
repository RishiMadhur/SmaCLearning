import React, { useState } from "react";
import Image from "next/image";
//import '';
//import { useSelector, useDispatch } from "react-redux";
//import { login} from "redux/slice/auth";
//import InputField from "src/components/PrimaryButton/InputField";
//import Button from "src/components/PrimaryButton/Button";
import { useRouter } from "next/router";

const FacultyLogin = () => {
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });
  const router = useRouter(); 
 // const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
   // dispatch(login(userCreds));
  }; 

  const handleChange = ({ target: { name, value } }) => {
    setUserCreds({ ...userCreds, [name]: value });
  };

  return (
    <div className="bg-menu min-h-screen">
      <form
        action=""
        method="post"
      //  onSubmit={handleSubmit}
      >
        <div className ="text-white md:place-content-center">
          <div className="w-1704px h-933px justify-center">
            <div>
              <Image
                src="/icons/vector.svg"
                alt="NavLogo"
                width="300px"
                height="300px"
              />
            </div>
            <h2 className="pb-6 justify-between">Faculty Login</h2>
          </div>
          <div className="pb-6">
            <p >Sign in and start managing your candidates</p>
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
            <div>
              <input
                type="password"
                name="password"
                required
                id="password"
                placeholder="Password"
                value={userCreds.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-">
              <div>
                <input type="checkbox" id="checkbox-remember" />{" "}
                &nbsp;Remember me
              </div>
              <div>
                <span onClick={() => router.push()}>Forgot Your Password</span>
              </div>
            </div>
            <div className="">
              <button
                type="button"
                color="blue"
                label="Login"
               onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FacultyLogin;


/* For credits counter is used we have to create a store and create a reducer declare as state:{counter:0}, action
for decrement action state.counter -1 and for increment action state.counter+1 we use create reducer to point this func ref:react 234*/