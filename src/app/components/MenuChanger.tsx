'use client';

import { useSelector } from "react-redux";
import Menu from "../Menu";
import MenuNSI from "../MenuNSI";
import { RootState } from "@/store/store"; // Import RootState from your store configuration

const MenuChanger = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  // If isLoggedIn is undefined, you can return null, a loading indicator, or a placeholder component
  if (typeof isLoggedIn === 'undefined') {
    return <div>Loading...</div>; // Render a loading state or return null if you prefer no rendering
  }

  // Render the appropriate menu based on the isLoggedIn state
  return isLoggedIn ? <Menu /> : <MenuNSI />;
}

export default MenuChanger;
