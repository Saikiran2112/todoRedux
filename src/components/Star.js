import {FaStar} from 'react-icons/fa'
import {useState} from 'react'
import './style.css'
export default  function Star({num=10}){
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)
    const handleClick=(index)=>{
        console.log(index)
        setRating(index)
    }
    const handleEnter=(index)=>{
        setHover(index)
    }
    const handleLeave=()=>{
        setHover(rating)
    }
    return (
        <>
        {[...Array(num)].map((_,index)=>{
            return (
                <FaStar
                className={index<=(hover||rating)?'active':'inactive'}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>handleEnter(index)}
                onMouseLeave={handleLeave}
                size={40}
                />
            )
        })}
        </>
    )
}