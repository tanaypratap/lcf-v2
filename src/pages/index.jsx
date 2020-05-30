import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <> Easy to Use </>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <> Focus on What Matters </>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we & apos; ll do the
        chores.Go ahead and move your docs into the <code> docs </code>
        directory.
      </>
    ),
  },
  {
    title: <> Powered by React </>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React.Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3> {title} </h3> <p> {description} </p>
    </div>
  );
}

// TODO: Add a section that the approach is more hands-on and practical,
// you create and host your projects.
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title"> {siteConfig.title} </h1>
          <p className="hero__subtitle"> {siteConfig.tagline} </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("courses/")}
            >
              Start Learning
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section style={{ padding: "6rem" }} className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className="text--center">
                  <img
                    className={styles.sectionImage}
                    src={"img/community.svg"}
                    alt={""}
                  />
                </div>
              </div>
              <div className={classnames(styles.sectionText, "col col--6")}>
                <div>
                  <h2> a community to belong</h2>
                  <p>
                    got stuck while doing a course, don't know where to ask?
                    here you have a community of 1000s of students doing the
                    same course. Opportunity to make friends amongst like minded
                    people.
                  </p>

                  <div>
                    <a
                      className={classnames(
                        "button button--outline button--secondary button--lg"
                      )}
                      href="https://discord.gg/8kxPPYK"
                    >
                      Join the Discord Community
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <hr />
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )} */}
      </main>
    </Layout>
  );
}

export default Home;
