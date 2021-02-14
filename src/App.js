import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import HomePage from './pages/HomePage';
import Store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Route component={HomePage} path="/" exact/>
        <Redirect to="/" path="/"/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
