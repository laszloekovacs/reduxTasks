import React, {Component} from 'react';
import TaskList from './TaskList';

export const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

export default class TaskPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNewCardForm: false,
			title: '',
			description: '',
		};
	}

	onTitleChange = (e) => {
		this.setState({title: e.target.value});
	};

	onDescriptionChange = (e) => {
		this.setState({description: e.target.value});
	};

	resetForm() {
		this.setState({
			showNewCardForm: false,
			title: '',
			description: '',
		});
	}

	onCreateTask = (e) => {
		e.preventDefault();
		this.props.onCreateTask({
			title: this.state.title,
			description: this.state.description,
		});
		this.resetForm();
	};

	toggleForm = () => {
		this.setState({showNewCardForm: !this.state.showNewCardForm});
	};

	renderTaskList() {
		const {tasks} = this.props;

		console.log(tasks);
		return TASK_STATUSES.map((status) => {
			const statusTasks = tasks.filter((task) => task.status === status);
			return (
				<TaskList
					key={status}
					status={status}
					tasks={statusTasks}
					onStatusChange={this.props.onStatusChange}
				/>
			);
		});
	}
	render() {
		return (
			<>
				<div className="task-list-header">
					<button
						className="button button-default"
						onClick={this.toggleForm}
					>
						+ new task
					</button>
				</div>
				{this.state.showNewCardForm && (
					<form
						className="task-list-form"
						onSubmit={this.onCreateTask}
					>
						<input
							className="full-width-input"
							onChange={this.onTitleChange}
							value={this.state.title}
							type="text"
							placeholder="title"
						/>
						<input
							className="full-width-input"
							onChange={this.onDescriptionChange}
							value={this.state.description}
							type="text"
							placeholder="description"
						/>
						<button className="button" type="submit">
							Save
						</button>
					</form>
				)}

				<div className="task-list">{this.renderTaskList()}</div>
			</>
		);
	}
}
