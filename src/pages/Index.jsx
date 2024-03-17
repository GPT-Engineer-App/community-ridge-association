import React from "react";
import { Box, Heading, Text, Flex, Image, Button, Stack, SimpleGrid, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={6} bg="teal.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            RRROCA
          </Heading>
        </Flex>

        <Stack direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
          <Link href="#about" px={2} py={1} rounded={"md"}>
            About
          </Link>
          <Link href="#events" px={2} py={1} rounded={"md"}>
            Events
          </Link>
          <Link href="#contact" px={2} py={1} rounded={"md"}>
            Contact
          </Link>
        </Stack>
      </Flex>

      {/* Hero */}
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Welcome to RRROCA
        </Heading>
        <Text color={"gray.500"} mb={6}>
          The Rocky Ridge Royal Oak Community Association serving the northwest Calgary communities.
        </Text>
        <Image src="https://cdnarchitect.s3.ca-central-1.amazonaws.com/2018/08/31165336/RR-1M7A4709_Wach.jpg" alt="Rocky Ridge Royal Oak Community" mb={8} />
      </Box>

      {/* About Section */}
      <Box id="about" py={12} textAlign="center">
        <Heading as="h3" size="lg" mb={6}>
          About RRROCA
        </Heading>
        <Text maxW="2xl" mx="auto">
          The Rocky Ridge Royal Oak Community Association (RRROCA) is a volunteer organization representing the residents of Rocky Ridge and Royal Oak in northwest Calgary. We are dedicated to enhancing the quality of life in our community through programs, events and advocacy.
        </Text>
      </Box>

      {/* Events Section */}
      <Box id="events" py={12} textAlign="center">
        <Heading as="h3" size="lg" mb={6}>
          Upcoming Events
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="6xl" mx="auto">
          <Box>
            <Heading as="h4" size="md" mb={2}>
              Community Cleanup
            </Heading>
            <Text fontSize="sm">June 10, 2023</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md" mb={2}>
              Stampede Breakfast
            </Heading>
            <Text fontSize="sm">July 8, 2023</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md" mb={2}>
              Fall Festival
            </Heading>
            <Text fontSize="sm">September 23, 2023</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={12} textAlign="center">
        <Heading as="h3" size="lg" mb={6}>
          Contact Us
        </Heading>
        <Text maxW="md" mx="auto" mb={6}>
          Get in touch with RRROCA for inquiries, feedback or volunteer opportunities.
        </Text>
        <Button colorScheme="teal" size="lg">
          Send Message
        </Button>
      </Box>

      {/* Footer */}
      <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: "4", md: "8" }} bgColor="gray.100">
        <Stack>
          <Stack direction="row" spacing="4" align="center" justify="space-between">
            <Heading as="h2" size="lg">
              RRROCA
            </Heading>
            <Stack direction="row" spacing="6">
              <Link href="https://www.facebook.com/RRROCA">
                <FaFacebook />
              </Link>
              <Link href="https://twitter.com/RRROCA_YYC">
                <FaTwitter />
              </Link>
              <Link href="https://www.instagram.com/rrroca_yyc/">
                <FaInstagram />
              </Link>
            </Stack>
          </Stack>
          <Text fontSize="sm">&copy; {new Date().getFullYear()} Rocky Ridge Royal Oak Community Association. All rights reserved.</Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
