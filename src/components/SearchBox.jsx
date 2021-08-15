const SearchBox = ({onChange, input}) => {

	return (
		<>
			<input 
			type='search' 
			name='searchbox'
			placeholder='my city' 
			className='br2 tc blue'
			onChange={onChange}
			/>
		</>
		);
}

export default SearchBox