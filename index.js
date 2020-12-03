import  React  from  'react' ;
import  ReactDOM  de  ' react -dom' ;
import  App from  './App' ;
import * as  serviceWorker  from  './serviceWorker' ;

ReactDOM.render (
  <React.StrictMode React.StrictMode >
    <App />
  </React.StrictMode>,
  documento.getElementById('root')
);
//       You, an hour ago Initialize project using
// If you want your app to work offline and load faster, you can change
// unregister () to register () below. Note that this has some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();