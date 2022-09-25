import React from 'react';
import ToDo from './ToDo';
import "./App.css"

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <> 
                    <div className='details'>
                        
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                    <button className='edit'>Edit</button>
                    <button className='delete'>Delete</button>
                    </div>
                    
                    </>
                )
            })}
            {/* <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button> */}
        </div>
    );
};

export default ToDoList;