import { useRouter } from 'next/router'
import { useState } from 'react'
import Posts from '../components/Posts'
import {usePagination, Pagination} from '../components/usePagination'

const SearchPage = ({posts}) => {
   
	const router = useRouter()
	const query = router.query.search + '';

	posts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
	const {currentPage, postsPerPage, currentPosts, paginate} = usePagination({perPage: 2, data: posts})

	
	return ( 
		<>
		  <h1>SearchPage</h1>
		  {posts.length === 0 ? <p>There are no posts that match: {query}</p> 
		  : <p>Showing {posts.length} results for: {query}</p>
		  }
		
	

		<Posts data={currentPosts}/> 
        <Pagination 
          postsPerPage={postsPerPage} 
          totalPosts={posts.length} 
          currentPage={currentPage} 
          paginate={paginate} 
        />

		</>
	 );
}


export async function getStaticProps() {
	const res = await fetch(`https://antuncrnja.com/w/wp-json/ac/v1/posts`)
	const posts = await res.json()
	
	return {
	  props: {
		posts,
	  },revalidate: 1
	}
  }
 
export default SearchPage;