import Hero from '@/components/hero/hero';
import Layout from '@/components/layout/layout';
import { colors } from '@/constants/colors';
import { Container, Text } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Raena Learning</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Layout>
        <Hero />
        <Container mt={40}>
          <Text color={colors.primaryColor} weight={600} fz={36} align='center'>Your Success is Our Top Priority</Text>
          <Text align='center' mt={10}>Welcome to our learning center, where we offer a wide range of subjects designed to help our students unlock their full potential. Our fun and engaging lessons, expert instructors, and personalized attention make it easy for students to excel in school and beyond</Text>
        </Container>
     </Layout>
    </>
  )
}
