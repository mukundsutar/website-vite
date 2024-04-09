import React from "react";

import { Button, Link, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box, Divider } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { Tag, TagLabel } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import Skill from "./Skill";

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
                                <br />I am <span> </span>
                                <TypeAnimation
                                    sequence={[
                                        "Mukund Sutar",
                                        2000,
                                        "Software Engineer",
                                        2000,
                                        "🇮🇳 Web Dev",
                                        2000,
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    preRenderFirstString={true}
                                    style={{
                                        // fontSize: "2em",
                                        display: "inline-block",
                                    }}
                                />
                            </Text>

                            <Spacer />

                            <VStack spacing={4}>
                                <Link
                                    href="mailto:mukundsutar1512@gmail.com"
                                    isExternal
                                >
                                    <Tag
                                        size="lg"
                                        colorScheme="red"
                                        borderRadius="full"
                                    >
                                        <EmailIcon mr={2} />

                                        <TagLabel>
                                            <Link
                                                href="mailto:mukundsutar1512@gmail.com"
                                                isExternal
                                            >
                                                mukundsutar1512@gmail.com
                                            </Link>
                                        </TagLabel>
                                    </Tag>
                                </Link>

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
                                    <Link
                                        href="src/assets/docs/Mukund_Sutar.pdf"
                                        isExternal
                                    >
                                        <Button>Resume</Button>
                                    </Link>
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

                        <Skill />
                    </CardBody>
                </Card>
            </Box>
        </>
    );
}
