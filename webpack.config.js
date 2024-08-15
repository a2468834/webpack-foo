const webpack = require("webpack")
const path = require("path")

module.exports = {
    entry: "./src/emulator.ts",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "src", "test.js")
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            crypto: require.resolve("crypto-browserify"),
            buffer: require.resolve("buffer/"),
            stream: require.resolve("stream-browserify"),
            vm: require.resolve("vm-browserify"),
        },
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs2",
    },
    mode: "none",
}