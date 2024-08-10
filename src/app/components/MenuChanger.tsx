'use client';

import  RootState from "@/store/store"; // Import RootState from your store configuration
import { useSelector } from "react-redux";
import Menu from "../Menu";
import MenuNSI from "../MenuNSI";

const MenuChanger = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  
  return (
    isLoggedIn ? <Menu /> : <MenuNSI />
  );
}

export default MenuChanger;
