import { appleImg, bagImg, searchImg } from "../utils/index";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} className="cursor-pointer"/>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((list) => (
            <div className="px-5 text-sm text-gray hover:text-white cursor-pointer transition-all">
              {list}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search" width={18} height={18} className="cursor-pointer"/>
          <img src={bagImg} alt="bag" width={18} height={18} className="cursor-pointer"/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
