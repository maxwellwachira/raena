import { ActionIcon, Button, Card, Group, Stack, Text, createStyles } from "@mantine/core";
import Image from "next/image";
import blog1Image from "@/assets/blog1.png";
import { IconShare } from "@tabler/icons";
import { colors } from "@/constants/colors";
import { urls } from "@/constants/urls";

interface BlogData {
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
    }
}

const useStyles = createStyles(() => ({
    readMoreButton: {
        border: `1px solid ${colors.primaryColor}`,
        background: "transparent",
        color: colors.primaryColor,

        '&:hover': {
            background: colors.primaryColor,
            color: "white"
        }
    }
}))

const BlogCard = ( props: BlogData ) => {
    const { classes } = useStyles();

    const parseDate = (input: string) => {
        return new Date(input).toLocaleDateString();
    }

    return (
        <Card shadow="sm" p="lg" radius="md">
            <Card.Section>
                <Image
                    src={`${urls.strapiBaseUrl}${props.data.attributes.thumbnail.data.attributes.url}`}
                    alt="blog thumbnail"
                    width={200}
                    height={330}
                    style={{ width: "100%", height: 330 }}
                />
            </Card.Section>
            <Group mt={20} position="apart">
                <Text size="sm" color="dimmed">{parseDate(props.data.attributes.publishedAt)}</Text>
                <Text size="sm" color="dimmed">{props.data.attributes.readDuration} min Read</Text>
            </Group>
            <Text my={10} color={colors.secondaryColor} fz={20}>{props.data.attributes.title}</Text>
            <Text lineClamp={3}>{props.data.attributes.description}</Text>
            <Stack mt={20}>
                <Button
                    component="a"
                    href={`/blogs/${props.data.attributes.slug}`}
                    className={classes.readMoreButton}
                    radius={10}
                >
                    Read More
                </Button>
            </Stack>
        </Card>
    )
}

export default BlogCard;