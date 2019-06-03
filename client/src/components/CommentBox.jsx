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
      game_id: 57,
      dayPosted: 31,
      recommended: true,
      comment: this.state.comment,
      helpfulComment: 375,
      funnyComment: 127,
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
      <ReviewContainer>
        <TitleHeader> Write a review</TitleHeader>
        <PleaseDescribe>Please describe what you liked or disliked about this game and whether you recommend it to others.<br></br>
        Please remember to be polite and follow the <RulesGuides href="https://support.steampowered.com/kb_article.php?ref=4045-USHJ-3810">Rules and Guidelines</RulesGuides></PleaseDescribe>
        <UserAvatar src="https://userreviewicons.s3.us-east-2.amazonaws.com/BMIcon.jpg"></UserAvatar>
        <AddCommentBox onSubmit={this.handleSubmit} onChange={this.handleChange}></AddCommentBox>
        <DoYouRecommend>Do you recommend this game?</DoYouRecommend>
        <div>
          <YesRecommendButton>
            <ThumbsUpButtonIcon></ThumbsUpButtonIcon> Yes
          </YesRecommendButton>
          <NotRecommendButton>
            <ThumbsDownIcon></ThumbsDownIcon> No
          </NotRecommendButton>
          <PostButton type='submit' onClick={this.handleSubmit}> Post review </PostButton>
        </div>
      </ReviewContainer>
    );
  }
}

export default CommentBox;


const ReviewContainer = styled.div`
  background-color: #4A5765;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  width: 940px;
  height: 454px:
  padding-left: 100px
  position: relative;
`;

const TitleHeader = styled.div`
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 3px;
  color: #66c0f4;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: 300;
  width: 100%;
  border-top: 1px solid #212c3d;
  padding-top: 10px;
  padding-left: 10px;
`;

const PleaseDescribe = styled.div`
  font-size: 13px;
  margin-bottom: 15px;
  line-height: 17px;
  color: #8f98a0;
  padding-left: 10px;
`;

const RulesGuides = styled.a`
  color: #FFFFFF;
  cursor: pointer;
  :hover {
    color: #66c0f4;
  }
`;

const UserAvatar = styled.img`
  width: 92px;
  height: 92px;
  padding: 1px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 55px;
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

const PostButton = styled.button`
  background: #BBDEF3;
  border-radius: 3px;
  border: 1px solid black;
  margin-top: 0px;
  margin-left: 790px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  padding: 0px 15px;
  text-align: center;
  font-size: 15px;
  line-height: 30px;
  display: inline-block;
  :hover {
    background: #66c0f4;
    color: #FFFFFF;
  }
`;

const DoYouRecommend = styled.div`
  position: relative;
  min-height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #c6d4df;
  font-size: 12px;
  padding-top: 20px;
  padding-left: 111px;
`;

const YesRecommendButton = styled.button`
  border-radius: 2px;
  border: none;
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  padding: 0px 15px;
  text-align: center;
  font-size: 15px;
  line-height: 30px;
  margin-top: 5px;
  margin-right: 10px;
  margin-left: 110px;
  background-color: #486477;
  color: #67c1f5;
  :hover {
    background-color: #67c1f5
    color: #FFFFFF;
  }
`;

const ThumbsUpButtonIcon = styled.i`
  background: url("https://userreviewicons.s3.us-east-2.amazonaws.com/largethumbsup.png");
  vertical-align: text-top;
  width: 18px;
  height: 18px;
  display: inline-block;
  :hover {
    background: url("https://userreviewicons.s3.us-east-2.amazonaws.com/largethumbsuphover.png")
  }
`;

const NotRecommendButton = styled.button`
  border-radius: 2px;
  border: none;
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  padding: 0px 15px;
  text-align: center;
  font-size: 15px;
  line-height: 30px;
  background-color: #486477;
  color: #67c1f5;
  :hover {
    background-color: #67c1f5
    color: #FFFFFF;
  }
`;


const ThumbsDownIcon = styled.i`
  background: url("https://userreviewicons.s3.us-east-2.amazonaws.com/largethumbsdown.png");
  vertical-align: text-top;
  width: 18px;
  height: 18px;
  display: inline-block;
  :hover {
    background: url("https://userreviewicons.s3.us-east-2.amazonaws.com/largethumbsdownhover.png")
  }
`;