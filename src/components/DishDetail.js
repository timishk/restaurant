import React,{Component} from 'react';
import {Card ,CardBody, CardImg,CardText, CardTitle} from 'reactstrap';

class Detail extends Component
{
    

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
    outputComm(){
        if(this.props.dish==null)
        {return(
            <div></div>
        );
        }
        else
        {
            return(
                <h1>COMMENTS</h1>
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
            const p=1;
            return(
                
                    <h1>COMMENTS</h1>,
                this.props.dish.comments.map((dis)=>{
                    return(
                       
                      
                           <div>
                                
                               <li>
                               <p>{dis.comment}</p>
                               <p>{dis.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dis.date)))}</p>
                               </li>
                               </div>
                        
                    );
            })
            
        )
       
        }
    }

    render(){
        
        return(
            <div className="container">
                 <div className="row">
                 <div className="col-12 col-md-5 m-1">
                {this.renderDish()}
                </div>
               
                <div className="col-12 col-md-5 m-1">
                  
                   
                    <card>
                {this.outputComm()} 
                {this.renderComment()}
                </card>
    
                </div>
             
          
          </div>
           </div>
          
           
           
           
                
          
        )
    }
}

export default Detail;