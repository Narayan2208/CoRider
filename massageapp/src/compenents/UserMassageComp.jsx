import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const UserMassageComp = ({ massages }) => {
  const { message, id, time, sender } = massages;
  const formattedMessage = message.replace("Page 0", "");

  const isBlueBackground =
    sender.user_id === "54fbcca87afa4527b28221df348018b1";

  // Format time to AM/PM format
  const formattedTime = new Date(time).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <Flex gap={"8px"} alignItems={"flex-start"} mb={"20px"}>
      {isBlueBackground ? (
        ""
      ) : (
        <Box w={"35px"} h={"35px"} borderRadius={"30px"} position={"relative"}>
          <Image
            src={sender.image}
            w={"35px"}
            h={"35px"}
            borderRadius={"90%"}
          />
          <Icon position={"absolute"} bottom={0} left={25}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="check-verified-02">
                <rect
                  id="Rectangle 30"
                  x="2.90874"
                  y="2.90875"
                  width="3.18182"
                  height="2.54545"
                  fill="white"
                />
                <path
                  id="Solid"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.00966 4.18146C1.00957 4.13888 1.0012 4.09634 0.984573 4.05626L0.755025 3.50047C0.706529 3.38342 0.681478 3.25777 0.681458 3.13107C0.681437 3.0043 0.706395 2.87877 0.754906 2.76165C0.803417 2.64453 0.87453 2.53812 0.964182 2.44849C1.05381 2.35889 1.16021 2.28782 1.27731 2.23935L1.83219 2.0095C1.91255 1.97627 1.97665 1.91246 2.0101 1.83219L2.24001 1.27714C2.33794 1.0407 2.52578 0.852849 2.76222 0.754911C2.99865 0.656973 3.26431 0.656973 3.50074 0.754911L4.05537 0.984654C4.13585 1.01788 4.22633 1.01784 4.30675 0.984465L4.30738 0.984204L4.8625 0.755249C5.09885 0.657444 5.36456 0.657412 5.60089 0.755305C5.83728 0.853224 6.0251 1.04102 6.12304 1.2774L6.34743 1.81912C6.34942 1.8234 6.35133 1.82774 6.35315 1.83213C6.38641 1.91258 6.45023 1.97653 6.53059 2.00996L7.0858 2.23994C7.32223 2.33788 7.51008 2.52573 7.60801 2.76217C7.70594 2.99861 7.70594 3.26426 7.60801 3.5007L7.37817 4.05561C7.36147 4.09591 7.35313 4.13885 7.35313 4.18155C7.35313 4.22426 7.36147 4.267 7.37817 4.30731L7.60801 4.86221C7.70594 5.09865 7.70594 5.36431 7.60801 5.60074C7.51008 5.83718 7.32223 6.02503 7.0858 6.12297L6.53059 6.35295C6.45023 6.38638 6.38641 6.45033 6.35315 6.53078C6.35133 6.53518 6.34942 6.53952 6.34743 6.54379L6.12304 7.08552C6.0251 7.32189 5.83728 7.50969 5.60089 7.60761C5.36456 7.7055 5.09885 7.70547 4.8625 7.60767L4.30738 7.37871L4.30675 7.37845C4.22633 7.34508 4.13585 7.34503 4.05537 7.37826L3.50074 7.608C3.26431 7.70594 2.99865 7.70594 2.76222 7.608C2.52578 7.51007 2.33794 7.32221 2.24001 7.08578L2.0101 6.53072C1.97665 6.45045 1.91255 6.38665 1.83219 6.35342L1.27731 6.12357C1.16021 6.07509 1.05381 6.00402 0.964182 5.91442C0.87453 5.82479 0.803417 5.71838 0.754906 5.60126C0.706395 5.48414 0.681437 5.35861 0.681458 5.23184C0.681478 5.10514 0.706529 4.9795 0.755025 4.86245L0.984573 4.30665C1.0012 4.26657 1.00957 4.22404 1.00966 4.18146ZM5.52008 3.61099C5.64434 3.48673 5.64434 3.28527 5.52008 3.16101C5.39582 3.03676 5.19436 3.03676 5.07011 3.16101L3.86328 4.36784L3.4519 3.95647C3.32764 3.83221 3.12618 3.83221 3.00192 3.95647C2.87767 4.08073 2.87767 4.28219 3.00192 4.40645L3.63829 5.04281C3.76254 5.16707 3.96401 5.16707 4.08826 5.04281L5.52008 3.61099Z"
                  fill="#1C63D5"
                />
              </g>
            </svg>
          </Icon>
        </Box>
      )}
      <Box
        padding={"8px"}
        borderRadius={
          isBlueBackground ? "12px 0px 12px 12px" : "0px 12px 12px 12px"
        }
        ml={10}
        mr={10}
        background={"#FFF"}
        boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.08)"}
        backgroundColor={isBlueBackground ? "#1C63D5" : "white"}
      >
        <Text
          fontFamily={"Mulish"}
          color={isBlueBackground ? "#FFF" : "#606060"}
          fontSize={"14px"}
          fontStyle={"normal"}
          fontWeight={800}
          lineHeight={"normal"}
        >
          {parse(formattedMessage)}
        </Text>
        <Text
          fontFamily={"Mulish"}
          fontSize={"10px"}
          color={isBlueBackground ? "white" : "#606060"}
          align={"end"}
        >
          {formattedTime}
        </Text>
      </Box>
    </Flex>
  );
};

export default UserMassageComp;
