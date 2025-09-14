    
function ToDoListButton(props) {
    let id = props.id
    let indexSekarang = props.listBanyakk.findIndex((item)=> item.id == id)
    let indexSebelum = indexSekarang - 1;
    let indexSetelah = indexSekarang + 1;

    let prevButton = '';
    let nextButton = '';
    if(props.listBanyakk[indexSebelum] != undefined){
        prevButton = '👆'
    } 
    if(props.listBanyakk[indexSetelah] != undefined){
        nextButton = '👇'
    }
    return (
        <>
            <span><button>{prevButton}</button></span>
            <span><button>{nextButton}</button></span>
            <span><button>🗑️</button></span>
        </>
    )
}

export default ToDoListButton