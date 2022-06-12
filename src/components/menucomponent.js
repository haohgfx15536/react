import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'; 

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    rederDish(dish) {
        if (dish != null) {
                return(
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
        }
        else{
            <></>
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <Card onClick={() => this.onDishSelect(dish)} key={dish.id} className="col-12 col-md-5 mt-1">
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.rederDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }


}

export default Menu;