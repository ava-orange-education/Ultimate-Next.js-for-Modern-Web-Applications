//  Chapter 09 Optimization
'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import useSWR from 'swr'

const HeavyComponent = dynamic(() => import('../../../components/sample/HeavyComponent'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
})

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function ChapterNineOptimization() {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users/1', fetcher)

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-center">Chapter 9: Performance Optimization in Next.js 15</h1>

            <section>
                <h2 className="text-xl font-semibold">Optimized Image</h2>
                <Image
                    src="/linkedIn.png"
                    alt="Optimized profile image"
                    width={400}
                    height={400}
                    placeholder="blur"
                    blurDataURL="/twiter.png"
                    priority
                />
            </section>

            <section>
                <h2 className="text-xl font-semibold">Dynamic Import</h2>
                <HeavyComponent />
            </section>

            <section>
                <h2 className="text-xl font-semibold">Client-Side Caching with SWR</h2>
                {error && <p className="text-red-500">Failed to load user data</p>}
                {!data && <p>Loading...</p>}
                {data && (
                    <div className="bg-gray-100 p-4 rounded">
                        <p><strong>Name:</strong> {data.name}</p>
                        <p><strong>Email:</strong> {data.email}</p>
                    </div>
                )}
            </section>
        </div>
    )
}

