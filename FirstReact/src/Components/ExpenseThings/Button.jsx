

function Button(props){
    
    
    const deleteHandler = (e) =>{
        let toBeDelete = e.target.parentElement.parentElement;
        toBeDelete.remove();
    }
    return(
        <>
            <button className="bg-red-700 rounded-xl text-center py-2 px-4 border border-white hover:border-opacity-50 "
            onClick={deleteHandler}
            >{props.name}</button>
        </>
    )
}

export default Button;