import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const styles = {
    card: {
        margin: 'auto',
  width: '25%',
  height: '40%',
  padding: '10px',
  marginTop: '25px'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            weatherItems:[
                {month:'May', day:'15', max: '38', min: '18'}, 
                {month:'May', day:'16', max: '30', min: '20'}, 
                {month:'May', day:'17', max: '33', min: '17'}, 
                {month:'May', day:'18', max: '31', min: '19'} 
            ]
        };
        this.handleMin = this.handleMin.bind(this);
        this.handleMax = this.handleMax.bind(this);
    }
    handleMin() {
        if(this.props.match.params.day==this.state.weatherItems[0].day){
                return this.state.weatherItems[0].min;
        } else if (this.props.match.params.day==this.state.weatherItems[1].day){
            return this.state.weatherItems[1].min;
        } else if(this.props.match.params.day==this.state.weatherItems[2].day){
            return this.state.weatherItems[2].min;
        } else if(this.props.match.params.day==this.state.weatherItems[3].day){
            return this.state.weatherItems[3].min;
        }
    }
    handleMax() {
        if(this.props.match.params.day==this.state.weatherItems[0].day){
                return this.state.weatherItems[0].max;
        } else if (this.props.match.params.day==this.state.weatherItems[1].day){
            return this.state.weatherItems[1].max;
        } else if(this.props.match.params.day==this.state.weatherItems[2].day){
            return this.state.weatherItems[2].max;
        } else if(this.props.match.params.day==this.state.weatherItems[3].day){
            return this.state.weatherItems[3].max;
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        MAX
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {this.handleMax()}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        MIN
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {this.handleMin()}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

Weather.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(Weather);