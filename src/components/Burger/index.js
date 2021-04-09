import BurgerIngredient from './BurgerIngredient'
import styles from './index.module.css'

export default function Burger(props) {
    let transformedIngredients = Object.keys(props.ingredients).map(
        (igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, index) => {
                return <BurgerIngredient key={igKey + index} type={igKey} />
            })
        }
    ).reduce((curr, newVal) => curr.concat(newVal), []);
    if (transformedIngredients.length === 0) {

        transformedIngredients = <p>Please select ingredients</p>
    }
    return (

        < div className={styles.Burger} >
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )

}