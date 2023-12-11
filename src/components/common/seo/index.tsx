import Head from "next/head"

interface MetaData {
    metaTitle?: string;
    metaDescription?: string;
}

const SeoPageHead = ({metaTitle, metaDescription}: MetaData) => {
    return (
        <Head>
            <title>{metaTitle} | Raena Learning</title>
            <meta name="description" content={metaDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default SeoPageHead;