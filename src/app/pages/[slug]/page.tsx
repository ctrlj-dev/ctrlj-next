import { getPageBySlug } from "@/lib/graphql/queries";

export default async function Page({ params }: {
    params: {
        slug: string,
    }
}) {
    const data = await getPageBySlug(params.slug);
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
        </div>
    )
}