import React from "react";

const Container = (props: { children: JSX.Element; className?: string }) => {
  const { children, className } = props;
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
