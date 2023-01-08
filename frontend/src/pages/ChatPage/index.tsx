import { useEffect, useState } from "react";
import { app } from "../../api/app";

type UsersProps = {
    name: string;
    email: string;
}

type ChatsProps = {
    isGroupChat: boolean;
    users: UsersProps[];
    _id: string;
    chatName: string;
}

export const ChatPage = () => {
    const [ chats, setChats ] = useState<ChatsProps[]>();

    const fetchChats = async () => {
        const { data } = await app.get('/api/chat/');

        setChats(data);
    }

    useEffect(() => {
        fetchChats();
    },[]);

    return (
        <div>
            {
                chats?.map((chat, index) => {
                    return (
                        <div key={index}>
                            {chat.chatName}
                        </div>
                    );
                })
            }
        </div>
    );
}