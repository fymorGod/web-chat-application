import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";


export const Signup = () => {
    const [show, setShow] = useState<boolean>(false);

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [pic, setPic] = useState<string>();

    const handleClick = () => setShow(!show);

    const postDetails = (pics:any) => {
        setPic(pics);
    }

    const handleSubmit = () => {

    }

    return (
        <VStack spacing={'5px'} color={'black'}>
            <FormControl id="first-name" isRequired>
                <FormLabel>
                    Name
                </FormLabel>
                <Input 
                placeholder="Enter your name"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value)}
                />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>
                    E-mail
                </FormLabel>
                <Input 
                placeholder="Enter your email"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>
                    Password
                </FormLabel>
                <InputGroup>
                    <Input 
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)}
                    />
                    <InputRightElement width={'4.5rem'}>
                        <Button h={'1.75rem'} size={'sm'} onClick={handleClick}>
                            {show ? "Hide": "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>
                    Confirm Password
                </FormLabel>
                <InputGroup>
                    <Input 
                    type={show ? "text" : "password"}
                    placeholder="Confirm password"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width={'4.5rem'}>
                        <Button h={'1.75rem'} size={'sm'} onClick={handleClick}>
                            {show ? "Hide": "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="pic" isRequired>
                <FormLabel>
                    Upload your Picture
                </FormLabel>
                <Input 
                type={'file'}
                p={1.5}
                accept={'image/*'}
                onChange={(e) => postDetails((e.target as HTMLInputElement)?.files?.[0])}
                />
            </FormControl>

            <Button 
            colorScheme={'blue'}
            width={'100%'}
            style={{marginTop: 15}}
            onClick={handleSubmit}
            >
                Sign Up
            </Button>
        </VStack>
    );
}