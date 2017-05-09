import { Grid, Col, Nav, NavItem, Row, Navbar} from 'react-bootstrap';
import Link from 'next/link'
import Head from 'next/head'
import Bar from './Bar'

export default ({ children, title = 'Модератор' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />

      <link rel="stylesheet" href="https://bootswatch.com/darkly/bootstrap.min.css" />
    </Head>
    <Grid fluid>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href="/">Rialto</Link>
          </Navbar.Brand>
          
        </Navbar.Header>
        
      </Navbar>
      <Col md={2}>
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
      </Col>
      <Col md={7}>
      { children }
      </Col>
    </Grid>
  </div>
)