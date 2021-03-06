import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/Index';

class Sort extends Component {

    onClick = (sortBy, sortValue) => {
        let sort = {
            by: sortBy,
            value: sortValue
        }
        this.props.onSortTable(sort);
    }
    render() {
        const { sort } = this.props;

        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sort <span className="fa fa-caret-square-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={ () => this.onClick('name', 1) }>
                            <a 
                                href
                                role="button" 
                                className={ (sort.by === 'name' && sort.value === 1) 
                                    ? 'sort_selected' : ''
                                }
                            >
                                <span className="fa fa-sort-alpha-down pr-5">
                                    Name A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={ () => this.onClick('name', -1) }>
                        <a 
                            href
                            role="button" 
                            className={ (sort.by === 'name' && sort.value === -1) 
                                ? 'sort_selected' : ''
                            }
                        >
                                <span className="fa fa-sort-alpha-down-alt pr-5">
                                    Name Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={ () => this.onClick('status', 1) }>
                        <a 
                            href
                            role="button" 
                            className={ (sort.by === 'status' && sort.value === 1) 
                                ? 'sort_selected' : ''
                            }
                        >
                                Status Activated
                            </a>
                        </li>
                        <li onClick={ () => this.onClick('status', -1) }>
                        <a 
                            href
                            role="button" 
                            className={ (sort.by === 'status' && sort.value === -1) 
                                ? 'sort_selected' : ''
                            }
                        >
                                Status Hide
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortTable: sort => {
            dispatch(actions.sortTable(sort));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);