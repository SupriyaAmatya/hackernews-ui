import React, { Component } from 'react';
import API from '../../utils/API';
import Loading from '../loading/Loading';
import Pagination from '../pagination/Pagination';

import ListItem from './ListItem';

class StoryList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storiesList: [],
      isLoading: true,
      currentPage: 1,
      storyPerPage: 10,
    }
  }

  componentDidMount() {
    this.getStoriesId();
  }

  getStoriesId = async () => {
    await API.get('/topstories.json')
      .then((res) => {
        this.setState({ storiesList: res.data, isLoading: false })
      });
  }

  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    })
  }

  render() {
    const { storiesList, currentPage, storyPerPage } = this.state;

    const indexOfLastStory = currentPage * storyPerPage;
    const indexOfFirstStory = indexOfLastStory - storyPerPage;
    const currentStories = storiesList.slice(indexOfFirstStory, indexOfLastStory);
    return (
      <div className=" container">
        {this.state.isLoading ? <Loading /> :
          <>
            <div className="list">
              {
                currentStories.map(storyId => <ListItem id={storyId} key={storyId} />)
              }
            </div>
            <Pagination
              currentPage={currentPage}
              storyPerPage={storyPerPage}
              totalStories={storiesList.length}
              paginate={this.paginate}
              windowSize={5}
            />
          </>
        }
      </div>
    );
  }
}

export default StoryList;
