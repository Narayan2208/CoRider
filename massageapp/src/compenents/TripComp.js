import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

const TripComp = () => {
  return (
    <>
      <Flex alignItems={"center"}  gap={"12px"} alignSelf={"stretch"} >
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
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="#141E0D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Icon>
        </Box>
        <Box   flex={"2 0 0"}>
          <Text
            color={"#141E0D"}
            fontFamily={"Mulish"}
            fontSize={"24px"}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"normal"}
          >
            Trip 1
          </Text>
        </Box>
        <Box w={"20px"} h={"20px"}>
          <Icon src="chat-screen-inside.png">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_20_167)">
                <path
                  d="M9.16667 3.33332H5.66667C4.26654 3.33332 3.56647 3.33332 3.03169 3.6058C2.56129 3.84549 2.17884 4.22794 1.93915 4.69834C1.66667 5.23312 1.66667 5.93319 1.66667 7.33332V14.3333C1.66667 15.7335 1.66667 16.4335 1.93915 16.9683C2.17884 17.4387 2.56129 17.8212 3.03169 18.0608C3.56647 18.3333 4.26654 18.3333 5.66667 18.3333H12.6667C14.0668 18.3333 14.7669 18.3333 15.3016 18.0608C15.772 17.8212 16.1545 17.4387 16.3942 16.9683C16.6667 16.4335 16.6667 15.7335 16.6667 14.3333V10.8333M6.66665 13.3333H8.0621C8.46975 13.3333 8.67358 13.3333 8.86539 13.2873C9.03545 13.2464 9.19802 13.1791 9.34714 13.0877C9.51534 12.9847 9.65946 12.8405 9.94772 12.5523L17.9167 4.58332C18.607 3.89296 18.607 2.77368 17.9167 2.08332C17.2263 1.39296 16.107 1.39296 15.4167 2.08332L7.4477 10.0523C7.15944 10.3405 7.01532 10.4847 6.91225 10.6528C6.82086 10.802 6.75352 10.9645 6.7127 11.1346C6.66665 11.3264 6.66665 11.5302 6.66665 11.9379V13.3333Z"
                  stroke="#141E0D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_20_167">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Icon>
        </Box>
      </Flex>
    </>
  );
};

export default TripComp;
