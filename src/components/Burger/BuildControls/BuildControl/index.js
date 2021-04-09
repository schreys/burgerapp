import classes from './index.module.css'

export default function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                disabled={props.disabled}
                className={classes.Less}
                onClick={props.removeIngredient}
            >Less</button>
            <button
                className={classes.More}
                onClick={props.addIngredient}>More</button>
        </div>
    )
}