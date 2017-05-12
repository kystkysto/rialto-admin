import React, { Component } from 'react'
import Link from 'next/link'
import { Col, Nav, NavItem, Image, Glyphicon, Row} from 'react-bootstrap'

const img = {
  width: '3vw'
}

const icon = {
  fontSize: '2vw',
  textAllign: 'center'
}

const a = {
  textAlign: 'center'
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
              <NavItem  eventKey={1}><Image  style={img} className={'center-block'} src="/static/logo.png"></Image></NavItem>
            </Link>
            
            <Link  href="/">
              <NavItem style={a} eventKey={1}><Glyphicon  style={icon} glyph={'th'} /></NavItem>
            </Link>
            <Link href="/transactions">
              <NavItem style={a} eventKey={2}><Glyphicon style={icon} glyph={'rub'} /></NavItem>
            </Link>
            <Link  href="/users">
              <NavItem style={a} eventKey={3}><Glyphicon style={icon} glyph={'user'} /></NavItem>
            </Link>
          </Nav>
      </div>
    )
  }
}