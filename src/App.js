import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import s from './App.scss';
import Jobs from './Jobs';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };

        library.add(faSearch);
        library.add(faSpinner);
        
        this.stopLoading = this.stopLoading.bind(this)
    }

    handleOnChange (event) {
        const v = event.target.value;
        this.setState({
            loading: v !== "",
            search: v 
        });
    }
    
    handleOnFocus () {
        this.setState({
            expanded: true
        });
    }
    
    handleOnBlur () {
        this.setState({
            search: '',
            expanded: false
        });
    }
    
    stopLoading () {
        this.setState({
            loading: false
        });
    }

    render () {
        const searchClasses = classNames({
            'input-group': true,
            'search-bar': !this.state.expanded,
            'search-bar-expanded': this.state.expanded
        });
        const searchIcon = classNames({
            'search': !this.state.loading,
            'spinner': this.state.loading
        });
        return (
            <form>
                <div className={searchClasses}>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Search for..."
                        value={this.state.search}
                        onChange={this.handleOnChange.bind(this)}
                        onFocus={this.handleOnFocus.bind(this)}
                        onBlur={this.handleOnBlur.bind(this)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <FontAwesomeIcon icon={searchIcon} spin={this.state.loading} />
                        </button>
                    </div>
                </div>
                <Jobs search={this.state.search} stopLoading={this.stopLoading} />
            </form>
        );
    }
}
