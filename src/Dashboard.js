import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Category from './Category';


const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: '100%',
		marginTop: '20px',
		//height: '100vh',
	},
	title: {
		
	}
});

export default function Dashboard(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Category color="#8E6E95" mr="0px" cb={props.cb} id={0} todos={props.todos[0]} mt={props.mt}/>
			<Category color="#39A59C" mr="0px" cb={props.cb} id={1} todos={props.todos[1]} mt={props.mt}/>
			<Category color="#344759" mr="0px" cb={props.cb} id={2} todos={props.todos[2]} mt={props.mt}/>
			<Category color="#E8741E" mr="25px" cb={props.cb} id={3} todos={props.todos[3]} mt={props.mt}/>
		</div>
	);
}