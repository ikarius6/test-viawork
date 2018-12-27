import React, {Component} from 'react';
import s from './Job.scss';

class Job extends Component {
    constructor(props) {
        super(props);
    }
    
    handleOnClick (id, event) {
        fetch('https://hackers.army/viawork/?id=' + id)
        .then(response => response.json())
        .then((job) => {
            console.log("Job", job);
        })
    }
    
    render () {
        const j = this.props.job;
        return (
            <p className="job" onMouseDown={this.handleOnClick.bind(this, j.uuid)}>
                <strong>{j.uuid}</strong> - {j.title}
            </p>
        );
    }
}

module.exports = Job;