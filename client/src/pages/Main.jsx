import React, { useState ,Suspense} from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../components/common/SuspenseLoader';
import {Box} from '@mui/material'

const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prev => !prev);
    }

    return (
        <>
            <Header toggleDrawer={toggleDrawer} />
            < SideBar openDrawer={openDrawer} />
            <Suspense fallback={<SuspenseLoader />}>
                <Outlet context={{openDrawer}}/>
            </Suspense>
        </>
    )
}

export default Main