import React from 'react'
import Banner from '../../components/Banner/Banner'
import Services from '../../components/Services/Services'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Services data={data}></Services>
        </div>
    )
}

export default Home