import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes.js'
import DishDetail from './DishDetailComponent';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }

        this.onSelectedDish = this.onSelectedDish.bind(this);
    }

    onSelectedDish(dishId) {
            this.setState({
                selectedDish: dishId
            })
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <div className='container'>
                <Menu dishes={this.state.dishes} onClick={this.onSelectedDish} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </div>
            </div>
        );
    }
}

export default Main;
