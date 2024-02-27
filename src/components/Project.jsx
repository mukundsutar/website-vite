import React from "react";
import ProjectCard from "./ProjectCard";
import { SimpleGrid } from "@chakra-ui/react";

export default function Project() {
    const filmpedia = {
        name: "FilmPedia - Movie Database",
        description:
            "Feature-rich movie database website utilizing TMDB API for comprehensive film exploration, offering users a robust platform.",
        photo: "src/assets/img/project/FilmPedia - Movie Database.png",
        githubRepo: "https://github.com/mukundsutar/movie-archive",
        link: "https://mukundsutar.github.io/movie-archive/",
    };

    const atm_card = {
        name: "ATM Card Generator",
        description:
            "Creates random ATM card numbers for representation or custom dummy cards with background customization.",
        photo: "src/assets/img/project/ATM Card Generator.png",
        githubRepo: "https://github.com/mukundsutar/atm-card",
        link: "https://mukundsutar.github.io/atm-card/",
    };

    const pinpong = {
        name: "Pong Arcade Game",
        description:
            "Classic local multiplayer Ping Pong game for endless fun.",
        photo: "src/assets/img/project/Ping Pong Game.png",
        githubRepo: "https://github.com/mukundsutar/Pong-Arcade-Game",
        link: "https://mukundsutar.github.io/Pong-Arcade-Game/",
    };

    const pokedex = {
        name: "Master Pokedex",
        description:
            "Dynamic website showcasing Pokémon stats via RESTful API, providing organized and user-friendly data presentation and interactive features.",
        photo: "src/assets/img/project/Pokedex.png",
        githubRepo: "https://github.com/mukundsutar/pokedex.js",
        link: "https://mukundsutar.github.io/pokedex/",
    };

    const tictactoe = {
        name: "Tic Tac Toe",
        description:
            "Traditional two-player local multiplayer game for strategic fun.",
        photo: "src/assets/img/project/Tic Tac Toe.png",
        githubRepo: "https://github.com/mukundsutar/Tic-Tac-Toe",
        link: "https://mukundsutar.github.io/Tic-Tac-Toe/",
    };

    const uselessfacts = {
        name: "Useless Facts Generator",
        description:
            "Produces random trivial facts perfect for meme creation and humor infusion.",
        photo: "src/assets/img/project/Useless Facts.jpeg",
        githubRepo: "https://github.com/mukundsutar/useless-facts",
        link: "https://mukundsutar.github.io/useless-facts/",
    };

    const wordle = {
        name: "Wordle-Clone",
        description:
            "A recreation of the popular word-guessing game, offering challenging puzzles for word enthusiasts.",
        photo: "src/assets/img/project/Wordle-Clone.png",
        githubRepo: "https://github.com/mukundsutar/Wordle",
        link: "https://mukundsutar.github.io/Wordle/",
    };

    const locospot = {
        name: "LocoSpot - Smart Tourist Guide using Machine Learning",
        description:
            "Android app with a chatbot suggesting hidden local spots, powered by ML/NLP for enhanced responses, plus location-based features.",
        photo: "src/assets/img/project/LocoSpot - Github.jpg",
        githubRepo: "https://github.com/mukundsutar/loco-spot",
        link: "https://github.com/mukundsutar/loco-spot",
    };

    const projectList = [
        filmpedia,
        atm_card,
        pinpong,
        pokedex,
        tictactoe,
        uselessfacts,
        wordle,
        locospot,
    ];

    return (
        <>
            <SimpleGrid
                bg={"teal"}
                minChildWidth={"300px"}
                spacing={10}
                width={"100%"}
                m={0}
                pl={8}
                pt={8}
                pb={8}
            >
                {/* <ProjectCard projectInfo={filmpedia} /> */}

                {projectList.map((project, index) => (
                    <ProjectCard key={index} projectInfo={project} />
                ))}
            </SimpleGrid>
        </>
    );
}
