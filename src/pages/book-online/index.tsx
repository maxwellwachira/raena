import OurServices from "@/components/bookOnline/ourServices";
import Footer from "@/components/common/footer/footer";
import Layout from "@/components/common/layout/layout";
import { footerData } from "@/constants/footer";
import { PageMetaData, fetchPageMetaData } from '@/util/pageMetaData';
import SeoPageHead from '@/components/common/seo';

export async function getStaticProps() {
    const pageData = await fetchPageMetaData("book-online");
    return { props: { pageData } }
}

const BookOnlinePage = ({ pageData }: PageMetaData) => {
    return (
        <>
            <SeoPageHead metaTitle={pageData.attributes.metaTitle} metaDescription={pageData.attributes.metaDescription} />
            <Layout>
                <OurServices />
                <Footer data={footerData}/>
            </Layout>
        </>
    )
}

export default BookOnlinePage;