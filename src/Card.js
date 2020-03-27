import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { GoChevronLeft, GoChevronRight} from 'react-icons/go';

const useStyles = makeStyles({
	root: {
		marginBottom: "10px",
		//width: "200px",
	},
	cc: {
		display: "flex",
		wordBreak: "break-all",
		justifyContent: "space-between"
	},
	icon: {
		height: "100%",
	}
});

export default function KanbanCard(props) {
	const classes = useStyles();

	function moveRight() {
		props.mt(props.cat, props.cat + 1, props.text);
	}	
	function moveLeft() {
		props.mt(props.cat, props.cat - 1, props.text);
	}

	return (
		<Card className={classes.root}square>
			<CardContent className={classes.cc}>
			{ props.cat !== 0 &&
				<GoChevronLeft size={50} className={classes.icon} onClick={moveLeft} />	  
			}
				<Typography>
					{props.text}
				</Typography>
			{ props.cat !== 3 &&
				<GoChevronRight size={50} onClick={moveRight} />
			  
			}
			</CardContent>
		</Card>
	);
}