import { colors } from "@/constants/colors";
import { Container, Grid, Text } from "@mantine/core"


const VisitUs = () => {
    return (
        <Container size="lg" mt={60}>
            <Text align="center" mt={20} fz={36} color={colors.primaryColor}>Visit Us</Text>
            <Text align="center" mt={10}>Monday - Friday 8:00 am - 7:30 pm <br/> Saturday 8:00 am - 4:30 pm <br /> Sunday We are Closed.</Text>
            <Grid>
                <Grid.Col md={6}>
                    <Text color={colors.secondaryColor} fz={22}>Karen Location</Text>
                </Grid.Col>
                <Grid.Col md={6}>
                    <Text align="right" color={colors.secondaryColor} fz={22}>Kilimani Location</Text>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default VisitUs;