import ToDoListButton from "./ToDoListButton"

function ToDoList(props) {
    props.listBanyakk.sort((a, b) => b.id - a.id)
    return (
        <div className="wrapper">
            <ul>
                {
                    props.listBanyakk.map(function (item) {
                        let radioComplete = ''
                        let classSelesai = ''
                        if (item.completed == false) {
                            radioComplete = '◻️';
                        } else {
                            radioComplete = '✅';
                            classSelesai = 'strike'
                        }
                        return (
                            <li>
                                <div className='left' onClick={() => props.tandaSelesai(item.id)}><button>{radioComplete}</button></div>
                                <div className={`center ${classSelesai}`}>{item.list}</div>
                                <div className='right'>
                                    <ToDoListButton id={item.id} listBanyakk={props.listBanyakk} />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList