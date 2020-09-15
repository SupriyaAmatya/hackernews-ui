import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './components/details/Details';

import Header from './components/Header';
import StoryList from './components/storyList/StoryList';

function App() {
  return (
     <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={StoryList} />
        <Route exact path="/:storyId" component={Details} />
      </Switch>
     </BrowserRouter>
  );
}

export default App;
