// // The below import defines which components come from formik
// // import { Field, Form, Formik } from 'formik';

// import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
// import { Field, Form, Formik } from "formik"
// import AllFunctions from "./functions";
// import PropTypes from "prop-types";


// function SignUpComponent() {
//   const { handleNaviagtiontoHouse } = AllFunctions();
//     function validateName(value) {
//       let error
//       if (!value) {
//         error = 'Name is required'
//       } else if (value.toLowerCase() !== 'naruto') {
//         error = "Jeez! You're not a fan 😱"
//       }
//       return error
//     }
  
//     return (
//       <Formik
//         initialValues={{ name: ['Email','Password'] }}
//         onSubmit={(values, actions) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2))
//             actions.setSubmitting(false)
//           }, 1000)
//         }}
//       >
//         {(props) => (
//           <Form>
//             <Field name='Email' validate={validateName}>
//               {({ field, form }) => (
//             <Box>
//             <Box display={{base:"block" , sm:"flex"}} gap="12px">
//               <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
//                 <FormLabel>First Name</FormLabel>
//                 <Input {...field[0]} placeholder="Name" />
//                 <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
//               </FormControl>
      
//               <FormControl isInvalid={form.errors.middleName && form.touched.middleName}>
//                 <FormLabel>Middle Name</FormLabel>
//                 <Input {...field[1]} placeholder="Name" />
//                 <FormErrorMessage>{form.errors.middleName}</FormErrorMessage>
//               </FormControl>
//             </Box >
      
//             <FormControl isInvalid={form.errors.usernameOrEmail && form.touched.usernameOrEmail}>
//               <FormLabel>Username</FormLabel>
//               <Input {...field[3]} placeholder="Username" />
//               <FormErrorMessage>{form.errors.username}</FormErrorMessage>
//             </FormControl>
      
//             <FormControl isInvalid={form.errors.otherNames && form.touched.otherNames}>
//               <FormLabel>Email</FormLabel>
//               <Input {...field[2]} placeholder="Email" />
//               <FormErrorMessage>{form.errors.Email}</FormErrorMessage>
//             </FormControl>
      
//             <FormControl isInvalid={form.errors.password && form.touched.password}>
//               <FormLabel>Password</FormLabel>
//               <Input {...field[4]} placeholder="Password" type="password" />
//               <FormErrorMessage>{form.errors.password}</FormErrorMessage>
//             </FormControl>
      
//             <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
//               <FormLabel>Confirm Password</FormLabel>
//               <Input {...field[5]} placeholder="Password" type="password" />
//               <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
//             </FormControl>
//           </Box>
                
//               )}
//             </Field>
//             <Button
//               mt={4}
//               colorScheme='teal'
//               isLoading={props.isSubmitting}
//               type='submit'
//               onClick={(() => handleNaviagtiontoHouse(`sign-in`))}
//             >
//               Create
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     )
//   }
//   export default SignUpComponent;

//   SignUpComponent.propTypes = {
//      isSubmitting: PropTypes.any
//   };
import { useState } from "react";
import { auth } from "../../firebase"; // Ensure this points to your firebase.js file
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

function SignUpComponent() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (values, actions) => {
    setLoading(true);
    try {
      // Create a user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // Display a success toast notification
      toast({
        title: "Account created.",
        description: `Welcome, ${userCredential.user.email}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Reset the form
      actions.resetForm();
    } catch (error) {
      // Handle and display Firebase authentication errors
      toast({
        title: "Error creating account.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email is required.";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address.";
        }
        if (!values.password) {
          errors.password = "Password is required.";
        } else if (values.password.length < 6) {
          errors.password = "Password must be at least 6 characters long.";
        }
        return errors;
      }}
      onSubmit={handleSignUp}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box mb={4}>
            <Field name="email">
              {({ field }) => (
                <FormControl isInvalid={errors.email && touched.email}>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder="Email" />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Box>

          <Box mb={4}>
            <Field name="password">
              {({ field }) => (
                <FormControl isInvalid={errors.password && touched.password}>
                  <FormLabel>Password</FormLabel>
                  <Input {...field} type="password" placeholder="Password" />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Box>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={loading || isSubmitting}
            type="submit"
          >
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpComponent;
