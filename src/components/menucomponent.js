import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function Menu({dishes, onClick}) {
    const menu = dishes.map((dish) => {
        return (
            <Card onClick={() => onClick(dish.id)} key={dish.id} className="col-12 col-md-5 mt-1">
                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        )
    });

    return (
            <div className="row">
                {menu}
            </div>
    );
}
export default Menu;