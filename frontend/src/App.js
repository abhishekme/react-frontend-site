import Header from './Partial/Header';
import Footer from './Partial/Footer';
import Routers from './Router/Routers';

function App() {
  return (
    <div className="App">
        <main>          
          <Header/>
              <Routers/>
          <Footer/>            
        </main>
    </div>
  );
}

export default App;
