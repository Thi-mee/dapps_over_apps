import React, { useEffect } from "react";

const Page = ({ children, ...rest }) => {
  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])

  return <div {...rest} className="fixctn">{children}</div>;
};

export default Page;
