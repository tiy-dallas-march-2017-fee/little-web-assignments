import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Page1 = () => {
  return <div>This is the first page. It is grand.</div>
}

const Page2 = () => {
  return <div>This is the second page. It is more grand. It has all sorts of content.</div>
}

class Page3 extends React.Component {

  render() {
    return (
      <div>This is the third page. It is mediocre. Nothing interesting.</div>
    )
  }

}


class ClassViewer extends React.Component {
  render() {
    return (
      <div>Viewer for {this.props.match.params.id} - {this.props.match.params.name}</div>
    )
  }
}

const Viewer = ({ match }) => {
  return <div>Viewer for {match.params.id} - {match.params.name}</div>
}

const Viewer2 = (props) => {
  return <div>Viewer for {props.match.params.id} - {props.match.params.name}</div>
}

const JustView = () => {
  return <div>/view route</div>
}

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <Link to="/">First</Link>
        <Link to="/second">Second</Link>
        <Link to="/third">Third</Link>
        <Link to="/view/1/steak">View #1</Link>
        <Link to="/view/2/pants">View #2</Link>
      </nav>
      <div className="contents">
        <Route path="/" exact component={Page1} />
        <Route path="/second" component={Page2} />
        <Route path="/third" component={Page3} />
        <Route path="/view/:id" exact component={JustView} />
        <Route path="/view/:id/:name" component={Viewer2} />
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);
