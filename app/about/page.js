import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <h1 className={inter.className}>About</h1>
    )
}
