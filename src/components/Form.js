const Form = (props) => {
    return (
        <div>
            <div className="wrapper">
                <header>
                    <h3>🔰 TODOLIST </h3><span>{props.listSelesai || '0'} / {props.listBanyakk.length}</span>
                </header>
                <form className="input-box">
                    <input type="text" ref={props.listBaru} placeholder="Add Your Task" />
                    <button type="submit" onClick={props.addTask}>Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default Form