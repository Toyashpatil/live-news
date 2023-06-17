import React,{useState} from 'react'

const Signup = () => {
  const [name,setName]=useState("");
  const [disName,setDisName]=useState()
  
  const handleChange = (event =>{
    const newName=event.target.value;
    return(
      setName(newName)
    )
  })

  const display=()=>{
    setDisName(name);
  }



  return (
    <div className='bg-black flex-col bg-opacity-40 justify-center rounded-xl mt-32 h-fit p-2 w-fit text-white text-center m-auto'>
        <h1>Hello,{disName} </h1>
        <div className='mr-1 ml-1 mt-4'>
            <input onChange={(handleChange)} className=' w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm' placeholder='Enter your name'></input>
        </div>
        <div className='mr-1 ml-1 mt-4 '>
            <input onClick={display} className=' w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm' type='password' placeholder='Password'></input>
        </div>
        <div className='mr-1 ml-1 mt-4 '>
            <input className=' w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm' type='password' placeholder='Confirm Password'></input>
        </div>
        <div>
          <button className='mt-3'>Signup</button>
        </div>
    </div>
        
  )
}

export default Signup