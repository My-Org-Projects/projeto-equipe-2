import React, { ReactNode } from "react";

type TemplateProps = {
  _children: any;
};

const Template = ({ _children }: TemplateProps) => {
  return (
    <div>
      <div>{_children}</div>
      <span>Template</span>
    </div>
  );
};

export default Template;
