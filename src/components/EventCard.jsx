import React from 'react'
import {animate, motion} from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";



const variant1={
    initial:{
        y:500
    },
    visible:{
        y:0,
        transition:{
            duration:0.8
        }
    }
}

const variant2={
    initial:{
        scale:1
    },
    hover:{
        scale:1.1,
        transition:{
            duration:0.3
        }
    }
}

const EventCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div variants={variant2} initial="initial" whileHover="hover" className='rounded-xl border-black border-[1px] text-white relative h-[25rem] shadow-2xl overflow-hidden' onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
    <div className={'bg-'+props.image+' bg-cover bg-center w-full h-full'}></div>

    <div className='absolute inset-0 flex items-center justify-center'>

    <div className={'absolute w-full h-full bg-gradient-to-r opacity-50 from-['+props.from+'] to-['+props.to+']'}></div>

    <Link to={props.url} className='text-center bg-transparent relative z-40 w-full h-full flex p-16 justify-center items-center'>
    
    <p className={isHovered?'hidden':'font-roboto text-2xl font-bold uppercase'}>{props.name}</p>

    
    <motion.div 
    variants={variant1}
    initial="initial"
    animate={isHovered?"visible":""}
    className={isHovered?'drop-shadow-xl':'hidden'}
    >
    <p className='font-medium text-sm' >{props.description}</p>
    </motion.div>
    </Link>

    </div>

    </motion.div>
  )
}

export default EventCard