import burger from "./images/icon-hamburger.svg";
import close from "./images/icon-close.svg";
import intro from "./images/illustration-intro.svg";
import avatar1 from "./images/avatar-anisha.png";
import avatar2 from "./images/avatar-ali.png";
import avatar3 from "./images/avatar-richard.png";
import avatar4 from "./images/avatar-shanai.png";
import { useEffect, useState } from "react";
import "./manage.css";

export default function Manage() {
  useEffect(() => {
    document.title = "Manage landing";
  }, []);

  return (
    <div className="Manage overflow-hidden">
      <div className="container p-4">
        <Header></Header>
        <Main></Main>
      </div>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  const [icon, setIcon] = useState(burger);
  const changeIcon = () => {
    if (icon === burger) {
      setIcon(close);
    } else {
      setIcon(burger);
    }
  };

  return (
    <header className="mb-4">
      <nav className="navbar justify-content-between">
        <div className="col-auto order-1">
          <a href="/react/manage" className="navbar-brand me-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="24">
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#242D52"
                  fillRule="nonzero"
                  d="M40.014 16.809V8.553c0-1.577.366-2.82 1.098-3.73.733-.91 1.65-1.365 2.75-1.365 2.158 0 3.237 1.577 3.237 4.731v8.62h3.782v-9.58c0-2.415-.5-4.22-1.503-5.417C48.376.615 46.945.017 45.084.017c-1.222 0-2.34.234-3.352.703a6.833 6.833 0 00-2.56 2.043h-.066C38.126.932 36.486.017 34.184.017c-.969 0-1.902.217-2.799.653a6.976 6.976 0 00-2.353 1.878h-.05V.265H25.2v16.527h3.782V8.553c0-1.577.372-2.82 1.115-3.73.743-.91 1.693-1.365 2.849-1.365 2.19 0 3.286 1.577 3.286 4.731v8.62h3.782zm21.101.248c2.246 0 3.997-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C64.93.761 63.23.017 61.082.017a7.76 7.76 0 00-5.681 2.415c-.705.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.611 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.669 2.68a7.348 7.348 0 002.535 1.696 8.325 8.325 0 003.18.604zm.595-3.441c-1.399 0-2.538-.466-3.419-1.398-.88-.932-1.321-2.132-1.321-3.599 0-1.555.454-2.804 1.362-3.747.909-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.345 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.909.932-2.018 1.398-3.328 1.398zm27.112 3.193V7.064c0-2.393-.536-4.166-1.61-5.319C86.14.593 84.655.017 82.762.017a7.373 7.373 0 00-3.056.645 6.958 6.958 0 00-2.477 1.87h-.05V.264h-3.782v16.527h3.782V8.487c0-1.588.388-2.823 1.164-3.706.777-.882 1.814-1.323 3.113-1.323.595 0 1.104.077 1.528.231.424.155.796.406 1.115.753.32.348.556.819.71 1.415.154.595.231 1.323.231 2.183v8.769h3.782zm10.218.248c2.246 0 3.996-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C102.855.761 101.154.017 99.007.017a7.76 7.76 0 00-5.682 2.415c-.704.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.61 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.668 2.68a7.348 7.348 0 002.536 1.696 8.325 8.325 0 003.179.604zm.594-3.441c-1.398 0-2.538-.466-3.418-1.398-.881-.932-1.322-2.132-1.322-3.599 0-1.555.455-2.804 1.363-3.747.908-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.344 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.908.932-2.018 1.398-3.328 1.398zm19.07 10.125c1.2 0 2.274-.14 3.22-.422.947-.281 1.743-.673 2.387-1.175a6.385 6.385 0 001.602-1.844 8.14 8.14 0 00.916-2.383c.188-.86.281-1.803.281-2.829V.265h-3.782v1.737h-.066a7.059 7.059 0 00-2.353-1.49A7.62 7.62 0 00118.142 0c-1.508 0-2.862.358-4.062 1.075-1.2.717-2.134 1.713-2.8 2.987-.666 1.273-.999 2.705-.999 4.293 0 1.61.35 3.038 1.049 4.285.699 1.246 1.66 2.203 2.882 2.87 1.222.667 2.598 1.001 4.129 1.001 2.047 0 3.716-.673 5.004-2.018h.066v1.753c0 1.17-.43 2.14-1.288 2.912-.86.772-2.07 1.158-3.634 1.158-1.068 0-2.006-.132-2.816-.397-.809-.265-1.742-.678-2.799-1.24l-.892 3.341c.925.552 1.966.976 3.122 1.274 1.156.298 2.356.447 3.6.447zm.132-10.72c-1.365 0-2.491-.434-3.377-1.3-.887-.865-1.33-2.026-1.33-3.482 0-1.4.435-2.542 1.305-3.425.87-.882 2.004-1.323 3.402-1.323 1.332 0 2.442.435 3.328 1.307.886.871 1.33 2.002 1.33 3.391 0 1.401-.433 2.556-1.297 3.466-.864.91-1.985 1.365-3.361 1.365zm19.086 4.036c1.542 0 2.899-.281 4.071-.844 1.173-.562 2.133-1.323 2.882-2.283l-2.642-2.266c-1.035 1.301-2.406 1.952-4.113 1.952-1.21 0-2.237-.337-3.08-1.01-.842-.672-1.384-1.593-1.627-2.762h12.024c.066-.397.099-.9.099-1.506 0-1.599-.325-3.027-.975-4.285a7.198 7.198 0 00-2.807-2.961c-1.222-.717-2.632-1.075-4.228-1.075a8.191 8.191 0 00-3.188.62c-.99.414-1.844.99-2.56 1.729-.715.739-1.277 1.638-1.684 2.696-.407 1.06-.611 2.212-.611 3.458 0 1.688.369 3.185 1.106 4.492.738 1.307 1.746 2.308 3.023 3.003 1.277.695 2.714 1.042 4.31 1.042zm3.815-10.274h-8.257c.264-1.059.776-1.878 1.535-2.457.76-.579 1.663-.868 2.709-.868 1.057 0 1.93.298 2.618.893.688.596 1.153 1.406 1.395 2.432z"
                />
                <g fill="#F3603C">
                  <path d="M2.786 10.286c1.538 0 2.785 1.279 2.785 2.857C5.571 14.72 4.324 16 2.786 16 1.247 16 0 14.72 0 13.143c0-1.578 1.247-2.857 2.786-2.857zM2.786 0C4.324 0 5.57 1.28 5.57 2.857c0 1.578-1.247 2.857-2.785 2.857C1.247 5.714 0 4.435 0 2.857 0 1.28 1.247 0 2.786 0zm10.028 0C14.353 0 15.6 1.28 15.6 2.857c0 1.578-1.247 2.857-2.786 2.857-1.538 0-2.785-1.279-2.785-2.857C10.029 1.28 11.276 0 12.814 0z" />
                  <ellipse cx="12.814" cy="13.257" opacity=".5" rx="2.786" ry="2.857" />
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div
          id="links"
          className="col-12 col-sm-auto d-sm-flex text-center order-3 order-sm-2 collapse"
          style={{ color: "hsl(228, 39%, 23%)", fontWeight: "500" }}
        >
          <div className="col-auto">
            <a href="#" className="list-group-item">
              Pricing
            </a>
          </div>
          <div className="col-auto">
            <a href="#" className="list-group-item">
              Product
            </a>
          </div>
          <div className="col-auto">
            <a href="#" className="list-group-item">
              About Us
            </a>
          </div>
          <div className="col-auto">
            <a href="#" className="list-group-item">
              Careers
            </a>
          </div>
          <div className="col-auto">
            <a href="#" className="list-group-item">
              Community
            </a>
          </div>
        </div>
        <div className="col-auto order-2 order-sm-3">
          <button className="btn btn-nav d-none d-sm-block">Get Started</button>
          <button
            onClick={changeIcon}
            id="collapser"
            className="btn d-sm-none px-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#links"
            aria-expanded="false"
            aria-controls="links"
            style={{ boxShadow: "none" }}
          >
            <img src={icon} alt="Menu wrapper icon"></img>
          </button>
        </div>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <div className="row gap-5 justify-content-center">
        <div className="row gap-5 gap-sm-0 px-0">
          <div className="col-12 col-sm-6 order-sm-1">
            <img className="img-fluid" src={intro} alt="Illustration about software"></img>
          </div>
          <div className="col-12 col-sm-6 text-center text-sm-start">
            <h1>Bring everyone together to build better products.</h1>
            <p className="px-4 px-sm-0">
              Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in
              view.
            </p>
            <button className="btn mt-3">Get Started</button>
          </div>
        </div>
        <div className="row gap-5 gap-sm-0 px-0">
          <div className="col-12 col-sm-6 text-center text-sm-start">
            <h1>What's different about Manage?</h1>
            <p className="px-2 px-sm-0 mb-4">
              Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made
              for modern digital product teams.
            </p>
          </div>
          <div className="col-12 col-sm-6 text-start">
            <div id="benefit-1">
              <div className="benefit-header">
                <div className="ribbon d-sm-none"></div>
                <h6 className="d-flex">
                  <span className="number">01</span>
                  <span className="my-auto">Track company-wide progress</span>
                </h6>
              </div>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone
                level all the way done to the smallest of details. Never lose sight of the bigger picture again.
              </p>
            </div>
            <div id="benefit-2" className="my-5">
              <div className="benefit-header">
                <div className="ribbon d-sm-none"></div>
                <h6 className="d-flex">
                  <span className="number">02</span>
                  <span className="my-auto">Advanced built-in reports</span>
                </h6>
              </div>
              <p>
                Set internal delivery estimates and track progress toward company goals. Our customisable dashboard
                helps you build out the reports you need to keep key stakeholders informed.
              </p>
            </div>
            <div id="benefit-3">
              <div className="benefit-header">
                <div className="ribbon d-sm-none"></div>
                <h6 className="d-flex">
                  <span className="number">03</span>
                  <span className="my-auto">Everything you need in one place</span>
                </h6>
              </div>
              <p>
                Stop jumping from one service to another to communicate, store files, track tasks and share documents.
                Manage offers an all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
        <div className="row gap-5 gap-sm-0 px-0 justify-content-center text-center">
          <h1 className="mb-sm-5">What they've said</h1>
          <div className="row gap-5 justify-content-center">
            <div id="review-1" className="col-12 col-sm-10 col-lg">
              <img src={avatar1} width="75px" alt="Customer avatar"></img>
              <h6 className="mt-4 mb-3">Anisha Li</h6>
              <p className="mb-0">
                “Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at
                all times keeps everyone motivated.”
              </p>
            </div>
            <div id="review-2" className="col-12 col-sm-10 col-lg">
              <img src={avatar2} width="75px" alt="Customer avatar"></img>
              <h6 className="mt-4 mb-3">Ali Bravo</h6>
              <p className="mb-0">
                “We have been able to cancel so many other subscriptions since using Manage. There is no more
                cross-channel confusion and everyone is much more focused.”
              </p>
            </div>
            <div id="review-3" className="col-12 col-sm-10 col-lg">
              <img src={avatar3} width="75px" alt="Customer avatar"></img>
              <h6 className="mt-4 mb-3">Richard Watts</h6>
              <p className="mb-0">
                “Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop
                recommending them to everyone I talk to!”
              </p>
            </div>
            <div id="review-4" className="col-12 col-sm-10 col-lg">
              <img src={avatar4} width="75px" alt="Customer avatar"></img>
              <h6 className="mt-4 mb-3">Shanai Gough</h6>
              <p className="mb-0">
                “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the
                whole team in-sync without being intrusive.”
              </p>
            </div>
          </div>
          <div>
            <button className="btn mt-sm-5">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}

function Banner() {
  return (
    <div className="banner">
      <div className="row h-100 justify-content-center">
        <div className="col-11 col-sm-5 d-flex justify-content-center justify-content-sm-start align-items-end align-items-sm-center">
          <div className="text-center text-sm-start" style={{ height: "fit-content" }}>
            <h1 className="text-light mb-0">Simplify how your team works today.</h1>
          </div>
        </div>
        <div className="col-12 col-sm-5 d-flex justify-content-center justify-content-sm-end">
          <div className="mt-5 my-sm-auto">
            <button className="btn btn-banner">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const [first, setFirst] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const input = document.querySelector("#form-input");

    input.classList.remove("is-invalid", "is-valid");

    if (first === null || !first.match(mailformat)) {
      input.classList.add("is-invalid");
    } else {
      input.classList.add("is-valid");
    }
  };

  return (
    <footer>
      <div className="row justify-content-evenly gap-5 gap-sm-0 py-4">
        <div className="col-12 col-sm-4 col-lg-4 order-sm-3 my-auto">
          <div className="row gap-sm-5 subscription">
            <form
              className="d-flex ps-0 justify-content-center justify-content-sm-end"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                id="form-input"
                className="form-control"
                placeholder="Updates in your inbox"
                onChange={(event) => setFirst(event.target.value)}
                required
              ></input>
              <span className="valid-feedback">Subscribed to our newsletter</span>
              <span className="invalid-feedback">Please enter a valid email</span>
              <button type="submit" className="btn">
                GO
              </button>
            </form>
            <span className="d-none d-sm-inline text-end text-muted" style={{ fontSize: ".75rem" }}>
              Copyright 2020. All Rights Reserved
            </span>
          </div>
        </div>
        <div className="col-12 col-sm-3 col-lg-3 d-flex order-sm-2 justify-content-evenly justify-content-sm-between">
          <ul className="footer-links list-unstyled">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <ul className="footer-links list-unstyled">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-3 col-lg-3 order-sm-1 my-auto">
          <div className="row justify-content-start gap-5">
            <div className="col-12 col-sm-10 d-flex order-sm-2 justify-content-evenly">
              <a className="social" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path
                    fill="#FFF"
                    d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                  />
                </svg>
              </a>
              <a className="social" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                  <path
                    fill="#FFF"
                    d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"
                  />
                </svg>
              </a>
              <a className="social" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18">
                  <path
                    fill="#FFF"
                    d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"
                  />
                </svg>
              </a>
              <a className="social" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path
                    fill="#FFF"
                    d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"
                  />
                </svg>
              </a>
              <a className="social" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                  <path
                    fill="#FFF"
                    d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"
                  />
                </svg>
              </a>
            </div>
            <div className="col-12 col-sm-10 order-sm-1 text-center ps-xl-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="146" height="24">
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#fafafa"
                    fillRule="nonzero"
                    d="M40.014 16.809V8.553c0-1.577.366-2.82 1.098-3.73.733-.91 1.65-1.365 2.75-1.365 2.158 0 3.237 1.577 3.237 4.731v8.62h3.782v-9.58c0-2.415-.5-4.22-1.503-5.417C48.376.615 46.945.017 45.084.017c-1.222 0-2.34.234-3.352.703a6.833 6.833 0 00-2.56 2.043h-.066C38.126.932 36.486.017 34.184.017c-.969 0-1.902.217-2.799.653a6.976 6.976 0 00-2.353 1.878h-.05V.265H25.2v16.527h3.782V8.553c0-1.577.372-2.82 1.115-3.73.743-.91 1.693-1.365 2.849-1.365 2.19 0 3.286 1.577 3.286 4.731v8.62h3.782zm21.101.248c2.246 0 3.997-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C64.93.761 63.23.017 61.082.017a7.76 7.76 0 00-5.681 2.415c-.705.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.611 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.669 2.68a7.348 7.348 0 002.535 1.696 8.325 8.325 0 003.18.604zm.595-3.441c-1.399 0-2.538-.466-3.419-1.398-.88-.932-1.321-2.132-1.321-3.599 0-1.555.454-2.804 1.362-3.747.909-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.345 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.909.932-2.018 1.398-3.328 1.398zm27.112 3.193V7.064c0-2.393-.536-4.166-1.61-5.319C86.14.593 84.655.017 82.762.017a7.373 7.373 0 00-3.056.645 6.958 6.958 0 00-2.477 1.87h-.05V.264h-3.782v16.527h3.782V8.487c0-1.588.388-2.823 1.164-3.706.777-.882 1.814-1.323 3.113-1.323.595 0 1.104.077 1.528.231.424.155.796.406 1.115.753.32.348.556.819.71 1.415.154.595.231 1.323.231 2.183v8.769h3.782zm10.218.248c2.246 0 3.996-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C102.855.761 101.154.017 99.007.017a7.76 7.76 0 00-5.682 2.415c-.704.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.61 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.668 2.68a7.348 7.348 0 002.536 1.696 8.325 8.325 0 003.179.604zm.594-3.441c-1.398 0-2.538-.466-3.418-1.398-.881-.932-1.322-2.132-1.322-3.599 0-1.555.455-2.804 1.363-3.747.908-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.344 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.908.932-2.018 1.398-3.328 1.398zm19.07 10.125c1.2 0 2.274-.14 3.22-.422.947-.281 1.743-.673 2.387-1.175a6.385 6.385 0 001.602-1.844 8.14 8.14 0 00.916-2.383c.188-.86.281-1.803.281-2.829V.265h-3.782v1.737h-.066a7.059 7.059 0 00-2.353-1.49A7.62 7.62 0 00118.142 0c-1.508 0-2.862.358-4.062 1.075-1.2.717-2.134 1.713-2.8 2.987-.666 1.273-.999 2.705-.999 4.293 0 1.61.35 3.038 1.049 4.285.699 1.246 1.66 2.203 2.882 2.87 1.222.667 2.598 1.001 4.129 1.001 2.047 0 3.716-.673 5.004-2.018h.066v1.753c0 1.17-.43 2.14-1.288 2.912-.86.772-2.07 1.158-3.634 1.158-1.068 0-2.006-.132-2.816-.397-.809-.265-1.742-.678-2.799-1.24l-.892 3.341c.925.552 1.966.976 3.122 1.274 1.156.298 2.356.447 3.6.447zm.132-10.72c-1.365 0-2.491-.434-3.377-1.3-.887-.865-1.33-2.026-1.33-3.482 0-1.4.435-2.542 1.305-3.425.87-.882 2.004-1.323 3.402-1.323 1.332 0 2.442.435 3.328 1.307.886.871 1.33 2.002 1.33 3.391 0 1.401-.433 2.556-1.297 3.466-.864.91-1.985 1.365-3.361 1.365zm19.086 4.036c1.542 0 2.899-.281 4.071-.844 1.173-.562 2.133-1.323 2.882-2.283l-2.642-2.266c-1.035 1.301-2.406 1.952-4.113 1.952-1.21 0-2.237-.337-3.08-1.01-.842-.672-1.384-1.593-1.627-2.762h12.024c.066-.397.099-.9.099-1.506 0-1.599-.325-3.027-.975-4.285a7.198 7.198 0 00-2.807-2.961c-1.222-.717-2.632-1.075-4.228-1.075a8.191 8.191 0 00-3.188.62c-.99.414-1.844.99-2.56 1.729-.715.739-1.277 1.638-1.684 2.696-.407 1.06-.611 2.212-.611 3.458 0 1.688.369 3.185 1.106 4.492.738 1.307 1.746 2.308 3.023 3.003 1.277.695 2.714 1.042 4.31 1.042zm3.815-10.274h-8.257c.264-1.059.776-1.878 1.535-2.457.76-.579 1.663-.868 2.709-.868 1.057 0 1.93.298 2.618.893.688.596 1.153 1.406 1.395 2.432z"
                  />
                  <g fill="#F3603C">
                    <path d="M2.786 10.286c1.538 0 2.785 1.279 2.785 2.857C5.571 14.72 4.324 16 2.786 16 1.247 16 0 14.72 0 13.143c0-1.578 1.247-2.857 2.786-2.857zM2.786 0C4.324 0 5.57 1.28 5.57 2.857c0 1.578-1.247 2.857-2.785 2.857C1.247 5.714 0 4.435 0 2.857 0 1.28 1.247 0 2.786 0zm10.028 0C14.353 0 15.6 1.28 15.6 2.857c0 1.578-1.247 2.857-2.786 2.857-1.538 0-2.785-1.279-2.785-2.857C10.029 1.28 11.276 0 12.814 0z" />
                    <ellipse cx="12.814" cy="13.257" opacity=".5" rx="2.786" ry="2.857" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-12 d-sm-none text-center text-sm-end">
          <span className="text-muted" style={{ fontSize: ".75rem" }}>
            Copyright 2020. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}