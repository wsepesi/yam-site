import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex flex-col p-1 items-center justify-center">
      <p className='text-sm font-mono'>[Yam]🍠 is a bespoke mailroom management and data platform.</p>
      <p className='text-sm font-mono'>Contact <strong>sales@yam.com</strong> for more information.</p>
    </div>
  )
}
