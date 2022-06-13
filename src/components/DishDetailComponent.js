import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

function DishDetail(props) {
  let dish = <></>
  if (props.dish != undefined) {
    dish = (
      <Card>
        <CardImg width="100%" className="col-12 col-md-5 mt-1" src={props.dish.image} />
        <CardBody>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>{props.dish.description}</CardText>
        </CardBody>
      </Card>
    )
  }
  return (
    <div className="row">
      {dish}
    </div>
  );
}


export default DishDetail;