import React, { Fragment, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageTitle from "../Pagetitle";
import Footer from "../Footer";
import Scrollbar from "../Scrollbar";

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function SearchPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";

  const searchItems = useMemo(() => {
    const serviceKeys = ["ssg", "dpi", "mena", "reab"];
    const servicePaths = {
      ssg: "/ssg",
      dpi: "/sdpi",
      mena: "/smena",
      reab: "/sreab",
    };

    const coreItems = [
      {
        title: "SESO",
        path: "/",
        excerpt: t("main.elements.heroSubtitle"),
        keywords: t("Search.keywords.home", { returnObjects: true }),
      },
      {
        title: t("main.header.navItems.AboutUs"),
        path: "/aboutus",
        excerpt: t("AboutUs.maintext.p1"),
        keywords: t("Search.keywords.about", { returnObjects: true }),
      },
      {
        title: t("main.header.navItems.OurServices"),
        path: "/services",
        excerpt: t("Search.excerpts.services"),
        keywords: t("Search.keywords.services", { returnObjects: true }),
      },
      {
        title: t("main.header.navItems.OurTeam"),
        path: "/ourteam",
        excerpt: t("Search.excerpts.team"),
        keywords: t("Search.keywords.team", { returnObjects: true }),
      },
      {
        title: t("main.header.navItems.OurPartners"),
        path: "/ourpartners",
        excerpt: t("Search.excerpts.partners"),
        keywords: t("Search.keywords.partners", { returnObjects: true }),
      },
      {
        title: t("main.header.navItems.Contact"),
        path: "/contact",
        excerpt: t("Contact.intro"),
        keywords: t("Search.keywords.contact", { returnObjects: true }),
      },
    ];

    const serviceItems = serviceKeys.map((key) => ({
      title: t(`ServicePage.${key}.title`),
      path: servicePaths[key],
      excerpt: t(`ServicePage.${key}.paragraphs`, { returnObjects: true })[0],
      keywords: t(`Search.keywords.${key}`, { returnObjects: true }),
    }));

    return [...coreItems, ...serviceItems];
  }, [t]);

  const results = useMemo(() => {
    if (!query) {
      return [];
    }

    const normalizedQuery = normalize(query);

    return searchItems.filter((item) => {
      const searchableText = [
        item.title,
        item.excerpt,
        ...(Array.isArray(item.keywords) ? item.keywords : []),
      ].join(" ");

      return normalize(searchableText).includes(normalizedQuery);
    });
  }, [query, searchItems]);

  return (
    <Fragment>
      <PageTitle pageTitle={t("Search.title")} pageTitlebg="bg-services" />
      <section className="search-page section-padding">
        <div className="container">
          <div className="search-page-intro">
            <span>{t("Search.kicker")}</span>
            <h2>
              {query
                ? t("Search.resultsFor", { query })
                : t("Search.emptyTitle")}
            </h2>
            <p>{t("Search.description")}</p>
          </div>

          {query && results.length > 0 && (
            <div className="search-results-list">
              {results.map((result) => (
                <Link className="search-result-card" to={result.path} key={result.path}>
                  <span>{result.path}</span>
                  <h3>{result.title}</h3>
                  <p>{result.excerpt}</p>
                  <strong>{t("Search.openResult")}</strong>
                </Link>
              ))}
            </div>
          )}

          {query && results.length === 0 && (
            <div className="search-empty-state">
              <h3>{t("Search.noResultsTitle")}</h3>
              <p>{t("Search.noResultsText")}</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
}

export default SearchPage;
