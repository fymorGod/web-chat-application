import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";

export const Login = () => {
    const [show, setShow] = useState<boolean>(false);
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleClick = () => setShow(!show);

    const handleSubmit = () => {

    }

    return (
        <VStack spacing={'5px'} color={'black'}>
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

            <Button 
            colorScheme={'blue'}
            width={'100%'}
            style={{marginTop: 15}}
            onClick={handleSubmit}
            >
                Login
            </Button>
            <Button 
            variant={'solid'}
            colorScheme={'red'}
            width={'100%'}
            style={{marginTop: 15}}
            onClick={() => {
                setEmail('guest@example.com');
                setPassword("123456");
            }}
            >
                Get Guest User Credentials
            </Button>
        </VStack>
    );
}