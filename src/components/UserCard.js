import React from 'react';
import styled from 'styled-components';

const UserDiv = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  align-content: center;

  padding: 20px;

  align-items: center;
  text-align: center;
  word-wrap: normal;

  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #FFF;
  margin: 30px;
  width: 300px;
  height: 350px;
  background: lightblue;
`

const FollowerCardDiv = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
word-wrap: normal;

border-radius: 5px;
box-shadow: 0 1px 6px -2px #000;
background-color: #FFF;
margin: 30px;
width: 300px;
height: 350px;
background: lightblue;

`;

const FollowerTopDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  max-width: 100%;


`;

const UserTopDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  align-items: center;
  max-width: 100%;



`;

const UserImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale;
  flex-shrink: 2;
`;

const wrapperDiv = styled.div`

  width: 1000px;
  margin: 50px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: red;

`



function UserCard (props) {
  
  console.log("props followers", props.followers)
  
    return (
      <wrapperDiv>
        <UserTopDiv>
        {props.userData.map(data => (
          <UserDiv key={data.id}>
            <UserImage src = {data.avatar_url} alt= {data.name}/>
            <h2>Name: {data.name}</h2>
            <h3>Bio: {data.bio}</h3>
          </UserDiv>

        ))}
        </UserTopDiv>
        <h1>{props.user}'s Followers</h1>
        <FollowerTopDiv>
        {props.followers.map(follower => (
          
          <FollowerCardDiv key={follower.id}>
            <UserImage src={follower.avatar_url} alt= {follower.name}/>
            <h2>Name: {follower.name}</h2>
            <h3>Bio: {follower.bio}</h3>

          </FollowerCardDiv>
        ))}
        </FollowerTopDiv>
      </wrapperDiv>
    );
}

export default UserCard;
