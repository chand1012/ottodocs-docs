import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { IconBrandGithub } from "@tabler/icons-react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            Get Started
          </Link>
          <Link
            className="button button--primary button--lg margin-left--sm"
            to="https://github.com/TimeSurgeLabs/ottodocs"
            target="_blank"
          >
            <IconBrandGithub
              style={{
                transform: "translateY(.25rem)",
              }}
            />{" "}
            Source Code
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`CLI tool for AI generated coding help.`}
      description="Generate docs, commit messages, commands, and more!"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
