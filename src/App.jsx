import Card from './components/cards'
import './App.css'

function App() {
  let  myObj = {
    username: "Manoj",
    age: 23
  }
  let newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Manoj" btnText = "click me"/>
      <Card username="Bhalu" />
    </>
  )
}

export default App
