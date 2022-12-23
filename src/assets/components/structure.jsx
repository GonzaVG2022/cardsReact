
const Users = ({pictures,names,emails,numbers,loc})=> {
    
  return(
        <div className="container">
          <div className="containerCards">
          <h1>{names}</h1>
          <img src={pictures}/>
          <h5 ><i className='bx bxs-envelope' >{emails}</i></h5>
          <h5 ><i className='bx bxs-phone' >{numbers}</i></h5>
          <h5 ><i className='bx bxs-location-plus' >{loc}</i></h5>
           
        </div>       

        </div>
)
}
export default Users