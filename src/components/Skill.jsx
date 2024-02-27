import React from "react";

import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Skill() {
    return (
        <>
            <Card p={5} bg={"pink"}>
                <Text fontSize={25}>
                    What I know:
                    <br />
                    <Stack direction={"row"} fontSize={18}>
                        <Card>
                            <CardHeader>Front-end</CardHeader>
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
                                            skillName === "React.js" ||
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
                            <CardHeader>Back-end & Database</CardHeader>
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
                                            skillName === "Node.js" ||
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
                            <CardHeader>Dev-Tools & Frameworks</CardHeader>
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
                            <CardHeader>Programming Langs</CardHeader>
                            <Divider />
                            <CardBody>
                                {["Java", "Python", "C", "C++", "Dart"].map(
                                    (skillName, index) => (
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
                                    )
                                )}
                            </CardBody>
                        </Card>
                    </Stack>
                </Text>
            </Card>
        </>
    );
}
