import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useState } from 'react';
import { Button } from "@chakra-ui/react";

const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const handleCLick = () => setShow(!show);

    

    const submitHandler = () => { };

    return <VStack spacing='5px' color='black'>
        
        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input
                    type={show ? "text" : "password"}
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement>
                    <Button h="1.75rem" size="sm" onClick={handleCLick}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>

        </FormControl>
        

        <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 40 }}
            onClick={submitHandler}
        >
            Login
        </Button>

        <Button
        colorScheme="red"
        width="100%"
        onClick={() => {
            setEmail("guest@example.com");
            setPassword("123456");
        }}
        >
            Guest
        </Button>

    </VStack>;
}

export default Login
