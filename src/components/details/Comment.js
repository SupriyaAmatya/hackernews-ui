import React, { Component } from 'react';
import API from '../../utils/API';
import { FaUser } from 'react-icons/fa';
import createMarkup from '../../utils/markup';
import LoadingSkeleton from '../loading/LoadingSkeleton';

class Comment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getComments(this.props.id);
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  getComments = async (id) => {
    await API.get(`/item/${id}.json`)
      .then(res => {
        this.setState((prevState) => { 
          return { 
            ...prevState, 
            data: res.data, 
            isLoading: false 
          }})
      })
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <>
        {isLoading ? <LoadingSkeleton type='comment' /> :
          <div className="comment-wrapper">
            <div className="comment">
              <div className="comment__by story__user"><FaUser className="mr-1x" />{data.by}</div>
              <div className="comment__text" dangerouslySetInnerHTML={createMarkup(data.text)} />
            </div>
            {data.kids && data.kids.length > 0 &&
              (
                <div className="comment__child">
                  {data.kids.map((id, key) => (
                    <Comment id={id} key={key} />
                  ))}
                </div>
              )
            }
          </div>
        }
      </>
    );
  }
}

export default Comment;
