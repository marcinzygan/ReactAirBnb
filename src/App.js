import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data"
export default function App(){
  
  const cardData = Data.map(item => 
  
    <Card
        key= {item.id}  
        item={item}
        // title = {item.title}
        // price = {item.price} 
        // img = {item.coverImg} 
        // rating = {item.stats.rating}
        // reviewCount = {item.stats.reviewCount}
        // location = {item.location} 
        // status = {item.openSpots}
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