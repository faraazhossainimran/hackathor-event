import React from 'react'
import Banner from '../../components/Banner/Banner'
import Services from '../../components/Services/Services'
import { useLoaderData } from 'react-router-dom'
import Testimonials from '../../components/Testimonials/Testimonials'
import Coundown from '../../components/Coundown/Coundown'
import SignUpBanner from '../../components/SignUpBanner/SignUpBanner'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Services data={data}></Services>
            <Coundown></Coundown>
            <Testimonials></Testimonials>
            <div className='container mx-auto'>
            <SignUpBanner heading="SignUp to join an event"></SignUpBanner>
            <Contact></Contact>

            </div>
        </div>
    )
}

export default Home