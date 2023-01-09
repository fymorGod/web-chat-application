import React from "react";
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { Login } from "../../components/Authentication/Login";
import { Signup } from "../../components/Authentication/Signup";

export const HomePage = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box
            display='flex'
            justifyContent='center'
            p={3}
            bg={'white'}
            w='100%'
            m='40px 0 15px 0'
            borderRadius="lg"
            borderWidth='1px'
            >
                <Text fontSize={'3xl'} fontFamily={'Work sans'} color={'black'}>Message Chat</Text>
            </Box>
            <Box bg={'white'} w={'100%'} p={4} borderRadius={'lg'} color={'black'} borderWidth={'1px'} >
            <Tabs variant='soft-rounded'>
                <TabList mb={'1em'}>
                    <Tab width={'50%'}>Login</Tab>
                    <Tab width={'50%'}>Sign Up</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Login/>
                    </TabPanel>
                    <TabPanel>
                        <Signup/>
                    </TabPanel>
                </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
}

