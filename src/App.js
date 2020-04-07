import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import Home from './components/Home'

const store = createStore(
  reducers
);

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

registerRootComponent(App);
