import './App.css';
import Intro from './components/intro';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/fourth';
import Five from './components/five';
import Sixth from './components/sixth';
import Footer from './components/footer';
// import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
       <Intro/>
       <Second/>
       <Third/>
       <Fourth/><br></br>
       <Five/>
       <Sixth/>
       <Footer/>
      {/* <Routes>
        <Route path='/' element={<Intro/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
