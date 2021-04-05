import classes from './index.module.css'

export default function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                className={classes.Less}
                onClick={props.removeIngredient}
            >Less</button>
            <button
                className={classes.More}
                onClick={props.addIngredient}
            >More</button>
        </div>
    )
}