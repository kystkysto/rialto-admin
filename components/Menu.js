import React, { Component } from 'react'
import Link from 'next/link'
import { Col, Nav, NavItem} from 'react-bootstrap'

export default class extends Component {

  constructor(props) {
      super(props);

  }
  
  render() {

    return (
      <div>
        
          <Nav bsStyle="pills" stacked activeKey={1} >
            <Link href="/">
              <NavItem eventKey={1}>Материалы</NavItem>
            </Link>
            <Link href="/transactions">
              <NavItem eventKey={2}>Транзакции</NavItem>
            </Link>
            <Link href="/users">
              <NavItem eventKey={3}>Пользователи</NavItem>
            </Link>
          </Nav>
      </div>
    )
  }
}