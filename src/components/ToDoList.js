import ToDoListButton from "./ToDoListButton"

function ToDoList() {
    return (
        <div className="wrapper">
            <ul>
                <li>
                    <div class='left'><button>✅</button></div>
                    <div className='center'>bbb</div>
                    <div className='right'>
                        <ToDoListButton />
                    </div>
                </li>
                <li>
                    <div class='left'><button>◻️</button></div>
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