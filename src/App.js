import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data"
export default function App(){
  const cardData = Data.map(item => 
    <Card  
        title = {item.title}
        price = {item.price} 
        img = {item.coverImg} 
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        country = {item.location} 
        status = {item.status}
       
    
    />
    )
    return(
    <div>
        <Navbar/>
        <Hero />
        <section className="section__cards">
      <div className="card__grid">
       {cardData}
      </div>
      </section>
    </div>
    )
}