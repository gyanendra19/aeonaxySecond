import React from 'react'
import Footer from './footer'
import HomeBody from './HomeBody'
import { NavLink } from 'react-router-dom'
import Head from './Head'

const Home = () => {
    return (
        <section className='w-full relative'>
            <Head />
            <HomeBody />
            <Footer />
        </section>
    )
}

export default Home