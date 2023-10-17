import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Big Mamma Pizza</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
