import { colors } from "@/constants/colors";
import { Box, Button, Center, Container, Divider, Grid, Stack, Text, createStyles } from "@mantine/core"
import Image from "next/image";
import YouTube from "react-youtube";
import fancyRecangle from "@/assets/designedrectangle2.png";
import { IconArrowRight } from "@tabler/icons";

const useStyles = createStyles(() => ({
    blueRectangle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: -30,
        marginRight: 30,
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
        left: 0,
        marginLeft: 30,
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

const PreparingStudents = () => {
    const { classes } = useStyles();
    return (
        <Container mt={100} size="lg">
            <Text color={colors.primaryColor} weight={600} fz={36} align='center' mt={10}>Preparing Students for Success in All Areas of Life</Text>
            <Grid mt={30}>
                <Grid.Col md={4}>
                    <Stack>
                        <Text>
                            Our learning center is dedicated to more than just providing academic support to our students. We are committed to fostering the development of their cognitive, psychological, and social abilities, and building their confidence in these areas.
                        </Text>
                        <Box style={{ width: 50 }}>
                            <Divider size="lg" my="xl" />
                        </Box>
                        <Text>
                            We believe that by taking this comprehensive approach, our students will be well-equipped to succeed in the increasingly competitive and advanced global society.
                        </Text>
                    </Stack>
                    <Button
                        radius={15}
                        mt={30}
                        size="md"
                        component="a"
                        href="/book-online"
                        className={classes.contactButton}
                        rightIcon={<IconArrowRight />}
                    >
                        Book Online
                    </Button>
                </Grid.Col>
                <Grid.Col md={8}>
                    <Box className={classes.videoContainer}>
                        <Box className={classes.orangeRectangle} />
                        <Center>
                            <Box style={{ background: 'white', marginTop: 30, borderRadius: 10, padding: 0 }}>
                                <YouTube
                                    videoId="v5ug8DbX_I0"
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
            </Grid>

        </Container>
    )
}

export default PreparingStudents;