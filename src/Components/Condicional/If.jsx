export default props =>{
    const ElseChild = props.children.filter(child =>{
        return child.type && child.type.name === 'Else';
    })[0]

    const IfChildren = props.children.filter(child =>{
        return child != ElseChild
    });

    if(props.teste){
        return IfChildren;
    }
    else if(ElseChild){
        return ElseChild;
    }
}

export const Else = props => props.children