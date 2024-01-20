import Card from './components/cards'
import './App.css'

function App() {
  
  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Manoj" btnText = "click me"/>
      <Card username="Bhalu" />
    </>
  )
}

export default App
