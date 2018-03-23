const gulp = require("gulp");
const nodemon = require("gulp-nodemon");

gulp.task("default", function () {
    nodemon({
        script: "node_modules/@notadd/server/bootstrap.js",
        watch: [
            "ormconfig.yml",
            "packages/",
            "storages/addons/enabled.yaml",
            "storages/modules/enabled.yaml",
        ],
        ext: "js"
    });
});
