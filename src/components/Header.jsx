import { React, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function samePageLinkNavigation(event) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                // Routing libraries handle this, you can remove the onClick handle when using them.
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
            }}
            aria-current={props.selected && "page"}
            {...props}
        />
    );
}

LinkTab.propTypes = {
    selected: PropTypes.bool,
};

export default function Header() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
            event.type !== "click" ||
            (event.type === "click" && samePageLinkNavigation(event))
        ) {
            setValue(newValue);
        }
    };

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                    role="navigation"
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <LinkTab label="Page One" href="/project" />
                    <LinkTab label="Page Two" href="/trash" />
                    <LinkTab label="Page Three" href="/spam" />
                </Tabs>
            </Box>
        </>
    );
}
