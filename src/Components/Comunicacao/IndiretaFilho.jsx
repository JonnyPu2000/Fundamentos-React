import React from "react";



export default props => {
    
    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function (e){
                    props.quandoClicar('João',56,true);
                }
            }>Fornecer Informações</button>
        </div>
    )


}