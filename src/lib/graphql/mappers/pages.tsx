import { GetAllPagesQuery, PageQueryBasicCtrlj } from '@/@types/global.ts/graphql';
import { FailedToFetchError } from '@/lib/constants';


const pagesResponseToPages = (response: GetAllPagesQuery): PageQueryBasicCtrlj[] => {

    if (!response.pages) {
        throw new Error(FailedToFetchError);
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