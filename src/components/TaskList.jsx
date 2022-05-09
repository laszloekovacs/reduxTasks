import React from 'react';
import Task from './Task';

const TaskList = ({tasks, status, onStatusChange}) => {
	return (
		<div className="task-list-status">
			<strong>{status}</strong>
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					onStatusChange={onStatusChange}
				/>
			))}
		</div>
	);
};

export default TaskList;
