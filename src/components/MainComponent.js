import React ,{Component} from 'react';
import Menu from './MenuComponent';
import Detail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactusComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect ,withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

const mapStateToProps =state=>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    
  }
  
 

  render() {
    const HomePage = () => {
      return(
          <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
          leader={this.props.leaders.filter((leader)=> leader.featured)[0]}
          promotion={this.props.promotions.filter((promotion)=> promotion.featured)[0]}
          />
      );
    }
    const Dishid = ({match}) =>{
      return(
         <Detail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
         comments={this.props.comments.filter((comments)=> comments.dishId === parseInt(match.params.dishId,10))}
         />
      )
      
    }

    const Aboutus = () =>{
      return(
      <About leaders={this.props.leaders}/>
      )
    }

    return (
      <div className="App">
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={Dishid} />
              <Route exact path='/contactus' component={Contact} />
              <Route exact path='/info' component={Aboutus} />
              <Redirect to="/home" />
          </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
