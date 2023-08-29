"use client";

import { useMediaQuery } from "@mantine/hooks";
import { FacebookProvider, CustomChat } from "react-facebook";

const MessengerChatBot = () => {
  const large = useMediaQuery("(min-width: 1024px)");

  if (large) {
    return (
      <FacebookProvider appId="970814564086930" chatSupport>
        <CustomChat pageId="101360035518550" minimized={true} />
      </FacebookProvider>
    );
  } else {
    return null;
  }
};

export default MessengerChatBot;
