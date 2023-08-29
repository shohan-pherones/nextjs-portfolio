"use client";

import { FacebookProvider, CustomChat } from "react-facebook";

const MessengerChatBot = () => {
  return (
    <FacebookProvider appId="970814564086930" chatSupport>
      <CustomChat pageId="101360035518550" minimized={true} />
    </FacebookProvider>
  );
};

export default MessengerChatBot;
