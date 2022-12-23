import { useState } from 'react'
import users from './json/users.json'
import Users from './assets/components/structure'
// import ColorsRandom from './assets/components/colors'

import './App.css'

function App() {

//  console.log(users)

  

// !fin
function randomIndex1(){
  let index = Math.floor(Math.random() * users.length)
  return index
}

  

const [index, setIndex]= useState(randomIndex1())

let positionUser=randomIndex1();


  return (
    
    <div className="App">
      <div>
        {
        <Users
       names= {`${users[positionUser].name.title} ${users[positionUser].name.first} ${users[positionUser].name.last} `}
       pictures= {`${users[positionUser].picture.medium}` }
       emails= {`${users[positionUser].email}`}
       numbers= {`${users[positionUser].phone}`}
       loc= {`${users[positionUser].location.country} ${users[positionUser].location.state} ${users[positionUser].location.city}` }
      // color={colors[icolo]}
        />
        
        }
        {
         
         
        }
      </div>
        <div className='dad-button'>
          
          <button onClick={()=>setIndex(randomIndex1())}><button onClick={()=>setIcolo(changeIndex)}><i className='bx bxs-cool'></i></button></button>
        </div>   
  </div>

  )
}

export default App
