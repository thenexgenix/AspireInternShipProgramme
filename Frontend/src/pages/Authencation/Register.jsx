import { motion } from "framer-motion";
import SignupForm from "./SignupForm";

const Register = () => {
  return (
    <>
      <section className="bg-primary-color mt-24 pt-8 px-4 max-w-7xl mx-auto">
        {/* logo */}
        <div></div>
        {/* Title */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#5F1D91]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Create Account
        </motion.h2>
        <p className="text-gray-500 text-xl mt-2">
          Sign up to access internships, courses, and career growth!
        </p>

        <div>
          {/* sign up form */}
          <SignupForm />

          {/* Home page view */}
        </div>
      </section>
    </>
  );
};

export default Register;
