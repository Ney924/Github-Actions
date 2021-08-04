import { Route, Switch } from 'react-router-dom';
import { BrowserRouter, Redirect } from 'react-router-dom';
import ProfilePage from './components/profilePage';
import StartingPage from './components/startingPage';

function App() {
   return (
      <BrowserRouter>
         <Switch>
            <div className="App">
               {/* <Redirect to={'/startingPage'} />   */}
               <Route path='/startingPage' component={StartingPage} />
               <Route path='/profilePage' component={ProfilePage} />
            </div>
         </Switch>
      </BrowserRouter>
   );
}

export default App;