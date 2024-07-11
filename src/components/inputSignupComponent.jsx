// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { Field, Form, Formik } from "formik"
import AllFunctions from "./functions";
import PropTypes from "prop-types";


function SignUpComponent() {
  const { handleNaviagtiontoHouse } = AllFunctions();
    function validateName(value) {
      let error
      if (!value) {
        error = 'Name is required'
      } else if (value.toLowerCase() !== 'naruto') {
        error = "Jeez! You're not a fan 😱"
      }
      return error
    }
  
    return (
      <Formik
        initialValues={{ name: ['Email','Password'] }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Field name='Email' validate={validateName}>
              {({ field, form }) => (
            <Box>
            <Box display={{base:"block" , sm:"flex"}} gap="12px">
              <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                <FormLabel>First Name</FormLabel>
                <Input {...field[0]} placeholder="Name" />
                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
              </FormControl>
      
              <FormControl isInvalid={form.errors.middleName && form.touched.middleName}>
                <FormLabel>Middle Name</FormLabel>
                <Input {...field[1]} placeholder="Name" />
                <FormErrorMessage>{form.errors.middleName}</FormErrorMessage>
              </FormControl>
            </Box >
      
            <FormControl isInvalid={form.errors.usernameOrEmail && form.touched.usernameOrEmail}>
              <FormLabel>Username</FormLabel>
              <Input {...field[3]} placeholder="Username" />
              <FormErrorMessage>{form.errors.username}</FormErrorMessage>
            </FormControl>
      
            <FormControl isInvalid={form.errors.otherNames && form.touched.otherNames}>
              <FormLabel>Email</FormLabel>
              <Input {...field[2]} placeholder="Email" />
              <FormErrorMessage>{form.errors.Email}</FormErrorMessage>
            </FormControl>
      
            <FormControl isInvalid={form.errors.password && form.touched.password}>
              <FormLabel>Password</FormLabel>
              <Input {...field[4]} placeholder="Password" type="password" />
              <FormErrorMessage>{form.errors.password}</FormErrorMessage>
            </FormControl>
      
            <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
              <FormLabel>Confirm Password</FormLabel>
              <Input {...field[5]} placeholder="Password" type="password" />
              <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
            </FormControl>
          </Box>
                
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
              onClick={(() => handleNaviagtiontoHouse(`sign-in`))}
            >
              Create
            </Button>
          </Form>
        )}
      </Formik>
    )
  }
  export default SignUpComponent;

  SignUpComponent.propTypes = {
     isSubmitting: PropTypes.any
  };