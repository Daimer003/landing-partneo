import { IconClients, IconMenu, IconProjets, IconServices, IconUs } from "@/Utils/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  IconButton,
} from "@chakra-ui/react";

const MobileMenu = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box display={{ base: "flex", lg: "none" }} color="white">
      <Menu size="full">
        <MenuButton
          color="white"
          as={IconButton}
          aria-label="Options"
          icon={<IconMenu size="28px" />}
          variant="outline"
          border="1px solid #525252"
          _focus={{
            background: "#000000",
          }}
          _active={{
            background: "#2f2e2e",
          }}
        />
        <MenuList bg="black" border="1px solid #525252">
          <MenuItem
            onClick={() => scrollToSection("header")}
            bg="black"
            icon={<IconUs size="28px" />}
          >
            About Us
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection("services")}
            bg="black"
            icon={<IconServices size="28px" />}
          >
            Services
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection("projects")}
            bg="black"
            icon={<IconProjets size="28px" />}
          >
            Portfolio
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection("partners")}
            bg="black"
            icon={<IconClients size="28px" />}
          >
            Clients
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MobileMenu;