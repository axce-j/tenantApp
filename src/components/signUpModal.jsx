import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
  } from "@chakra-ui/react";
  
import SignUpComponent from "./inputSignupComponent";
  function SignUpModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const { houseNames, handleNaviagtiontoHouse } = AllFunctions();
    return (
      <>
        <Button
          bgColor="transparent"
          onClick={onOpen}
          className="w-fit bg-rgba(33,113,3)"
        >
          <i
         className="fa fa-user-plus text-white" aria-hidden="true"></i>
        </Button>
  
         
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <Box>
            <ModalContent>
              <ModalHeader>Sign-in</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box className="flex flex-col gap-3">
                  <SignUpComponent />
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
  export default SignUpModal;
  