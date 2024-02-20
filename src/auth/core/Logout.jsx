import {useEffect} from 'react'
import {Navigate, Routes} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

export function Logout() {
  const currentuser = useSelector((state)=>state?.user?.user)
  useEffect(() => {
    document.location.reload()
  }, [currentuser])

  return (
    <Routes>
      <Navigate to='/auth' />
    </Routes>
  )
}