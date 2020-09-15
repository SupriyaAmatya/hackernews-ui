import React, { Component } from 'react';
import Modal from 'react-modal';

import { FaComments, FaUser, FaStar } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Comment from './Comment';

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      isOpen: false,
    }
  }

  componentDidMount() {
    this.setState({ isOpen: true });

    this.props.location && this.props.location.state &&
      this.setState({
        data: this.props.location.state.data,
        isLoading: false,
      });
  }

  closeModal = () => {
    this.setState({ isOpen: false });
    this.props.history.goBack();
  }

  render() {
    const { data, isOpen} = this.state;

    Modal.setAppElement('#root');
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={this.closeModal}
        className="ReactModal"
        overlayClassName="Overlay"
      >
        <div className="modal__heading story">
          <button onClick={this.closeModal} className="btn btn--close">X</button>
          <a href={data.url} target="_blank" rel="noopener noreferrer" className="story__title text-center mb-3x">
            {data.title}
            <FiExternalLink width="10" height="10" className="ml-2x" />
          </a>
          <div className="story__description row mx-0x">
            <span className="story__user col"><FaUser /> {data.by}</span>
            <span className="story__comments col"><FaComments /> {data.kids ? data.kids.length : '0'} comments</span>
            <span className="story__points col"><FaStar /> {data.score} points</span>
          </div>
        </div>
        <div className="modal__body">
          <h4 className="mb-8x">{data.kids ? data.kids.length : '0'} Comments</h4>
          {
            data.kids && data.kids.length > 0 ?
              <Comment id={data.id} /> : <p>No comment</p>
          }
        </div>
      </Modal>
    );
  }
}

export default Details;
