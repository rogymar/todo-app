// Components
import { Counter } from '@/components/Counter'
import { Searcher } from '@/components/Searcher'
import { TodoList } from '@/components/TodoList'

export default function Home() {
  return (
    <main className=''>
      <h1>Task Manager</h1>
      <Searcher />
      <Counter />
      <TodoList />
    </main>
  )
}
