import React from "react";
import ProjectCard from "./ProjectCard";
import { SimpleGrid } from "@chakra-ui/react";

export default function Project() {
    return (
        <>
            <SimpleGrid
                bg={"yellow"}
                minChildWidth={"300px"}
                spacing={10}
                width={"100%"}
                m={0}
                pl={8}
                pt={8}
                pb={8}
            >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </SimpleGrid>
        </>
    );
}
