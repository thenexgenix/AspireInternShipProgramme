import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <>
      <div className=" flex items-center justify-center">
        <div className="w-full">
          <div className="max-w-sm">
            {/* Social Sign-in Buttons */}
            <div className="mt-6 space-y-5">
              {/* Google */}
              <button className="btn w-full rounded-md bg-white text-black border-[#e5e5e5]">
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
                Login with Google
              </button>

              {/* Apple */}
              <button className="btn w-full rounded-md bg-black text-white border-black">
                <svg
                  aria-label="Apple logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1195 1195"
                >
                  <path
                    fill="white"
                    d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"
                  ></path>
                </svg>
                Login with Apple
              </button>
            </div>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <div className="border-t w-full"></div>
              <span className="px-3 text-gray-500">OR</span>
              <div className="border-t w-full"></div>
            </div>

            {/* Signup Form */}
            <form className="space-y-2">
              <div>
                <label className="label">
                  <span className="text-gray-700 mt-3">Email*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="input input-bordered w-full bg-transparent"
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-gray-700 mt-3">Password*</span>
                </label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full bg-transparent"
                />
              </div>
              <p className="text-sm text-black/70 mt-2">
                Must be at least 8 characters.
              </p>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="btn rounded-md bg-gradient-to-r from-[#5F1D91] via-[#5F1D91] to-[#FFB4C5] text-white w-full mt-6"
              >
                Log In
              </motion.button>
            </form>

            {/* Login Link */}
            <p className="text-center text-black/70 text-sm mt-4">
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="text-black border-b border-black hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
