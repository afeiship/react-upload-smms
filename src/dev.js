import './dev.scss';
import ReactUploadSmms from './main';

/*===example start===*/

// install: npm install afeiship/react-upload-smms --save
// import : import ReactUploadSmms from 'react-upload-smms'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e.target.value);
  };

  render(){
    return (
      <div className="hello-react-upload-smms">
        <ReactUploadSmms onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
