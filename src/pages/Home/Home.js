import React from 'react'
import Introcontainer from '../../components/homeintro/Introcontainer'
import Servicecontainer from '../../components/homeservice/Servicecontainer'
import Technicalcontainer from '../../components/hometechnical/Technicalcontainer'
import Navigation from '../../components/navbar/Navigation'


const Home = () => {
    return (
        <div>
            <Navigation/>
            <Introcontainer/>
            <Servicecontainer/>
            <Technicalcontainer/>
    
        </div>
    )
}

export default Home
