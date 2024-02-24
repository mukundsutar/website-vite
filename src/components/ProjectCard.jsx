import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";

export default function ProjectCard() {
    return (
        <>
            <Card
                data-type="Card"
                variant="outline"
                width={"300px"}
                bg={'red'}
                borderColor={"black"}
            >
                <Image
                    data-type="Image"
                    alt="Caffe Latte"
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib"
                    objectFit="cover"
                    maxW="100%"
                ></Image>
                <Stack data-type="Stack">
                    <CardBody data-type="CardBody">
                        <Heading data-type="Heading" size="md">
                            The perfect latte
                        </Heading>
                        <Text data-type="Text" py="2">
                            Caffè latte is a coffee beverage of Italian origin
                            made with espresso and steamed milk.
                        </Text>
                    </CardBody>
                    <CardFooter data-type="CardFooter" mt={-10}>
                        <Button
                            data-type="Button"
                            type="button"
                            variant="solid"
                            colorScheme="blue"
                        >
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    );
}
