// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { Field, Form, Formik } from "formik"
// import AllFunctions from "./functions";


function SignUpComponent() {
//   const { handleNaviagtiontoHouse } = AllFunctions();
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
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Username/Email</FormLabel>
                  <Input {...field[0]} placeholder='Email' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Password</FormLabel>
                  <Input {...field[1]} placeholder='Password' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>

                </Box>
                
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            //   onClick={(() => handleNaviagtiontoHouse(`home`))}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    )
  }
  export default SignUpComponent;