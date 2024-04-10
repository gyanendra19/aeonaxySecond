import { useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Login from './components/Login'
import AddPic from './components/AddPic'
import ChooseField from './components/chooseField'
import Home from './components/home'
import { userContext } from './contexts/userContext.js'

function App() {
  const [user, setUser] = useState({})
  const [imageUrl, setImageUrl] = useState('')

console.log(user);
  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='' element={<Login />} />
      <Route path='add-photo' element={<AddPic />} />
      <Route path='choose-field' element={<ChooseField />} />
      <Route path='home' element={<Home />} />
      </>
    )
  )

  return (
    
    <>
    <userContext.Provider value={{user, setUser, imageUrl, setImageUrl}}>
      <RouterProvider router={route} />
    </userContext.Provider>
    </>
 
  )
}

export default App
