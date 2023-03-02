import { urls } from "@/constants/urls";
import { BackgroundImage, Box, Button, Center, Container, Grid, Group, Stack, Text, createStyles } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";

const useStyles = createStyles(() => ({
    bookOnline: {
        '&:hover': {
            opacity: 0.7
        }
    }, 

    contactUs: {
        background: 'transparent',
        border: '2px solid white', 

        '&:hover': {
            background: 'transparent',
            opacity: 0.7
        }
    },
    heroContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 50
    },
}))

const Hero = () => {
    const { classes } = useStyles();
    return (
        <Box sx={{ marginTop: -15 }}>
            <BackgroundImage
                src={`${urls.frontendUrl}/hero.jpg`}
                radius="sm"
            >
                <Box className={classes.heroContainer}>
                    <Grid>
                        <Grid.Col md={6}>
                            <Stack style={{ height: 600 }}>
                                <Text color="white" fz={45} weight={600}>Unlock Your Child's Full Potential with Our Learning Center</Text>
                                <Text color="white" fz={24} weight={500} mt={20}>Fun and Engaging Lessons to Help Students Excel in School and Beyond</Text>
                                <Group mt={50}>
                                    <Button
                                        radius={15}
                                        size="md"
                                        variant="white"
                                        color="dark"
                                        rightIcon={<IconChevronRight />}
                                        className={classes.bookOnline}
                                    >
                                        Book Online
                                    </Button>
                                    <Button
                                        radius={15}
                                        size="md"
                                        className={classes.contactUs}
                                    >
                                        Contact Us
                                    </Button>
                                </Group>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Box>
            </BackgroundImage>
        </Box>
    )
}
export default Hero;