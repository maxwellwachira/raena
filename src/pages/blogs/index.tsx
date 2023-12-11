import BlogsCards from "@/components/blogs/blogCards";
import BlogIntro from "@/components/blogs/blogsIntro";
import Footer from "@/components/common/footer/footer";
import Layout from "@/components/common/layout/layout";
import { footerData } from "@/constants/footer";
import { PageMetaData, fetchPageMetaData } from '@/util/pageMetaData';
import SeoPageHead from '@/components/common/seo';

export async function getStaticProps() {
    const pageData = await fetchPageMetaData("blogs");
    return { props: { pageData } }
}

const AllBlogsPage = ({ pageData }: PageMetaData) => {
    return (
        <>
            <SeoPageHead metaTitle={pageData.attributes.metaTitle} metaDescription={pageData.attributes.metaDescription} />
            <Layout>
                <BlogIntro />
                <BlogsCards />
                <Footer data={footerData} />
            </Layout>
        </>
    )
}

export default AllBlogsPage;