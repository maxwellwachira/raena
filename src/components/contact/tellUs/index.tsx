import { colors } from "@/constants/colors";
import { Button, Container, Grid, Stack, Text, TextInput, Textarea, createStyles } from "@mantine/core"
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

    return (
        <Container size="lg" mt={60}>
            <Text align="center" mt={20} fz={36} color={colors.primaryColor}>Tell Us</Text>
            <Grid mt={30}>
                <Grid.Col md={6}>
                    <Stack align="center">
                        <Image
                            src="/tell-us.svg"
                            alt="Tell Us"
                            width={350}
                            height={350}
                        />
                    </Stack>
                </Grid.Col>
                <Grid.Col md={6} px="xl">
                    <form>
                        <Stack>
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
            </Grid>
        </Container>
    )
}

export default TellUs;