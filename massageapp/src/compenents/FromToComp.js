import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

const FromToComp = () => {
  return (
    <>
      <Flex w={"343px"} alignItems={"center"} gap={"12px"}>
        <Box w={50} h={50} borderRadius={"30"} border={"2px solid black"}></Box>
        <Box w={"245px"}>
          <Text
            fontFamily={"Mulish"}
            color={"#606060"}
            fontSize={"16px"}
            fontStyle={"normal"}
            fontWeight={500}
            lineHeight={"normal"}
          >
            From{" "}
            <span style={{ color: "#606060", fontWeight: "bolder" }}>
              IGI Airport, T3
            </span>{" "}
            <br/>
            To{" "}
            <span style={{ color: "#606060", fontWeight: "bolder" }}>
              Sector 28
            </span>
          </Text>
        </Box>
        <Box w={"24px"} h={"24px"}>
          <Icon src="chat-screen-inside.png">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#141E0D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                stroke="#141E0D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                stroke="#141E0D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Icon>
        </Box>
      </Flex>
    </>
  );
};

export default FromToComp;
