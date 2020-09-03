import React, { MouseEvent } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';

interface StoryProps {
  title: string;
  description: string;
  points: number;
  evaluated: boolean;
  id: number;
}

const handleRemoveStory = async (event: MouseEvent, story: StoryProps) => {
  event.preventDefault();
  const storyData = new FormData();
  const url = `http://127.0.0.1:8000/api/stories/${story.id}/delete/`;
  try {
    const response = await axios.delete(url);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

function Story(props: { data: StoryProps; _delete(): void }) {
  return (
    <ListGroup.Item>
      <Container>
        {props.data.title}
        {/* <Button className='float-right' variant='danger'  onClick={((e : MouseEvent)=> {handleRemoveStory(e, props.data)})}></Button> */}
        <Button
          className="float-right"
          variant="danger"
          onClick={(e: MouseEvent) => {
            props._delete();
          }}
        ></Button>
      </Container>
    </ListGroup.Item>
  );
}

export default Story;
