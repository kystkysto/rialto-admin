import React from "react"
import Link from 'next/link'
import { Navbar } from 'react-bootstrap';

const Bar = () => (
    <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link href="/"><a>Модератор</a></Link>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

export default Bar;