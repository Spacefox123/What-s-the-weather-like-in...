import React from 'react';
import SearchBox from './SearchBox';


const Title = ({ onChange, input }) => {
    return(
        <div className='nav f4 courier tc bg-light-blue'>
            <h1 className='lightest-blue nav-text'>What's the weather like in </h1>
            <SearchBox onChange={onChange} value={input}/>
        </div>
    );
}

export default Title