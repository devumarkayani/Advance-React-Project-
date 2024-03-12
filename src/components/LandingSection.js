import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Umar !";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack spacing={8} mt={3}>
       <Avatar src="https://i.pravatar.cc/150?img=7 "
        size='2xl'
        name='greet '
      />
      <Heading as='h3' size="md" noOfLines={1}>
        {greeting}

      </Heading>
      <VStack spacing={6}>
        <Heading as='h1' size="3xl" noOfLines={1}>
  {bio1}
        </Heading>
      <VStack spacing={6}>
        <Heading as='h1' size="3xl" noOfLines={1}>
 {bio2 }
        </Heading>
      </VStack>
 </VStack>
 </VStack>
 </FullScreenSection>
);

export default LandingSection;
