import { colors } from "@/constants/colors";
import { Container, Box, Group, Text, createStyles } from "@mantine/core";
import Image from 'next/image';
import wave1 from '@/assets/wave1.png';
import wave2 from '@/assets/wave2.png';
import wave3 from '@/assets/wave3.png';
import { useViewportSize } from "@mantine/hooks";

const useStyles = createStyles(() => ({
    flexDisplay: {
        display: 'flex',
        justifyContent: 'center',
        gap: 30
    },
    offset: {
        marginTop: 150
    },
   
}))

const Wave = () => {
    const { classes } = useStyles();
    const { width } = useViewportSize();

    return (
        <Container mt={50} size="lg">
            <Text color={colors.primaryColor} weight={600} fz={36} align='center' mt={10}>Your Success is Our Top Priority</Text>
            <Text align='center' mt={10}>Welcome to our learning center, where we offer a wide range of subjects designed to help our students unlock their full potential. Our fun and engaging lessons, expert instructors, and personalized attention make it easy for students to excel in school and beyond</Text>
            <Box mt={40} className={classes.flexDisplay}>
                <Box>
                    <Image
                        src={wave1}
                        height={400}
                        width={330}
                        alt="stednt smiling image"
                    />
                </Box>
                <Box  className={classes.offset}>
                    <Image
                        src={wave2}
                        height={400}
                        width={330}
                        alt="stednt smiling image"
                    />
                </Box>
                <Box>
                    <Image
                        src={wave3}
                        height={400}
                        width={330}
                        alt="stednt smiling image"
                    />
                </Box>

            </Box>
        </Container>
    )
}

export default Wave;