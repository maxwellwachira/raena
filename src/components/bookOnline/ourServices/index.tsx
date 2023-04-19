import { colors } from "@/constants/colors";
import { Button, Card, Center, Container, Divider, Grid, Text, createStyles } from "@mantine/core";
import Image from "next/image";
import mathAssessmentImage from "@/assets/math-assesment.webp";
import englishAssessmentImage from "@/assets/english-assessment.webp";
import onlineClassImage from "@/assets/online-classes.webp";
import generalClassesImage from "@/assets/general-assessment.webp";
import teacherBritishSytemImage from "@/assets/teachers-british-system.webp";
import parentsBritishSystemImage from "@/assets/parents-british-system.webp";

const useStyles = createStyles(() => ({
    bookButton: {
        background: colors.secondaryColor,
        color: "white",
        ":hover": {
            background: colors.secondaryColor,
            opacity: 0.8
        }

    },
    card: {
        width: 320,
        height: "100%"
    }
}))

const OurServices = () => {
    const { classes } = useStyles();

    return (
        <Container size="lg">
            <Text align="center" mt={20} fz={36} color={colors.primaryColor}>Our Services</Text>
            <Grid gutter={30} mt={20}>
                <Grid.Col md={4}>
                    <Center style={{height: "100%"}}>
                        <Card shadow="sm" p="lg" radius="md" withBorder className={classes.card}>
                            <Card.Section>
                                <Image
                                    src={mathAssessmentImage}
                                    alt="blog thumbnail"
                                    style={{ width: "100%", height: 180 }}
                                />
                            </Card.Section>
                            <Text my={10} color={colors.secondaryColor} fz={18}>ONLINE MATH ASSESSMENT</Text>
                            <Divider mb={10} />
                            <Text mt={10}>1 hr</Text>
                            <Text mt={10}>Free</Text>
                            <Center>
                                <Button
                                    component="a"
                                    href="#"
                                    className={classes.bookButton}
                                    mt={20}
                                >
                                    Book Online
                                </Button>
                            </Center>
                        </Card>
                    </Center>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Center style={{height: "100%"}}>
                        <Card shadow="sm" p="lg" radius="md" withBorder  className={classes.card}>
                            <Card.Section>
                                <Image
                                    src={englishAssessmentImage}
                                    alt="blog thumbnail"
                                    style={{ width: "100%", height: 180 }}
                                />
                            </Card.Section>
                            <Text my={10} color={colors.secondaryColor} fz={18}>ONLINE ENGLISH ASSESSMENT</Text>
                            <Divider mb={10} />
                            <Text mt={10}>1 hr</Text>
                            <Text mt={10}>Free</Text>
                            <Center>
                                <Button
                                    component="a"
                                    href="#"
                                    className={classes.bookButton}
                                    mt={20}
                                >
                                    Book Online
                                </Button>
                            </Center>
                        </Card>
                    </Center>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Center style={{height: "100%"}}>
                        <Card shadow="sm" p="lg" radius="md" withBorder  className={classes.card}>
                            <Card.Section>
                                <Image
                                    src={onlineClassImage}
                                    alt="blog thumbnail"
                                    style={{ width: "100%", height: 180 }}
                                />
                            </Card.Section>
                            <Text my={10} color={colors.secondaryColor} fz={18}>ONLINE CLASSES</Text>
                            <Divider mb={10} />
                            <Text mt={10} mb={30}>Ksh. 1,500</Text>
                            <Text></Text>
                            <Center>
                                <Button
                                    component="a"
                                    href="#"
                                    className={classes.bookButton}
                                    mt={20}
                                >
                                    Book Online
                                </Button>
                            </Center>
                        </Card>
                    </Center>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Center style={{height: "100%"}}>
                        <Card shadow="sm" p="lg" radius="md" withBorder  className={classes.card}>
                            <Card.Section>
                                <Image
                                    src={generalClassesImage}
                                    alt="blog thumbnail"
                                    style={{ width: "100%", height: 180 }}
                                />
                            </Card.Section>
                            <Text my={10} color={colors.secondaryColor} fz={18}>GENERAL ASSESSMENT</Text>
                            <Divider mb={10} />
                            <Text mt={10}>1 hr</Text>
                            <Text mt={10}>Free</Text>
                            <Center>
                                <Button
                                    component="a"
                                    href="#"
                                    className={classes.bookButton}
                                    mt={50}
                                >
                                    Book Online
                                </Button>
                            </Center>
                        </Card>
                    </Center>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Center style={{height: "100%"}}>
                        <Card shadow="sm" p="lg" radius="md" withBorder  className={classes.card}>
                            <Card.Section>
                                <Image
                                    src={teacherBritishSytemImage}
                                    alt="blog thumbnail"
                                    style={{ width: "100%", height: 180 }}
                                />
                            </Card.Section>
                            <Text my={10} color={colors.secondaryColor} fz={18}>TEACHERS TRAINING ON BRITISH SYSTEM</Text>
                            <Divider mb={10} />
                            <Text mt={10}>Ended</Text>
                            <Text mt={10}>Ksh. 5,000</Text>
                            <Center>
                                <Button
                                    component="a"
                                    href="#"
                                    className={classes.bookButton}
                                    mt={20}
                                >
                                    View Course
                                </Button>
                            </Center>
                        </Card>
                    </Center>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Center style={{height: "100%"}}>
                        <Card shadow="sm" p="lg" radius="md" withBorder  className={classes.card}>
                            <Card.Section>
                                <Image
                                    src={parentsBritishSystemImage}
                                    alt="blog thumbnail"
                                    style={{ width: "100%", height: 180 }}
                                />
                            </Card.Section>
                            <Text my={10} color={colors.secondaryColor} fz={18}>PARENTS TRAINING ON BRITISH SYSTEM</Text>
                            <Divider mb={10} />
                            <Text mt={10}>Ended</Text>
                            <Text mt={10}>Ksh. 2,500</Text>
                            <Center>
                                <Button
                                    component="a"
                                    href="#"
                                    className={classes.bookButton}
                                    mt={20}
                                >
                                    View Course
                                </Button>
                            </Center>
                        </Card>
                    </Center>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default OurServices;