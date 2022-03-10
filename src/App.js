import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App(){
    return(
    <div>
        <Navbar/>
        <Hero />
        <section className="section__cards">
      <div className="card__grid">
        <Card 
           img="card.png"
           rating={5.0.toFixed(1)}
           reviewCount={6}
           country="Poland"
           title="Life lessons with Katie Zaferes"
           price={136}
        />
         <Card 
           img="cookie.jpg"
           rating={4.7.toFixed(1)}
           reviewCount={123}
           country="Poland"
           title="Cookies baking class"
           price={25}
        />
         <Card 
           img="wedding.png"
           rating={4.9.toFixed(1)}
           reviewCount={12}
           country="USA"
           title="Have a great wedding day!"
           price={2000}
        />
      </div>
      </section>
    </div>
    )
}