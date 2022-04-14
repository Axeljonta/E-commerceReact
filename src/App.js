import './App.css'; 
import Navbar from './components/nav/Navbar'; 
import ContainerList from './components/ItemListContainer' 
import ContainerDetail from './components/itemDetailContainer'



function App() {
  return (
    <div className="App">  
    <Navbar/>
    <ContainerList/> 
    {/* <ContainerDetail/>  */}
    </div>
  );
}

export default App;
