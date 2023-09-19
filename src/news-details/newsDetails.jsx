import React from "react";
import {connect} from "react-redux";
import "./newsDetails.scss";

const NewsDetails = ({selectedNews}) => {
  if (!selectedNews) {
    return <div>No news selected.</div>;
  }

  return (
    <div className="description-container">
      <div className="description-glavni">
        <h2>{selectedNews.title}</h2>
        <img src={selectedNews.imagePath} />
        <p>{selectedNews.description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedNews: state.news.selectedNews,
  };
};

export default connect(mapStateToProps)(NewsDetails);
