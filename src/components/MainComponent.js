import React ,{Component} from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Detail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { LEADERS } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import Contact from './ContactusComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS
    };
  }
  
 

  render() {
    const HomePage = () => {
      return(
          <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
          leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
          promotion={this.state.promotions.filter((promotion)=> promotion.featured)[0]}
          />
      );
    }
    const Dishid = ({match}) =>{
      return(
         <Detail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
         comments={this.state.comments.filter((comments)=> comments.dishId === parseInt(match.params.dishId,10))}
         />
      )
      
    }

    const Aboutus = () =>{
      return(
      <About leaders={this.state.leaders}/>
      )
    }

    return (
      <div className="App">
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
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

export default Main;
