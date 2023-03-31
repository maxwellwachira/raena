import { colors } from "@/constants/colors";
import { Box, Button, Center, Container, createStyles, Divider, Grid, Stack, Text } from "@mantine/core";
import Image from "next/image";
import learningResourcesImage from "@/assets/books.webp";
import fancyRecangle from "@/assets/designedrectangled1.png";

const useStyles = createStyles(() => ({
    blueRectangle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginBottom: -40,
        marginLeft: 30,
        zIndex: -1
    },
    contactButton: {
        background: colors.secondaryColor,

        '&:hover': {
            background: colors.primaryColor,
        }
    },
    introBackground: {
        background: 'rgba(1, 9, 50, 0.03)'
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
    resourcesContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    }
}))

const LearningResourcesIntro = () => {
    const { classes } = useStyles();

    return (
        <Box className={classes.introBackground}>
            <Container size="lg" mt={-30}>
                <Grid gutter={30}>
                    <Grid.Col md={6} mt={20}>
                        <Box className={classes.resourcesContainer}>
                            <Box className={classes.orangeRectangle} />
                            <Center>
                                <Box mt={30}>
                                    <Image
                                        src={learningResourcesImage}
                                        alt="learning resources"
                                        width={400}
                                        style={{borderRadius: 10}}
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
                    <Grid.Col md={6}>
                        <Stack>
                            <Text color={colors.primaryColor} fz={32} mt={20}>Our Learning Resources</Text>
                            <Text>We offer a variety of online learning resources, including well structured notes, revision past papers and other materials. Our online resources are designed to supplement our curriculum and provide students with additional learning opportunities to help them achieve their goals.</Text>
                            <Box style={{ maxWidth: 60 }}>
                                <Divider size="lg" color="dark" />
                            </Box>
                            <Text>With our comprehensive educational resources and exceptional teaching staff, we are confident that we can help our students reach their full potential.</Text>
                            <Text>Don't miss out on this incredible opportunity to take your education to the next level! Enroll  today and discover the difference our top-tier education can make in your life!</Text>
                        </Stack>
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
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    )
}

export default LearningResourcesIntro;