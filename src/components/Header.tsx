import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-3xl font-bold text-white bg-purple-500 py-4 text-center">
      <p>Food website</p>
      <div className="flex gap-6 justify-center text-white">
        <NavLink className="btn-link text-2xl font-bold text-gray-300" to="/">
          Home
        </NavLink>
        <NavLink
          className="btn-link text-2xl font-bold text-gray-300"
          to="/foods"
        >
          Foods
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
