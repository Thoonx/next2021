import { useRouter } from 'next/router'
import Link from 'next/link'

const PostsModal = ({slug, data, isOpen}) => {
	const router = useRouter()
	const filterData =  data.filter( post => post.slug === slug)

		function handleModal(){
		isOpen = false
		}

	if(filterData.length <= 0) return <div></div>
	else{
	return (
		<>
		<div style={!isOpen ? {display: 'none'} : {}} className="post-modal">
			<div className="post-modal-content">
			<Link href="/" scroll={false}><h2 onClick={handleModal}>X</h2></Link>
			<h1>{filterData[0].title}</h1>
			{filterData[0].featured_image.large && <img src={filterData[0].featured_image.large} style={{height: 400}}/>}
			<p>{filterData[0].content}</p>
			
			</div>
		</div>

		<style jsx>{`
			.post-modal{
				width: 100%;
				height: 100vh;
				position: fixed;
				display: flex;
				align-items: center;
				justify-content: center;
				backdrop-filter: blur(5px);
				top: 0;
				left: 0;
				z-index: 9999;
			}
			.post-modal-content{
				border-radius: 10px;
				width: 70%;
				height: 70%;
				background: white;
				color: black;
				padding: 30px;
				z-index: 2;
				overflow-y: scroll;
			}

			.post-modal-content h2{
				cursor: pointer;
			}
		`}</style>
		</>
	  )}
}
 
export default PostsModal;