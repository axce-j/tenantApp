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
import { EditIcon } from "@chakra-ui/icons";
import QuickUserChange from "../quickUserChange";

function ChangeTenantModal({ tenantsNames = [] }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Box onClick={onOpen} className="flex pr-[15px] text-white">
        <EditIcon boxSize={4} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <Box>
          <ModalContent w="80vw">
            <ModalHeader>Change Tenant</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box className="flex flex-col gap-3">
                <QuickUserChange tenantsNames={tenantsNames} />
              </Box>
            </ModalBody>
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
}

ChangeTenantModal.propTypes = {
  tenantsNames: PropTypes.arrayOf(PropTypes.object), // Ensure tenantsNames is an array of objects
};

export default ChangeTenantModal;
