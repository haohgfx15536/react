import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {

    return (
        <Card onClick={() => onClick(dish.id)} key={dish.id} className="col-12 col-md-5 mt-1">
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <RenderMenuItem dish={dish} onClick={props.onClick} />
        )
    });

    return (
        <div className="row">
            {menu}
        </div>
    );
}

export default Menu;