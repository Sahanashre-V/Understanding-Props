import './App.css';
// import elephant from "./images/elephant.jpeg";
import "./style.css"

function App(props) {
  // code here
  const out = props.name;
  return <div >
    <h1 className='text'>Kalvium Gallary</h1>
    <div className='main-container'>
      {
      out.map((element, index, out)=>{
        return <div key={element.id}>
          <img src={element.img} />
        </div>
      })
    }
    </div>
  </div>
  
}

export default App;