import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import List from './components/list/List';

function App() {
  return (
     <BrowserRouter>
      <Header />
      <Route exact path="/" component={List} />
      {/* <Route exact path="/story/:storyId" component={Story} /> */}
     </BrowserRouter>
  );
}

export default App;
