import Car from "./components/Car";
import FuncCar from "./components/FuncCar";
import FuncBestCar from "./components/FuncBestCar";
import Counter from "./components/Counter";
import Hero from "./components/Hero";
import Button from "./components/Button";
import MoodCheker from "./components/MoodCheker";

const App = () => {
  return (
    <div>
      <h2>Class</h2>
      <Car />
      <br />
      <br />
      <br />
      <h2>Function with one state</h2>
      <FuncCar />
      <br />
      <br />
      <br />
      <h2>Function with separate states</h2>
      <FuncBestCar />
      <br />
      <Counter />
      <Hero title="This is title" subtitle="Thi is subtile" />
      <Button variant="text" title="Text" />
      <Button variant="contained" title="contained" />
      <Button variant="outlined" title="outlined" />
      <MoodCheker />
    </div>
  );
};

export default App;
