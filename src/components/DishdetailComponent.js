import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



  function RenderDish({dish}) {
    return(
      <Card className="col-12 col-md-5 m-1">
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    )
  }

  function RenderComments({comments}) {
    var comm = comments.map((com) => {
      return (
        <li key={com.id}>
          <div>{com.comment}</div>
          <small>-- {com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</small>
        </li>
      )
    })

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul class="list-unstyled">
          {comm}
        </ul>
      </div>
    )
  }

  const DishDetail = (props) => {

    if (props.dish == null) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className="container">
          <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.dish.comments} />
          </div>
        </div>
      )
    }
  }



export default DishDetail;
