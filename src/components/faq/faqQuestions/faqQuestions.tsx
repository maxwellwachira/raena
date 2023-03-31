import { colors } from "@/constants/colors";
import { Accordion, Container, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons";


const FaqQuestions = () => {
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
                <Accordion.Item value="What are your Opening Times? ">
                    <Accordion.Control style={{ color: colors.primaryColor, fontSize: 17 }}>What are your Opening Times? </Accordion.Control>
                    <Accordion.Panel>
                        <Text>
                            Monday- Friday: 8:00AM-7:30PM <br />Saturday: 8:00am- 5:00pm <br />Sunday: CLOSED
                        </Text>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="How long are the lessons?">
                    <Accordion.Control style={{ color: colors.primaryColor, fontSize: 17 }}>How long are the lessons? </Accordion.Control>
                </Accordion.Item>
                <Accordion.Item value="What happens at the assessment stage?">
                    <Accordion.Control style={{ color: colors.primaryColor, fontSize: 17 }}>What happens at the assessment stage? </Accordion.Control>
                </Accordion.Item>
                <Accordion.Item value="How are the students taught?">
                    <Accordion.Control style={{ color: colors.primaryColor, fontSize: 17 }}>How are the students taught? </Accordion.Control>
                </Accordion.Item>
                <Accordion.Item value="What is the ratio of children to tutors?">
                    <Accordion.Control style={{ color: colors.primaryColor, fontSize: 17 }}>What is the ratio of children to tutors?</Accordion.Control>
                </Accordion.Item>
                <Accordion.Item value="Can I get one-to-one tuition?">
                    <Accordion.Control style={{ color: colors.primaryColor, fontSize: 17 }}>Can I get one-to-one tuition?</Accordion.Control>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default FaqQuestions;