import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartBtn from "./CartBtn";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <CartBtn />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
