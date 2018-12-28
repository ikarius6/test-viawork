import React, {Component} from 'react';
import Job from './Job';

class Jobs extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            jobs: []
        };
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.search !== this.props.search && nextProps.search != "") {
            fetch('https://hackers.army/viawork/?s=' + nextProps.search)
            .then(response => response.json())
            .then((jobs) => {
                this.props.stopLoading();
                this.setState({ jobs: jobs });
            })
        } else {
            this.setState({ jobs: [] });
        }
    }
    
    render () {
        if (this.state.jobs.length > 0) {
            return (
                <div id="jobs" className="ml-auto mr-0 mr-md-3">
                    {this.state.jobs.map((job, i)=>{
                        return <Job job={job} key={i} />
                    })}
                </div>
            )
        } else {
            return (null)
        }
    }
}

module.exports = Jobs;