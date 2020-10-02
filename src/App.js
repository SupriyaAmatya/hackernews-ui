import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Details from './components/details/Details';
import StoryList from './components/storyList/StoryList';

function App() {
  return (
     <BrowserRouter>
      <Header />
      <Route path="/" component={StoryList} />
      <Route exact path="/stories/:storyId" component={Details} />
     </BrowserRouter>
  );
}

export default App;
