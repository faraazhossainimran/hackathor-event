import React from 'react'
import Banner from '../../components/Banner/Banner'
import Services from '../../components/Services/Services'
import { useLoaderData } from 'react-router-dom'
import Testimonials from '../../components/Testimonials/Testimonials'

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Services data={data}></Services>
            <Testimonials></Testimonials>
        </div>
    )
}

export default Home