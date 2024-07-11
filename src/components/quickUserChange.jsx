// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';
import PropTypes from "prop-types";


import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import CustomSelect from "./customselect";
// import AllFunctions from "./functions";

const QuickUserChange = (props) => {
  const tenantsNames = props.tenantsNames;
  console.log(tenantsNames, "dddd");
  //   const { handleNaviagtiontoHouse } = AllFunctions();
  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ name: ["Email", "Password"] }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name="Email" validate={validateName}>
            {({ field, form }) => (
              <Box>
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>First Name</FormLabel>
                  <Input {...field[1]} placeholder="Paul" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Midlle Name</FormLabel>
                  <Input {...field[1]} placeholder="Paul" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Other Names</FormLabel>
                  <Input {...field[1]} placeholder="Paul" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={form.errors.houseId && form.touched.houseId}>
                  <FormLabel> Select HouseId</FormLabel>
                  <Select placeholder="Select option">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  {/* <Input {...field[0]} placeholder="Email" /> */}
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={form.errors.appId && form.touched.appId}>
                  <FormLabel>Select AppartmentId</FormLabel>
                  <Select placeholder="Select Appartment Id">
                    {tenantsNames[0] &&
                      tenantsNames[0].map((item, index) => {
                        // console.log(item[0]);
                        if (item[0][0] !== "empty") {
                          return (
                            <option key={index} value={item[0]}>
                              {item[0]}
                            </option>
                          );
                        }
                      })}
                  </Select>
                  {/* <Input {...field[1]} placeholder="amount" /> */}
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Lease Start Date</FormLabel>
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel> Rent</FormLabel>
                  <Stack>
                    <Flex alignItems="center" flexDirection="row" gap={3}>
                      <Input placeholder="Xaf" />

                       <CustomSelect/>
                    </Flex>
                  </Stack>
                  {/* <InputGroup size="sm">
                    <Input placeholder="Xaf" />
                    <InputRightAddon>
                    <Select placeholder="Sel" width="22px">
                    <option value="Monthly">Option 1</option>
                    <option value="Annually">Option 2</option>
                    <option value="Custom"><Input placeholder="Xaf" /></option>
                  </Select>
                  </InputRightAddon>
                  </InputGroup> */}
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              </Box>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
            //   onClick={(() => handleNaviagtiontoHouse(`home`))}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default QuickUserChange;
QuickUserChange.propTypes = {
  tenantsNames: PropTypes.arrayOf(PropTypes.any),
  isSubmitting: PropTypes.any
};