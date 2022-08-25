import React from 'react'
import Logo from '../components/Logo'
import {Head} from '../components/Logo/Data'
import InicioPer from '../components/InicioPer'
const Home = () => {
    
    return (
        <>
            <Logo {...Head} />
            <InicioPer />
        </>
    )
}

export default Home