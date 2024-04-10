import React from 'react'
import { NavLink } from 'react-router-dom'

export const PinkBtn = ({text, toPage, readOnly, onPage}) => {
  return (
    <NavLink to={`/${readOnly === '' ? onPage : toPage}`}>
    <button type='submit' className={`px-12 py-2 mt-6 rounded-md bg-pink-500 text-white text-sm font-medium ${readOnly === '' ? 'opacity-60' : ''}`}>{text}</button>
    </NavLink >
  )
}


export const signupBtn = (text, checked) => {
  return (
  <button type='submit' className={`px-12 py-2 mt-6 rounded-md bg-pink-500 text-white text-sm font-medium ${checked ? '' : 'opacity-55'}`}>{text}</button>
)
  
}
