import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Label, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);


class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values){
    if (values.rating == undefined) {
      alert('Please select your rating before submit');
      return false;
    } else {
      console.log('Current State is:' + JSON.stringify(values));
      alert('Current State is:' + JSON.stringify(values));
      this.toggleModal();
      return false;
    }

  }

  render(){
    return(
      <>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <Col>
                <Label htmlFor="rating">Rating</Label>
                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                  <option>-- Please Select Your Rating --</option>
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </Control.select>

              </Col>
              <Col className="mt-2">
                <Label htmlFor="name">Your Name</Label>
                <Control.text model=".name" name="name" className="form-control" placeholder="Your name here" validators={{
                    minLength: minLength(3), maxLength: maxLength(15)
                  }}/>
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    minLength: "Must be at least 3 characters long",
                    maxLength: "Must less than or equal to 15 characters"
                  }}
                />
              </Col>
              <Col className="mt-2">
                <Label htmlFor="Comment">Comment</Label>
                <Control.textarea model=".comment" id="comment" name="comment" placeholder="Your comment here" className="form-control" rows="6"/>
              </Col>
              <Col className="mt-2">
                <Button type="submit" color="primary">Submit</Button>
              </Col>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Button onClick={this.toggleModal} outline color="primary">
          <span className="fa fa-comment fa-lg"></span>
          { } Submit Comment
        </Button>
      </>
    );
  }
}

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
        <CommentForm />
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
            <Breadcrumb>
              <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments} />
          </div>
        </div>
      )
    }
  }



export default DishDetail;
