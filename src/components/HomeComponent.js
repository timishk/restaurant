import React from 'react';
import {Card, CardBody, CardTitle,CardText,CardImg,CardSubtitle} from 'reactstrap';
import Loading from './LoadingComponent';
function RenderCard({item,dishesLoading,dishesErrMess})
{    if(dishesLoading){
    return(
        <Loading />
    )
}
else if (dishesErrMess)
    return(
       {dishesErrMess}
    )
    else
    return(
        <div>
            <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
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
                    <RenderCard item={props.dish} dishesLoading={props.dishesLoading} dishesErrMess={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
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