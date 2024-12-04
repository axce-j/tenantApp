// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';
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

// const QuickHouseChange = (props) => {
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
//                   <FormLabel>House Name</FormLabel>
//                   <Input {...field[1]} placeholder="Paul" />
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>
//                 <FormControl isInvalid={form.errors.name && form.touched.name}>
//                   <FormLabel>Code Name</FormLabel>
//                   <Input {...field[1]} placeholder="Paul" />
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>
//                 <FormControl isInvalid={form.errors.name && form.touched.name}>
//                   <FormLabel>Location</FormLabel>
//                   <Input {...field[1]} placeholder="Paul" />
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
// export default QuickHouseChange;
// QuickHouseChange.propTypes = {
//   tenantsNames: PropTypes.arrayOf(PropTypes.any),
//   isSubmitting: PropTypes.any
// };

import React from "react";
import { Box, Button, FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { db } from "../../firebase"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods
import PropTypes from "prop-types";

const QuickHouseChange = (props) => {
  const tenantsNames = props.tenantsNames;

  const handleSubmit = async (values) => {
    try {
      // Adding the new house data to Firestore
      await addDoc(collection(db, "houses"), {
        name: values.name,
        code: values.code,
        location: values.location,
        Appartments: values.Appartments,
        Id:values.Id
        // Add any other fields you need here
      });
      alert("House added successfully!");
    } catch (error) {
      console.error("Error adding house: ", error);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", code: "", location: "" }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <Box>
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>House Name</FormLabel>
                  <Input {...field} placeholder="House Name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              </Box>
            )}
          </Field>

          <Field name="code">
            {({ field, form }) => (
              <Box>
                <FormControl isInvalid={form.errors.code && form.touched.code}>
                  <FormLabel>Code Name</FormLabel>
                  <Input {...field} placeholder="Code" />
                  <FormErrorMessage>{form.errors.code}</FormErrorMessage>
                </FormControl>
              </Box>
            )}
          </Field>

          <Field name="location">
            {({ field, form }) => (
              <Box>
                <FormControl isInvalid={form.errors.location && form.touched.location}>
                  <FormLabel>Location</FormLabel>
                  <Input {...field} placeholder="Location" />
                  <FormErrorMessage>{form.errors.location}</FormErrorMessage>
                </FormControl>
              </Box>
            )}
          </Field>
          <Field name="Appartments">
            {({ field, form }) => (
              <Box>
                <FormControl isInvalid={form.errors.Appartments && form.touched.Appartments}>
                  <FormLabel>Number of Appartments</FormLabel>
                  <Input {...field} placeholder="No." />
                  <FormErrorMessage>{form.errors.Appartments}</FormErrorMessage>
                </FormControl>
              </Box>
            )}
          </Field>
          <Field name="Id">
            {({ field, form }) => (
              <Box>
                <FormControl isInvalid={form.errors.Id && form.touched.Id}>
                  <FormLabel>House Id</FormLabel>
                  <Input {...field} placeholder="Id" />
                  <FormErrorMessage>{form.errors.Id}</FormErrorMessage>
                </FormControl>
              </Box>
            )}
          </Field>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

QuickHouseChange.propTypes = {
  tenantsNames: PropTypes.arrayOf(PropTypes.any),
};

export default QuickHouseChange;
