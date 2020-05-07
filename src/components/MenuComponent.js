import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Detail from './DishDetail';
import {Link} from 'react-router-dom';
class Menu extends Component
{
   render(){
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-md-5 m-1">
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