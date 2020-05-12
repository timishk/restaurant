import React from 'react';
import {Card, CardBody, CardTitle,CardText,CardImg,CardSubtitle} from 'reactstrap';
import Loading from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl'
import { FadeTransform } from 'react-animation-components';
function RenderCard({item,dishesLoading,dishesErrMess,promosLoading,promosErrMess})
{    if(dishesLoading||promosLoading){
    return(
        <Loading />
    )
}
else if (dishesErrMess)
    return(
       <h4>{dishesErrMess}</h4>
    )
     else if(promosErrMess)
    {
        return(
           <h4>{promosErrMess}</h4> 
        )
    }
    else
    return(
        <div>
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
            <CardImg src={baseUrl+item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
        </FadeTransform>
        </div>
    )
}


function Home(props)
{
    return(
        <div className="container">
            <div className="row">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} dishesLoading={props.dishesLoading} dishesErrMess={props.dishesErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} promosLoading={props.promosLoading} promosErrMess={props.promosErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;