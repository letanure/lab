import runTemplateenfine from "./demoTemplateEngine";
import runHoudini from "./houdini";

// const runTests = [
//   ...new URLSearchParams(new URL(location.href).search).entries(),
// ].reduce((acc, item) => ({ ...acc, [item[0]]: item[1] }), {});

runTemplateenfine();
runHoudini();
