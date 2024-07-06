import React from 'react'
import SideBar from "./SideBar/SideBar"
import Posts from '../Posts/Posts'

import "./MainBlock_module.css"

export default function MainBlock({setIsLoggetIn}) {
  return (
    <>
      <SideBar setIsLoggetIn={setIsLoggetIn}/>
      <main className='mainBlock'>
        <Posts />
      </main>

    </>
  )
}
