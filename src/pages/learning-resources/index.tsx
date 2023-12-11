import Footer from "@/components/common/footer/footer";
import Layout from "@/components/common/layout/layout";
import LearningResourcesIntro from "@/components/learningResources/learningResoucesIntro/learningResourcesIntro";
import { footerData } from "@/constants/footer";
import LearningPacks from "@/components/learningResources/learningPacks/learningPacks";
import { PageMetaData, fetchPageMetaData } from '@/util/pageMetaData';
import SeoPageHead from '@/components/common/seo';

export async function getStaticProps() {
    const pageData = await fetchPageMetaData("learning-resources");
    return { props: { pageData } }
}

const LearningResourcesPage = ({ pageData }: PageMetaData) => {
    return (
        <>
            <SeoPageHead metaTitle={pageData.attributes.metaTitle} metaDescription={pageData.attributes.metaDescription} />
            <Layout>
                <LearningResourcesIntro />
                <LearningPacks />
                <Footer data={footerData} />
            </Layout>
        </>
    )
}

export default LearningResourcesPage;