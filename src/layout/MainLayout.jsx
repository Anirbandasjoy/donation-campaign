import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <Header />
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout