import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
    }

    handleOnChange (event) {
        this.setState({
           search: event.target.value 
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

    render () {
        const searchClasses = classNames({
            'input-group mb-2': true,
            'search-bar': !this.state.expanded,
            'search-bar-expanded': this.state.expanded
        });
        return (
            <section>
                <h1>Autocomplete Search - Test ViaWork</h1>
                <form>
                    <div className="col-sm-12 form-horizontal">
                        <label className="sr-only" htmlFor="buscar">Buscar</label>
                        <div className={searchClasses}>
                            <input 
                                type="text"
                                className="form-control"
                                id="buscar"
                                placeholder="Transaction"
                                value={this.state.search}
                                onChange={this.handleOnChange.bind(this)}
                                onFocus={this.handleOnFocus.bind(this)}
                                onBlur={this.handleOnBlur.bind(this)}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <FontAwesomeIcon icon="search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                
                <Jobs search={this.state.search} />
            </section>
        );
    }
}
