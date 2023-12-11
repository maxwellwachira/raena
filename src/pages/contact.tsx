import Footer from "@/components/common/footer/footer";
import Layout from "@/components/common/layout/layout";
import ContactUs from "@/components/contact/contactUs";
import TellUs from "@/components/contact/tellUs";
import { footerData } from "@/constants/footer";
import { PageMetaData, fetchPageMetaData } from '@/util/pageMetaData';
import SeoPageHead from '@/components/common/seo';

export async function getStaticProps() {
    const pageData = await fetchPageMetaData("contact");
    return { props: { pageData } }
}

const FaqPage = ({ pageData }: PageMetaData) => {
    return (
        <>
           <SeoPageHead metaTitle={pageData.attributes.metaTitle} metaDescription={pageData.attributes.metaDescription} />
            <Layout>
                <ContactUs />
                <TellUs />
                <Footer data={footerData} />
            </Layout>
        </>
    )
}

export default FaqPage;