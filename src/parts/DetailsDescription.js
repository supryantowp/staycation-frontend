import React from "react";

import ReactHtmlParser from "react-html-parser";

export default function DetailsDescription({ data }) {
  return (
    <div>
      <main>
        <h4>About the place</h4>
        {ReactHtmlParser(data.description)}
        <div className="row" style={{ marginTop: 30 }}>
          {data.features.map((item, index) => {
            return (
              <div
                key={`feature-${index}`}
                className="col-3"
                style={{ marginBottom: 20 }}
              >
                <img
                  width="38"
                  className="d-block mb-2"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <span>{item.qty}</span>
                <span className="text-gray-500 font-weight-light">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
