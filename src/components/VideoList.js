import React from 'react';
import { List, Image } from 'semantic-ui-react';

const VideoList = (props) => {
  return (
    <List divided relaxed>
      {props.videos.map((video, i) => (
        <List.Item key={i}>
          <Image avatar src={video.snippet.thumbnails.default.url} />
          <List.Content>
            <List.Header>{video.snippet.title}</List.Header>
            <List.Description>{video.snippet.description}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default VideoList;
