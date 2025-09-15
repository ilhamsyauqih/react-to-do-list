    
function ToDoListButton(props) {
    let id = props.id
    let indexSekarang = props.listBanyakk.findIndex((item)=> item.id == id)
    let indexSebelum = indexSekarang - 1;
    let indexSetelah = indexSekarang + 1;

    let prevButton = '';
    let nextButton = '';
    if(props.listBanyakk[indexSebelum] != undefined){
        prevButton = '👆'
    }  else {
        indexSebelum = '';
    }
    if(props.listBanyakk[indexSetelah] != undefined){
        nextButton = '👇'
    } else {
        indexSetelah = ''
    }
    return (
        <>
            <span><button onClick={() => props.pindahList(indexSekarang, indexSebelum)}>{prevButton}</button></span>
            <span><button onClick={() => props.pindahList(indexSekarang, indexSetelah)}>{nextButton}</button></span>
            <span><button onClick={() => props.hapus(props.id)}>🗑️</button></span>
        </>
    )
}

export default ToDoListButton