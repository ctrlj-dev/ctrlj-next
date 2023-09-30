import { getAllPages } from "@/lib/graphql/providers/pages";
import { Suspense, useEffect } from 'react'

export default async function Page() {
    const data = await getAllPages();


    return (
        <div>
            <h1>Mis post</h1>
            <Suspense fallback={<p>cargando</p>}>
                {data ? data.map(page => {
                    return (
                        <div>
                            <p>{page.title}</p>
                            <p>{page.content}</p>
                            <p>{page.slug}</p>
                        </div>)
                }) : <h2>no hay datos</h2>}
            </Suspense>

        </div>
    )
}