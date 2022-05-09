import {uniqueId} from '../actions';

type taskType = {
	id: number;
	title: string;
	description: string;
	status: 'In Progress' | 'Unstarted' | 'Completed';
};

const mockTasks: {tasks: taskType[]} = {
	tasks: [
		{
			id: uniqueId(),
			title: 'Learn Redux',
			description: 'The store, actions and reducers, oh my!',
			status: 'In Progress',
		},
		{
			id: uniqueId(),
			title: 'Peace on Earth',
			description: 'Easy peasy',
			status: 'Unstarted',
		},
		{
			id: uniqueId(),
			title: 'Practice React',
			description: 'A lot more to do',
			status: 'In Progress',
		},
		{
			id: uniqueId(),
			title: 'Drink Coffee',
			description: 'Need to wake up somehow',
			status: 'Completed',
		},
	],
};

type actionType = {
	type: string;
	payload?: any;
};

export default function tasksReducer(state = {tasks: mockTasks.tasks}, action) {
	switch (action.type) {
		case 'CREATE_TASK':
			return {tasks: state.tasks.concat(action.payload)};

		case 'EDIT_TASK':
			const {payload} = action;
			return {
				tasks: state.tasks.map((task) => {
					if (task.id === payload.id) {
						return {...task, ...payload.params};
					}
					return task;
				}),
			};
	}

	return state;
}
