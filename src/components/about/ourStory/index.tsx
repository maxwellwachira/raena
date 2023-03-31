import { colors } from "@/constants/colors";
import { Box, Center, Container, Divider, Grid, Stack, Text } from "@mantine/core"
import Image from "next/image";
import naomi from "@/assets/naomi.png";

const OurStory = () => {
    return (
        <Container size="lg">
            <Text color={colors.primaryColor} weight={600} fz={32} mt={80}>Our Story</Text>
            <Grid gutter={30} mt={10}>
                <Grid.Col md={7}>
                    <Text>
                        Since December 2006, Naomi Wanjagua has been tutoring students in Maths, English and Sciences . Formerly a franchise owner(Kip McGrath Education Centre Karen, Lavington and Kilimani), she has had great success and experience working with students with different needs .
                    </Text>
                    <Box style={{ maxWidth: 60 }} my="md">
                        <Divider size="sm" color="dark" />
                    </Box>
                    <Text>
                        At Raena(pronounced as rina), we tutor children from ages 5-18. Our target group: school going children(CBC /844/British National Curriculum-Common Entrance, Checkpoints, KS 2 SATs,IGCSE and A Levels), homeschooling students, private candidates(IGCSE,A-LEVEL,KCSE), students transitioning from one school to another or one system to another.
                    </Text>
                    <Box style={{ maxWidth: 60 }} my="md">
                        <Divider size="sm" color="dark" />
                    </Box>
                    <Text>
                        We aim to help students understand & consolidate concepts learnt rather than drill students for exams. Call us now for a free educational assessment and consultation.
                    </Text>
                </Grid.Col>
                <Grid.Col md={5}>
                    <Stack align="center">
                        <Image 
                            src={naomi}
                            width={320}
                            height={360}
                            style={{borderRadius:15, objectFit: "cover", objectPosition: "center"}}
                            alt="Naomi Wanjagua"
                        />
                        <Text c="dimmed"  fz="sm" mt={-6}>Naomi Wanjagua - Founder Raena Learning</Text>
                    </Stack>
                </Grid.Col>
            </Grid>

        </Container>
    )
}

export default OurStory;