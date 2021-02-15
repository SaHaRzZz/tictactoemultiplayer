import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import Store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Route component={HomePage} path="/" exact/>
        <Route component={GamePage} path="/game" exact/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
