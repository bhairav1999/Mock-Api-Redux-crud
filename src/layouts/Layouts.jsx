import React from 'react'
import NavBar from '../navbar/NavBar'
import { Outlet } from 'react-router-dom'
import FormCrud from '../pages/FormCrud'

const Layouts = () => {
    return (
        <>
            <NavBar />
            <Outlet />


        </>
    )
}

export default Layouts