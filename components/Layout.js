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
      <Row>
      </Row>
<Row>
      <Col md={1}>
        <Menu />
      </Col>
      <Col md={11}>
        { children }
      </Col>
      </Row>
    </Grid>
  </div>
)