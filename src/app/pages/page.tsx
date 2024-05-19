import { exampleResolver } from "@/lib/graphql/resolvers/exampleResolver";
import { Suspense } from 'react';
import ButtonSwitchTheme from "../components/ui/button/ButtonSwitchTheme";

export default async function Page() {
    const data = await exampleResolver();

    if (!data) {
        <h2>no hay datos</h2>
    }

    return (
        <div>
            <h1>Mis post</h1>
            <ButtonSwitchTheme />
            <Suspense fallback={<p>cargando</p>}>
                {data.map(page => {
                    return (
                        <div key={page.slug}>
                            <p>{page.title}</p>
                            <p>{page.content}</p>
                            <p>{page.slug}</p>
                        </div>)
                })}
            </Suspense>
        </div>
    )
}
