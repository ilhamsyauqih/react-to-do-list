import ToDoListButton from "./ToDoListButton"

function ToDoList(props) {
    console.log(props.listBanyakk)
    return (
        <div className="wrapper">
            <ul>
                {
                    props.listBanyakk.map((item) => {
                        return (
                            <li>
                                <div className='left'><button>✅</button></div>
                                <div className='center'>{item.list} - {item.id}</div>
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