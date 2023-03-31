import { colors } from "@/constants/colors";
import { Container, Text } from "@mantine/core";


const AboutIntro = () => {
    return (
        <Container size="lg">
            <Text color={colors.primaryColor} fz={36} align='center'>About Us</Text>
            <Text mt={10}>Our learning center remains committed to identifying students' individual learning needs through initial assessments and creating lesson plans that are tailored to meet those needs while taking into account each student's unique learning style. Our approach to teaching is primarily centered around the student, with the guidance and monitoring of our qualified teaching staff to facilitate a comprehensive learning experience. Progress is evaluated through regular formative assessments and testing, and students are provided with short and long-term goals, with the assistance of capable teachers, to steadily achieve them.</Text>
            <Text mt={10}>At the end of each class, our tutors provide constructive and non-judgmental feedback to students to encourage reflection and retention of the material taught. We adopt a triangular approach involving students, teachers, and parents to support students in achieving their targets. At the end of each school term, we plan tutorial sessions where the progress of each student is reviewed and feedback is given to parents by their respective tutors.</Text>
        </Container>
    )
}

export default AboutIntro;