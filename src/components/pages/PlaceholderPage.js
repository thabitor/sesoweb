import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import PageTitle from "../Pagetitle";
import Footer from "../Footer";
import Scrollbar from "../Scrollbar";
import publicationsContent from "../../content/publications.json";
import newsContent from "../../content/news.json";

const pageContent = {
  publications: publicationsContent,
  news: newsContent,
};

function getLocalizedValue(value, language) {
  if (typeof value === "string") {
    return value;
  }
  return value?.[language] || value?.fr || "";
}

function getLanguage(language) {
  return language?.split("-")[0] || "fr";
}

function getContent(pageKey) {
  return pageContent[pageKey] || pageContent.publications;
}

function PublicationsPreview({ content, language }) {
  return (
    <div className="resource-preview-grid">
      {content.resources.map((item, index) => (
        <article className={`resource-card ${index === 0 ? "featured" : ""}`} key={getLocalizedValue(item.title, language)}>
          <div className="resource-card-icon">
            <i className={index === 0 ? "fa fa-file-text-o" : "fa fa-folder-open-o"} aria-hidden="true"></i>
          </div>
          <div className="resource-card-body">
            <span>{getLocalizedValue(item.type, language)}</span>
            <h3>{getLocalizedValue(item.title, language)}</h3>
            <p>{getLocalizedValue(item.text, language)}</p>
            <div className="resource-card-meta">{getLocalizedValue(item.meta, language)}</div>
          </div>
        </article>
      ))}
    </div>
  );
}

function NewsPreview({ content, language }) {
  return (
    <div className="news-preview-grid">
      {content.posts.map((post) => (
        <article className="news-preview-card" key={getLocalizedValue(post.title, language)}>
          <div className="news-preview-image">
            <img src={post.image} alt="" />
            <span>{getLocalizedValue(post.category, language)}</span>
          </div>
          <div className="news-preview-body">
            <div className="news-preview-date">{getLocalizedValue(post.date, language)}</div>
            <h3>{getLocalizedValue(post.title, language)}</h3>
            <p>{getLocalizedValue(post.text, language)}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function PlaceholderPage({ pageKey }) {
  const { i18n } = useTranslation();
  const language = getLanguage(i18n.resolvedLanguage || i18n.language);
  const content = getContent(pageKey);
  const title = getLocalizedValue(content.title, language);

  return (
    <Fragment>
      <PageTitle
        pageTitle={title}
        pageTitlebg="bg-service"
        pagesub={title}
      />
      <section className={`section-padding preview-page preview-page-${pageKey}`}>
        <div className="container">
          <div className="wpo-section-title">
            <span>{getLocalizedValue(content.kicker, language)}</span>
            <h2>{title}</h2>
          </div>
          <p className="preview-page-intro">{getLocalizedValue(content.intro, language)}</p>
          {pageKey === "publications" ? (
            <PublicationsPreview content={content} language={language} />
          ) : (
            <NewsPreview content={content} language={language} />
          )}
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
}

export default PlaceholderPage;
