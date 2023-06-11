import { colors } from "@/constants/colors";
import { Button, Container, Grid, Paper, Stack, Text, TextInput, Textarea, createStyles } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks";
import Image from "next/image";


const useStyles = createStyles(() => ({
    sendButton: {
        background: colors.secondaryColor,

        '&:hover': {
            background: colors.primaryColor,
        }
    },
}))

const TellUs = () => {
    const { classes } = useStyles(); 
    const { width } = useViewportSize();

    return (
        <Container size="lg" mt={60}>
            <Paper withBorder={width > 768 ? true: false} px={width > 768 ? "lg" : 0} pb={50} radius={width > 768 ? 20 : 0}>
                <Grid mt={30}>
                    <Grid.Col md={6} px="xl">
                        <Text fz={36} color={colors.secondaryColor} mb={10}>Inquiries</Text>
                        <form>
                            <Stack style={{maxWidth:400}}>
                                <TextInput
                                    label="Full Name"
                                    placeholder="Enter Full Name"
                                    radius={10}
                                    withAsterisk
                                />
                                <TextInput
                                    label="Email"
                                    placeholder="Enter your email address"
                                    radius={10}
                                    withAsterisk
                                />
                                <TextInput
                                    label="Subject"
                                    placeholder="Enter Subect"
                                    radius={10}
                                    withAsterisk
                                />
                                <Textarea
                                    label="Message"
                                    placeholder="Enter Message"
                                    radius={10}
                                    withAsterisk
                                />
                            </Stack>
                            <Button
                                className={classes.sendButton}
                                mt={20}
                                radius={10}
                            >
                                Send
                            </Button>
                        </form>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Text fz={36} color={colors.primaryColor}>Visit Us</Text>
                        <Text mt={10} mb={10}>Monday - Friday 8:00 am - 7:00 pm <br /> Saturday 8:00 am - 2:00 pm <br /> Sunday We are Closed.</Text>
                        <Stack align={width > 768 ? "flex-start" : "center"}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.746948263399!2d36.7153576154317!3d-1.3278253360490813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b15496150c3%3A0xc1940b7341ac8a48!2sKaren%20Professional%20Centre!5e0!3m2!1sen!2ske!4v1680550355656!5m2!1sen!2ske"
                                width="95%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Paper>
        </Container>
    )
}

export default TellUs;