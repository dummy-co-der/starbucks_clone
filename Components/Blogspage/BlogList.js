import React from 'react'
import BlogCard from '../Common/Blogcard/BlogCard'
import BlogData from '@/Data/BlogData'
import styles from '../Blogspage/Blogpagestyle/BlogList.module.scss'

const BlogList = () => {
    return (
        <div className={styles.Blog_List}>
            <BlogCard data={BlogData[0]} />
        </div>
    )
}

export default BlogList