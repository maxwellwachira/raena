import { colors } from "@/constants/colors";
import { Center, Container, Grid, Group, Stack, Text } from "@mantine/core"
import Image from "next/image";
import contactUsImage from "@/assets/contact-us.png";
import { IconMail, IconPhone } from "@tabler/icons";


const ContactUs = () => {
    return (
        <Container size="lg">
            <Text align="center" mt={20} fz={36} color={colors.primaryColor}>Contact Us</Text>
            <Grid>
                <Grid.Col md={6}>
                    <Center>
                        <Image
                            src={contactUsImage}
                            alt="contact us"
                            width={400}
                            height={220}
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col md={6} mt={20}>
                    <Stack>
                        <Text>We are here to help and answer any question you might have. <br /> We look forward to hearing from you  🙂</Text>
                        <Text color={colors.secondaryColor} fz={24}>Contact Information</Text>
                        <Group>
                            <IconPhone />
                            <Text>0721 794 005 / 0722 519 962 / 0733 382 292 / 020 520 7521</Text>
                        </Group>
                        <Group>
                            <IconMail />
                            <Text component="a" href="mailto:info@raenalearning.org">info@raenalearning.org</Text>
                        </Group>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default ContactUs;