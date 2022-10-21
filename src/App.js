import './App.css'
import Header from './components/Header'
import Card  from './components/Cards'
import travels from './travels'

function App() {
  const cards = travels.map(travel => {
    return (
      <Card key={travel.id} 
            img={travel.image} 
            country={travel.country} 
            url={travel.url}
            site={travel.site} 
            from={travel.from} 
            to={travel.to} 
            text={travel.descriiption} />
    )
    
  })
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  )
}

export default App
