import { useState } from 'react'

export const usePagination = ({perPage, data}) => {

	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(perPage)

	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

	function paginate(pageNumber){
		setCurrentPage(pageNumber)
	}

	return ({currentPage, postsPerPage, paginate, currentPosts})
}

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
	const pageNumbers = []
	
	for(let i = 1; i <= Math.ceil( totalPosts / postsPerPage ); i++){
		pageNumbers.push(i)
	}
	
	return ( 
		<nav className="pagination">
			{totalPosts > 0 && 
			<>
			<ul>
				<button onClick={()=> currentPage > 1 && paginate(currentPage-1)} disabled={currentPage == 1 }>Prev</button>
					{/*pageNumbers.map( page => (
						<li key={page} onClick={()=> paginate(page)} className={page == currentPage ? 'active' : ''}>{page}</li>
					))*/}
				<button onClick={()=> currentPage < Math.ceil(totalPosts/postsPerPage) && paginate(currentPage+1)} disabled={currentPage == Math.ceil(totalPosts/postsPerPage)}>Next</button>
			</ul>
			
			<p className="total-pages">Page: {currentPage}<small>/{Math.ceil(totalPosts/postsPerPage)}</small></p>
			</>
		}

			<style jsx>{`
			.pagination ul{
				margin: 0;
				padding: 0;
				display: flex;
			}	
			.pagination ul li{
				list-style: none;
				padding: 8px 12px;
				display: block;
				background: whitesmoke;
				color: grey;
				margin-right: 5px;
				cursor: pointer;
				border-radius: 5px;
				user-select: none;
				font-size: 14px;
			}
			.active{
				opacity: .7;
			}
			.total-pages{
				user-select: none;
			}
			`}</style>
		</nav>
	 )
}