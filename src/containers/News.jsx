import React from 'react'


const News = ({title,content,url,read}) => {
  return (
    <div className='flex border-dashed border- border-2 shadow-md hover:shadow-2xl space-x-4 mt-4 space-y-4 pr-3 w-fit h-auto rounded-2xl'>
        <div className='ml-3 space-y-4 w-fit flex-col flex-wrap break-words max-w-xs font-semibold antialiased' >
            <h1 className='font-serif text-xl'>{title}</h1>
            <img src={url} /> 
            <p>{content}</p>
            <button className='p-2 shadow-md hover:shadow-2xl rounded-2xl'><a href={read}>Read More</a></button> 
        </div>
    </div>
  )
}

export default News