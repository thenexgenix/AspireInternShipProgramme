import React from "react";
import LoginForm from "../../components/LoginForm";
import { motion } from "motion/react";

const Login = () => {
  return (
    <>
      {" "}
      <section className="bg-primary-color mt-24 pt-8 px-4  mx-auto flex flex-row items-center md:items-start justify-center  lg:justify-between mb-10">
        <div className="flex flex-col mt-12  justify-center items-center  lg:translate-x-9 xl:translate-x-60 ">
          {/* logo */}
          <div></div>
          {/* Title */}
          <motion.h2
            className="text-2xl  md:text-3xl lg:text-[40px] text-text-secondary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Login to your Account
          </motion.h2>
          <p className="text-gray-500 text-md md:text-xl text-center mt-2">
            Sign up to access internships, courses, and career growth!
          </p>
          <div>
            {/* sign up form */}
            <LoginForm />
          </div>{" "}
        </div>
        {/* Home page view */}
        <div className="relative hidden lg:inline-block lg:mt-20 lg:translate-y-10">
          <img
            src="https://i.postimg.cc/jjLhMJ7b/authencation-home-preview.png"
            alt=""
            className="relative"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </section>
    </>
  );
};

export default Login;
