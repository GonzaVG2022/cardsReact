import { useState } from 'react'
import users from './json/users.json'
import Users from './assets/components/structure'
import colors from '../public/colors'
import './App.css'

function App() {
  // console.log(users)
  return (
    <div className="App">
      <div>
        {
        users.map( (people, index) =>{
          return <Users key={`people-${index}`} usersData={people}/>
        } )

      }
      </div>
     
    </div>
  )
}

export default App
