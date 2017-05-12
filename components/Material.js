import React, { Component } from 'react';
import Link from 'next/link'
import { Col, Row, PageHeader, Image, Button} from 'react-bootstrap'
import TagsInput from 'react-tagsinput'

export default class Material extends Component {

  
  constructor(props) {
    super(props);

    this.state = {
      tags: ['авария', 'кошмар']
    }
  }



  handleChange(tags) {
    this.setState({tags})
  }

  render() {
    return (
      <div>
        <Col md={12}>
          
          <TagsInput value={this.state.tags} onChange={this.handleChange.bind(this)} />
          <Image src={'static/' +  '12.jpg'}></Image>
          {this.props.date}
          <div>  
            <Button bsStyle="success">Одобрить</Button>&nbsp;
            <Button bsStyle="danger">Откзать</Button>
          </div>
        </Col>
      </div>
    );
  }
}
