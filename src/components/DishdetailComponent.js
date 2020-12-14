import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
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
          <small>-- {com.author}</small>
        </li>
      )
    })

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul>
          {comm}
        </ul>
      </div>
    )
  }

  render(){

    if (this.props.selectedDish == null) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className="row">
          {this.renderDish(this.props.selectedDish)}
          {this.renderComments(this.props.selectedDish.comments)}
        </div>
      )
    }
  }

}

export default Dishdetail;
