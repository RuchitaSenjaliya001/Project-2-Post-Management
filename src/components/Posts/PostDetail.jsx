import React from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetail() {
    const params = useParams()
    return (
        <div>{params.postId}</div>
    )
}
