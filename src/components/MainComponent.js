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
import {postComment,fetchDishes,fetchComments,fetchPromos,fetchLeaders,postFeedback}  from '../redux/actionCreator'
import {actions} from 'react-redux-form'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
const mapStateToProps =state=>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps=dispatch=>({
  postComment:(dishId,rating,author,comment)=>dispatch(postComment(dishId,rating,author,comment)),
  fetchDishes:()=>dispatch(fetchDishes()),
  fetchComments:()=>dispatch(fetchComments()),
  fetchPromos:()=>dispatch(fetchPromos()),
  fetchLeaders:()=>dispatch(fetchLeaders()),
  postFeedback:(firstname,lastname,telnum,email,agree,contactType,message)=>dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message)),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  
})

class Main extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () => {
      return(
          <Home dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          leader={this.props.leaders.leaders.filter((leader)=> leader.featured)[0]}
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
          promotion={this.props.promotions.promotions.filter((promotion)=> promotion.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          />
      );
    }
    const Dishid = ({match}) =>{
      return(
         <Detail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
         isLoading={this.props.dishes.isLoading}
         errMess={this.props.dishes.errMess} 
         comments={this.props.comments.comments.filter((comments)=> comments.dishId === parseInt(match.params.dishId,10))}
         postComment={this.props.postComment}
         commentErrMess={this.props.comments.errMess}
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
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={Dishid} />
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
              <Route exact path='/info' component={Aboutus} />
            
              <Redirect to="/home" />
          </Switch>
          </CSSTransition>
          </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
