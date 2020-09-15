import React, { Component } from 'react';
import API from '../../utils/API';
import { FaUser } from 'react-icons/fa';

class Comment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    this.getComments(this.props.id);
  }

  getComments = async (id) => {
    await API.get(`/item/${id}.json`)
      .then(res => {
        this.setState({ data: res.data })
      })
  }

  render() {
    const { data } = this.state;
console.log(data);
    return (
      <div className="comment-wrapper">
        <div className="comment">
          <div className="comment__by story__user"><FaUser className="mr-1x"/>{data.by}</div>
          <div className="comment__text" dangerouslySetInnerHTML={{ __html: data.text }}>
          </div>
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
    );
  }
}

export default Comment;
