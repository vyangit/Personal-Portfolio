const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@components": path.join(path.resolve(__dirname, "src/components/")),
            "@constants": path.join(path.resolve(__dirname, "src/constants/")),
            "@models": path.join(path.resolve(__dirname, "src/models/")),
            "@pages": path.join(path.resolve(__dirname, "src/pages/")),
            "@parsers": path.join(path.resolve(__dirname, "src/parsers/")),
            "@repos": path.join(path.resolve(__dirname, "src/repositories/")),
            "@styles": path.join(path.resolve(__dirname, "src/styles/")),
            "@assets": path.join(path.resolve(__dirname, "src/assets/"))
        }
    }
};