import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
const UserMassageComp2 = ({massages}) => {
  const {message, id, time, sender  } = massages;
console.log(massages, "heyMassages");
const formattedMessage = message.replace('Page 0', '');
  return (
    <Flex gap={"8px"} alignItems={"flex-start"} mb={"20px"}> 
      <Box w={"35px"} h={"35px"} borderRadius={"30px"}  >
        <Image src={sender.image} w={"35px"} h={"35px"} borderRadius={"90%"}/>
      </Box>
      <Box padding={"8px"} borderRadius={"0px 12px 12px 12px"} background={"#FFF"} boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.08)"}>
        <Text fontFamily={"Mulish"} color={"#606060"} fontSize={"14px"} fontStyle={"normal"} fontWeight={800} lineHeight={"normal"}>
        {parse(formattedMessage)}
        </Text>
      </Box>
    </Flex>
  );
};

export default UserMassageComp2;

