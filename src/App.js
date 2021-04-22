import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import RecomendedVideo from './components/MainBody/RecomendedVideo';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchResult from './components/Search/SearchResult';


const Routing=()=>{
  return(
    <Switch>
      <Route exact path='/search/:searchId'>
        <SearchResult/>
      </Route>
      <Route exact path='/'>
      <RecomendedVideo/>
      </Route>
    </Switch>

  )

}



function App() {
  return (
    <Router>
    <div className="app">
      <div className="app__header">
        <Header/>
      </div>
      <div className="app__body">
        <div className="app__sidebar">
            <Sidebar/>
        </div>
        <div className="app__mainBody">
          <Routing/>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
