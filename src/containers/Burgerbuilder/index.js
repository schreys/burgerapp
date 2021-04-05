import { Component } from "react";
import Burger from '../../components/Burger'
import BuildControls from "../../components/Burger/BuildControls";


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.2,
    meat: 2.4
}

export default class Burgerbuilder extends Component {
    state = {
        ingredients:
        {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    };

    addIngredientHandler = (type) => {
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;
        const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({ ingredients: newIngredients, totalPrice: newTotalPrice });
    }

    removeIngredientHandler = (type) => {

    }

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler} />
            </>
        )
    }
}