import React,{Component} from 'react';
import {bindActionCreators} from 'redux'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../Home'
import ProductDetail from '../ProductDetail'
import Login from '../Login'

class App extends Component{
  render(){
    return (
      <div className="App">
      
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path='/detail/:id' component={ProductDetail} />
            <Route path='/' component = {Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}
 
  


export default App;
