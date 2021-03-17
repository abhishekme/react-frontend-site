import Navbar from './Partial/Navbar';
import Footer from './Partial/Footer';
import Routers from './Router/Routers';

function App() {
  return (
    <div className="App">        
        <main>          
          <Navbar/>
              <Routers/>
          <Footer/>            
        </main>
    </div>
  );
}

export default App;
