import React from "react";
import CalmChakra from "./CalmChakra.png";
import { Link } from "react-router-dom";

export default function Events() {
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#8f2d56",
	};
	const Btn = {
		cursor: "pointer",
		// marsginLeft: "5rem",
		width: "10rem",
		backgroundColor: "#1e96fc",
		border: "1rem solid #1e96fc",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "1.4rem",
		textAlign: "center",
	};
	const Card = {
		width: "26rem",
		backgroundColor: "#f4f4f4",
		border: "1px solid #ccc",
		borderRadius: "8px",
		padding: "20px",
		textAlign: "center",
		// width: "calc(50% - 20px)",
		boxShadow: "20px 20px 20px black",
	};
	const cards = {
		display: "flex",
		flexWrap: "wrap",
		gap: "5rem",
		justifyContent: "center",
		// maxWidth: "800px",
		margin: "0 auto",
	};
	const title = {
		fontWeight: "bolder",
		fontFamily: "Times New Roman",
		fontSize: "1.7rem",
		color: "#8f2d56",
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
			<br />
			<br />
			<div className="container">
				<div className="content" style={cards}>
					<div classname="card" style={Card}>
						<div className="card-body">
							<h5 className="card-title" style={title}>
								Sunrise Yoga Restart
							</h5>
							<br />
							<p className="card-text">
								Date: December 15, 2024
								<br />
								Time: 6:00 AM - 9:00 AM
								<br />
								Location: Green Valley Park
								<br />
								Description: Start your day with a refreshing outdoor yoga
								session as the sun rises. The retreat includes Hatha Yoga,
								Pranayama, and a guided meditation session.
								<br />
								Special: Complimentary herbal tea and breakfast
							</p>
							<Link to="/confirm" className="btn" style={Btn}>
								Register
							</Link>
						</div>
					</div>
					<div classname="card" style={Card}>
						<div className="card-body">
							<h5 className="card-title" style={title}>
								Family Yoga Day
							</h5>
							<br />
							<br />

							<p className="card-text">
								Date: January 15, 2025
								<br />
								Time: 10:00 AM - 12:00 PM
								<br /> Location: Community Hall
								<br />
								Description: A special yoga event for families! Explore partner
								yoga poses, fun breathing exercises, and activities suitable for
								all ages.
								<br /> Special: Free for kids under 12.
							</p>
							<br />

							<Link to="/confirm" className="btn" style={Btn}>
								Register
							</Link>
						</div>
					</div>
					<div classname="card" style={Card}>
						<div className="card-body">
							<h5 className="card-title" style={title}>
								Beginner's Yoga Bootcamp
							</h5>
							<p className="card-text">
								<br />
								Start Date: January 5, 2025
								<br /> Duration: 2 weeks (Monday, Wednesday, Friday)
								<br />
								Time: 7:00 PM - 8:30 PM
								<br />
								Location: Main Studio
								<br />
								Description: Learn the fundamentals of yoga in a fun and
								interactive environment. Perfect for beginners looking to build
								confidence and understand yoga basics.
							</p>
							<Link to="/confirm" className="btn" style={Btn}>
								Register
							</Link>
						</div>
					</div>
					<div classname="card" style={Card}>
						<div className="card-body">
							<h5 className="card-title" style={title}>
								Yoga for Stress Relif Workshop
							</h5>
							<br />
							<br />

							<p className="card-text">
								Date: December 20, 2024
								<br />
								Time: 5:30 PM - 7:30 PM
								<br />
								Location: Studio Room B
								<br />
								Description: A two-hour workshop focused on relaxation
								techniques, including Yin Yoga, mindfulness, and breathing
								exercises to reduce stress.
								<br />
								Fee: $20 per person
							</p>
							<Link to="/confirm" className="btn" style={Btn}>
								Register
							</Link>
						</div>
					</div>
					<div classname="card" style={Card}>
						<div className="card-body">
							<h5 className="card-title" style={title}>
								Past Highlights
							</h5>
							<p className="card-text">
								<br />
								November 2024: Yoga & Sound Healing Retreat – A beautiful fusion
								of yoga and sound therapy.
								<br />
								October 2024: Glow Yoga Night – A Vinyasa flow session under
								neon lights.
							</p>
							i
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
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
