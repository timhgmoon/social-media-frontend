import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const axios = require('axios').default;
const SignIn = () => {

  const handleUserSignIn = async() => {
    // axios.post('http://127.0.0.1:8000/sign-in/', {
    //   email: 'timhgmoon@gmail.com',
    //   password: 'Tim1507025'
    // })
    // .then(function (response) {
    //   console.log(response.data())
    // })

    const response = await axios.post('http://127.0.0.1:8000/sign-in/', {
      email: 'timhgmoon@gmail.com',
      password: 'Tim1507025'
    });

    console.log(response)
  }
  return (
    <Form >
      <Form.Group className="mb-3 pt-5 mt-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => handleUserSignIn()}>
        Submit
      </Button>
  </Form>
  )
}

export default SignIn