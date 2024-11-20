import Profile from "./components/Profile";
import Product from "./components/Product"
import ClickListener from "./components/ClickListener"
import "./App.css";

function App() {
  return (
    <>
      <Profile name="Kelly" job="Junior software engineer apprentice" birthday="31st August"/>
      <Product name="Air Fryer K2000" description="The best air fryer to fry all things, even Mars bars" price={150}/>
      <Product name="Microwave" description="It cooks things quickly" price={120}/>
      <ClickListener />
    </>
  );
}

export default App;
