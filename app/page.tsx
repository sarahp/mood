import Link from 'next/link'
import { useUser } from '@clerk/nextjs'

export default function Home() {
  const { user } = useUser

  let href = user ? '/journal' : '/new-user';
  let buttonText = user ? 'Go to journal' : 'Get started';

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-full max-w-[600px] index-auto">
        <h1 className="text-6xl text-white mb-4">The best Journal app, period.</h1>
        <p className="text-2xl text-white/60 mb-4">This is the best app for tracking your mood throughout your life. All you have to do is be honest."</p>
        <div>
          <Link href={href}>
            <button className="bg-purple-600 px-4 py-2 rounded-lg text-xl">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
