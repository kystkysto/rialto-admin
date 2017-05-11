import { Grid, Col, Nav, NavItem, Row, Navbar} from 'react-bootstrap';
import Link from 'next/link'
import Head from 'next/head'
import Bar from './Bar'
import Menu from './Menu'

export default ({ children, title = 'Модератор' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />

      <link rel="stylesheet" href="https://bootswatch.com/darkly/bootstrap.min.css" />

      <link rel="stylesheet" href="/static/react-tagsinput.css" />
    </Head>
    <Grid fluid>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href="/">Rialto</Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>

      <Menu />
      
      <Col md={10}>
        { children }
      </Col>
    </Grid>
  </div>
)