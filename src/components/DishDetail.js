import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,Modal,ModalBody,ModalHeader, Button, Form ,Label,Row} from 'reactstrap';
    import {Link} from 'react-router-dom';
import { LocalForm, Control ,Errors
} from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends Component
    {   constructor(props)
        {
            super(props);
            this.state={
                isModalOpen:false
            }
            this.toggleModal=this.toggleModal.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
        }
        toggleModal(){
            this.setState({
                isModalOpen:!this.state.isModalOpen
            })
        }
        handleSubmit(values) {
            this.toggleModal();
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
            
        }
 
        

        render(){
       console.log("hello");
            return(
                <div className="container">
                    <Button outline className="fa fa-pencil fa-lg"  onClick={this.toggleModal}>submit comment</Button>
                    
                    <Modal isOpen={this.state.isModalOpen}>
                    <ModalBody isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                     <ModalHeader>hi</ModalHeader>
                     <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                         <div className='form-group'>
                            
                         <Label htmlFor="rating">Rating</Label>
                         <Control.select model='.rating' id='rating' name='rating' className="form-control" >
                         <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                         </Control.select>
                        
                         </div>
                         <div className='form-group'>
                         <Label>Your name</Label>
                         <Control.text model='.username' id='username' name='username' className="form-control" 
                         validators={{
                             required,maxLength:maxLength(15),minLength:minLength(3)
                         }}

                         />
                        <Errors 
                        className="text-danger"
                        model=".username"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }}
                        />

                        
                         </div>
                         <div className="form-group">
                         <Label>Rating</Label>
                         <Control.textarea model='.comment' id='comment' name='comment' rows='6'
                         className="form-control"/>
                         </div>
                         <div className="form-group">
                             <Button>submit</Button>
                         </div>
                     </LocalForm>
                     </ModalBody>
                   </Modal>
                </div>
            );
            }
    }

    class Detail extends Component
{
    constructor(props){
        super(props);
        this.viewModal=this.viewModal.bind(this);
    }
  

    renderDish()
    {
        if(this.props.dish==null)
        {return(
            <div></div>
        );
        }
        else
        {
            return(
                <div>
                <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
                
            </Card>
            </div>
            )
        }
    }
   
    renderComment()
    { if(this.props.dish==null)
        {return(
            <div></div>
        );
        }
        else
        {
            const comm=this.props.comments.map((dis)=>{
                return(
                   
                  
                       <div>
                            
                           <li>
                           <p>{dis.comment}</p>
                           <p>{dis.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dis.date)))}</p>
                           </li>
                           </div>
                    
                );
        })
            return(
                <div>
                   <h1>COMMENTS</h1>
                   {comm}
                   <CommentForm />
                   </div>
        );
       
        }
    }

    viewModal=()=>{
        console.log("hi");
        return(
            <CommentForm />
        )
    }

    render(){
        
        return(
           
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                 <div className="row">
                 <div className="col-12 col-md-5 m-1">
                {this.renderDish()}
                </div>
               
                <div className="col-12 col-md-5 m-1">
                  
                   
                    <card>
                
                {this.renderComment()}
            
            
                </card>
               
                </div>
             
          
          </div>
           </div>
          
           
           
           
                
          
        )
    }
}


export default Detail