import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import React, {  useState } from "react";
import { useToast } from "@chakra-ui/react"
import { app } from "../../../api/app";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [show, setShow] = useState<boolean>(false);
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [loading, setLoading] = useState<boolean>();
    const navigate = useNavigate();
    const toast = useToast();

    const handleClick = () => setShow(!show);

    const handleSubmit = async () => {
        setLoading(true);
        if (!email || !password) {
            toast({
                title: 'Please fill all the fields',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'bottom',
            });
            setLoading(false);
            return;
        }

        try {
            const config = {
              headers: {
                "Content-type": "application/json",
              },
            };

            const { data } = await app.post('api/user/login', {
                email, 
                password
            }, config);

            toast({
                title: 'Login Successful',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });

            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false);
            navigate('/chats');

        } catch (error:any) {
            toast({
                title: 'Error occured!',
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: 'bottom',
            });
            setLoading(false);
        }
    }

    return (
        <VStack spacing={'5px'} color={'black'}>
            <FormControl id="email" isRequired>
                <FormLabel>
                    E-mail
                </FormLabel>
                <Input 
                value={email}
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
                    value={password}
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
            isLoading={loading}
            >
                Get Guest User Credentials
            </Button>
        </VStack>
    );
}