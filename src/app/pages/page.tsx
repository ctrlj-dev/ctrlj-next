import { getPageData } from '@/lib/api';

export default async function Page({ params }: { params: { slug: string, id: number } }) {
    const data = await getPageData();

    return (
        <div>
            <h1>Mis post</h1>
            {data ? data.map(e => {
                return (
                    <p>{e.node.title}</p>
                )
            }) : <h2>no hay datos</h2>}
        </div>
    )
}