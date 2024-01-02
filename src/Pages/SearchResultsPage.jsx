import React from 'react';
import NavBar from './NavBar';
import Search from '../Component/Search';

const SearchResultsPage = () => {
    return (
        <div>
            <NavBar>
                <Search/>
            </NavBar>
        </div>
    );
};

export default SearchResultsPage;