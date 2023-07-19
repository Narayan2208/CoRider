import { Box, Flex } from "@chakra-ui/react";
import "./ChatScreenInside.css";
import TopBar from "./TopBar";
import TripComp from "./TripComp";
import FromToComp from "./FromToComp";
import UserMassageComp from "./UserMassageComp";
import MassageInputComp from "./MassageInputComp";
import React, { useEffect, useState, useRef } from "react";

const ChatScreenInside = () => {
  const [chatData, setChatData] = useState([]);
  const [page, setPage] = useState(0);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await fetch(
          `https://qa.corider.in/assignment/chat?page=${page}`
        );
        const data = await response.json();
        const sortedChats = [...chatData, ...data.chats].sort((a, b) => {
          return new Date(a.time) - new Date(b.time);
        });
        setChatData(sortedChats);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };

    fetchChatData();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (chatContainerRef.current) {
      observer.observe(chatContainerRef.current);
    }

    return () => {
      if (chatContainerRef.current) {
        observer.unobserve(chatContainerRef.current);
      }
    };
  }, []);

  const handleObserver = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <Box background={"#FAF9F4"}  w={"375px"}>
        <TopBar />
        <Flex
          padding={"0px 16px 0px 16px"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <TripComp />
          <FromToComp />
        </Flex>

        {chatData.map((massages, id) => (
          <UserMassageComp key={id} massages={massages} />
        ))}
        <div ref={chatContainerRef}></div>
        <Flex justifyContent={"center"}>
          <MassageInputComp />
        </Flex>
      </Box>
    </>
  );
};

export default ChatScreenInside;
