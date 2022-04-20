import React from "react";

const BlogListItem = ({ data }) => {
	return (
		<a href="/" className="c-blog_card--small">
			<img src={data.img} alt="blog-img1" className="c-blog_img" />
			<div className="c-blog_card-body">
				<h2 className="c-blog_title">{data.title}</h2>
				<p className="c-blog_date">{data.date}</p>
			</div>
		</a>
	);
};

export default BlogListItem;
