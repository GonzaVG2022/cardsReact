import { useState, useEffect } from 'react'
import users from './json/users.json'
import Users from './assets/components/structure'


import './App.css'

function App() {

  function randomIndex1(length){
  let index = Math.floor(Math.random() * length)
  return index
} 

const [index, setIndex]= useState(randomIndex1(users.length))

const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D",
                  "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ];
  const randomColors = randomIndex1(colors.length)

 useEffect(()=>{ 
  let color= colors[randomIndex1(colors.length)]
  document.body.style=  `background-color: ${color};color: ${color} `  
  
  }, [index])

  return (
    
    <div className="App">
      <div>
        {
        <Users
       names= {` ${users[index].name.title} ${users[index].name.first} ${users[index].name.last} `}
       pictures= {`${users[index].picture.large}` }
       emails= {` ${users[index].email}`}
       numbers= {` ${users[index].phone}`}
       loc= {` ${users[index].location.country} ${users[index].location.state} ${users[index].location.city}` }
       
        />
        
        }
        
      </div>
        <div className='dad-button'>
        <button className="buu" onClick={()=>setIndex(randomIndex1(users.length))}><i className='bx bxs-chevrons-right'></i></button>
          
        </div>   
  </div>

  )
}

export default App
