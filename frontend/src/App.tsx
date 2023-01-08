import { Button } from "@chakra-ui/react";
import { Routes, Route  } from 'react-router-dom';
import { ChatPage } from "./pages/ChatPage";
import { HomePage } from "./pages/HomePage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/chats" element={<ChatPage />}/>
      </Routes>
    </div>
  )
}

export default App
