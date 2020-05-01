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
    return (
      <div className="App">
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path='/contactus' component={Contact} />
              <Redirect to="/home" />
          </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default Main;
