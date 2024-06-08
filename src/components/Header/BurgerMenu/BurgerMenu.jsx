import { useRef, useState } from "react";
import sprite from "../../../images/icons.svg";
import {
  BurgerMenuWrapper,
  StyledBurgerMenu,
  StyledSVGBurger,
} from "./BurgerMenu.styled";
import { Sidebar } from "components/SideBar/SideBar";
import { DarkBackground } from "components/Sidebar/Sidebar.styled";

export const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const burgerMenuRef = useRef(null);
  const sidebarRef = useRef(null);

  const handleOpenSidebar = () => {
    setOpen(!isOpen);
  };

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <BurgerMenuWrapper>
      <StyledBurgerMenu
        type="button"
        onClick={handleOpenSidebar}
        ref={burgerMenuRef}
      >
        <StyledSVGBurger>
          <use xlinkHref={`${sprite}#icon-menu-01`}></use>
        </StyledSVGBurger>
      </StyledBurgerMenu>
      {isOpen && (
        <div>
          <DarkBackground onClick={handleCloseSidebar} />
          <Sidebar ref={sidebarRef} onItemClick={handleCloseSidebar} />
        </div>
      )}
    </BurgerMenuWrapper>
  );
};
