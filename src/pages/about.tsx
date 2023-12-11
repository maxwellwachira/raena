import AboutImages from "@/components/about/aboutImages";
import AboutIntro from "@/components/about/aboutIntro";
import CompetitiveAdvantage from "@/components/about/competitiveAdvantage";
import OurStory from "@/components/about/ourStory";
import WhatWeDo from "@/components/about/whatWeDo";
import Footer from "@/components/common/footer/footer";
import Layout from "@/components/common/layout/layout";
import { footerData } from "@/constants/footer";
import { PageMetaData, fetchPageMetaData } from '@/util/pageMetaData';
import SeoPageHead from '@/components/common/seo';

export async function getStaticProps() {
    const pageData = await fetchPageMetaData("about");
    return { props: { pageData } }
}

const AboutPage = ({ pageData }: PageMetaData) => {
    return (
        <>
            <SeoPageHead metaTitle={pageData.attributes.metaTitle} metaDescription={pageData.attributes.metaDescription} />
            <Layout>
                <AboutIntro />
                <AboutImages />
                <WhatWeDo />
                <CompetitiveAdvantage />
                <OurStory />
                <Footer data={footerData} />
            </Layout>
        </>
    )
}

export default AboutPage;