import { navLists } from "../constants/index.js"
import {appleImg, bagImg, searchImg} from "../utils/index.js"

const Navbar = () => {
  return (
    <header className="w-full px-5 sm:px-10 py-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple-logo" width={18} height={18} />
        
        <div className="flex flex-1 justify-center max-md:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-gray text-sm cursor-pointer hover:text-white transition">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-md:flex-1 max-md:justify-end">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar