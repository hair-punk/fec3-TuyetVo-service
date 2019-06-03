import React from 'react';
import styled from 'styled-components';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };


  handleChange(e) {
    this.setState({
      comment: e.target.value
    });
  };


  handleSubmit(e) {
    e.preventDefault();
    this.props.submitReview({
      game_id: 50,
      dayPosted: 31,
      recommended: true,
      comment: this.state.comment,
      helpfulComment: 9999,
      funnyComment: 7,
      user: [{
            profile_id: 102,
            username: "Riddle_Me_This",
            user_icon: "https://userreviewicons.s3.us-east-2.amazonaws.com/BM.jpg",
            hours_played: 876,
            products_owned: 89,
            number_of_reviews: 10
            }]
    })
    console.log('button clicked');
  };

  render() {
    return (
      <div>
        <AddCommentBox onSubmit={this.handleSubmit} onChange={this.handleChange}></AddCommentBox>
        <button type='submit' onClick={this.handleSubmit}> Post review </button>
      </div>
    );
  }
}

export default CommentBox;


const ReviewContainer = styled.div`
  background-color: #acb2b8;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  width: 940px;
  height: 454px:
`;

const AddCommentBox = styled.textarea`
  border: 1px solid #233c51;
  border-radius: 3px;
  height: 126px;
  width: 764px;
  max-width: 800px;
  background-color: #222b35;
  color: #d6d7d8;
  padding: 10px 11px;
  font-size: 13px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
`;