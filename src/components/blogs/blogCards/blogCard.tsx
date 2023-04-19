import { ActionIcon, Button, Card, Group, Text, createStyles } from "@mantine/core";
import Image from "next/image";
import blog1Image from "@/assets/blog1.png";
import { IconShare } from "@tabler/icons";
import { colors } from "@/constants/colors";

const useStyles = createStyles(() => ({
    readMoreButton: {
        background: colors.secondaryColor,
        color: "white",
        ":hover": {
            background: colors.secondaryColor,
            opacity: 0.8
        }

    }
}))

const BlogCard = () => {
    const { classes } = useStyles();
    return (
       <Card shadow="sm" p="lg" radius="md">
            <Card.Section>
                <Image
                    src={blog1Image}
                    alt="blog thumbnail"
                    style={{width: "100%", height: 330}}
                />
            </Card.Section>
            <Group mt={20} position="apart">
                <Text size="sm" color="dimmed">20th, March 2022</Text>
                <Text size="sm" color="dimmed">9 min Read</Text>
            </Group>
            <Text my={10} color={colors.secondaryColor} fz={20}>What are A Levels?</Text>
            <Text lineClamp={3}>A-Levels (Advanced Level qualifications) are a UK subject-based qualification for students aged 16 and above. They are More lorem ipsum text to line clamp</Text>
            <Group mt={20} position="apart">
                <Button
                    component="a"
                    href="#"
                    className={classes.readMoreButton}
                >
                    Read More
                </Button>
                <ActionIcon
                    color="dark"
                    size="lg"
                    variant="light"
                >
                    <IconShare size={18}/>
                </ActionIcon>
            </Group>
       </Card>
    )
}

export default BlogCard;