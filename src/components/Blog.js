import React from "react";
import { Link } from "react-router-dom";
import CalmChakra from "./CalmChakra.png";
import yogaAsans from "./yogaAsans.jpg";
import transformative from "./transformative.jpg";
import yogaBooks from "./yogaBooks.jpg";
import yogaArticles from "./yogaArticles.jpg";

export default function Blog() {
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#8f2d56",
	};
	const content = {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: "6rem",
		padding: "20px",
		color: "#8f2d56",
	};
	const img = {
		height: "15rem",
		objectFit: "cover",
	};
	const card = {
		width: "25rem",
		height: "26rem",
		color: "#8f2d56",
	};
	const btn = {
		height: "3rem",
		width: "10rem",
		marginLeft: "5rem",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: "large",
	};
	const head = {
		fontWeight: "bold",
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
					</div>
				</div>
			</nav>
			<br />
			<br />
			<br />
			<div className="container">
				<div className="content" style={content}>
					<div class="card" style={card}>
						<img src={yogaAsans} alt="..." style={img} />
						<div class="card-body">
							<h4 class="card-title" style={head}>
								Yoga Asans
							</h4>
							<p class="card-text">
								Articles on beginner to advanced yoga asans like vrksasan,
								trikonasan and balasan.
							</p>
							<br />
							<Link to="/" class="btn btn-primary" style={btn}>
								View article
							</Link>
						</div>
					</div>

					<div class="card" style={card}>
						<img
							src={transformative}
							class="card-img-top"
							alt="..."
							style={img}
						/>
						<div class="card-body">
							<h4 class="card-title" style={head}>
								Transformation Stories
							</h4>
							<p class="card-text">
								Articles on real-life stories of people overcoming mental health
								challenges to help readers feel connected and inspired.
							</p>
							<Link
								to="/transformativeStoriesblog"
								class="btn btn-primary"
								style={btn}>
								View article
							</Link>
						</div>
					</div>
					<div class="card" style={card}>
						<img src={yogaBooks} class="card-img-top" alt="..." style={img} />
						<div class="card-body">
							<h4 class="card-title" style={head}>
								Book Recommendations
							</h4>
							<p class="card-text">
								Summaries and reviews of books focused on mental health,
								mindfulness and self-improvement.
							</p>
							<Link
								to="/bookRecommendationsblog"
								class="btn btn-primary"
								style={btn}>
								View article
							</Link>
						</div>
					</div>
					<div class="card" style={card}>
						<img
							src={yogaArticles}
							class="card-img-top"
							alt="..."
							style={img}
						/>
						<div class="card-body">
							<h4 class="card-title" style={head}>
								Yoga Articles
							</h4>
							<p class="card-text">
								Articles on how yoga, physical health and mental wellness are
								interconnected covering topics like nutrition, sleep and stress
								relief.
							</p>
							<Link
								to="/yogaArticlesblog"
								className="btn btn-primary"
								style={btn}>
								View article
							</Link>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<div className="footer">
				<footer>
					<h4 className="footer-content">
						With ❤️ from
						<Link to="/" className="async" style={Async}>
							<img src={CalmChakra} className="logoimg" alt="logo" />
						</Link>
					</h4>
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
