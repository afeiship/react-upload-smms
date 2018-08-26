# react-upload-smms
> React upload for smms

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-upload-smms --registry=https://registry.npm.taobao.org
```

```js
import ReactUploadSmms from 'react-upload-smms';
```

```scss
// customize your styles:
$react-upload-smms-options:(
);

@import 'node_modules/react-upload-smms/dist/style.scss';
```

## use sm.ms/api/upload
![](https://ws3.sinaimg.cn/large/006tNbRwgy1funedleu78j315i11kjxx.jpg)

## usage:
```jsx

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

```

## resouces:
+ https://sm.ms/