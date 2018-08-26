import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactUpload from 'react-upload';
import NxFileUpload from 'next-file-upload';


const SMMS_API = 'https://sm.ms/api/upload';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop
  };
  /*===properties end===*/

  _onChange = inEvent => {
    const { onChange } = this.props;
    const { value } = inEvent.target;
    const apis = nx.map(value,(_,file)=>{
      return NxFileUpload(SMMS_API, { smfile: file });
    });

    Promise.all(apis).then(reponses=>{
      const _response = reponses.map(response=>JSON.parse(response).data);
      console.log(_response);
      onChange({ target: { value: _response } });
    });
  };

  render() {
    const { className, onChange, ...props } = this.props;
    return (
      <ReactUpload onChange={this._onChange} {...props}/>
    );
  }
}
