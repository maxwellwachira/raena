import { colors } from "@/constants/colors";
import { Center, Container, Grid, Stack, Text } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks";


const VisitUs = () => {
    const { width } = useViewportSize();
    return (
        <Container size="lg" mt={60}>
            <Text align="center" mt={20} fz={36} color={colors.primaryColor}>Visit Us</Text>
            <Text align="center" mt={10}>Monday - Friday 8:00 am - 7:30 pm <br /> Saturday 8:00 am - 4:30 pm <br /> Sunday We are Closed.</Text>
            <Grid>
                <Grid.Col md={6}>
                    <Text color={colors.secondaryColor} fz={22}>Karen Location</Text>
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
                <Grid.Col md={6}>
                    <Text align={width > 768 ? "right" : "left"} color={colors.secondaryColor} fz={22}>Kilimani Location</Text>
                    <Stack align={width > 768 ? "flex-end" : "center"}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7994301878593!2d36.7799384154316!3d-1.2948933360025165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f116c0c9b2cbb%3A0xbb9e49e3edf6fc7f!2sKilimani%20Business%20Centre!5e0!3m2!1sen!2ske!4v1680585088699!5m2!1sen!2ske"
                            width="95%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default VisitUs;

