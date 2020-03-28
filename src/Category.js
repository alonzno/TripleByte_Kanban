import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './Actions';

import KanbanCard from './Card';


const useStyles = makeStyles({
	root: {
		display: "flex",
		//flexGrow: '1',
		flex: "0 0 calc(calc(100vw - 125px) / 4)",
		flexDirection: "column",
		//justifyContent: 'space-around',
		marginLeft: "25px",
	},
	titleBar: {
		marginBottom: "10px",
	}
});

export default function Category(props) {
	const classes = useStyles();

	const todos = useSelector(state => state.todos.present[props.cat]);
	const dispatch = useDispatch();


	function clickHandler() {
		let text = prompt("What would you like to add?", "");
		if (text !== "") {
			//props.cb(props.id, text);
			dispatch(addTodo(props.cat, text));
		}
	}

	return (
		<div className={classes.root} style={{marginRight: props.mr}}>
			<Paper className={classes.titleBar} style={{background: props.color}} elevation={2} square>
				<Typography variant='h4'>
					{props.name}
				</Typography>
			</Paper>

			{todos.map((value, index) => {
				return <KanbanCard key={index} id={index} text={value} cat={props.cat} />
			})}

			<Button variant="contained" onClick={clickHandler} >
				Add todo
			</Button>
		</div>
	);
}