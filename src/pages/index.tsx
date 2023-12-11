import Footer from '@/components/common/footer/footer';
import Hero from '@/components/home/hero/hero';
import PreparingStudents from '@/components/home/preparingStudents/preparingStudents';
import Testimonials from '@/components/home/testimonials/testimonials';
import Wave from '@/components/home/wave/wave';
import WhatWeOffer from '@/components/home/whatWeOffer/whatWeOffer';
import WhatWeProvide from '@/components/home/whatWeProvide/whatWeProvide';
import Layout from '@/components/common/layout/layout';
import { footerData } from '@/constants/footer';
import Head from 'next/head';
import { PageMetaData, fetchPageMetaData } from '@/util/pageMetaData';
import SeoPageHead from '@/components/common/seo';

export async function getStaticProps() {
  const pageData = await fetchPageMetaData("home");
  return { props: { pageData } }
}

export default function Home({ pageData }: PageMetaData) {
  return (
    <>
      <SeoPageHead metaTitle={pageData.attributes.metaTitle}  metaDescription={pageData.attributes.metaDescription} />
      <Layout>
        <Hero />
        <Wave />
        <WhatWeOffer />
        <PreparingStudents />
        <WhatWeProvide />
        <Testimonials />
        <Footer data={footerData} />
      </Layout>
    </>
  )
}
