import { Container, Grid } from "@mantine/core"
import BlogCard from "./blogCard";

const BlogsCards = () => {
    let count = 10;

    const getAllCards = () => {
        
    }

    return (
        <Container size="lg" mt={100}>
            <Grid>
                <Grid.Col md={4}>
                    <BlogCard />
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default BlogsCards