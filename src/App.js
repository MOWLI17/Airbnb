import './App.css';
import Bangalore from './Component/Bangalore';
import Coimbatore from './Component/Coimbatore';
import Dindigul from './Component/Dindigul';
import Footer from './Component/Footer';
import Goa from './Component/Goa';
import Hyderabad from './Component/Hyderabad';
import Nav from './Component/Nav';
import Nilgiris from './Component/Nilgiris';
import Pondi from './Component/Pondi';
import Thiruvanthapuram from './Component/Thiruvanthapuram';

function App() {
  return (
    <div>
      <Nav/>
      <Bangalore/>
      <Pondi/>
      <Dindigul/>
      <Hyderabad/>
      <Nilgiris/>
      <Goa/>
      <Coimbatore/>
      <Thiruvanthapuram/>
      <Footer/>
    </div>
  );
}

export default App;
