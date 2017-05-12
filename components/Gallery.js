import React, { Component } from 'react'
import Link from 'next/link'
import { Col, Row, PageHeader, Image, Button, Well} from 'react-bootstrap'
import GalleryItem from './GalleryItem'
import TagsInput from 'react-tagsinput'

const style = {
  overflow: {
    'overflow-y': 'scroll',
    height: '800px'
  },
  full: {
    width: '100%',
    background: 'transparent',
    color: '#fff',
    'font-size': '2vw'
  },
  div: {
        width: '100%',
    background: '#353232',
    height: '4vw',
    padding: '10px',
    'border-radius': '5px'
  }
}

export default class extends Component {
  
  constructor(props) {
      super(props);
    
      this.state = {
        materials: [
          {
            img: '1.jpg',
            type: 1,
            date: 'Сегодня в 18:03',
            title: 'Тестовый тайтл'
          },
          {
            img: '2.jpg',
            type: 2,
            date: 'Сегодня в 17:59',
            title: 'Тестовый тайтл'
          },
          {
            img: '3.jpg',
            type: 2,
            date: 'Сегодня в 17:51',
            title: 'Тестовый тайтл'
          },
          {
            img: '4.jpg',
            type: 3,
            date: 'Сегодня в 16:20',
            title: 'Тестовый тайтл'
          },
          {
            img: '5.jpg',
            type: 2,
            date: 'Сегодня в 15:39',
            title: 'Тестовый тайтл'
          },
          {
            img: '6.jpg',
            type: 2,
            date: 'Сегодня в 14:20',
            title: 'Тестовый тайтл'
          },
          {
            img: '7.jpg',
            type: 3,
            date: 'Сегодня в 14:08',
            title: 'Тестовый тайтл'
          },
          {
            img: '8.jpg',
            type: 2,
            date: 'Сегодня в 12:50',
            title: 'Тестовый тайтл'
          },
          {
            img: '9.jpg',
            type: 2,
            date: 'Сегодня в 11:04',
            title: 'Тестовый тайтл'
          },
          {
            img: '10.jpg',
            type: 2,
            date: 'Сегодня в 11:02',
            title: 'Тестовый тайтл'
          },
          {
            img: '11.jpg',
            type: 2,
            date: 'Сегодня в 10:59',
            title: 'Тестовый тайтл'
          },
          {
            img: '12.jpg',
            type: 2,
            date: 'Сегодня в 10:45',
            title: 'Тестовый тайтл'
          }
        ],
        tags: ['авария', 'кошмар'],
        current: {
            img: '12.jpg',
            type: 2,
            date: 'Сегодня в 10:45',
            title: 'Тестовый тайтл'
          }
      }
  }

  handleChange(tags) {
    this.setState({tags})
  }

  setCurrent(current) {
    this.setState({current})
  }

  render() {
    return (
      <div>
        <Row>
        </Row>
        <Row>
          <Col md={4} >
            <div style={style.overflow}>
              { this.state.materials.map(material => {
                return <GalleryItem key={Math.random()} {...material} />
              }) }
            </div>
          </Col>
          <Col md={5}>
          <input type="text" value={this.state.current.title} style={style.full}></input>
          <TagsInput value={this.state.tags} onChange={this.handleChange.bind(this)} />
          <Image src={'static/' +  this.state.current.img}></Image>
          {this.props.date}
          <div>                         
            <Button bsStyle="success">Одобрить</Button>&nbsp;
            <Button pullRight bsStyle="danger">Откзать</Button>
          </div>
          </Col>
          <Col md={3}>
            <div>
              <div style={style.div}>
                <Col md={3}>
                  <Image src="/static/default-userpic.png" circle style={style.full}/>
                </Col>
                <Col md={3}>
                  <Image src="/static/default-userpic.png" circle style={style.full}/>
                </Col>
                <Col md={3}>
                  <Image src="/static/default-userpic.png" circle style={style.full}/>
                </Col>
                <Col md={3}>
                  <Image src="/static/default-userpic.png" circle style={style.full}/>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}