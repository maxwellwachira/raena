import { urls } from "@/constants/urls"


export const fetchPageMetaData = async (pageName: string) => {
    try {
        const res = await fetch(`${urls.strapiUrl}/seos`)
        const pages = await res.json()

        const pageData = pages.data.filter((page: any) => (
            page.attributes.pageName === pageName
        ));
        //console.log(pageData[0]);
        return pageData[0];
    } catch (error) {
        console.log(error);
    }
}

export interface PageMetaData {
    pageData: {
        id: number;
        attributes: {
            pageName: string;
            metaTitle: string;
            metaDescription: string;
            createdAt: string; // Consider using a Date type if you parse this string into a Date object
            updatedAt: string; // Consider using a Date type if you parse this string into a Date object
            publishedAt: string; // Consider using a Date type if you parse this string into a Date object
        };
    };
}