import { ExampleQuery, ExampleSchema } from '@/@types/global.ts/graphql';
import { FailedToFetchError } from '@/lib/constants';
import { WordpressResponse } from '../types/rest';


const exampleQueryResponseToExampleQuery = (response: ExampleQuery): ExampleSchema[] => {

    if (!response.pages) {
        throw new Error(FailedToFetchError);
    }

    return response.pages.edges.map(nodes => {
        const { title, content, slug } = nodes.node
        return {
            title: title,
            content: content,
            slug: slug,
            __typename: 'ExampleSchema'
        }
    })
}

export { exampleQueryResponseToExampleQuery }