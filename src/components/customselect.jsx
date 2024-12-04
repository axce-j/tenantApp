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

  <AccordionButton>Month</AccordionButton>
    </AccordionItem>
    <AccordionItem>dd</AccordionItem>
  
</Accordion>


       
    </Box>
  );
}

export default CustomSelect;
