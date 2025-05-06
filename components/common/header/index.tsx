import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { NavLink } from "../nav-link";

const Header = () => {
  const isLoggedIn = false;

  return (
    <nav className="container flex justify-between items-center py-4 px-2 lg:px-8 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink
          href="/"
          className="flex items-center gap-1 lg:gap-2 text-lg lg:text-2xl font-bold"
        >
          <FileText className="size-5 lg:size-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Summaire
          </span>
        </NavLink>
      </div>

      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        {isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div>Pro</div>
            <Button variant="outline">User</Button>
          </div>
        ) : (
          <div>
            <NavLink href="/sign-in">Sign In</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
