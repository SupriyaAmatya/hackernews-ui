import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import StoryList from './components/storyList/StoryList';

function App() {
  return (
     <BrowserRouter>
      <Header />
      <Route exact path="/" component={StoryList} />
     </BrowserRouter>
  );
}

export default App;
