import React, { Component } from 'react'
import Link from 'next/link'
import { Col, Row, PageHeader} from 'react-bootstrap'
import GalleryItem from './GalleryItem'

export default class extends Component {
  
   constructor(props) {
      super(props);
    
      this.state = {
        materials: [
          {
            img: '1.jpg',
            type: 1,
            date: 'Сегодня в 18:03'
          },
          {
            img: '2.jpg',
            type: 2,
            date: 'Сегодня в 17:59'
          },
          {
            img: '3.jpg',
            type: 2,
            date: 'Сегодня в 17:51'
          },
          {
            img: '4.jpg',
            type: 3,
            date: 'Сегодня в 16:20'
          },
          {
            img: '5.jpg',
            type: 2,
            date: 'Сегодня в 15:39'
          },
          {
            img: '6.jpg',
            type: 2,
            date: 'Сегодня в 14:20'
          },
          {
            img: '7.jpg',
            type: 3,
            date: 'Сегодня в 14:08'
          },
          {
            img: '8.jpg',
            type: 2,
            date: 'Сегодня в 12:50'
          },
          {
            img: '9.jpg',
            type: 2,
            date: 'Сегодня в 11:04'
          },
          {
            img: '10.jpg',
            type: 2,
            date: 'Сегодня в 11:02'
          },
          {
            img: '11.jpg',
            type: 2,
            date: 'Сегодня в 10:59'
          },
          {
            img: '12.jpg',
            type: 2,
            date: 'Сегодня в 10:45'
          }
        ]
      }
   }
  
   render() {
      return (
        <div>

          <Row>{ this.state.materials.map(material => {
              return <GalleryItem key={Math.random()} {...material} />
            }) }
          </Row>
        </div>
      );
   }
}