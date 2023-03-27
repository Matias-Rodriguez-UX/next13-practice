import { Inter } from 'next/font/google'
import Link from 'next/link'
import LikeButton from './LikeButton'

const inter = Inter({ subsets: ['latin'] })

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
}
export default async function ListOfPost() {
    const posts = await fetchPosts()

    return posts.slice(0, 5).map(post => (
        <article key={post.id} className={inter.className} style={{ marginBottom: '2rem' }}>
            <Link href={'/posts/[id]'} as={`/posts/${post.id}`}>
                <h2 style={{ color: '#003452' }}>{post.title}</h2>
                <p>{post.body}</p>
            </Link>
            <LikeButton id={post.id} />
        </article>
    ))
}
