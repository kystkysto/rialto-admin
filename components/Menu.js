import React, { Component } from 'react'
import Link from 'next/link'
import { Col, Nav, NavItem, Image, Glyphicon, Row} from 'react-bootstrap'

const img = {
  width: '3vw'
}

const icon = {
  'font-size': '3vw',
  'padding': '2px'
}

export default class extends Component {

  constructor(props) {
      super(props);

  }
  
  render() {

    return (
      <div>
        
          <Nav bsStyle="pills" stacked activeKey={1} >
            
            <Link href="/">
              <NavItem  eventKey={1}><Image className={'center-block'} src="/static/logo.png" style={img}></Image></NavItem>
            </Link>
            
            <Link href="/">
              <NavItem  eventKey={1}><Glyphicon  style={icon} glyph={'th'} /></NavItem>
            </Link>
            <Link href="/transactions">
              <NavItem eventKey={2}><Glyphicon style={icon} glyph={'rub'} /></NavItem>
            </Link>
            <Link href="/users">
              <NavItem eventKey={3}><Glyphicon style={icon} glyph={'user'} /></NavItem>
            </Link>
          </Nav>
      </div>
    )
  }
}