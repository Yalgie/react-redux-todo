import React from 'react';
import FilterLink from '../containers/FilterLink';
import { Filters } from '../actions/actions';

const Footer = () => (
    <p>
        <FilterLink filter={Filters.SHOW_ALL}>
            All
        </FilterLink>

        <FilterLink filter={Filters.SHOW_ACTIVE}>
            Active
        </FilterLink>

        <FilterLink filter={Filters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </p>
)

export default Footer