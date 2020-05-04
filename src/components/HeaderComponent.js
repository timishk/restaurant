import React, { Component } from 'react';
import { Form, FormGroup,Navbar, NavbarBrand, Jumbotron,Nav,NavItem,NavbarToggler,Collapse,Modal,ModalBody,Button ,Input, Label, ModalHeader} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    
    this.state={
     isNavOpen:false,
     isModalOpen:false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleModal=this.handleModal.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  
  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleModal=(event)=>{
     this.toggleModal();
     alert("Username: " + this.username.value + " Password: " + this.password.value + " rember me "+this.remember.checked
           );
     event.preventDefault();

  }


  render() {
    return(
    <React.Fragment>
      <div>
      <Navbar dark expand="md">
      <div className="container">
      <NavbarToggler onClick={this.toggleNav} />
       
            <NavbarBrand className="mr-auto" href="/">
              <img src='assets/images/logo.png' height="30" width="41" alt="resonate con fusion" />
            </NavbarBrand>
        
            <Collapse isOpen={this.state.isNavOpen} navbar>
      <Nav navbar>
        <NavItem>
        <NavLink className="nav-link"  to='/home'>
          <span className="fa fa-home fa-lg"></span> Home
        </NavLink>
        </NavItem>
        <NavItem>
        <NavLink className="nav-link"  to='/info'>
          <span className="fa fa-info fa-lg"></span> about us
        </NavLink>
        </NavItem>
        <NavItem>
        <NavLink className="nav-link"  to='/menu'>
          <span className="fa fa-list fa-lg"></span> menu
        </NavLink>
        </NavItem>
        <NavItem>
        <NavLink className="nav-link"  to='/contactus'>
          <span className="fa fa-address-card fa-lg"></span> contact us
        </NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto"  navbar>
        <Button color="primary" onClick={this.toggleModal}>login</Button>
      </Nav>
      </Collapse>
      </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
       <Modal isOpen={this.state.isModalOpen}>
         <ModalBody isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
          <ModalHeader>Login</ModalHeader>
          <Form onSubmit={this.handleModal}>
            <FormGroup>
            <Label htmlFor="username">username</Label>
           <Input type="text" name="username" innerRef={(input) => this.username = input}/>

           </FormGroup>
           <FormGroup>
           <Label htmlFor="password">password</Label>
           <Input type="password" name="password" innerRef={(input) => this.password = input}/>
           </FormGroup>
           <FormGroup check>
           <Label check>
           <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>
           Remember me</Label>
           </FormGroup>
           <FormGroup>
           <Button>submit</Button>
           </FormGroup>
           </Form>
         </ModalBody>
       </Modal>
       </div>
    </React.Fragment>
    
    );
  }
}

export default Header;