import Grid from "./Grid/Grid";
import Header from "./Header/Header";
import {RecoilRoot} from 'recoil'
import Loader from "./Loader";
import './App.css'
import LandingPage from "./LandingPage";

const App = () => {
  return(
    <div className="appContainer">
      <RecoilRoot>
        <Loader/>
        <Header/>
        <LandingPage/>
        <Grid/>
      </RecoilRoot>
    </div>
  )
}

export default App;