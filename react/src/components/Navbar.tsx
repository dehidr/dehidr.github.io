import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <nav>
      <div className="flex absolute  flex-row items-start justify-center min-h-svh">
        {/* border-b-4 border-black pb-2  */}
        <div className="p-0 m-0 md:text-center text-black bg-black  font-bold">
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/about">
            <Button>About</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
          <Link to="/conway">
            <Button>Conway</Button>
          </Link>
          <Link to="/cv">
            <Button>CV</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
