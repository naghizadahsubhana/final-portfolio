import React from 'react'
import Typed from "react-typed"
const Home = () => {
    return (
        <header className="header">
        <div className="h-center ">
        <h1><i> Naghizada Subhana</i></h1>
        <Typed className="typed-text" strings={["Front-end developer"]}
        typeSpeed={40}
        backSpeed={60}
        loop/>
        </div>
        </header>
    )
}

export default Home
