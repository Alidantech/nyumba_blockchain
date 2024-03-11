/* Your MyMessages component content */
import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import { chats } from "../../database/admindata";
import ChatsPane from "../chat/widgets/ChatsPane";
import MessagesPane from "../chat/widgets/MessagesPane";
import { ChatProps } from "../../types/chat";

export default function ChatsPage() {
  const [selectedChat, setSelectedChat] = React.useState<ChatProps>(chats[0]);
  return (
    <Box sx={{ flex: 1 }}>
      <Sheet
        sx={{
          flex: 1,
          width: "100%",
          mx: "auto",
          pt: { xs: "var(--Header-height)", sm: 0 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(min-content, min(30%, 400px)) 1fr",
          },
        }}
      >
        <Sheet
          sx={{
            position: { xs: "fixed", sm: "sticky" },
            transform: {
              xs: "translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))",
              sm: "none",
            },
            transition: "transform 0.4s, width 0.4s",
            zIndex: 100,
            width: "100%",
            top: 52,
          }}
        >
          <ChatsPane
            chats={chats}
            selectedChatId={selectedChat.id}
            setSelectedChat={setSelectedChat}
          />
        </Sheet>
        <MessagesPane chat={selectedChat} />
      </Sheet>
    </Box>
  );
}
