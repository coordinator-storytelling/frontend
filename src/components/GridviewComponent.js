import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ListviewComponentContainer = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 25px 25px;
`
const ImageContainer = styled.div`
  width: 175px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 125px;
  background-color: #D1DAE5;
`
const Description = styled.p`
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

class GridviewComponent extends React.Component {

  render(){
    return (
      <div>
        <Link to={`/home/donor/story/${this.props.story.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <ListviewComponentContainer>
            <ImageContainer><Image src={this.props.story.small_image}/></ImageContainer>
            <Content>
              <div>{this.props.story.title}</div>
              <Description>{this.props.story.description}</Description>
            </Content>
          </ListviewComponentContainer>
        </Link>
      </div>
    );
  }
}

export default GridviewComponent;
