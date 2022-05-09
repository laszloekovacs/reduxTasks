import React from 'react';
import {TASK_STATUSES} from './TaskPage';

const Task = (props) => {
	function onStatusChange(e) {
		props.onStatusChange(props.task.id, e.target.value);
	}

	return (
		<div className="task">
			<div className="task-header">
				<h3>{props.task.title}</h3>
				<select value={props.task.status} onChange={onStatusChange}>
					{TASK_STATUSES.map((status) => (
						<option key={status} value={status}>
							{status}
						</option>
					))}
				</select>
			</div>
			<hr />
			<div className="task-body">
				<p>{props.task.description}</p>
			</div>
		</div>
	);
};

export default Task;
