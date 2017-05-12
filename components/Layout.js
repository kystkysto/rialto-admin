import { Grid, Col, Nav, NavItem, Row, Navbar, Image, Glyphicon, Well} from 'react-bootstrap';
import Link from 'next/link'
import Head from 'next/head'
import Bar from './Bar'
import Menu from './Menu'

const style = {
  full: {
    width: '100%',
    background: 'transparent',
    color: '#fff',
    fontSize: '2vw'
  },
  first: {
    width: '100%',
    border: '2px solid #e74c3c',
  },
  div: {
    width: '100%',
    background: '#353232',
    height: '47vw',
    padding: '10px',
    borderRadius: '5px'
  },

  ava: {
    display: 'inline-block',
    width: '4vw',
    marginRight: '.5vw',
    marginLeft: '.5vw'
  }
}

const icon = {

}

const input = {
  height: '3vw',
  width: '100%',
  border: 'none',
  marginTop: '33vw',
  borderRadius: '2px',
}
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
      <Col md={1}>
        <Menu />
      </Col>
      <Col md={8}>
        { children }
      </Col>
       <Col md={3}>
            <div>
              <div style={style.div}>
              <Glyphicon  style={icon} glyph={'menu-left'} />
                <div style={style.ava}>
                  <Image src="/static/default-userpic.png" style={style.first} circle/>
                </div>
                <div  style={style.ava}>
                  <Image  style={style.full} src="/static/default-userpic.png" circle />
                </div>
                <div style={style.ava}>
                  <Image  style={style.full} src="/static/default-userpic.png" circle />
                </div>
                <div style={style.ava}>
                  <Image   style={style.full}src="/static/default-userpic.png" circle />
                </div>
                <Glyphicon  style={icon} glyph={'menu-right'} />
                    <Well>
                      <p className="pull-right">15:23</p>
                      <b>Иван +7 916 456 34 23</b>
                      <p>Привет! У мен возниклипроблемы</p>
                    </Well>
                    <input style={input} type="text" />
              </div>       
            </div>
          </Col>
      </Row>
    </Grid>
  </div>
)