import { Link } from 'react-router-dom';
import './Post.css';
function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    <Link className="link" to="/post/:postId">Lorem ipsum dolor sit amet</Link>
                </span>
                <hr />
                <span className="postDate">1 hours ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti earum nisi explicabo ullam
                quas aliquam blanditiis! Laboriosam facilis enim quae deserunt, amet autem iusto nesciunt fugit natus
                perspiciatis. Minus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti earum nisi explicabo ullam
                quas aliquam blanditiis! Laboriosam facilis enim quae deserunt, amet autem iusto nesciunt fugit natus
                perspiciatis. Minus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti earum nisi explicabo ullam
                quas aliquam blanditiis! Laboriosam facilis enim quae deserunt, amet autem iusto nesciunt fugit natus
                perspiciatis. Minus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti earum nisi explicabo ullam
                quas aliquam blanditiis! Laboriosam facilis enim quae deserunt, amet autem iusto nesciunt fugit natus
                perspiciatis. Minus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti earum nisi explicabo ullam
                quas aliquam blanditiis! Laboriosam facilis enim quae deserunt, amet autem iusto nesciunt fugit natus
                perspiciatis. Minus!
            </p>
        </div>
    );
}

export default Post;
