import React from "react";

import SEO from "../../../components/seo";
import MesheryTerminal from "../../../sections/Meshery/Meshery-terminal";
import MesheryPlatforms from "../../../sections/Meshery/Meshery-platforms";
import MesheryManageMesh from "../../../sections/Meshery/Meshery-mange-mesh";
import MesheryQuotes from "../../../sections/Meshery/Meshery-quotes";
const MesheryMainPage = () => {
  return (
    <>
      <MesheryTerminal />
      <MesheryPlatforms />
      <MesheryManageMesh />
      <MesheryQuotes />
    </>
  );
};
export default MesheryMainPage;
export const Head = () => {
  return (
    <SEO
      title="Meshery Getting Started"
      description="How to get started with cloud native management. Adopting and operating your cloud native infrastructure."
      image="/images/meshery-logo-dark-text.webp"
    />
  );
};
