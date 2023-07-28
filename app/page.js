// Components
import { TaskPage } from '@/components/TaskPage'
import { TasksProvider } from './context'

export default function Home() {

  return (
    <main className='flex-col lg:grid lg:grid-cols-2 gap-20 m-10 md:m-12 lg:m-10 items-center justify-center'>
      <TasksProvider>
        <TaskPage />
      </TasksProvider>
    </main>
  )
}
