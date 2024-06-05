import React from "react";
import { Wrapper, ContentTopInner, ContentMid } from "./section.style";
import Link from "next/link";

function NuclearMedicine({ arrow, data }) {
  return (
    <>
      <Wrapper>
        <ContentTopInner>
          <h1 className="headings">{data?.Title}</h1>
        </ContentTopInner>

        <ContentMid>
          {data.Buttons.map((button, index) => (
            <div key={index}>
              <Link
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                href={button?.url}
              >
                <button
                  style={{ cursor: "pointer", zIndex: "999" }}
                  className={button?.name === "Order" ? "center" : "left"}
                >
                  {button?.name}
                </button>
              </Link>
            </div>
          ))}
        </ContentMid>
      </Wrapper>
    </>
  );
}

export default NuclearMedicine;
