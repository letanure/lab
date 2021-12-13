import "./index.css";

// https://houdini.how/

const init = () => {
  /**
   * Type Object Model API
   */
  const element = document.getElementById("houdini-Object-Model-API");
  element.attributeStyleMap.set("width", CSS.px(400));
  console.log(element.attributeStyleMap.get("width"));
  // => CSSUnitValue {value: 400, unit: 'px'}

  //   element.computedStyleMap().set("height", CSS.em(12));
  console.log(element.computedStyleMap().get("height"));
  //   CSSKeywordValue {value: 'auto'}

  /**
   * CSS Properties and Values API
   * https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API
   */

  // https://drafts.css-houdini.org/css-properties-values-api/#supported-names
  type PropertySyntax =
    | "<number>"
    | "<percentage>"
    | "<length-percentage>"
    | "<color>"
    | "<image>"
    | "<url>"
    | "<integer>"
    | "<angle>";

  type RegisterProperty = {
    name: string;
    syntax: PropertySyntax;
    inherits: boolean;
    initialValue: string;
  };

  CSS.registerProperty({
    name: "--someColor",
    syntax: "<color>",
    inherits: false,
    initialValue: "pink",
  });

  /**
   * Font Metrics API
   * https://drafts.csswg.org/css-fonts-3/#font-metrics-api
   * not supported in any browser yet.
   */

  /**
   * Worklets
   * scripts that plugs to low-level parts of the rendering engine. It runs JavaScript and WebAssembly code.
   * Paint Worklet | Layout Worklet | Animation Worklet
   */

  //   Paint Worklet
  //   The Paint Worklet code needs its own JS file.
  CSS.registerProperty({
    name: "--some-length",
    syntax: "<length>",
    inherits: false,
    initialValue: "120px",
  });

  CSS.registerProperty({
    name: "--some-width",
    syntax: "<length>",
    inherits: false,
    initialValue: "16px",
  });

  // Add the module from a local file
  // Or add it from a CDN
  "paintWorklet" in CSS && CSS.paintWorklet.addModule("./demoPaintWorklet.js");

  /**
   * Layout API
   * https://www.w3.org/TR/css-layout-api-1/
   * new `display` modes
   * chrome://flags/#enable-experimental-web-platform-features
   */
  "layoutWorklet" in CSS && CSS.layoutWorklet.addModule("./demoLayoutApi.js");
};

export default init;
