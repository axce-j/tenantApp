// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

// import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
// import { Field, Form, Formik } from "formik"
// import AllFunctions from "./functions";
// import PropTypes from "prop-types";


// function InputLoginComponent() {
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
//                 <Box className="flex flex-col gap-3">
//                 <FormControl isInvalid={form.errors.name && form.touched.name}>
//                   <FormLabel>Username/Email</FormLabel>
//                   <Input {...field[0]} placeholder='Email' />
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>

//                 <FormControl isInvalid={form.errors.name && form.touched.name}>
//                   <FormLabel>Password</FormLabel>
//                   <Input {...field[1]} placeholder='Password' />
//                   <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                 </FormControl>

//                 </Box>
                
//               )}
//             </Field>
            
//             <Button
//               mt={8}
//               w="100%"
//               colorScheme='teal'
//               isLoading={props.isSubmitting}
//               type='submit'
//               onClick={(() => handleNaviagtiontoHouse(`home`))}
//             >
//               Login
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     )
//   }
//   export default InputLoginComponent
//   InputLoginComponent.propTypes = {
//     isSubmitting: PropTypes.any
//  };

import { Navigate } from 'react-router-dom';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth"; // Firebase import
import { auth } from "../../firebase"; // Firebase config
import PropTypes from "prop-types";
import { useState } from 'react';

function InputLoginComponent() {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to="/home" />;
  }

  // Validation function
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Password is required";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then(() => {
            setRedirect(true); // Trigger the redirect
            actions.setSubmitting(false);
          })
          .catch((error) => {
            console.error(error.message);
            actions.setSubmitting(false);
          });
      }}
    >
      {(props) => (
        <Form>
          <Box className="flex flex-col gap-3">
            <FormControl isInvalid={props.errors.email && props.touched.email}>
              <FormLabel>Email</FormLabel>
              <Field
                name="email"
                validate={validateEmail}
                render={({ field }) => <Input {...field} placeholder="Email" />}
              />
              <FormErrorMessage>{props.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={props.errors.password && props.touched.password}>
              <FormLabel>Password</FormLabel>
              <Field
                name="password"
                validate={validatePassword}
                render={({ field }) => <Input {...field} placeholder="Password" type="password" />}
              />
              <FormErrorMessage>{props.errors.password}</FormErrorMessage>
            </FormControl>
          </Box>

          <Button
            mt={8}
            w="100%"
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

InputLoginComponent.propTypes = {
  isSubmitting: PropTypes.any,
};

export default InputLoginComponent;
