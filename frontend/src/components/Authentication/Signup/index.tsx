import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

export const Signup = () => {
    const [show, setShow] = useState<boolean>(false);

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [pic, setPic] = useState<string>();
    const [loading, setLoading] = useState(false);
    const toast = useToast()

    const handleClick = () => setShow(!show);

    const postDetails = (pics:any) => {
        setLoading(true);
        if(pics === undefined) {
            toast({
                title: 'Please select an Image!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        if(pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics)
            data.append("upload_preset","chat-app")
            data.append("cloud_name","fylip")
            fetch("https://api.cloudinary.com/v1_1/fylip/image/upload", {
                method: 'post', body: data, 
            }).then((res) => res.json())
            .then(data => {
                setPic(data.url.toString())
                console.log(data.url.toString())
                setLoading(false);
            }).catch((err: Error) => {
                console.log(err.message);
                setLoading(false);
            })
        } else {
            toast({
                title: 'Please select an Image!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
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
            <FormControl id="confirmPassword" isRequired>
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
            isLoading={loading} 
            >
                Sign Up
            </Button>
        </VStack>
    );
}