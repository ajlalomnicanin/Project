import { Box, Slide } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../promotions";

const messages = [
  "Unlock savings: 20% off awaits your initial order!",
  " Discover exclusive deals with your first purchase!",
];

function Promotions() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
  const [messagesIndex, setMessagesIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessagesIndex((prev) => (prev + 1) % messages.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 200,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>{messages[messagesIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}

export default Promotions;
