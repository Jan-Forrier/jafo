// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gq3Uq8Ndyp9bFhPCbiKgyk
// Component: UDbrUjqhUP
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_hey.module.css"; // plasmic-import: gq3Uq8Ndyp9bFhPCbiKgyk/projectcss
import * as sty from "./PlasmicHey.module.css"; // plasmic-import: UDbrUjqhUP/css

export const PlasmicHey__VariantProps = new Array();

export const PlasmicHey__ArgProps = new Array();

function PlasmicHey__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"hey"}
            data-plasmic-override={overrides.hey}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.hey
            )}
          >
            {"Enter some text"}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "hey"],
  hey: ["hey"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHey__ArgProps,
      internalVariantPropNames: PlasmicHey__VariantProps
    });

    return PlasmicHey__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHey";
  } else {
    func.displayName = `PlasmicHey.${nodeName}`;
  }
  return func;
}

export const PlasmicHey = Object.assign(
  // Top-level PlasmicHey renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hey: makeNodeComponent("hey"),
    // Metadata about props expected for PlasmicHey
    internalVariantProps: PlasmicHey__VariantProps,
    internalArgProps: PlasmicHey__ArgProps
  }
);

export default PlasmicHey;
/* prettier-ignore-end */
