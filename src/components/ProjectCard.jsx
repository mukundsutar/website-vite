import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { Divider, Spacer, Link } from "@chakra-ui/react";

export default function ProjectCard({ projectInfo }) {
    return (
        <>
            <Card
                variant="outline"
                width={"300px"}
                bg={"pink"}
                borderColor={"black"}
            >
                <Image
                    alt="Caffe Latte"
                    src={projectInfo.photo}
                    objectFit="cover"
                    maxW="100%"
                />

                <Stack height={"100%"}>
                    <CardBody pb={0}>
                        <Heading size="md" isTruncated>
                            {projectInfo.name}{" "}
                        </Heading>
                        <Tooltip
                            label={projectInfo.description}
                            placement="auto"
                        >
                            <Text isTruncated>{projectInfo.description}</Text>
                        </Tooltip>
                    </CardBody>

                    <Divider />

                    <CardFooter pt={2} pb={3} display={"flex"}>
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <Spacer />

                        <Link href={projectInfo.link} isExternal>
                            <Button
                                type="button"
                                variant="solid"
                                colorScheme="green"
                            >
                                Demo
                            </Button>
                        </Link>

                        <Spacer />

                        <Link href={projectInfo.githubRepo} isExternal>
                            <Button
                                type="button"
                                variant="solid"
                                color="aliceblue"
                                bg="#080808"
                                _hover={{ color: "#080808", bg: "aliceblue" }}
                            >
                                GitHub
                            </Button>
                        </Link>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    );
}
