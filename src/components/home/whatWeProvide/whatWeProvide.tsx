import { colors } from "@/constants/colors";
import { Box, Center, Container, Grid, List, Text, createStyles } from "@mantine/core";
import Image from "next/image";
import dictionaryImage from "@/assets/dictionary.png";
import mathImage from "@/assets/math.png";
import scienceImage from "@/assets/science.png";

const useStyles = createStyles(() => ({
    imagePostion: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
        height: 274,
        borderRadius: 10
    },
    subjectCount: {
        position: 'absolute',
        color: 'white',
        fontSize: 70,
        top: '30%',
    }

}));

const WhatWeProvide = () => {
    const { classes } = useStyles();
    return (
        <Container size="lg" mt={100}>
            <Text color={colors.primaryColor} weight={600} fz={36} align='center' mt={10}>What We Provide</Text>
            <Box className={classes.imagePostion}>
                <Image
                    src={dictionaryImage}
                    alt="What we provide"
                    placeholder="blur"

                />
                <Text className={classes.subjectCount}>15+ Subjects</Text>
            </Box>
            <Text color={colors.primaryColor} weight={600} fz={28} align='center' mt={30}>We Provide tuition for:</Text>
            <List spacing="md">
                <List.Item>CBC system</List.Item>
                <List.Item>8-4-4 System up to Form 4</List.Item>
                <List.Item>KS1 – English and Maths</List.Item>
                <List.Item>KS2 – English ,Maths, Science and languages. We prepare students for KS2 SATs and Cambridge Primary checkpoints and Edexcel International Primary assessments</List.Item>
                <List.Item>KS3 – English ,Maths, Science and languages. We prepare students for Cambridge Lower secondary checkpoints</List.Item>
                <List.Item>KS4 – IGCSE- English Language,English Literature,Maths, Biology, Chemistry, Physics,Geography,History,Travel and Tourism, Global perspective, ICT,Computer Science,Accounting, Business Studies , Economics, Languages Study Skills</List.Item>
                <List.Item>KS5 – AS & A Level- English Language,English Literature,Maths, Biology, Chemistry, Physics,Geography,History,Travel and Tourism, Global perspective, ICT,Computer Science,Accounting, Business Studies , Economics, Languages Study Skills</List.Item>
                <List.Item>Adult learners</List.Item>
            </List>
            <Text color={colors.primaryColor} weight={600} fz={36} align='center' mt={30}>Core Subjects</Text>
            <Grid gutter={40} mt={20}>
                <Grid.Col md={6}>
                    <Center>
                        <Image
                            src={ mathImage}
                            alt="Maths Image"
                            height={280}
                            width={500}
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col md={6}>
                    <Text color={colors.primaryColor} weight={600} fz={28}>Math & English Tutoring</Text>
                    <Text>Raena Learning English tutors know the difference between teaching English the British system way and the Kenyan system way. We tutor children from 5 years to 18 years old. We prepare students for 11+ and 13+Common Entrance exams, KCPE , KCSE, IGCSE -Cambridge and Edexcel and A Levels. For the Early years students who need help in developing their reading skills , we use the Jolly Phonics programme.</Text>
                    <Text mt={10}>We are careful to use the correct materials and methodologies. We follow the school teacher to ensure that the correct method is used with every student.</Text>
                </Grid.Col>
                <Grid.Col md={6} mt={20}>
                    <Text color={colors.primaryColor} weight={600} fz={28}>Science Tutoring</Text>
                    <Text>Since its founding, Raena Learning has been one of the most trusted names in the industry. We assist students in Primary science and secondary sciences such as Chemistry , Biology and Physics.</Text>
                    <Text mt={10}>Hire us for this service and learn how we cater to the needs of each client, ensuring the results you need and deserve.</Text>
                </Grid.Col>
                <Grid.Col md={6} mt={20}>
                    <Center>
                        <Image
                            src={scienceImage}
                            alt="Science Image"
                            height={280}
                            width={500}
                        />
                    </Center>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default WhatWeProvide;