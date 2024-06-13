/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const Accordion = ({
  data,
  label = "",
  defaultActiveIndex = -1,
}: {
  data: any;
  label: string;
  defaultActiveIndex?: any;
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <div className="accordion">
      <h3 className="accordion__title label">{label || ""}</h3>
      {data?.length > 0 &&
        data?.map((item: any, index: number) => {
          const { id, title, content } = item || {};
          return (
            <div
              key={id + index}
              className={`accordion__content ${
                activeIndex === index ? "active" : ""
              } `}
            >
              <div
                className="accordion__content-title"
                onClick={() =>
                  setActiveIndex(index === activeIndex ? -1 : index)
                }
              >
                <h4>
                  <strong>{title || ""}</strong>
                </h4>
              </div>

              {typeof content === "object" ? (
                content?.map((item: any) => {
                  return (
                    <div
                      className="accordion__content-text"
                      style={{
                        padding: "15px",
                        display: activeIndex === index ? "block" : "none",
                      }}
                    >
                      {item || ""}
                    </div>
                  );
                })
              ) : (
                <div
                  className="accordion__content-text"
                  style={{
                    display: activeIndex === index ? "block" : "none",
                  }}
                >
                  {content || ""}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Accordion;
