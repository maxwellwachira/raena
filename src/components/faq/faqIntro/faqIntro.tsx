import { colors } from "@/constants/colors";
import { Box, Button, Center, Container, createStyles, Grid, Stack, Text } from "@mantine/core";
import Image from "next/image";
import faqImage from "@/assets/faq.png";

const useStyles = createStyles(() => ({
    contactButton: {
        background: colors.secondaryColor,

        '&:hover': {
            background: colors.primaryColor,
        }
    },
    introBackground: {
        background: 'rgba(1, 9, 50, 0.03)'
    }
}))

const FaqIntro = () => {
    const { classes } = useStyles();

    return (
        <Box className={classes.introBackground}>
            <Container size="lg" mt={-30}>
                <Grid gutter={30}>
                    <Grid.Col md={6}>
                        <Center mt={20}>
                            <Image 
                                src={faqImage}
                                height={350}
                                width={500}
                                alt="FAQ Image"
                            />
                        </Center>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Stack>
                            <Text color={colors.primaryColor} fz={32} mt={20}>Frequently Asked Questions</Text>
                            <Text>we have compiled a list of some of the most commonly asked questions about our Learning Center to help provide you with the information you need.</Text>
                            <Text>Our goal is to provide clear and concise answers to your questions and to help you better understand our offerings. If you cannot find the information you need here, please feel free to contact us, and we will be happy to assist you further.</Text>
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

export default FaqIntro;