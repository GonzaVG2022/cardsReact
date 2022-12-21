import { useState } from 'react'
import users from './json/users'
import Users from './assets/components/structur'



import './App.css'

function App() {
  const [count, setCount] = useState(0)
const userArray = users.map((name, index) => <Users key={index} count={name}/>)
  return (
    <div className="App">
      
      
     
    </div>
  )
}

export default App
