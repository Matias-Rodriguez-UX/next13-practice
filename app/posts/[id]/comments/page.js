import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const fetchComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    }).then(res => res.json())
}

export default async function Comments({ params }) {
    const { id } = params
    const comments = await fetchComments(id)

    return (
        <ul style={{ background: '#fffff', border: '1px solid black', padding: '1rem', gap: '2rem', marginLeft: '10%', marginRight: '10%' }}>
            {comments.map(comment => (
                <li key={comment.id} style={{ listStyle: 'none', marginBottom: '2rem' }} >
                    <h4 className={inter.className} style={{ color: '#003452' }}>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            )
            )}
        </ul>)




}