export default function OrderSummary(props) {
    const summary = Object.keys(props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}
                </li>
            )
        })
    return (
        <>
            <h3>Your order</h3>
            <p>a delicious burger with the following ingredients:</p>
            <ul>
                {summary}
            </ul>
        </>
    )
}