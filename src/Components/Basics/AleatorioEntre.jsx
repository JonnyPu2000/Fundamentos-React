
export default (props) => {

    const rand = Math.random() * (props.max - props.min) + props.min.toFixed(2)
    return (

        <div>
            <h2>Valor Aleatorio</h2>
            <h3>{rand}</h3>
        
        </div>
        );
}