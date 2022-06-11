import React, { Component } from "react";
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of India'

                },
                {
                    id: 1,
                    name: 'Uthappizza',
                    image: 'assets/images/buffet.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of India'

                },
                {
                    id: 2,
                    name: 'Uthappizza',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of India'

                },
                {
                    id: 3,
                    name: 'Uthappizza',
                    image: 'assets/images/logo.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of India'

                },
                {
                    id: 4,
                    name: 'Uthappizza',
                    image: 'assets/images/vadonut.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of India'

                },
                {
                    id: 5,
                    name: 'Uthappizza',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of India'

                }
            ]
        }
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
                <Media key={dish.id} tag="li" className="col-12 mt-5">
                    <Media left middle>
                        <Media object src={dish.image} alt={dish.name} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }


}

export default Menu;