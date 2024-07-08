// import { useState } from "react";
import {
  Box,
  
  Accordion,
  AccordionButton,
   AccordionItem,
} from "@chakra-ui/react";

function CustomSelect() {
//   const [customValue, setCustomValue] = useState("Select");
//   // const selectedValue= null || customValue
//  const  handleSelectionClick=(event)=>{
// if(event){
//   setCustomValue(event)
// } 
//  }

  return (
    <Box width="60%">
<Accordion>
  
    <AccordionItem>

  <AccordionButton>tt</AccordionButton>
    </AccordionItem>
    <AccordionItem>dd</AccordionItem>
  
</Accordion>


      {/* <Menu  closeOnSelect={customValue && customValue == "Custome Time" ? false : null}>
        <MenuButton as={Button} width="100%">
          {customValue}
        </MenuButton>
        
        <MenuList>
          <MenuItem onClick={() => handleSelectionClick('Monthly')}>
            Monthly
          </MenuItem>
          <MenuItem onClick={() => handleSelectionClick('Annually')}>
            Annually
          </MenuItem>
          <MenuItem onClick={() => handleSelectionClick('Custom Time')}>Custom Time</MenuItem>
          <MenuItem onClick={() => handleSelectionClick("value")}> <Input></Input></MenuItem>

        </MenuList>
      </Menu> */}
    </Box>
  );
}

export default CustomSelect;
