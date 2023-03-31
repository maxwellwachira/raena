import { colors } from "@/constants/colors";
import { Box, Center, Container, Divider, Grid, List, Text, } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons";
import Image from "next/image";
import whatwedoImage from "@/assets/whatwedo.png";
import visionImage from "@/assets/vision.png";


const WhatWeDo = () => {
    return (
        <Container size="lg" mt={150}>
            <Text color={colors.primaryColor} weight={600} fz={32} align='center' mt={10}>What We Do</Text>
            <Grid gutter={30} mt={30}>
                <Grid.Col md={4}>
                    <List
                        spacing="md"
                        size="md"
                        icon={<IconCircleCheck size={24} />}
                    >
                        <List.Item>CBC System </List.Item>
                        <List.Item>8-4-4 System up to Form 4</List.Item>
                        <List.Item>KS1 – English and Maths</List.Item>
                        <List.Item>KS2 – English ,Maths, Science and languages. We prepare students for KS2 SATs and Cambridge Primary checkpoints and Edexcel International Primary assessments</List.Item>
                    </List>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Center>
                        <Image
                            src={whatwedoImage}
                            height={320}
                            width={320}
                            alt="What we do"
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col md={4}>
                    <List
                        spacing="md"
                        size="md"
                        icon={<IconCircleCheck size={24} />}
                    >
                        <List.Item>KS3 – English ,Maths, Science and languages. We prepare students for Cambridge Lower secondary checkpoints</List.Item>
                        <List.Item>KS4 & KS5 – IGCSE- English Language,English Literature,Maths, Biology, Chemistry, Physics,Geography,History,Travel and Tourism, Global perspective, ICT,Computer Science,Accounting, Business Studies , Economics, Languages</List.Item>
                    </List>
                </Grid.Col>
            </Grid>
            <Text color={colors.primaryColor} weight={600} fz={32} align='center' mt={80}>Our Vision</Text>
            <Grid gutter={30} mt={20}>
                <Grid.Col md={4}>
                    <Center>
                        <Image
                            src={visionImage}
                            height={230}
                            width={320}
                            alt="vision"
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col md={8} px="xl">
                    <Text>Our vision is to inspire our tutees to grasp their full potential by motivating them to accomplish academic success.</Text>
                    <Box style={{ maxWidth: 60 }} my="xl">
                        <Divider size="lg" color="dark" />
                    </Box>
                    <Text>With an outstanding team of tutors at our Tuition Centre in Karen, the learning journey is made simple and fun for the students.
                        We specialise in developing a bespoke tuition plan to support each child’s learning journey relative to their needs and interests.
                        The learning centre offers a tailored combination of productive support and creative teaching methods to enable our students to unlock their talents and key into their full potential.</Text>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default WhatWeDo;