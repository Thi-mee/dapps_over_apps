import React, { useEffect } from "react";

const Page = ({ children, className="", ...rest }) => {
  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])

  return <div {...rest} className={`${className} fixctn`}>{children}</div>;
};

export default Page;
