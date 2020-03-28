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
		//marginTop: '20px',

		//height: '100vh',
	},
	title: {
		
	}
});

export default function Dashboard(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Category color="#8E6E95" name="Jeffrey" mr="0px" cat={0} />
			<Category color="#39A59C" name="Lisa" mr="0px" cat={1} />
			<Category color="#344759" name="Truman" mr="0px" cat={2} />
			<Category color="#E8741E" name="Iris" mr="25px" cat={3} />
		</div>
	);
}