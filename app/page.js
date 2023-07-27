// Components
import { TaskPage } from '@/components/TaskPage'
import { TasksProvider } from './context'

export default function Home() {

  return (
    <main className='flex gap-20 m-10 items-center justify-center'>
      <TasksProvider>
        <TaskPage />
      </TasksProvider>
    </main>
  )
}
