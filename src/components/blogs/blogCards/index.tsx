import { useEffect, useState } from "react";
import { Container, Grid, Loader, Stack } from "@mantine/core"
import BlogCard from "./blogCard";
import axios from "axios";
import { urls } from "@/constants/urls";
import { colors } from "@/constants/colors";

interface Blogs {
    data: {
        id: number;
        attributes: {
            title: string;
            readDuration: number;
            content: string;
            description: string;
            slug: string;
            thumbnail: {
                data: {
                    id: 1,
                    attributes: {
                        name: string;
                        height: number;
                        width: number;
                        ext: string;
                        url: string;
                    }
                }
            },
            author: {
                data: {
                    id: number;
                    attributes: {
                        firstName: string;
                        lastName: string;
                    }
                }
            }
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
        }
    }[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        }
    }
}

const BlogsCards = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogs | null>(null);

    const getAllBlogs = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/blogs?populate=*`);
            console.log(data);
            setBlogs(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const blogCards = () => {
        return blogs ? blogs.data.map((blog) => (
            <Grid.Col md={4} key={blog.id}>
                <BlogCard data={blog} />
            </Grid.Col>
        )) : <Stack>
            <Loader color={colors.primaryColor} />
        </Stack>
    }

    useEffect(() => {
        getAllBlogs();
    }, []);

    return (
        <Container size="lg" mt={100}>
            <Grid>
                { blogCards() }
            </Grid>
        </Container>
    )
}

export default BlogsCards