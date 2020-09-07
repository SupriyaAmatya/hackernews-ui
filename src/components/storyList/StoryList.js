import React, { Component } from 'react';
import API from '../../utils/API';

import ListItem from './ListItem';

class StoryList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       storiesList: [],
    }
  }
  
  componentDidMount(){
    this.getStoriesId();
  }
  
  getStoriesId = async () =>{
    await API.get('/topstories.json')
    .then((res) => {
      this.setState({ storiesList: res.data})
    });
  }

  render() {
    const { storiesList } = this.state;
    return (
      <div className="list container">
        {
          storiesList.map(storyId => <ListItem id={storyId} key={storyId} /> )
        }
      </div>
    );
  }
}

export default StoryList;
