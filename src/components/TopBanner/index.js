import { useRef, useLayoutEffect, useState } from "react";
import "./styles.module.css";

export default function TopBanner(props) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  const maxRadius = 80;
  const image = props.skill;
  const radiusToSet = height > maxRadius ? maxRadius : height * 0.5;

  const stylesObj = {
    color: "#ffff",
    backgroundColor: "#121212",
    padding: 12,
    height: "auto",
    borderRadius: 8,
    borderTopRightRadius: radiusToSet,
    borderBottomRightRadius: radiusToSet,
    marginBottom: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Center align horizontally
  };

  // Conditionally add margin to logo for right alignment
  if (width > 600 && image !== undefined) {
    stylesObj.marginRight = "auto";
  }

  // Conditionally render logo div based on screen width
  const renderLogo =
    width > 600 &&
    image !== undefined && (
      <div className="logo">
        <img
          src={require(`@site/static/img/${image}.png`).default}
          className="logo"
          alt="Logo"
        />
      </div>
    );

  return (
    <>
      <div ref={ref} className="shadow--tl container" style={stylesObj}>
        {renderLogo}
        <div className="everything">
          <div className="banner">
            <h1
              style={{
                fontSize: 48,
                fontFamily: "Arial",
                fontWeight: 100,
                fontVariant: "small-caps",
                letterSpacing: 4,
                marginBottom: "unset",
                display: "flex",
                alignItems: "center",
              }}
            >
              {props.title}
              <span style={{ fontSize: 24, verticalAlign: "top" }}></span>
            </h1>
          </div>
          <div
            className="revision"
            style={{
              fontSize: 15,
              fontFamily: "Arial",
              fontWeight: 100,
              letterSpacing: 4,
            }}
          >
            <div style={{ textAlign: "center" }}>
              {props.showofficial !== false && (
                <span style={{ color: "yellow", textShadow: "0 0 10px yellow" }}>
                  {props.offical}
                  &nbsp;&nbsp;&nbsp;
                </span>
              )}

              {props.showversion !== false && (
                <span style={{ color: "yellow", textShadow: "0 0 10px #3498db" }}>
                  Version: {props.version}
                </span>
              )}

              &nbsp;&nbsp;&nbsp;

              {props.showauthor !== false && (
                <span style={{ color: "yellow", textShadow: "0 0 10px #3498db" }}>
                  Author: {props.author}
                </span>
              )}
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
}
