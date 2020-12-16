import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
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

  renderComments(comments) {
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

  render(){

    if (this.props.dish == null) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      )
    }
  }

}

export default Dishdetail;
