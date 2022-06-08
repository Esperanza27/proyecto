import './App.css';
import Routing from "./common/routing";
import Navbar from './common/navbar';
import mirageServer from "./services/mirageServer";
 mirageServer();

function App() {

  return (
    <div>
      <Navbar/>
      <Routing/>
    
    </div>
  );
}

export default App;
