import React from "react";
import "./footer.scss";
import footerLogo from "../../img/footer-logo.png";

const Footer = () => {
	return (
		<footer className="c-footer">
			<div className="o-container">
				<div className="c-footer_top">
					<div className="u-space-between">
						<a href="/" className="c-footer_logo">
							<img src={footerLogo} alt="footer-logo" />
						</a>
						<div className="c-footer_info">
							<p>267 Banbury Road Summertown Oxford.</p>
							<p>42 Upper Berkeley Street London.</p>
							<a href="/">+44 777888 989</a>
							<a href="/">hello@massimpressions.com</a>
						</div>
					</div>
					<ul className="c-nav">
						<li className="c-nav_item">
							<a href="/">Home</a>
						</li>
						<li className="c-nav_item">
							<a href="/">About</a>
						</li>
						<li className="c-nav_item">
							<a href="/">Services</a>
						</li>
						<li className="c-nav_item">
							<a href="/">Investments</a>
						</li>
						<li className="c-nav_item">
							<a href="/">Blog</a>
						</li>
						<li className="c-nav_item">
							<a href="/">Contact</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="c-line"></div>
			<div className="o-container">
				<div className="c-footer_bottom">
					<p className="c-copyright">
						© 2017 Mass Impressions & Tranmautritam. Make the right impression |
						| <a href="/">Privacy Policy</a>
					</p>
					<div className="c-social_nets">
						<a href="/">
							<i className="fa-brands fa-facebook-f"></i>
						</a>
						<a href="/">
							<i className="fa-brands fa-twitter"></i>
						</a>
						<a href="/">
							<i className="fa-brands fa-google-plus-g"></i>
						</a>
						<a href="/">
							<i className="fa-brands fa-instagram"></i>
						</a>
						<a href="/">
							<i className="fa-brands fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
