import useSWR from 'swr'
import { useState } from 'react'

export default function useSwrData(url){
	const fetcher = async url => {
		const res = await fetch(url)
		if (!res.ok) {
			const error = new Error()
			throw error
		}
		  return res.json()
	}
	const { data, error } = useSWR(url, fetcher)
	const [ buffer, setBuffer ] = useState(data)
  
	if(data && !buffer) setBuffer(data)

	return{
		swrData: buffer,
		error,
		stale: buffer !== data,
		update: () => setBuffer(data)
	}
}