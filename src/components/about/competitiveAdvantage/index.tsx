import { colors } from "@/constants/colors";
import { Box, Button, Center, Container, List, Text, createStyles } from "@mantine/core";
import { IconCaretRight } from "@tabler/icons";
import Image from "next/image";
import ellipse2 from "@/assets/ellipse2.png";

const useStyles = createStyles(() => ({
    competitiveContainer: {
        position: "relative",
        margin: 0,
        padding: 0
    },
    contactButton: {
        background: colors.secondaryColor,

        '&:hover': {
            background: colors.primaryColor,
        }
    },
    ellipse:{
        position: "absolute",
        padding: 0,
        top: 0,
        right: 0,
        marginTop: 50,
        marginRight: -25
    }
}));

const CompetitiveAdvantage = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.competitiveContainer}>
            <Box className={classes.ellipse}>
                <Image 
                    src={ellipse2}
                    alt="ellipse"
                />
            </Box>
            <Container size="lg">
                <Text color={colors.primaryColor} weight={600} fz={32} align='center' mt={80}>What Makes Raena Learning different from other tutors?</Text>
                <List
                    spacing="md"
                    size="md"
                    icon={<IconCaretRight size={24} />}
                    mt={20}
                >
                    <List.Item>Only teachers with an Education qualification and experience are employed.</List.Item>
                    <List.Item>An understanding of the differences between BNC, 8-4-4, PYP, common entrance and how they affect your child.</List.Item>
                    <List.Item>No large classes. Individuals attention is guaranteed.</List.Item>
                    <List.Item>Stimulating materials including state-of-art software designed in-house specifically for tutoring to ensure your child enjoys coming and is enthusiastic about learning.</List.Item>
                    <List.Item>Diagnostic tests done to ensure that we get to the heart of the problem rather than just patching up what is being done at school.</List.Item>
                    <List.Item>No drilling. We make sure students understand what they learn so they can apply knowledge instead of regurgitating it.</List.Item>
                    <List.Item>All work marked by us and explained to the child. We provide teaching where it is needed - not just more sheets.</List.Item>
                    <List.Item>Teachers trained to understand areas that affect student's learning(such as Dyslexia and ADD(ADHD) ) to ensure your child gets the help they need.</List.Item>
                    <List.Item>Regular reassessments are conducted to ensure progress are being made.</List.Item>
                    <List.Item>Centre premises fitted out specifically with tuition in mind to ensure your child makes the most of their experience with us.</List.Item>
                    <List.Item>The Centre director is available to answer your questions at any time.</List.Item>
                </List>
                <Center>
                    <Button
                        radius={15}
                        mt={30}
                        size="md"
                        component="a"
                        href="/contact"
                        className={classes.contactButton}
                    >
                        Contact Us
                    </Button>
                </Center>
            </Container>
            
        </Box>
    )
}

export default CompetitiveAdvantage;