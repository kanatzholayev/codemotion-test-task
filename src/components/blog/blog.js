import React from "react";
import "./blog.scss";

// this for the this time, if we'll have backend we'll fetch all data from database
import blogImg1 from "../../img/blog-img1.png";
import blogImg2 from "../../img/blog-img2.png";
import blogVideo from "../../img/blog-video.png";
import playBtn from "../../img/play-btn.png";
import BlogList from "./blogList";

// database imitation
const data = [
	{
		title: "MI Strategic Growth Chief Seeks Disruptive Deals",
		img: blogImg1,
		date: "11 APR 2017",
	},
	{
		title: "MI Strategic Growth Chief Seeks Disruptive Deals",
		img: blogImg1,
		date: "11 APR 2017",
	},
	{
		title: "MI Strategic Growth Chief Seeks Disruptive Deals",
		img: blogImg1,
		date: "11 APR 2017",
	},
	{
		title: "MI Strategic Growth Chief Seeks Disruptive Deals",
		img: blogImg1,
		date: "11 APR 2017",
	},
	{
		title: "MI Strategic Growth Chief Seeks Disruptive Deals",
		img: blogImg1,
		date: "11 APR 2017",
	},
	{
		title: "MI Strategic Growth Chief Seeks Disruptive Deals",
		img: blogImg1,
		date: "11 APR 2017",
	},
	{
		title: "MI Strategic Growth Chief Seeks Disruptive Deals",
		img: blogImg1,
		date: "11 APR 2017",
	},
	{
		title: "MI Strategic Growth Chief Seeks Disruptive Deals",
		img: blogImg1,
		date: "11 APR 2017",
	},
	{
		title: "MI Strategic Growth Chief Seeks Disruptive Deals",
		img: blogImg1,
		date: "11 APR 2017",
	},
	{
		title: "MI Strategic Growth Chief Seeks Disruptive Deals",
		img: blogImg1,
		date: "11 APR 2017",
	},
];

const Blog = () => {
	return (
		<section className="c-blog">
			<div className="o-container">
				<div className="c-blog_wrapper">
					<div className="c-blog_card c-blog_card--medium">
						<div className="c-tag">Equity</div>
						<img src={blogImg1} alt="blog-img1" className="c-blog_img" />
						<div className="c-blog_card-body">
							<a href="/">
								<h2 className="c-blog_title">
									MI Strategic Growth Chief Seeks Disruptive Deals
								</h2>
							</a>
							<p className="c-blog_date">11 APR 2017</p>
							<p className="c-blog_desc">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi
								nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
								sit amet, consectetur, adipisci velit, sed quia non numquam eius
								modi tempora incidunt ut labore et dolore magnam aliquam quaerat
								voluptatem.
							</p>
						</div>
					</div>
					<div className="c-blog_card c-blog_card--large">
						<div className="c-tag">Featured</div>
						<img src={blogImg2} alt="blog-img2" className="c-blog_img" />
						<div className="c-blog_card-body">
							<a href="/">
								<h2 className="c-blog_title">
									MI Strategic Growth Chief Seeks Disruptive Deals
								</h2>
							</a>
							<p className="c-blog_date">11 APR 2017</p>
							<p className="c-blog_desc">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi
								nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
								sit amet, consectetur, adipisci velit, sed quia non numquam eius
								modi tempora incidunt ut labore et dolore magnam aliquam quaerat
								voluptatem.
							</p>
						</div>
					</div>
					<div className="c-blog_card c-blog_card--video">
						<a href="/">
							<img src={blogVideo} alt="blog-video" className="c-blog_img" />
							<img src={playBtn} alt="play-btn" className="c-play_btn" />
						</a>
					</div>
					<BlogList data={data} />
				</div>
			</div>
		</section>
	);
};

export default Blog;
