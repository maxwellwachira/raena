import { Box, Center, Container, Grid, Stack, createStyles } from "@mantine/core";
import Image from "next/image";
import image1 from "@/assets/image1.webp";
import image2 from "@/assets/boy-holding-white-paper-school.jpg";
import image5 from "@/assets/image3.webp";
import image3 from "@/assets/naomi_with_student.jpg";
import image4 from "@/assets/raena_center.jpg";
import elipse from "@/assets/elipse.png";

const useStyles = createStyles(() => ({
    ellipse: {
        position: "absolute",
        top: 160,
        left: 0,
        right: 0,
        marginLeft: "45%",
        zIndex: -1
    }
}))


const AboutImages = () => {
    const { classes } = useStyles();

    return (
        <Container size="lg" mt={60}>
            <Grid>
                <Grid.Col md={4}>
                    <Stack align="flex-end">
                        <Box>
                            <Image
                                src={image1}
                                alt="Image 1"
                                width={200}
                                height={130}
                                style={{ borderRadius: 15 }}
                            />
                        </Box>
                        <Box>
                            <Image
                                src={image2}
                                alt="Image 2"
                                width={357}
                                height={200}
                                style={{ borderRadius: 15, objectFit: "cover", objectPosition: "center" }}
                            />
                        </Box>
                    </Stack>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Center>
                        <Image
                            src={image3}
                            alt="Naomi with student"
                            width={357}
                            height={300}
                            style={{ borderRadius: 15, objectFit: "cover", objectPosition: "center" }}
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Stack>
                    <Box >
                        <Image
                            src={image4}
                            alt="Image 2"
                            width={357}
                            height={160}
                            style={{ borderRadius: 15, objectFit: "cover", objectPosition: "center" }}
                        />
                    </Box>
                    <Box >
                        <Image
                            src={image5}
                            alt="Image 1"
                            width={200}
                            height={180}
                            style={{ borderRadius: 15, objectFit: "cover", objectPosition: "center" }}
                        />
                    </Box>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Box className={classes.ellipse}>
                <Image
                    src={elipse}
                    alt="elipse"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </Box>
        </Container>
    )
}

export default AboutImages;