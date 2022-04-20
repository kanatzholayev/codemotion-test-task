import React from "react";
import BlogListItem from "./blogListItem";

const BlogList = ({ data }) => {
	return (
		<div className="c-blog_card c-blog_card--list">
			{data.map((item) => (
				<BlogListItem data={item} />
			))}
		</div>
	);
};

export default BlogList;
