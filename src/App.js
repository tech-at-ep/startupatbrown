import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Competition from "./pages/Competition";
import Recruiting from "./pages/Recruiting";
import QA from "./pages/QA";
function App() {
  
  return (
      <Router>
      <div className='App'>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/speakers">
              <Speakers />
            </Route>
            <Route exact path="/schedule">
              <Schedule />
            </Route>
            <Route exact path="/competition">
              <Competition />
            </Route>
            <Route exact path="/recruiting">
              <Recruiting />
            </Route>
            <Route exact path="/QA">
              <QA />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;