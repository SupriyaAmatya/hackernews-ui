import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaUser, FaStar } from 'react-icons/fa';
import { IoIosTime } from 'react-icons/io'

import API from '../../utils/API';
import formateDate from '../../utils/formateDate';
import LoadingSkeleton from '../loading/LoadingSkeleton';

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

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
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
                <Link
                  to={{
                    pathname: `/${data.id}`,
                    state: { data: data },
                  }}
                >
                  {data.title}
                </Link>
              </div>
              <div className="story__description row mx-0x">
                <span className="story__comments col"><FaComments /> {data.kids ? data.kids.length : '0'} comments</span>
                <span className="story__user col"><FaUser /> {data.by}</span>
                <span className="story__points col"><FaStar /> {data.score} points</span>
                <span className="story__date col mt-0x-sm mt-1x"><IoIosTime /> {formateDate(data.time)}</span>
              </div>
            </>
          )
        }

      </div>
    );
  }
}

export default ListItem;
