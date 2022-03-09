import grid from "./images/grid.png"
function Hero(){
    return(
        <section className="hero">
            <img src= {grid} className="hero__img"></img>
            <h1 className="hero__h1">Online Experiences</h1>
            <h4 className="hero__h4">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h4>
        </section>
    )
}

export default Hero