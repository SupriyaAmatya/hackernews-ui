import React, { Component } from 'react';
import { FaComments, FaUser, FaStar } from 'react-icons/fa';
import { IoIosTime } from 'react-icons/io'

import API from '../../utils/API';
import LoadingSkeleton from '../loadingSkeleton/LoadingSkeleton';

class ListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getStory(this.props.id);
  }

  getStory = async (id) => {
    await API.get(`/item/${id}.json`)
      .then(res => {
        this.setState({ data: res.data, isLoading: false })
      })

  }
  render() {
    const { data, isLoading } = this.state;

    return (
      <div className="story list__item">
        {
          isLoading ? <LoadingSkeleton /> : (
            <>
              <div className="story__title">
                {data.title}
              </div>
              <div className="story__description row mx-0x">
                <span className="story__comments col"><FaComments /> {data.kids ? data.kids.length : '0'} comments</span>
                <span className="story__user col"><FaUser /> {data.by}</span>
                <span className="story__points col"><FaStar /> {data.score} points</span>
                <span className="story__date col mt-0x-sm mt-1x"><IoIosTime /> {new Date(data.time * 1000).toLocaleString()}</span>
              </div>
            </>
          )
        }

      </div>
    );
  }
}

export default ListItem;
