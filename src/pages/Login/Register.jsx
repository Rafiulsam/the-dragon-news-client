import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Register = () => {
    const { createUser } = useContext(AuthContext)

        const handleRegister = event =>{
            event.preventDefault()
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            const name = form.name.value;
            const photo =form.photo.value;

            console.log(name, email, password);
            createUser(email, password)
            .then(result=>{
                const createdUser = result.user;
                console.log(createdUser);
                form.reset()
            })
            .catch(error=>{
                console.log(error);
            })
        }
    return (
        <Container className='w-25 mx-auto mb-5'>
            <h3>Please Register</h3>
            <hr />
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter you photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms and conditions" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className='text-secondary'>
                    Already have an account? <Link to={'/login'}>Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;