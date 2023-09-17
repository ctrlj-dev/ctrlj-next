import { getAllPages } from "@/lib/graphql/queries";

export default async function Page() {
    const data = await getAllPages();
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