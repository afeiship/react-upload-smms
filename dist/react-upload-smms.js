!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-file-upload"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom"),require("react-upload")):"function"==typeof define&&define.amd?define(["classnames","next-file-upload","noop","object-assign","prop-types","react","react-dom","react-upload"],t):"object"==typeof exports?exports.ReactUploadSmms=t(require("classnames"),require("next-file-upload"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom"),require("react-upload")):e.ReactUploadSmms=t(e.classnames,e["next-file-upload"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"],e["react-upload"])}(this,function(e,t,r,o,n,a,u,i){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=o(n);t.default=a.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,s,p=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),f=r(7),l=o(f),d=r(8),y=(o(d),r(6)),m=o(y),b=r(2),h=(o(b),r(4)),v=o(h),x=r(5),g=(o(x),r(9)),_=o(g),j=r(3),q=o(j),O="https://sm.ms/api/upload",C=(s=c=function(e){function t(){var e,r,o,n;a(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return r=o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o._onChange=function(e){var t=o.props.onChange,r=e.target.value;(0,q.default)(O,{files:r},{name:"smfile"}).then(function(e){var r=JSON.parse(e);t({target:{value:r.data}})})},n=r,u(o,n)}return i(t,e),p(t,[{key:"render",value:function(){var e=this.props;e.className,e.value,e.onChange,n(e,["className","value","onChange"]);return l.default.createElement(_.default,{onChange:this._onChange})}}]),t}(f.Component),c.propTypes={className:m.default.string,onChange:m.default.func},c.defaultProps={onChange:v.default},s);t.default=C},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=u},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-upload-smms.js.map