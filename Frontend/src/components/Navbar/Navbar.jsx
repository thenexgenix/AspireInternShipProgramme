import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router";
import Button from "../Button";

const Navbar = ({ isLoggedIn = true, onLogin, onLogout }) => {
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

  const navItems = [
    { title: "About", href: "/about" },
    {
      title: "Our Program",
      href: "#",
      submenu: [
        { title: "Courses", href: "/courses" },
        { title: "Workshops", href: "/workshops" },
        { title: "Events", href: "/events" },
      ],
    },
    { title: "Collaborators", href: "/collaborators" },
    { title: "Blog", href: "/blog" },
    { title: "Stories", href: "/stories" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-2 border-black ${
        isScrolled ? "backdrop-blur-md bg-primary/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="text-2xl font-bold text-purple-800">
              AspireIntern  
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.submenu ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-purple-800 group">
                      <span>{item.title}</span>
                      <FiChevronDown className="group-hover:rotate-180 transition-all duration-300 ease-linear" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
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
                    className="px-3 py-2 text-gray-700 hover:text-purple-800"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            {isLoggedIn && (
              <Link to="/dashboard" className="px-3 py-2 text-gray-700 hover:text-purple-800">
                My Dashboard
              </Link>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isLoggedIn ? onLogout : onLogin}
              className="ml-4 px-4 py-2 rounded-md bg-purple-800 text-white hover:bg-purple-700"
            >
              {isLoggedIn ? "Log Out" : "Log In"}
            </motion.button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
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
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.title ? null : item.title)
                        }
                        className="w-full flex items-center justify-between px-3 py-2 text-gray-700"
                      >
                        <span>{item.title}</span>
                        <FiChevronDown className={`transform transition-transform ${activeDropdown === item.title ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="pl-4">
                            {item.submenu.map((subItem) => (
                              <Link key={subItem.title} to={subItem.href} className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-800">
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link to={item.href} className="block px-3 py-2 text-gray-700 hover:text-purple-800">
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              {isLoggedIn && (
                <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-purple-800">
                  My Dashboard
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
