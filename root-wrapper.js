import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./src/components/CodeBlock";
import CTA_ImageOnly from "./src/components/Call-To-Actions/CTA_ImageOnly";
import CTA_FullWidth from "./src/components/Call-To-Actions/CTA_FullWidth";
import CTA_Bottom from "./src/components/Call-To-Actions/CTA_Bottom";
import { ContextWrapper } from "./context-wrapper";

// Custom image component for better CLS scores
const OptimizedImage = (props) => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <img
        {...props}
        width={props.width || "100%"}
        height={props.height || "auto"}
        style={{
          objectFit: props.objectFit || "contain",
          margin: "20px 0px",
          ...props.style,
        }}
        loading="lazy"
        alt={props.alt || "Blog content image"}
      />
    </div>
  );
};

const components = {
  pre: ({ children }) => {
    const codeProps = children?.props;
    if (codeProps) {
      return (
        <Code
          codeString={
            typeof codeProps.children === "string"
              ? codeProps.children.trim()
              : ""
          }
          language={
            codeProps.className && codeProps.className.replace("language-", "")
          }
          {...codeProps}
        />
      );
    }
    return <pre>{children}</pre>;
  },
  img: OptimizedImage,
  CTA_ImageOnly,
  CTA_FullWidth,
  CTA_Bottom,
};

export const wrapRootElement = ({ element }) => {
  return (
    <ContextWrapper>
      <MDXProvider components={components}>{element}</MDXProvider>
    </ContextWrapper>
  );
};
