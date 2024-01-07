import React from 'react'
import Banner from '../../components/Banner/Banner'
import Services from '../../components/Services/Services'
import { useLoaderData } from 'react-router-dom'
import Testimonials from '../../components/Testimonials/Testimonials'
import Coundown from '../../components/Coundown/Coundown'
import SignUpBanner from '../../components/SignUpBanner/SignUpBanner'

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Services data={data}></Services>
            <Coundown></Coundown>
            <Testimonials></Testimonials>
            <SignUpBanner heading="SignUp to join an event"></SignUpBanner>
        </div>
    )
}

export default Home