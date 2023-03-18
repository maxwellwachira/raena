import { colors } from "@/constants/colors";
import { Box, Button, Center, Container, Grid, List, Stack, Text, ThemeIcon, createStyles } from "@mantine/core"
import Image from "next/image";
import YouTube from "react-youtube";
import fancyRecangle from "@/assets/designedrectangled1.png";
import { IconCircleCheck } from "@tabler/icons";

const useStyles = createStyles(() => ({
    blueRectangle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginBottom: -30,
        marginLeft: 30,
        zIndex: -1
    },
    contactButton: {
        background: colors.secondaryColor,

        '&:hover': {
            background: colors.primaryColor,
        }
    },
    orangeRectangle: {
        position: 'absolute',
        top: 0,
        right: 0,
        marginRight: 30,
        background: colors.secondaryColor,
        width: 120,
        height: 120,
        borderRadius: 10,
        zIndex: -1
    },
    videoContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    }
}))

const WhatWeOffer = () => {
    const { classes } = useStyles();
    return (
        <Container mt={100} size="lg">
            <Text color={colors.primaryColor} weight={600} fz={36} align='center' mt={10}>What we offer to our Students</Text>
            <Grid mt={30}>
                <Grid.Col md={8}>
                    <Box className={classes.videoContainer}>
                        <Box className={classes.orangeRectangle} />
                        <Center>
                            <Box style={{ background: 'white', marginTop: 30, borderRadius: 10, padding: 0 }}>
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
                        <Box className={classes.blueRectangle}>
                            <Image
                                src={fancyRecangle}
                                height={250}
                                width={400}
                                alt="Fancy design"
                            />
                        </Box>
                    </Box>
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