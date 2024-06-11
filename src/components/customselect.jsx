import { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
} from "@chakra-ui/react";

function CustomSelect() {
  const [customValue, setCustomValue] = useState("");

  return (
    <Box width="60%">
      <Menu>
        <MenuButton as={Button} width="100%">
          Select
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => alert("Option 1 Selected")}>
            Monthly
          </MenuItem>
          <MenuItem onClick={() => alert("Option 2 Selected")}>
            Annually
          </MenuItem>
          <MenuItem>Custom Value</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default CustomSelect;
