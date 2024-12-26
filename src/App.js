import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Classes from "./components/Classes";
import Events from "./components/Events";
import CalmChakra from "./components/CalmChakra.png";
import Instructors from "./components/Instructors";
import Account from "./components/Account";
import yogaImg from "./components/yogaImg.jpg";
import SignupwithGoogle from "./components/SignupwithGoogle";
import Login from "./components/Login";
import Next from "./components/Next";
import AccountCreated from "./components/AccountCreated";
import YogaAsans from "./components/YogaArticles";
import TransformativeStories from "./components/TransformativeStories";
import BookRecommendations from "./components/BookRecommendations";
import YogaArticles from "./components/YogaArticles";
import VideoLectures from "./components/VideoLectures";
import OnlineSessionsFirst from "./components/OnlineSessionsFirst";
import OnlineSessionsSecond from "./components/OnlineSessionsSecond";
import FreeWeeklySessiosn from "./components/FreeWeeklySessions";
import PersonalGuided from "./components/PersonalGuided";
import Register from "./components/Register";

function Main() {
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
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
			<br />
			<div className="container">
				<img src={yogaImg} className="yoga-img" alt="Yoga-Image" />
				<div className="text-content">
					<h1 className="main-text-head">Find your flow</h1>
					<br />
					<p>
						Yoga is a beautiful journey that harmonizes the body, mind, and
						spirit, offering a sanctuary where you can discover your true self.
						With each gentle stretch and mindful breath, yoga invites you to
						cultivate inner peace and resilience, allowing the worries of daily
						life to melt away. It’s more than just a practice; it’s a pathway to
						self-discovery and personal growth. Whether you're seeking physical
						strength, mental clarity, or emotional balance, yoga provides the
						tools to enhance your overall well-being. Embrace this
						transformative journey and let the soothing flow of yoga guide you
						towards a life filled with joy, serenity, and connection. Join us on
						the mat, and let’s embark on this uplifting adventure together!
					</p>
					<br />
					<br />
				</div>
			</div>
			<br />
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

export default function App({ children }) {
	return (
		<>
			<Router>
				<Routes>
					<Route element={<Main />} path="/" />
					<Route element={<About />} path="/about" />
					<Route element={<Events />} path="/events" />
					<Route element={<Classes />} path="/classes" />
					<Route element={<Instructors />} path="/instructors" />
					<Route element={<Blog />} path="/blog" />
					<Route element={<Account />} path="/account" />
					<Route element={<SignupwithGoogle />} path="/signupwithgoogle" />
					<Route element={<Login />} path="/login" />
					<Route element={<Next />} path="/next" />
					<Route element={<AccountCreated />} path="/accountcreated"></Route>
					<Route element={<YogaAsans />} path="/yogaAsansblog"></Route>
					<Route
						element={<TransformativeStories />}
						path="/transformativeStoriesblog"></Route>
					<Route
						element={<BookRecommendations />}
						path="/bookRecommendationsblog"></Route>
					<Route element={<YogaArticles />} path="/yogaArticlesblog"></Route>

					<Route
						element={<FreeWeeklySessiosn />}
						path="/freeweeklysessions"></Route>
					<Route
						element={<OnlineSessionsFirst />}
						path="/onlinesessionsfirst"></Route>
					<Route
						element={<OnlineSessionsSecond />}
						path="/onlinesessionssecond"></Route>
					<Route element={<PersonalGuided />} path="/personal"></Route>
					<Route element={<VideoLectures />} path="/videolectures"></Route>
					<Route element={<Register />} path="/confirm"></Route>
				</Routes>
			</Router>
		</>
	);
}
