import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { TPizza } from "../../types";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {(menu as TPizza[]).map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export default Menu;
