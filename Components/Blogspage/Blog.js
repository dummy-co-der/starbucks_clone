import styles from './Blogpagestyle/Blog.module.scss'
import BlogList from './BlogList'

const Blog = () => {
    return (
        <div className={styles.b_blog}>
            <div className={styles.g_heading}>
                <p> Home News </p>
            </div>
            <div className={styles.blog_content}>
                <BlogList />
            </div>
        </div>
    )
}

export default Blog
