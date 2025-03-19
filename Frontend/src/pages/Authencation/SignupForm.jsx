import { motion } from "framer-motion";
import { Link } from "react-router";

function SignupForm() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full">
        <div className="max-w-sm">
        {/* Social Sign-in Buttons */}
        <div className="mt-6 space-y-5">
          <button className="btn w-full py-5 bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-200 flex gap-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign Up With Google
          </button>
          <button className="btn w-full py-5 bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-200 flex gap-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-5 h-5"
            />
            Sign Up With Apple ID
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label className="label">
              <span className="text-gray-700 mt-3">Name*</span>
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full bg-transparent"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label className="label">
              <span className="text-gray-700 mt-3">Email*</span>
            </label>
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full bg-transparent"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <label className="label">
              <span className="text-gray-700 mt-3">Password*</span>
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full bg-transparent"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <label className="label">
              <span className="text-gray-700 mt-3">Confirm password*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full bg-transparent"
            />
          </motion.div>

          <p className="text-sm text-black/70 mt-2">
            Must be at least 8 characters.
          </p>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-gradient-to-r from-[#5F1D91] via-[#5F1D91] to-[#FFB4C5] text-white w-full mt-6"
          >
            Create account
          </motion.button>
        </form>

        {/* Login Link */}
        <p className="text-center text-black/70 text-sm mt-4">
          Already have an account?{" "}
          <Link to={'/login'} className="text-black border-b border-black hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default SignupForm;
