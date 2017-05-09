import React, { Component } from 'react';
import Link from 'next/link'
import { Col, Glyphicon, Thumbnail} from 'react-bootstrap';

const style = {

  position: 'absolute',
  fontSize: '4vw',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

export default class extends Component {
  
  constructor(props) {

    super(props);
  }
  
  render() {
    return (
      <Col xs={6} md={4} key={Math.random()}>
        <Thumbnail src={'static/' + this.props.img}>
          <Glyphicon style={style} glyph={this.type(this.props.type)} />
          {this.props.date}
        </Thumbnail>
      </Col>
    );
  }

  type(type) {

    var claz;

    switch(type) {
      case 1:
        claz = 'facetime-video';
        break;
      case 2:
        claz = 'camera';
        break;
      case 3:
        claz = 'play-circle';
        break;
    }

    return claz;
  }
}