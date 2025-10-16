import { Avatar } from "@heroui/avatar";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { SetStateAction, Dispatch } from "react";
import { Button } from "@heroui/button";

import Logo from "/EXO_logo_green.png";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Navbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <HeroUINavbar isBordered maxWidth="2xl" position="static">
      <NavbarBrand>
        <button
          className="bg-transparent border-none p-0 m-0 cursor-pointer"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img alt="EXO" className="h-[50px]" src={Logo} />
        </button>
      </NavbarBrand>

      {/* Right Section */}
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center gap-3">
          <Button className="bg-brand-primary text-white" variant="solid">
            Edit Profile
          </Button>
          {/* <Button
            as={Link}
            className="bg-white text-brand-primary"
            href="/login"
            variant="flat"
          >
            Login
          </Button> */}
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                as="button"
                className="transition-transform hover:cursor-pointer"
                name="JD"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem
                key="logout"
                color="danger"
                onPress={() => handleLogout()}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
