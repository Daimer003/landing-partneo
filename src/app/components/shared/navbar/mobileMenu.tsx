import { IconMenu } from "@/Utils/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  IconButton,
} from "@chakra-ui/react";

const MobileMenu = () => {
  return (
    <Box display={{ base: "flex", md: "none" }} color="white">
      <Menu size="full">
        <MenuButton
          color="white‰"
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
          <MenuItem bg="black" icon={<IconMenu size="28px" />} >
            About Us
          </MenuItem>
          <MenuItem bg="black" icon={<IconMenu size="28px" />} >
            Services
          </MenuItem>
          <MenuItem bg="black" icon={<IconMenu size="28px" />} >
            Portfolio
          </MenuItem>
          <MenuItem bg="black" icon={<IconMenu size="28px" />} >
            Clients
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MobileMenu;
