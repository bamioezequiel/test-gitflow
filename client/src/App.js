import './App.css';
import Home from './components/Home/Home';

function App() {
  let activities = `[
    {
        "id": 1,
        "name": "Tour de Highlights",
        "description": "",
        "image": "",
        "price": 0,
        "classification": 0
    },
    {
        "id": 2,
        "name": "Tour de Museos",
        "description": "",
        "image": "",
        "price": 0,
        "classification": 0
    },
    {
        "id": 3,
        "name": "Tour de Monumentos",
        "description": "",
        "image": "",
        "price": 0,
        "classification": 0
    },
    {
        "id": 4,
        "name": "Tour Gastronomía Nacional",
        "description": "",
        "image": "",
        "price": 0,
        "classification": 0
    },
    {
        "id": 5,
        "name": "Pub Crawl",
        "description": "",
        "image": "",
        "price": 0,
        "classification": 0
    },
    {
        "id": 6,
        "name": "Tour en Bicicleta",
        "description": "",
        "image": "",
        "price": 0,
        "classification": 0
    },
    {
        "id": 7,
        "name": "Tour Parques",
        "description": "",
        "image": "",
        "price": 0,
        "classification": 0
    },
    {
        "id": 8,
        "name": "Camping en Parques Naturales",
        "description": "",
        "image": "",
        "price": 0,
        "classification": 0
    },
    {
        "id": 9,
        "name": "Tour a Pie",
        "description": "",
        "image": "",
        "price": 0,
        "classification": 0
    },
    {
        "id": 10,
        "name": "Tour de Arte Callejero",
        "description": "",
        "image": "",
        "price": 0,
        "classification": 0
    },
    {
        "id": 11,
        "name": "Ski",
        "description": "",
        "image": "",
        "price": 0,
        "classification": 0
    },
    {
        "id": 12,
        "name": "Surf",
        "description": "",
        "image": "https://imgur.com/NGCGkvs.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 13,
        "name": "Bungee Jumping",
        "description": "",
        "image": "https://imgur.com/dljSBKZ.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 14,
        "name": "Paracaidismo",
        "description": "",
        "image": "https://imgur.com/yMGa3Zw.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 15,
        "name": "Parapente",
        "description": "",
        "image": "https://imgur.com/7zoTNlU.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 16,
        "name": "Kite Surf",
        "description": "",
        "image": "https://imgur.com/auB5UPa.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 17,
        "name": "Wind Surf",
        "description": "",
        "image": "https://imgur.com/vM7WxbN.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 18,
        "name": "Ciclismo de montaña",
        "description": "",
        "image": "https://imgur.com/3HsrMZM.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 19,
        "name": "Circuito en barco/catamaran/lancha/góndola",
        "description": "",
        "image": "https://imgur.com/CLI6ILD.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 20,
        "name": "Cabalgata",
        "description": "",
        "image": "https://imgur.com/DsHlaQX.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 21,
        "name": "Safari",
        "description": "",
        "image": "https://imgur.com/zAIcOGm.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 22,
        "name": "Tour de Viñedos (Cata de vinos)",
        "description": "",
        "image": "https://imgur.com/Mk5UEXG.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 23,
        "name": "Carnaval",
        "description": "",
        "image": "https://imgur.com/OtI6sTB.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 24,
        "name": "Buceo",
        "description": "",
        "image": "https://imgur.com/SiSKmQm.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 25,
        "name": "Trekking",
        "description": "",
        "image": "https://imgur.com/y1IP8OM.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 26,
        "name": "Escalar",
        "description": "",
        "image": "https://imgur.com/j1KW3WZ.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 27,
        "name": "Canopy",
        "description": "",
        "image": "https://imgur.com/fkTUwf8.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 28,
        "name": "Ciclismo",
        "description": "",
        "image": "https://imgur.com/q5L311O.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 29,
        "name": "Rappel",
        "description": "",
        "image": "https://imgur.com/vA78NbL.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 30,
        "name": "Pesca",
        "description": "",
        "image": "https://imgur.com/VAjqMpC.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 31,
        "name": "Vuelo en Globo",
        "description": "",
        "image": "https://imgur.com/t92NQux.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 32,
        "name": "Vista paronámica de la ciudad en Helicóptero",
        "description": "",
        "image": "https://imgur.com/kwahjDt.png",
        "price": 0,
        "classification": 0
    },
    {
        "id": 33,
        "name": "Bus Turistico",
        "description": "",
        "image": "https://imgur.com/18vbrp4.png",
        "price": 0,
        "classification": 0
    } 
]`

activities = JSON.parse(activities)
console.log(activities)
  return (
    <div>
      {
        activities?.map( (el) => <div key={el.id}>
            <img src={el.image} width='350px' alt={el.name} />
            <h2>{el.id} | {el.name}</h2>
            <h4>{el.price}</h4>
            <p>{el.description}</p>
        </div>)

      }
    </div>
  );
}

export default App;
