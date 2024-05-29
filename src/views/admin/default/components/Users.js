// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import { VSeparator } from "components/separator/Separator";
import React from "react";

export default function CommunityForumFeed(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  // Przykładowe dane forum
  const forumData = [
    {
      id: 1,
      title: "How to improve coding skills?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus tellus. Integer posuere erat a ante.",
    },
    {
      id: 2,
      title: "Best practices for React components",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus tellus. Integer posuere erat a ante.",
    },
    // Dodaj więcej elementów w zależności od potrzeb
  ];

  return (
    <Card p="20px" align="center" direction="column" w="100%" {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          Community Forum Feed
        </Text>
      </Flex>

      {/* Wyświetlanie forum */}
      <Box w="100%" p="15px" mt="15px" mx="auto">
        {forumData.map((post) => (
          <Box
            key={post.id}
            bg={cardColor}
            borderRadius="lg"
            boxShadow={cardShadow}
            p="20px"
            mb="20px"
          >
            {/* Tytuł posta */}
            <Text fontSize="lg" color={textColor} fontWeight="700" mb="10px">
              {post.title}
            </Text>
            {/* Treść posta */}
            <Text fontSize="md" color={textColor}>
              {post.content}
            </Text>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
