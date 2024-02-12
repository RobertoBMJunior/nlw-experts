import Logo from './assets/nlw-expert-logo.svg'
import { NewNodeCard } from './components/new-note-card'
import { NodeCard } from './components/note-card'

const note = {
  date: new Date(),
  content: "Ola, somos robos"
}


export function App() {

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={Logo}/>

      <form className='w-full '>
        <input 
          type="text" 
          placeholder='Busque em suas notas' 
          className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500'
        />

      </form>

      <div className='h-px bg-slate-400'/>

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
        <NewNodeCard/>
        <NodeCard note={note}/>

        

      </div>

    </div>
  )
}

