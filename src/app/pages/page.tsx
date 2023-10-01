import { getAllPages } from "@/lib/graphql/providers/pages";
import { Suspense, useEffect } from 'react'

export default async function Page() {
    const data = await getAllPages();


    if (!data) {
        <h2>no hay datos</h2>
    }

    return (
        <div>
            <h1>Mis post</h1>
            <Suspense fallback={<p>cargando</p>}>
                {data.map(page => {
                    return (
                        <div>
                            <p>{page.title}</p>
                            <p>{page.content}</p>
                            <p>{page.slug}</p>
                        </div>)
                })}
            </Suspense>
        </div>
    )
}