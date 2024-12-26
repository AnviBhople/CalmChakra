import React from "react";
import { Link } from "react-router-dom";
import CalmChakra from "./CalmChakra.png";

const VideoLectures = () => {
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#8f2d56",
	};

	const yogaVideosStyle = {
		maxWidth: "800px",
		margin: "2rem auto",
		padding: "2rem",
		backgroundColor: "#f9f9f9",
		borderRadius: "10px",
		boxShadow: "20px 20px 20px black",
		marginTop: "3rem",
		marginBottom: "3rem",
	};

	const headerStyle = {
		fontSize: "2rem",
		color: "#8f2d56",
		textAlign: "center",
		marginBottom: "1.5rem",
	};

	const categoryHeaderStyle = {
		fontSize: "1.5rem",
		color: "#8f2d56",
		marginTop: "1.5rem",
		borderBottom: "2px solid #8f2d56",
		paddingBottom: "0.5rem",
	};

	const videoItemStyle = {
		margin: "1rem 0",
		padding: "1rem",
		backgroundColor: "#fff",
		borderRadius: "8px",
		border: "1px solid #ddd",
		boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
		transition: "transform 0.3s ease",
	};

	const videoTitleStyle = {
		fontSize: "1.2rem",
		color: "#333",
		marginBottom: "0.5rem",
	};

	const videoDescriptionStyle = {
		fontSize: "1rem",
		color: "#555",
		marginBottom: "0.5rem",
	};

	const videoLinkStyle = {
		color: "#8f2d56",
		fontWeight: "bold",
		textDecoration: "none",
		fontSize: "1rem",
	};

	const connectLinksStyle = {
		color: "#8f2d56",
		fontWeight: "bold",
		textDecoration: "none",
	};

	const VideoItem = ({ title, description, link }) => (
		<div style={videoItemStyle}>
			<h4 style={videoTitleStyle}>{title}</h4>
			<p style={videoDescriptionStyle}>{description}</p>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				style={videoLinkStyle}>
				Watch on YouTube
			</a>
		</div>
	);

	return (
		<>
			<nav className="navbar navbar-expand-lg custom-navbar">
				<div className="container-fluid">
					<Link className="logo-img" to="/">
						<img src={CalmChakra} className="logoimg" alt="LogoImg" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="/navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" to="/about" id="about-link">
									&ensp;&ensp;About&ensp;
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/blog" id="blog-link">
									&ensp;Blog&ensp;
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/classes" id="classes-link">
									&ensp;Classes&ensp;
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/events" id="events-link">
									&ensp;Events&ensp;
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/instructors"
									id="instructors-link">
									&ensp;Instructors&ensp;
								</Link>
							</li>
						</ul>
						<Link to="/account">
							<button
								className="account-click-btn"
								type="submit"
								id="account-link-btn">
								Sign in
							</button>
						</Link>
					</div>
				</div>
			</nav>

			<div style={yogaVideosStyle}>
				<h2 style={headerStyle}>Yoga Video Lectures</h2>
				<section>
					<h3 style={categoryHeaderStyle}>Levels</h3>
					<div className="category">
						<h4 style={categoryHeaderStyle}>Beginner</h4>
						<VideoItem
							title="Beginner Yoga Flow"
							description="A gentle, beginner-friendly yoga flow."
							link="https://www.youtube.com/playlist?list=PLe1px9-uNQToJhrFIBpVsviZMABuLE5x8"
						/>
						<VideoItem
							title="Intro to Meditation"
							description="Learn basic meditation techniques."
							link="https://www.youtube.com/watch?v=U9YKY7fdwyg"
						/>
					</div>
					<div className="category">
						<h4 style={categoryHeaderStyle}>Intermediate</h4>
						<VideoItem
							title="Intermediate Vinyasa Flow"
							description="A moderate intensity Vinyasa class."
							link="https://www.youtube.com/watch?v=_LvGTQ3Aq-g"
						/>
					</div>
					<div className="category">
						<h4 style={categoryHeaderStyle}>Advanced</h4>
						<VideoItem
							title="Advanced Power Yoga"
							description="Challenge yourself with Power Yoga."
							link="https://www.youtube.com/watch?v=NZ_H-YLGUhE"
						/>
					</div>
				</section>
			</div>

			<div className="footer">
				<footer>
					<h3 className="footer-content">
						With ❤️ from
						<Link to="/" className="async" style={Async}>
							<img src={CalmChakra} className="logoimg" alt="logo" />
						</Link>
					</h3>
					<div className="connect">
						<p className="para-connect">Connect with us</p>
						<Link to="/" style={connectLinksStyle}>
							LinkedIn &ensp;
						</Link>
						<Link to="/" style={connectLinksStyle}>
							Instagram&ensp;
						</Link>
						<Link to="/" style={connectLinksStyle}>
							Facebook&ensp;
						</Link>
						<br />
					</div>
				</footer>
			</div>
		</>
	);
};

export default VideoLectures;
