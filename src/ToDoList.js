import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <> 
                    <div>
                        
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    <button className='edit'>edit</button>
                    <button className='delete'>delete</button>
                    </div>
                    
                    </>
                )
            })}
            {/* <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button> */}
        </div>
    );
};

export default ToDoList;