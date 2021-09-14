import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";

const Task = ({task, ...props}) => {
	const ActionBtn = () => (
		<div className="action-btn">
			{!task.done ?
				(<span aria-label="done" role="img" onClick={props.doneTask}>✓</span>)
				:
				(<span aria-label="delete" role="img" onClick={props.deleteTask}>x</span>)
			}
		</div>
	);

	const Important = () => (
		<div>
			{task.important ?
				(<span onClick={props.makeNotImportant}>
					<FontAwesomeIcon icon={faStar} color={'blue'}/>
				</span>)
				:
				(<span onClick={props.makeImportant}>
					<FontAwesomeIcon icon={faStar}/>
				</span>)
			}
		</div>
	);

	const doneTask = 'task ' + (task.done ? 'task-done' : '');
	return(
		<div className={doneTask}>
			<p>{task.title}</p>
			<ActionBtn></ActionBtn>
			<Important></Important>
		</div>
	);
};

export default Task;