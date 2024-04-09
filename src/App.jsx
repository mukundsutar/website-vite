import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Home from "./components/Home";
import Project from "./components/Project";

export default function App() {
    return (
        <>
            <Tabs
                width="100svw"
                height="100svh"
                isFitted
                overflowX={"hidden"}
                position={"sticky"}
                zIndex="sticky"
                top={"20px"}
            >
                <TabList>
                    <Tab ml={3} mr={3} mt={2}>
                        About Me
                    </Tab>
                    <Tab ml={3} mr={3} mt={2}>
                        my Portfolio
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Home />
                    </TabPanel>
                    <TabPanel>
                        <Project />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}
