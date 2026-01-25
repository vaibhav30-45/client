import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/40 backdrop-blur-xl border-b border-white/30 shadow-lg">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="NP Cooling Solutions Logo"
              className="h-16 w-auto object-contain"
            />
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-gray-700 hover:text-secondary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* CTA */}
            <NavLink
              to="/contact"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-all duration-300"
            >
              Get a Quote
            </NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* ANIMATED MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-lg shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-gray-700 hover:text-secondary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-primary text-white py-2 rounded-md hover:bg-secondary transition"
            >
              Get a Quote
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
