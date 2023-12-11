import { urls } from "@/constants/urls";
import { Box, Button, Card, Container, Grid, Group, Loader, Stack, Text, createStyles } from "@mantine/core";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import books from "@/assets/folder.jpg";
import { colors } from "@/constants/colors";
import { IconCalendar, IconDownload, IconLoader, IconUser } from "@tabler/icons";
import { useViewportSize } from "@mantine/hooks";


interface FileAttributes {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: null | number;
    height: null | number;
    formats: null | any; // Replace 'any' with a more specific type if known
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | any; // Replace 'any' with a more specific type if known
    createdAt: string;
    updatedAt: string;
}

interface FileData {
    id: number;
    attributes: FileAttributes;
}

interface AuthorAttributes {
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface AuthorData {
    id: number;
    attributes: AuthorAttributes;
}

interface Attributes {
    fileName: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    file: {
        data: FileData;
    };
    author: {
        data: AuthorData;
    };
}

interface Data {
    id: number;
    attributes: Attributes;
}

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

interface Meta {
    pagination: Pagination;
}

interface ApiResponse {
    data: Data[];
    meta: Meta;
}


const useStyles = createStyles(() => ({
    downloadButton: {
        border: `1px solid ${colors.primaryColor}`,
        background: "transparent",
        color: colors.primaryColor,

        '&:hover': {
            background: colors.primaryColor,
            color: "white"
        }
    },
}))


const LearningPacks = () => {
    const { classes } = useStyles();
    const { width } = useViewportSize();
    const [libraryData, setLibraryData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const parseDate = (input: string) => {
        return new Date(input).toLocaleDateString();
    }

    const fetchResources = async () => {
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/libraries?populate=*`);
            setLibraryData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    const downloadFile = async (fileUrl: string, fileName: string) => {
        setLoading(true);
        try {
            const response = await fetch(fileUrl);
            const blob = await response.blob();

            // Create a temporary link element
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;

            // Trigger the download
            document.body.appendChild(link);
            link.click();

            // Clean up
            document.body.removeChild(link);
            setLoading(false);
        } catch (error) {
            console.error('Error downloading file:', error);
            setLoading(false);
        }
    };

    const resourcesCards = () => {
        return libraryData ? libraryData.data.map((library) => (
            <Grid.Col md={4} lg={3} key={library.id}>
                <Card shadow="sm" p="lg" radius="md" withBorder >
                    <Card.Section>
                        <Stack align="center">
                            <Image
                                src={books}
                                style={{ width: 120 }}
                                height={100}
                                alt="books"
                            />
                        </Stack>
                    </Card.Section>
                    <Group position="apart" mt={5}>
                        <Group spacing={5} align="center">
                            <IconUser size={14} color="gray" />
                            <Text color="dimmed" size="sm">{library.attributes.author.data.attributes.firstName}</Text>
                        </Group>
                        <Group spacing={5} align="center">
                            <IconCalendar size={14} color="gray" />
                            <Text color="dimmed" size="sm">{parseDate(library.attributes.updatedAt)}</Text>
                        </Group>
                    </Group>
                    <Text ta="center" color={colors.primaryColor} fw="bold" mt={5}>{library.attributes.fileName}</Text>
                    <Stack mt={10} >
                        <Button
                            loading={loading}
                            disabled={loading}
                            className={classes.downloadButton}
                            leftIcon={loading ? <IconLoader size={18} /> : <IconDownload size={18} />}
                            radius={10}
                            onClick={() => downloadFile(`${urls.strapiBaseUrl}${library.attributes.file.data.attributes.url}`, library.attributes.file.data.attributes.name)}
                        >
                            {loading ? "Downloading ..." : "Download"}
                        </Button>
                    </Stack>

                </Card>
            </Grid.Col>
        )) :
            <Stack align="center" mt={30}>
                <Loader color={colors.primaryColor} />
            </Stack>
    }


    useEffect(() => {
        fetchResources();
    }, []);

    return (
        <Box mt={50}>
            <Container size="lg">
                <Text color={colors.primaryColor} fz={32} mt={20} ta="center">Files & Folders</Text>
                <Grid mt={20} gutter={30}>
                    {resourcesCards()}
                </Grid>
            </Container>
        </Box>
    )
}


export default LearningPacks;