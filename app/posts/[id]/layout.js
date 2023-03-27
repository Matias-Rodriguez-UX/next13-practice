import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const fetchSinglePost = async (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({ children, params }) {
    const { id } = params
    const post = await fetchSinglePost(id)
    return (
        <article key={post.id} className={inter.className} style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#003452' }}>{post.title}</h4>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
            {children}
        </article>
    )
}