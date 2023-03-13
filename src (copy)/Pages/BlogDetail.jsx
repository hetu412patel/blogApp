import React from 'react'
import UserHeader from '../Components/UserHeader'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
  const {id} = useParams()

  return (
    <div>
      <UserHeader />
      <h1>{id}</h1>
    </div>
  )
}

export default BlogDetail