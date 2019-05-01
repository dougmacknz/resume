import React from "react";
import styled from "styled-components";
import SmoothScroll from "smooth-scroll";
import Gumshoe from "gumshoejs";
import WOW from "wow.js";

//import { pages } from "../content";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../pages/Nav/Nav";

// Pages
import Intro from "./Intro/Intro";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";
import History from "./History/History";
import Contact from "./Contact/Contact";

const pages = [
  {
    id: "intro",
    page: Intro,
    title: "Doug MacKenzie",
    subtitle: "Front End Engineer",
    navTitle: ""
  },
  {
    id: "about",
    page: About,
    title: "About",
    subtitle: "What I'm all about",
    navTitle: "About"
  },
  {
    id: "skills",
    page: Skills,
    title: "Skills",
    subtitle: "What I can do",
    navTitle: "Skills"
  },
  {
    id: "history",
    page: History,
    title: "History",
    subtitle: "My education and employment",
    navTitle: "History"
  },
  {
    id: "work",
    page: Work,
    title: "Portfolio",
    subtitle: "Examples of my work",
    navTitle: "Portfolio"
  },
  {
    id: "contact",
    page: Contact,
    title: "Contact",
    subtitle: "Get in touch",
    navTitle: "Contact"
  }
];

const IndexPage = () => {
  React.useEffect(() => {
    new SmoothScroll("a[data-smoothscroll]");
    new Gumshoe("a[data-scrollspy]");
    new WOW().init();

    // Listen for scrollspy callback and apply active class to <a> element
    document.addEventListener(
      "gumshoeActivate",
      event => event.target.querySelector("a").classList.add("active"),
      false
    );

    // Listen for scrollspy callback and remove active class from <a> element
    document.addEventListener(
      "gumshoeDeactivate",
      event => event.target.querySelector("a").classList.remove("active"),
      false
    );
  }, []);

  return (
    <Layout>
      <SEO keywords={[`web developer`, `portfolio`, "front-end", `react`]} />
      <Nav pages={pages} />
      <Content role="main">
        {pages.map(page => {
          const PageComponent = page.page;
          return <PageComponent key={page.id} pages={pages} {...page} />;
        })}
      </Content>
    </Layout>
  );
};

const Content = styled.main`
  width: 100%;
  transition: padding 0.2s;
  overflow: hidden;

  @media (min-width: 769px) {
    padding-left: 300px;
  }
`;

export default IndexPage;
