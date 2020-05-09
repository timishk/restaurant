import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Detail from './DishDetail';
import Loading from './LoadingComponent';
import {Link} from 'react-router-dom';
 const Menu =(props)=>
{
  
     
    
        if(props.dishes.isLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if(props.dishes.errMess)
        {
            return (
                <div className="container">
                    <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            )
        }
        else if(props.dishes.dishes!=null)
        {
            const menu = props.dishes.dishes.map((dish) => {
                return (
                  <div key={dish.id} className="col-md-5 m-1">
                    <Link to ={`/menu/${dish.id}`}>
                    <Card key={dish.id}
                     >
                      
                          <CardImg src={dish.image} alt={dish.name} />
                          <CardImgOverlay>
                              <CardTitle>{dish.name}</CardTitle>
                          </CardImgOverlay>
                      
                     
                      </Card>
                      </Link>
                  </div>
                 
                );
            });
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row">
                {menu}
                
                </div>
               
                
             
           </div>
      
             
        );
    }
}

export default Menu;