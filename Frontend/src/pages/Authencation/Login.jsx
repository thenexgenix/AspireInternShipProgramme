import React from "react";
import loginLogo from "../../Assets/LoginPage/loginNav.png";
import loginImage from "../../Assets/LoginPage/AboutSection.png";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <>
      {/* Login logo */}
      <img className="my-24 mx-10 pt-8" src={loginLogo} alt="" />
      {/* Login section */}
      <section className="flex justify-between ">
        {/* Login input section */}
        <div className="mx-6 lg:mx-24 my-4">
          <h1 className="text-[#5F1D91] font-medium text-4xl my-2">Log In</h1>
          <p className="my-10">
            Log In to access internships, courses, and career growth!
          </p>
          {/* Social button */}
          {/* Google */}
          <button className="btn w-full bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Sign up with Google
          </button>{" "}
          <br /> <br />
          {/* Apple  */}
          <button className="btn w-full bg-white text-black border-[#e5e5e5]">
            <FaApple />
            Sign up with Apple Id
          </button>
          <div className="divider">OR</div>
          <div className=" ">
            <div className=" flex-col lg:flex-row-reverse">
              <div className="card w-full shrink-0 shadow-2xl">
                <div className="card-body">
                  <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input
                      type="email"
                      className="input w-full"
                      placeholder="Email"
                    />
                    <label className="fieldset-label">Password</label>
                    <input
                      type="password"
                      className="input w-full"
                      placeholder="Password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button
                      className="btn mt-4 w-full text-white"
                      style={{
                        background:
                          "linear-gradient(167.60deg, rgb(95, 29, 145) 43.776%, rgb(255, 180, 197) 145.133%)",
                      }}
                    >
                      Login
                    </button>
                    <p className="text-center text-[15px] my-2">Already have an account? <a className="font-medium" href="">Register</a></p>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Login image section */}
        <img src={loginImage} className="hidden lg:flex" alt="" />
      </section>
    </>
  );
};

export default Login;
