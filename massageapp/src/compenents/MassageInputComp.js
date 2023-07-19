import { Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";

const MassageInputComp = () => {
  return (
    <>
      <Flex position={"sticky"} bottom={0}>
        <Box h={"50px"} w={"100%"} display={"flex"} alignItems={"center"} background={"white"} >
          <Box  flex={"1 0 0"}>
            {" "}
            <input size="40" style={{outline:"none", border: "none"}} type="text" placeholder="Reply to @Rohit Yadav" width={"100%"} />
          </Box>
          <Box display={"flex"}  justifyContent={"space-between"} alignItems={"center"} >
         
          <Icon w={"100%"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.6271 9.08291L10.1141 16.5959C8.40553 18.3045 5.63544 18.3045 3.92689 16.5959C2.21835 14.8874 2.21835 12.1173 3.92689 10.4087L11.4399 2.89573C12.5789 1.7567 14.4257 1.7567 15.5647 2.89573C16.7037 4.03476 16.7037 5.88149 15.5647 7.02052L8.34631 14.2389C7.7768 14.8084 6.85343 14.8084 6.28391 14.2389C5.7144 13.6694 5.7144 12.746 6.28391 12.1765L12.6184 5.84201"
                  stroke="#141E0D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Icon>
        
          <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.75036 10H4.16702M4.09648 10.2429L2.15071 16.0552C1.99785 16.5118 1.92142 16.7401 1.97627 16.8807C2.0239 17.0028 2.1262 17.0954 2.25244 17.1306C2.3978 17.1712 2.61736 17.0724 3.05647 16.8748L16.9827 10.608C17.4113 10.4151 17.6256 10.3187 17.6918 10.1847C17.7494 10.0683 17.7494 9.93174 17.6918 9.81535C17.6256 9.68139 17.4113 9.58495 16.9827 9.39208L3.05161 3.12313C2.61383 2.92612 2.39493 2.82762 2.24971 2.86803C2.1236 2.90312 2.0213 2.99544 1.97351 3.11731C1.91847 3.25764 1.99408 3.48545 2.14531 3.94108L4.09702 9.8213C4.12299 9.89955 4.13598 9.93868 4.14111 9.9787C4.14565 10.0142 4.14561 10.0502 4.14097 10.0857C4.13574 10.1257 4.12265 10.1648 4.09648 10.2429Z"
                  stroke="#141E0D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Icon>
          </Box>
         
         
           
          </Box>
        
      </Flex>
    </>
  );
};

export default MassageInputComp;
