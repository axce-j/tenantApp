// // The below import defines which components come from formik
// // import { Field, Form, Formik } from 'formik';
// import PropTypes from "prop-types";


// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Input,
//   Select,
//   Stack,
// } from "@chakra-ui/react";
// import { Field, Form, Formik } from "formik";
// import CustomSelect from "./customselect";
// // import AllFunctions from "./functions";

// const QuickUserChange = (props) => {
//   const tenantsNames = props.tenantsNames;
//   console.log(tenantsNames, "dddd");
//   //   const { handleNaviagtiontoHouse } = AllFunctions();
//   function validateName(value) {
//     let error;
//     if (!value) {
//       error = "Name is required";
//     } else if (value.toLowerCase() !== "naruto") {
//       error = "Jeez! You're not a fan 😱";
//     }
//     return error;
//   }

//   return (
//     <Formik
//       initialValues={{ name: ["Email", "Password"] }}
//       onSubmit={(values, actions) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           actions.setSubmitting(false);
//         }, 1000);
//       }}
//     >
//       {(props) => (
//         <Form>
//           <Field name="Email" validate={validateName}>
//             {({ field, form }) => (
//               <Box>
//                 <FormControl isInvalid={form.errors.name && form.touched.name}>
//                   <FormLabel>First Name</FormLabel>
//                   <Input {...field[1]} placeholder="Paul" />
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>
//                 <FormControl isInvalid={form.errors.name && form.touched.name}>
//                   <FormLabel>Midlle Name</FormLabel>
//                   <Input {...field[1]} placeholder="Paul" />
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>
//                 <FormControl isInvalid={form.errors.name && form.touched.name}>
//                   <FormLabel>Other Names</FormLabel>
//                   <Input {...field[1]} placeholder="Paul" />
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>
//                 <FormControl isInvalid={form.errors.houseId && form.touched.houseId}>
//                   <FormLabel> Select HouseId</FormLabel>
//                   <Select placeholder="Select option">
//                     <option value="option1">Option 1</option>
//                     <option value="option2">Option 2</option>
//                     <option value="option3">Option 3</option>
//                   </Select>
//                   {/* <Input {...field[0]} placeholder="Email" /> */}
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>

//                 <FormControl isInvalid={form.errors.appId && form.touched.appId}>
//                   <FormLabel>Select AppartmentId</FormLabel>
//                   <Select placeholder="Select Appartment Id">
//                     {tenantsNames[0] &&
//                       tenantsNames[0].map((item, index) => {
//                         // console.log(item[0]);
//                         if (item[0][0] !== "empty") {
//                           return (
//                             <option key={index} value={item[0]}>
//                               {item[0]}
//                             </option>
//                           );
//                         }
//                       })}
//                   </Select>
//                   {/* <Input {...field[1]} placeholder="amount" /> */}
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>
//                 <FormControl isInvalid={form.errors.name && form.touched.name}>
//                   <FormLabel>Lease Start Date</FormLabel>
//                   <Input
//                     placeholder="Select Date and Time"
//                     size="md"
//                     type="datetime-local"
//                   />
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>
//                 <FormControl isInvalid={form.errors.name && form.touched.name}>
//                   <FormLabel> Rent</FormLabel>
//                   <Stack>
//                     <Flex alignItems="center" flexDirection="row" gap={3}>
//                       <Input placeholder="Xaf" />


//                      </Flex>
//                   </Stack>
//                   <Stack>
//                     <Flex alignItems="center" marginTop={4} flexDirection="row" gap={3}>
//                       <Input placeholder="Duration eg. monthly" />


//                      </Flex>
//                   </Stack>
//                   {/* <InputGroup size="sm">
//                     <Input placeholder="Xaf" />
//                     <InputRightAddon>
//                     <Select placeholder="Sel" width="22px">
//                     <option value="Monthly">Option 1</option>
//                     <option value="Annually">Option 2</option>
//                     <option value="Custom"><Input placeholder="Xaf" /></option>
//                   </Select>
//                   </InputRightAddon>
//                   </InputGroup> */}
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>
//               </Box>
//             )}
//           </Field>
//           <Button
//             mt={4}
//             colorScheme="teal"
//             isLoading={props.isSubmitting}
//             type="submit"
//             //   onClick={(() => handleNaviagtiontoHouse(`home`))}
//           >
//             Submit
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };
// export default QuickUserChange;
// QuickUserChange.propTypes = {
//   tenantsNames: PropTypes.arrayOf(PropTypes.any),
//   isSubmitting: PropTypes.any
// };








import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

const QuickUserChange = ({ tenantsNames, fetchHouseData, createApartment }) => {
  const [apartmentData, setApartmentData] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      const data = await fetchHouseData(); // Ensure this returns apartment data
      setApartmentData(data);
    };

    fetchApartments();
  }, [fetchHouseData]);

  return (
    <Formik
      initialValues={{
        firstName: "",
        middleName: "",
        otherNames: "",
        houseId: "",
        apartmentId: "",
        leaseStartDate: "",
        rentAmount: "",
        rentDuration: "",
      }}
      onSubmit={async (values, actions) => {
        await createApartment(values); // Make sure to await async function call
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="firstName">
            {({ field }) => (
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input {...field} placeholder="First Name" />
              </FormControl>
            )}
          </Field>

          <Field name="middleName">
            {({ field }) => (
              <FormControl>
                <FormLabel>Middle Name</FormLabel>
                <Input {...field} placeholder="Middle Name" />
              </FormControl>
            )}
          </Field>

          <Field name="otherNames">
            {({ field }) => (
              <FormControl>
                <FormLabel>Other Names</FormLabel>
                <Input {...field} placeholder="Other Names" />
              </FormControl>
            )}
          </Field>

          <Field name="houseId">
            {({ field }) => (
              <FormControl>
                <FormLabel>House ID</FormLabel>
                <Select {...field} placeholder="Select a house">
                  {tenantsNames.map((tenant, index) => (
                    <option key={index} value={tenant.houseId}>
                      {tenant.houseName || "Unnamed House"}
                    </option>
                  ))}
                </Select>
              </FormControl>
            )}
          </Field>

          <Field name="apartmentId">
            {({ field }) => (
              <FormControl>
                <FormLabel>Apartment ID</FormLabel>
                <Select {...field} placeholder="Select an apartment">
                  {apartmentData.map((apartment, index) => (
                    <option key={index} value={apartment.id}>
                      {apartment.name || "Unnamed Apartment"}
                    </option>
                  ))}
                </Select>
              </FormControl>
            )}
          </Field>

          <Field name="leaseStartDate">
            {({ field }) => (
              <FormControl>
                <FormLabel>Lease Start Date</FormLabel>
                <Input {...field} type="datetime-local" />
              </FormControl>
            )}
          </Field>

          <Field name="rentAmount">
            {({ field }) => (
              <FormControl>
                <FormLabel>Rent Amount</FormLabel>
                <Input {...field} placeholder="Rent Amount" />
              </FormControl>
            )}
          </Field>

          <Field name="rentDuration">
            {({ field }) => (
              <FormControl>
                <FormLabel>Rent Duration</FormLabel>
                <Input {...field} placeholder="e.g., Monthly" />
              </FormControl>
            )}
          </Field>

          <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

QuickUserChange.propTypes = {
  tenantsNames: PropTypes.arrayOf(PropTypes.object), // Ensure tenantsNames is an array of objects
  fetchHouseData: PropTypes.func.isRequired,
  createApartment: PropTypes.func.isRequired,
};

export default QuickUserChange;
    



// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Stack,
// } from "@chakra-ui/react";
// import { Field, Form, Formik } from "formik";
// import PropTypes from "prop-types";

// const QuickUserChange = ({ tenantsNames, fetchHouseData, createApartment }) => {
//   const [apartmentData, setApartmentData] = React.useState([]);

//   React.useEffect(() => {
//     const fetchApartments = async () => {
//       const data = await fetchHouseData();
//       setApartmentData(data); // Assuming `fetchHouseData` returns an array of apartments
//     };

//     fetchApartments();
//   }, [fetchHouseData]);

//   return (
//     <Formik
//       initialValues={{
//         firstName: "",
//         middleName: "",
//         otherNames: "",
//         houseId: "",
//         apartmentId: "",
//         leaseStartDate: "",
//         rentAmount: "",
//         rentDuration: "",
//       }}
//       onSubmit={(values, actions) => {
//         createApartment(values); // Call the provided handler with form data
//         actions.setSubmitting(false);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <Field name="firstName">
//             {({ field, form }) => (
//               <FormControl>
//                 <FormLabel>First Name</FormLabel>
//                 <Input {...field} placeholder="First Name" />
//               </FormControl>
//             )}
//           </Field>

//           <Field name="middleName">
//             {({ field }) => (
//               <FormControl>
//                 <FormLabel>Middle Name</FormLabel>
//                 <Input {...field} placeholder="Middle Name" />
//               </FormControl>
//             )}
//           </Field>

//           <Field name="otherNames">
//             {({ field }) => (
//               <FormControl>
//                 <FormLabel>Other Names</FormLabel>
//                 <Input {...field} placeholder="Other Names" />
//               </FormControl>
//             )}
//           </Field>

//           <Field name="houseId">
//             {({ field }) => (
//               <FormControl>
//                 <FormLabel>House ID</FormLabel>
//                 <Select {...field} placeholder="Select a house">
//                   {apartmentData.map((apartment, index) => (
//                     <option key={index} value={apartment.name}>
//                       {apartment.name}
//                     </option>
//                   ))}
//                 </Select>
//               </FormControl>
//             )}
//           </Field>

//           <Field name="apartmentId">
//             {({ field }) => (
//               <FormControl>
//                 <FormLabel>Apartment ID</FormLabel>
//                 <Select {...field} placeholder="Select an apartment">
//                   {apartmentData.map((apartment, index) => (
//                     <option key={index} value={apartment["Appartments"]}>
//                       {apartment["Appartments"]}
//                     </option>
//                   ))}
//                 </Select>
//               </FormControl>
//             )}
//           </Field>

//           <Field name="leaseStartDate">
//             {({ field }) => (
//               <FormControl>
//                 <FormLabel>Lease Start Date</FormLabel>
//                 <Input {...field} type="datetime-local" />
//               </FormControl>
//             )}
//           </Field>

//           <Field name="rentAmount">
//             {({ field }) => (
//               <FormControl>
//                 <FormLabel>Rent Amount</FormLabel>
//                 <Input {...field} placeholder="Rent Amount" />
//               </FormControl>
//             )}
//           </Field>

//           <Field name="rentDuration">
//             {({ field }) => (
//               <FormControl>
//                 <FormLabel>Rent Duration</FormLabel>
//                 <Input {...field} placeholder="e.g., Monthly" />
//               </FormControl>
//             )}
//           </Field>

//           <Button
//             mt={4}
//             colorScheme="teal"
//             isLoading={isSubmitting}
//             type="submit"
//           >
//             Submit
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// QuickUserChange.propTypes = {
//   tenantsNames: PropTypes.arrayOf(PropTypes.any),
//   fetchHouseData: PropTypes.func.isRequired,
//   createApartment: PropTypes.func.isRequired,
// };

// export default QuickUserChange;
