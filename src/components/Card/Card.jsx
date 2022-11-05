import React from "react";
import "./Card.css";
function Card({
  children,
  title,
  logo,
  alt,
  titlePadding,
  logoSideLength,
  width,
  height,
  backgroundColor,
  color,
  className,
  onClick,
}) {
  const paddingLeft = titlePadding ? parseInt(logoSideLength) + 10 : null;
  return (
    <div
      className={`card ${className}`}
      style={{ width, height, backgroundColor, color }}
      onClick={onClick}
    >
      <div className="card-header">
        {logo && (
          <img
            alt={alt}
            width={logoSideLength}
            className="card-logo"
            src={logo}
          />
        )}
        <h3 style={{ paddingLeft: paddingLeft + "px" }}>{title}</h3>
      </div>
      {children && <div className="card-body">{children}</div>}
    </div>
  );
}

export default Card;
