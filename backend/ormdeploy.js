var glob = require("glob");
var fs = require("fs");
var replace = require("replace");

// Find file(s)
glob("ormconfig.json", function (err, files) {
    if (err) {
        throw err;
    }
    files.forEach(function (item, index, array) {
        replace({
            regex: ".ts",
            replacement: ".js",
            paths: [item],
            recursive: true,
            silent: true,
        });
        replace({
            regex: "src",
            replacement: "dist/src",
            paths: [item],
            recursive: true,
            silent: true,
        });
        console.log("Deploy complet");
    });
});
