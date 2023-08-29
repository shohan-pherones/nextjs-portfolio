"use client";

import { FacebookProvider, CustomChat } from "react-facebook";

const MessengerChatBot = () => {
  return (
    <FacebookProvider appId="970814564086930" chatSupport>
      <CustomChat pageId="105456957619157" minimized={true} />
    </FacebookProvider>
  );
};

export default MessengerChatBot;
