import {
    Box,
     
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
  } from "@chakra-ui/react";
  import PropTypes from "prop-types";

  
// import SignUpComponent from "../inputSignupComponent";
import { EditIcon } from "@chakra-ui/icons";
// import QuickUserChange from "../quickUserChange";
import QuickHouseChange from "../quickHouseChange";
  function ChangeHouseModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const { houseNames, handleNaviagtiontoHouse } = AllFunctions();
    const tenantsNames= props.tenantsNames
    // console.log(tenantsNames);
    return (
      <>
        
        <Box  onClick={onOpen} className="flex pr-[15px] text-white">
             <EditIcon
               
              boxSize={4}
            />
          </Box>
         
  
        <Modal isOpen={isOpen} onClose={onClose}         motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <Box>
            <ModalContent   w="80vw">
              <ModalHeader>Create New House</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box className="flex flex-col gap-3">
                  <QuickHouseChange tenantsNames={tenantsNames} />
                  {/* <Button
                        key={index}
                        colorScheme="green"
                        mr={3}
                        onClick={(onClose, () => handleNaviagtiontoHouse(`home`))}
                      >
                        {items[1][0]
                        }
                      </Button> */}
                </Box>
              </ModalBody>
            </ModalContent>
          </Box>
        </Modal>
      </>
    );
  }
  export default ChangeHouseModal;
  
  ChangeHouseModal.propTypes = {
    tenantsNames: PropTypes.arrayOf(PropTypes.any)
  };