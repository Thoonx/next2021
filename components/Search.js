import Link from 'next/link'
import { useState } from 'react'

const Search = () => {
const [ searchValue, setSearchValue ] = useState('')

	return ( 
		<>
			<p>Search Posts</p>
				<form>
					<input type="search" name="search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
					{searchValue != '' &&
					  <Link href={`/SearchPage?search=${searchValue}`}><button onClick={()=> setSearchValue('')}>Submit</button></Link>
					}
				</form>
		</>
	 )
}
 
export default Search;