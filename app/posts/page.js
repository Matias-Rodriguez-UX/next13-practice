import { Inter } from 'next/font/google'
import ListOfPost from './ListOfPost'

const inter = Inter({ subsets: ['latin'] })



export default function Posts() {
    return (
        <section>
            <h1 className={inter.className}>Posts</h1>
            <ListOfPost />
        </section>

    )
}