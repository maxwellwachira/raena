import { colors } from "@/constants/colors";
import { Container, Text } from "@mantine/core";


const BlogIntro = () => {
    return (
        <Container size="lg">
            <Text align="center" mt={20} fz={36} color={colors.primaryColor}>Blogs</Text>
            <Text>Welcome to our Learning Center's blog! Here, we aim to provide insightful and engaging content that will help you expand your knowledge and explore new ideas. Whether you're a student, parent, or educator, our blog is a place for you to find valuable information on a variety of topics related to learning and education.</Text>
            <Text>Our team of experts and educators will be sharing their knowledge and expertise on a range of subjects, including academic skills, study tips, exam preparation, career guidance, and more. We believe that education is a lifelong journey, and our blog is designed to help you along the way.</Text>
            <Text>Thank you for visiting our blog, and we hope that you find the information and inspiration you need to succeed in your learning journey.</Text>
        </Container>
    )
}

export default BlogIntro;