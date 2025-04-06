import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router";
import logo from "../../Assets/images/Aspire_Logo_Nexgenix.png";

const navItems = [
  { title: "About", href: "/about" },
  {
    title: "Our Program",
    href: "#",
    submenu: [
      { title: "Internship", href: "/our-program/internship" },
      { title: "Courses", href: "/our-program/courses" },
      { title: "Events", href: "/our-program/events" },
    ],
  },
  { title: "Collaborators", href: "/collaborators" },
  { title: "Blog", href: "/blog" },
  { title: "Stories", href: "/stories" },
  // { title: "Contact", href: "/contact" },
];

const Navbar = memo(({ isLoggedIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={` fixed w-full top-0 z-50 transition-all duration-300 pt-5 ${
        isScrolled ? "backdrop-blur-md bg-primary-color/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl xl:max-w-full  mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between xl:justify-around gap-0 xl:gap-80 h-16 ">
          <motion.div initial={{ scale: 0.8 }} whileHover={{ scale: 0.7 }}>
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src={logo}
                alt="Aspire Internship Programme (Thenexgenix)"
                className="w-40 md:w-44 p-5"
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4  md:text-[80%] lg:text-lg">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.submenu ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 px-3 py-2 text-text hover:text-purple-900 group">
                      <span>{item.title}</span>
                      <FiChevronDown className="group-hover:rotate-180 transition-all duration-300 ease-linear" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-text hover:bg-purple-50"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="px-3 py-2 text-black hover:text-purple-900"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            {isLoggedIn && (
              <Link
                to="/dashboard"
                className="px-3 py-2 text-black hover:text-purple-900"
              >
                My Dashboard
              </Link>
            )}

            <Link to="/our-program/internship">
              <button className="btn bg-bg-secondary text-primary-color rounded-md md:text-[80%] lg:text-sm ">
                Apply Now
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text text-xl"
            >
              {isMobileMenuOpen ? (
                <span className="underline">Close</span>
              ) : (
                <span className="underline">Menu</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-color mt-3"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.title ? null : item.title
                          )
                        }
                        className="w-full flex items-center justify-between px-3 py-2 text-gray-700"
                      >
                        <span>{item.title}</span>
                        <FiChevronDown
                          className={`transform transition-transform ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-900"
                                onClick={closeMobileMenu}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-purple-900"
                      onClick={closeMobileMenu}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              {isLoggedIn && (
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-900"
                  onClick={closeMobileMenu}
                >
                  My Dashboard
                </Link>
              )}

              <Link to="/our-program/internship" onClick={closeMobileMenu}>
                <button className="btn bg-bg-secondary text-primary-color rounded-md">
                  Apply Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

export default Navbar;
