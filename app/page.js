import Image from 'next/image'

// Components
import { AddButton } from '@/components/AddButton'
import { Counter } from '@/components/Counter'
import { Searcher } from '@/components/Searcher'
import { TaskBox } from '@/components/Tasks/TaskBox'

//Images
import principal from '@/public/principal.png'

export default function Home() {
  return (
    <main className='flex gap-20 m-10 items-center justify-center'>
      <div className='w-full text-center'>
        <h1 className='text-7xl'>Task Manager</h1>
        <Counter completed={6} total={12} />
        <Image src={principal} alt='presentation-image' className='w-full h-auto' />
      </div>
      <div className='w-full'>
        <Searcher />
        <AddButton />
        <TaskBox />
      </div>
    </main>
  )
}
