import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useState } from 'react';
import { Button } from "@chakra-ui/react";

const Signup = () => {

    const [show, setShow] = useState(false)
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    const handleCLick = () => setShow(!show);

    const postDetails = (pics) => { };

    const submitHandler = () => { };

    return <VStack spacing='5px' color='black'>
        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input
                placeholder='Enter your name'
                onChange={(e) => setName(e.target.value)}
            />
        </FormControl>
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
        <FormControl id='confirmpassword' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
                <Input
                    type={show ? "text" : "password"}
                    placeholder='Confirm your password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <InputRightElement>
                    <Button h="1.75rem" size="sm" onClick={handleCLick}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>

        </FormControl>
        <FormControl id='pic' isRequired>
            <FormLabel>Upload your Picture</FormLabel>
            <Input
                type="file"
                p={1.5}
                accept="image/*"
                onChange={(e) => postDetails(e.target.files[0])}
            />
        </FormControl>

        <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 40 }}
            onClick={submitHandler}
        >
            Sign Up
        </Button>
    </VStack>;
}

export default Signup;
