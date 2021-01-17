const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
	const pageNumbers = []
	
	for(let i = 1; i <= Math.ceil( totalPosts / postsPerPage ); i++){
		pageNumbers.push(i)
	}
	

	return ( 
		<nav className="pagination">
			<ul>
				<li onClick={()=> currentPage > 1 && paginate(currentPage-1)} style={currentPage == 1 ? {opacity: .3, pointerEvents: 'none'} : {}}>Prev</li>
					{/*pageNumbers.map( page => (
						<li key={page} onClick={()=> paginate(page)} className={page == currentPage ? 'active' : ''}>{page}</li>
					))*/}
				<li onClick={()=> currentPage < Math.ceil(totalPosts/postsPerPage) && paginate(currentPage+1)} style={currentPage == Math.ceil(totalPosts/postsPerPage) ? {opacity: .3, pointerEvents: 'none'} : {}}>Next</li>
			</ul>

			<p className="total-pages">Page: {currentPage}<small>/{Math.ceil(totalPosts/postsPerPage)}</small></p>

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
 
export default Pagination;