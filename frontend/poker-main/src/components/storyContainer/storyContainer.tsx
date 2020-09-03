import React, { useEffect, useState, MouseEvent } from 'react';
import { ListGroup, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import Story from '../story/story';

function StoryContainer(props: object) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/stories/').then((response) => {
      setData(response.data);
    });
  }, []);

  const testDelete = (story: object) => {
    const newData = data.filter((x) => x !== story);
    console.log(newData);
  };

  const handleAddStory = (event: MouseEvent) => {
    event.preventDefault();
    const storyData = new FormData();
    storyData.append('points', '2');
    storyData.append('title', 'tesssst');
    storyData.append('description', 'some random');
    axios
      .post('http://127.0.0.1:8000/api/stories/create/', storyData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log(response.status);
        setData([...data].concat([response.data]));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <ListGroup>
        {data.map((field) => (
          <Story
            key={field.id}
            data={field}
            _delete={() => testDelete(field)}
          />
        ))}
      </ListGroup>
      <Button onClick={handleAddStory}>Add story</Button>
    </Container>
  );
}

export default StoryContainer;
