import React from "react";
import { Link } from "react-router-dom";
import CalmChakra from "./CalmChakra.png";

export default function Classes() {
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "/8f2d56",
	};
	const Btn = {
		height: "7rem",
		width: "17rem",
		backgroundColor: "#1e96fc",
		border: "1rem solid #1e96fc",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "x-large",
		cursor: "pointer",
	};
	const content = {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: "5rem",
		padding: "5rem",
		fontFamily: "Times New Roman",
	};
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
								class="account-click-btn"
								type="submit"
								id="account-link-btn">
								Sign in
							</button>
						</Link>
					</div>
				</div>
			</nav>
			<div className="container">
				<div className="content" style={content}>
					<Link to="/freeweeklysessions">
						<button className="btn-class" style={Btn}>
							Free Weekly Session
						</button>
					</Link>
					<Link to="/onlinesessionsfirst">
						<button className="btn-class" style={Btn}>
							Online Session
						</button>
					</Link>
					<Link to="/onlinesessionssecond">
						<button className="btn-class" style={Btn}>
							Online Session
						</button>
					</Link>
					<Link to="/personal">
						<button className="btn-class" style={Btn}>
							Personal Guided Session
						</button>
					</Link>
					<Link to="/videolectures">
						<button className="btn-class" style={Btn}>
							Video Lectures
						</button>
					</Link>
				</div>
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
						<Link to="/" className="connect-links">
							LinkedIn &ensp;
						</Link>
						<Link to="/" className="connect-links">
							Instagram&ensp;
						</Link>
						<Link to="/" className="connect-links">
							Facebook&ensp;
						</Link>
						<br />
					</div>
				</footer>
			</div>
		</>
	);
}
