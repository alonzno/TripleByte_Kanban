import React from 'react';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { GoChevronLeft, GoChevronRight} from 'react-icons/go';

import { useSelector, useDispatch } from 'react-redux';
import { moveTodo } from './Actions';

const useStyles = makeStyles({
	root: {
		marginBottom: "10px",
		display: "flex",
		wordBreak: "break-word",
		justifyContent: "space-between",
		padding: "10px",
	},
	iconLeft: {
		//width: "50px",
		//height: "100%",
		margin: "0px 10px 0px 0px",
		"&:hover": {
			color: "#AAA",
		}
	},
	iconRight: {
		//height: "100%",
		margin: "0px 0px 0px 10px",
		"&:hover": {
			color: "#AAA",
		}
	},
	text: {
		margin: "auto",
	}
});

export default function KanbanCard(props) {
	const classes = useStyles();
	const dispatch = useDispatch();

	function moveRight() {
		dispatch(moveTodo(props.cat, props.cat + 1, props.id));
	}	
	function moveLeft() {
		dispatch(moveTodo(props.cat, props.cat - 1, props.id));
	}

	return (
		<Paper className={classes.root} square>
			{ props.cat !== 0 &&
				<GoChevronLeft className={classes.iconLeft} size={50} onClick={moveLeft} />	  
			}

				<Typography className={classes.text}>
					{props.text}
				</Typography>

			{ props.cat !== 3 &&
				<GoChevronRight className={classes.iconRight} size={50} onClick={moveRight} />
			  
			}
		</Paper>
	);
}