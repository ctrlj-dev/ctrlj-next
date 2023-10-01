import { GetAllPagesQuery, Page } from '@/@types/global.ts/graphql';
import { NotAvailableData } from '@/lib/constants';


const pagesResponseToPages = (response: GetAllPagesQuery): GetAllPagesQuery => {
    if (!response.pages) {
        throw new Error(NotAvailableData);
    }

    return response.pages.edges.map(nodes => {
        const { __typename, title, content, slug } = nodes.node
        return {
            __typename: __typename,
            title: title,
            content: content,
            slug: slug,
        }
    })
}

export { pagesResponseToPages }