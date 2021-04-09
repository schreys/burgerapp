import { Component } from "react";
import Burger from '../../components/Burger'
import BuildControls from "../../components/Burger/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary";
import Modal from '../../components/UI/Modal'

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    addIngredientHandler = (type) => {
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;
        const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({ ingredients: newIngredients, totalPrice: newTotalPrice });
        this.updatePurchasable(newIngredients);
    }

    removeIngredientHandler = (type) => {
        const newIngredients = { ...this.state.ingredients };
        if (newIngredients[type] === 0)
            return;
        newIngredients[type]--;
        const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
        this.setState({ ingredients: newIngredients, totalPrice: newTotalPrice });
        this.updatePurchasable(newIngredients);
    }

    updatePurchasable = (ingredients) => {
        const values = Object.values(ingredients);
        const sum = values.reduce((prev, current) => current + prev, 0);
        this.setState({ purchasable: sum !== 0 })
    }

    updatePurchasing = () => {
        this.setState({ purchasing: true });
    }

    render() {
        const disabledIngredients = { ...this.state.ingredients };
        for (let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] === 0;
        }
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <BuildControls
                    price={this.state.totalPrice}
                    disabledIngredients={disabledIngredients}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    orderClicked={this.updatePurchasing} />
            </>
        )
    }
}