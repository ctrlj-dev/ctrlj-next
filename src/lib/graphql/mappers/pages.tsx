import { GetAllPagesQuery, Page } from '@/@types/global.ts/graphql';
import { NotAvailableData } from '@/lib/constants';


type PageQuery = Pick<Page, 'title' & 'content' & 'slug'>

const pagesResponseToPages = (response: GetAllPagesQuery): PageQuery[] => {
    if (!response.pages) {
        throw new Error(NotAvailableData);
    }
    const pages = response.pages.edges.map(edge => {
        const { node: page } = edge
        return {
            title: page.title,
            content: page.content,
            slug: page.slug,
        }
    })
    return pages
}

export { pagesResponseToPages }