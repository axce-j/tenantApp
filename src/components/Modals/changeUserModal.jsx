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
import QuickUserChange from "../quickUserChange";
  function ChangeUserModal(props) {
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
              <ModalHeader>Create New Tenant</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box className="flex flex-col gap-3">
                  <QuickUserChange tenantsNames={tenantsNames} />
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
  export default ChangeUserModal;
  
  ChangeUserModal.propTypes = {
    tenantsNames: PropTypes.arrayOf(PropTypes.any)
  };