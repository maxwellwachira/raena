import { colors } from "@/constants/colors";
import { Accordion, Box, Container, Loader, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { urls } from "@/constants/urls";
import axios from "axios";
import { useEffect, useState } from "react";


interface Faq {
    data: {
        id: number;
        attributes: {
            question: string;
            answer: string;
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


const FaqQuestions = () => {
    const [allFaqs, setAllFaqs] = useState<Faq | null>(null);
    const [loading, setLoading] = useState(true);

    const getAllFaqs = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${urls.strapiUrl}/faqs`);
            console.log(data);
            setAllFaqs(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllFaqs();
    }, []);

    if(loading){
        return (
            <Box>
                <Loader variant="dots" color={colors.secondaryColor} />
            </Box>
        )
    }

    return (
        <Container size="lg" mt={80}>
            <Accordion
                chevron={<IconPlus size={20} />}
                styles={{
                    chevron: {
                        '&[data-rotate]': {
                            transform: 'rotate(45deg)',
                        },
                    },
                }}
            >
                {allFaqs && allFaqs.data.map(faq => (
                    <Accordion.Item value={faq.attributes.question}>
                        <Accordion.Control style={{ color: colors.primaryColor, fontSize: 17 }}>{faq.attributes.question} </Accordion.Control>
                        <Accordion.Panel>
                            <Text style={{whiteSpace: "pre-wrap"}}>
                                {faq.attributes.answer}
                            </Text>
                        </Accordion.Panel>
                    </Accordion.Item>
                ))}

            </Accordion>
        </Container>
    )
}

export default FaqQuestions;