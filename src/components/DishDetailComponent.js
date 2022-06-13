import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

const DishDetail = (props) => {
  let dish = <></>
  if (props.dish !== undefined) {
    dish = <RenderDishDetail dish={props.dish} />
  }
  return (
    <div className="row">
      {dish}
    </div>
  );
}

function RenderDishDetail({ dish }) {
  return (
    <Card>
      <CardImg width="100%" className="col-12 col-md-5 mt-1" src={dish.image} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  )
}

export default DishDetail;