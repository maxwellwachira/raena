import { colors } from "@/constants/colors";
import { Box, Button, Center, Container, Grid, List, Stack, Text, ThemeIcon, createStyles } from "@mantine/core"
import Image from "next/image";
import YouTube from "react-youtube";
import fancyRecangle from "@/assets/designedrectangled1.png";
import { IconCircleCheck } from "@tabler/icons";
import { useViewportSize } from "@mantine/hooks";

const useStyles = createStyles(() => ({
    contactButton: {
        background: colors.secondaryColor,

        '&:hover': {
            background: colors.primaryColor,
        }
    },
}))

const WhatWeOffer = () => {
    const { classes } = useStyles();
    const { width } = useViewportSize();
    return (
        <Container mt={width > 768 ? 100 : 60} size="lg">
            <Text color={colors.primaryColor} weight={600} fz={36} align='center' mt={10}>What we offer to our Students</Text>
            <Grid mt={30}>
                <Grid.Col md={8}>
                    <Center>
                        <Box>
                            <YouTube
                                videoId="ZhezttBOpqk"
                                style={{
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                    padding: 0,
                                    margin: 0
                                }}
                                opts={{
                                    height: '320',
                                    width: '568',
                                    playerVars: {
                                        autoplay: 0,
                                    },
                                }}
                                onReady={(event) => {
                                    // access to player in all event handlers via event.target
                                    event.target.pauseVideo();
                                }}
                                onPlay={(event) => {
                                    event.target
                                }}
                            />
                        </Box>
                    </Center>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Stack align="center" justify="center" style={{ height: "100%" }}>
                        <Text>Welcome to Raena Learning Centre, A tuition centre located in Karen Professional centre, Karen Road that has been fully modernised with the latest technology and teaching resources. We offer the following:</Text>
                        <List
                            spacing="lg"
                            size="md"
                            center
                            icon={
                                <ThemeIcon color={colors.primaryColor} size={24} radius="xl">
                                    <IconCircleCheck size={16} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>Fun and engaging lessons that help your child develop key skills and interests</List.Item>
                            <List.Item>Expert instructors with experience in teaching children and a passion for education</List.Item>
                            <List.Item>Personalized attention and support to ensure that your child's unique needs are met</List.Item>
                            <List.Item>State-of-the-art facilities equipped with the latest technology and tools</List.Item>
                        </List>

                        <Button
                            radius={15}
                            mt={20}
                            size="md"
                            component="a"
                            href="/contact"
                            className={classes.contactButton}
                        >
                            Contact Us
                        </Button>
                    </Stack>
                </Grid.Col>
            </Grid>

        </Container>
    )
}

export default WhatWeOffer;