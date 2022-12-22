import { useState } from "react"

const Users = ({usersData})=> {
    const {gender, name, location,email,login,dob,registered,phone,cell,id,picture,nat}=usersData
    // const [ counter, setCounter]= useState()
    return(
        <>
{/* <h1>{gender}</h1> */}
<h1>{name.title}</h1><h1>{name.first}</h1><h1>{name.last}</h1>



 {/* <h1>{location.street.number}</h1> */}
{/* <h1>{location.street.name}</h1> */}

{/* <img src={picture.large}/>  */}
<img src={picture.medium}/>
{/* <img src={picture.thumbnail}/> */}
{/* <h1>{location.postcode}</h1>
<h1>{location.coordinates.latitude}</h1>
<h1>{location.coordinates.longitude}</h1>
<h1>{location.timezone.offset}</h1>
<h1>{location.timezone.description}</h1> */}
<h5>{email}</h5>
{/* <h1>{login.uuid}</h1>
<h1>{login.username}</h1>
<h1>{login.password}</h1>
<h1>{login.salt}</h1>
<h1>{login.md5}</h1>
<h1>{login.sha1}</h1>
<h1>{login.sha256}</h1>
<h1>{dob.date}</h1>
<h1>{dob.age}</h1>
<h1>{registered.date}</h1>
<h1>{registered.age}</h1> */}
<h5>{phone}</h5>
{/* <h1>{cell}</h1> */}
{/* <h1>{id.name}</h1> */}
{/* <h1>{id.value}</h1> */}
<h5>{location.city}</h5>
<h5>{location.state}</h5>
<h5>{location.ountry}</h5>
{/* <h1>{nat}</h1>  */}
<button><i class='bx bxs-cool'></i></button>
   
   
   
   
   </>)
}

export default Users