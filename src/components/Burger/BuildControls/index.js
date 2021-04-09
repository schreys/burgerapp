import BuildControl from './BuildControl'
import classes from './index.module.css'


export default function BuildControls(props) {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
        { label: 'Bacon', type: 'bacon' }
    ]
    return (
        <div className={classes.BuildControls}>
            <strong>{props.price.toFixed(2)}</strong>
            {controls.map(ctrl =>
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    type={ctrl.type}
                    disabled={props.disabledIngredients[ctrl.type]}
                    addIngredient={() => props.addIngredient(ctrl.type)}
                    removeIngredient={() => props.removeIngredient(ctrl.type)}
                />)
            }
            <button onClick={props.orderClicked} disabled={!props.purchasable} className={classes.OrderButton}>ORDER</button>
        </div>
    )
}