import React from 'react'
import Header from '../components/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading/Loading'


const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div className='container mx-auto px-4 lg:px-0'>
            <div>
                <Header />
            </div>

            <div>
                {
                    navigation.state === "loading" ? <Loading /> : <Outlet />
                }
            </div>
        </div>
    )
}

export default MainLayout