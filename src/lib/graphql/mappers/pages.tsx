import { GetAllPagesQuery, PageQueryBasicCtrlj } from '@/@types/global.ts/graphql';
import { NotAvailableData } from '@/lib/constants';


const pagesResponseToPages = (response: GetAllPagesQuery): PageQueryBasicCtrlj[] => {
    if (!response.pages) {
        throw new Error(NotAvailableData);
    }

    return response.pages.edges.map(nodes => {
        const { __typename, title, content, slug } = nodes.node
        return {
            title: title,
            content: content,
            slug: slug,
            __typename: 'PageQueryBasicCtrlj'
        }
    })
}

export { pagesResponseToPages }