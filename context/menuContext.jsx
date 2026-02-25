"use client";

import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return <MenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>{children}</MenuContext.Provider>;
}

export const useMenu = () => useContext(MenuContext);
