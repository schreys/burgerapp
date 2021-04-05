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
            {controls.map(ctrl =>
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    type={ctrl.type}
                    addIngredient={() => props.addIngredient(ctrl.type)}
                    removeIngredient={() => props.removeIngredient(ctrl.type)}
                />)
            }
        </div>
    )
}