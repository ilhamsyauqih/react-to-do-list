import ToDoListButton from "./ToDoListButton"

function ToDoList(props) {
    props.listBanyakk.sort((a, b) => b.id - a.id)
    return (
        <div className="wrapper">
            <ul>
                {
                    props.listBanyakk.map(function(item) {
                        return (
                            <li>
                                <div className='left' onClick={()=>props.tandaSelesai(item.id)}><button>✅</button></div>
                                <div className='center'>{item.list}</div>
                                <div className='right'>
                                    <ToDoListButton />
                                </div>
                            </li>
                        )
                    })
                }
                <li>
                    <div className='left'><button>◻️</button></div>
                    <div className='center'>aaa</div>
                    <div className='right'>
                        <ToDoListButton />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ToDoList