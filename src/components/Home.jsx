import React from "react";

import { Avatar, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box, Divider } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Phone } from "@mui/icons-material";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
    return (
        <>
            <Box bg="yellow" height="100%">
                <Card bg="teal">
                    <CardBody m={5}>
                        <Flex justify="center" align="center">
                            <Image
                                src="src/assets/img/myPhoto_square.jpg"
                                height="350"
                                style={{
                                    maskImage: "url(src/assets/img/blob.svg)",
                                    maskRepeat: "no-repeat",
                                }}
                            />

                            <Spacer />

                            <Text fontSize={40}>
                                Hello there!
                                <br />I am Mukund Sutar
                            </Text>

                            <Spacer />

                            <VStack spacing={4}>
                                <Tag
                                    size="lg"
                                    colorScheme="red"
                                    borderRadius="full"
                                >
                                    <EmailIcon mr={2} />

                                    <TagLabel>
                                        mukundsutar1512@gmail.com
                                    </TagLabel>
                                </Tag>

                                <Tag
                                    size="lg"
                                    colorScheme="red"
                                    borderRadius="full"
                                >
                                    <PhoneIcon mr={2} />

                                    <TagLabel>8275812026</TagLabel>
                                </Tag>

                                <Divider />

                                <HStack spacing={4}>
                                    <IconButton
                                        aria-label="Search database"
                                        icon={<BsGithub />}
                                    />
                                    <IconButton
                                        aria-label="Search database"
                                        icon={<BsLinkedin />}
                                    />
                                </HStack>
                            </VStack>

                            <Spacer />
                        </Flex>

                        <Divider mt={5} mb={5} />

                        <Card p={5}>
                            <Text>
                                Hello there!
                                <br />
                                <br />
                                I'm Mukund Sutar, a passionate Developer with a
                                deep love for DSA. When I'm not immersed in
                                code, you'll often find me exploring the
                                captivating worlds of Sci-fi movies, taking on
                                the role of a part-time gamer, and indulging in
                                my other great love - all things automotive.
                                <br />
                                <br />
                                Based in Pune, India, I'm a dedicated Software
                                Engineer on a mission to craft digital
                                experiences that delight and inspire.
                            </Text>
                        </Card>

                        <br />

                        <Card p={5} bg={'deeppink'}>
                            <Text fontSize={25}>
                                What I know:
                                <br />
                                <Stack direction={"row"} fontSize={18}>
                                    <Card>
                                        <CardHeader>Frontend</CardHeader>
                                        <Divider />
                                        <CardBody>
                                            {[
                                                "HTML",
                                                "CSS",
                                                "JavaScript",
                                                "React.js",
                                                "Flutter",
                                                "Material UI",
                                                "Chakra UI",
                                            ].map((skillName, index) => (
                                                <Tag
                                                    key={index}
                                                    size={"lg"}
                                                    variant="solid"
                                                    colorScheme={
                                                        skillName ===
                                                            "React.js" ||
                                                        skillName === "Flutter"
                                                            ? "purple"
                                                            : "teal"
                                                    }
                                                    m={1}
                                                >
                                                    {skillName}
                                                </Tag>
                                            ))}
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            Backend & Database
                                        </CardHeader>
                                        <Divider />
                                        <CardBody>
                                            {[
                                                "Node.js",
                                                "Express.js",
                                                "MySQL",
                                                "MongoDB",
                                                "Axios",
                                            ].map((skillName, index) => (
                                                <Tag
                                                    key={index}
                                                    size={"lg"}
                                                    variant="solid"
                                                    colorScheme={
                                                        skillName ===
                                                            "Node.js" ||
                                                        skillName === "MongoDB"
                                                            ? "purple"
                                                            : "teal"
                                                    }
                                                    m={1}
                                                >
                                                    {skillName}
                                                </Tag>
                                            ))}
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            Dev Tools & Framework
                                        </CardHeader>
                                        <Divider />
                                        <CardBody>
                                            {[
                                                "Git",
                                                "REST API",
                                                "Jotai State Management",
                                                "Zustand State Management",
                                            ].map((skillName, index) => (
                                                <Tag
                                                    key={index}
                                                    size={"lg"}
                                                    variant="solid"
                                                    colorScheme={
                                                        skillName === "REST API"
                                                            ? "purple"
                                                            : "teal"
                                                    }
                                                    m={1}
                                                >
                                                    {skillName}
                                                </Tag>
                                            ))}
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            Programming Languages
                                        </CardHeader>
                                        <Divider />
                                        <CardBody>
                                            {[
                                                "Java",
                                                "Python",
                                                "C",
                                                "C++",
                                                "Dart",
                                            ].map((skillName, index) => (
                                                <Tag
                                                    key={index}
                                                    size={"lg"}
                                                    variant="solid"
                                                    colorScheme={
                                                        skillName === "Java" ||
                                                        skillName === "Dart"
                                                            ? "purple"
                                                            : "teal"
                                                    }
                                                    m={1}
                                                >
                                                    {skillName}
                                                </Tag>
                                            ))}
                                        </CardBody>
                                    </Card>
                                </Stack>
                            </Text>
                        </Card>
                    </CardBody>
                </Card>
            </Box>
        </>
    );
}
