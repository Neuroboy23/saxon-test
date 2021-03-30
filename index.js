// all good
import Saxon from "saxon-js";

// all good
Saxon.getResource({
    file: "test.xml",
    type: "xml"
})
.then(document => {

    // all good
    Saxon.XPath.evaluate(
        "//*[local-name() = 'object-ref']",
        document
    );

    // ERROR!!!
    Saxon.XPath.evaluate(
        "//*[ends-with(local-name(), '-ref')]",
        document
    );

});

// THE ERROR FROM LINE 18 IS:
// (node:9372) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'jd' of undefined
//     at P (C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:4065:394)
//     at Object.Ub (C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:4073:213)
//     at ends-with (C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:4274:469)
//     at C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:4388:324
//     at jc.K [as g] (C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:4387:511)
//     at jc.next (C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:3975:180)
//     at lc.next (C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:3976:69)
//     at lc.ba.forEachItem (C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:3971:574)
//     at lc.ba.expand (C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:3972:191)
//     at Object.Yd (C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:3992:174)
//     at C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:4381:382
//     at Object.J [as evaluate] (C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:4357:15)
//     at Object.evaluate (C:\dev\saxon-test\node_modules\saxon-js\SaxonJS2N.js:4605:248)
//     at file:///C:/dev/saxon-test/index.js:18:17
// (Use `node --trace-warnings ...` to show where the warning was created)
// (node:9372) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
// (node:9372) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
