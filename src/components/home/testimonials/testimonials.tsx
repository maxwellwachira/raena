import { colors } from "@/constants/colors";
import { ActionIcon, Box, Center, Container, Grid, Group, Text, createStyles } from "@mantine/core";
import Image from "next/image";
import testimonialImage from "@/assets/testimonial.png";
import ellipse from "@/assets/Ellipse.png";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import { useViewportSize } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
    testimonialContainer: {
        background: colors.primaryColor,
        borderRadius: 10,
        marginTop: 20,
    },
    headingText: {
        fontFamily: 'Patrick Hand, cursive',
        fontSize: 50,
        color: 'white',
        [theme.fn.smallerThan('sm')]: {
            fontSize: 40,
        },
    },
    ellipseContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        [theme.fn.smallerThan('sm')]: {
            marginTop: 20
        },
    },
    textContainer: {
        position: 'absolute',
        top: 100,
        maxWidth: 320,
        color: 'white',
        fontSize: 18,
        [theme.fn.smallerThan('sm')]: {
            top: 80,
            maxWidth: 250,
            fontSize: 16,
        },
    }
}))


const Testimonials = () => {
    const { classes } = useStyles();
    const { width } = useViewportSize();
    return (
        <Container size="xl" mt={100}>
            <Text color={colors.primaryColor} weight={600} fz={36} align='center' mt={10}>Our Success Stories</Text>
            <Box className={classes.testimonialContainer}>
                <Grid>
                    <Grid.Col md={4} p={20} style={{ display: width > 768 ? "" : "none"}}>
                        <Center>
                            <Image
                                src={testimonialImage}
                                alt="Testimonial"
                                width={380}
                                height={600}
                            />
                        </Center>
                    </Grid.Col>
                    <Grid.Col md={8}>
                        <Text className={classes.headingText} align='center'>Here is what our students say about us</Text>
                        <Group position={width > 768 ? "right" : "center"} mr={width > 768 ? 100 : "auto"} mt={10}>
                            <ActionIcon variant="light" color="green">
                                <IconChevronLeft />
                            </ActionIcon>
                            <ActionIcon variant="light" color="green">
                                <IconChevronRight />
                            </ActionIcon>
                        </Group>
                        <Box className={classes.ellipseContainer}>
                            <Image
                                src={ellipse}
                                alt="Blob"
                                width={width > 768 ? 600 : 320}
                                height={width > 768 ? 510 : 400}
                            />
                            <Box className={classes.textContainer}>
                                <Text>Thank You! I know it's only first term of Additional Maths but it's a big thing to me that you believed in me and made us push through all the struggles. To more hard work! My Additional Math grade, term 1 is A </Text>
                                <Text mt={50}>By T.G</Text>
                            </Box>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>
        </Container>
    )
}

export default Testimonials;