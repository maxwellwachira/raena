import FaqIntro from "@/components/faq/faqIntro/faqIntro";
import FaqQuestions from "@/components/faq/faqQuestions/faqQuestions";
import Footer from "@/components/common/footer/footer";
import Layout from "@/components/common/layout/layout";
import { footerData } from '@/constants/footer';
import { PageMetaData, fetchPageMetaData } from '@/util/pageMetaData';
import SeoPageHead from '@/components/common/seo';

export async function getStaticProps() {
    const pageData = await fetchPageMetaData("faq");
    return { props: { pageData } }
}


const FaqPage = ({ pageData }: PageMetaData) => {
    return (
        <>
            <SeoPageHead metaTitle={pageData.attributes.metaTitle} metaDescription={pageData.attributes.metaDescription} />
            <Layout>
                <FaqIntro />
                <FaqQuestions />
                <Footer data={footerData} />
            </Layout>
        </>
    )
}

export default FaqPage;