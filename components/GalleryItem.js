import React, { Component } from 'react';
import Link from 'next/link'
import { Col, Glyphicon, Thumbnail} from 'react-bootstrap';

const txt = {
  fontSize: '1vw'
}

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
      <Col md={6} key={Math.random()}>      
        <Thumbnail src={'static/' + this.props.img}>
          <p style={txt}><Glyphicon glyph={this.type(this.props.type)} />  
          <span className="pull-right">{this.props.date}</span></p>
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