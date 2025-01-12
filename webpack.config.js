const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	mode: 'production',
	entry: {
		filename: path.resolve(__dirname, 'src/index.js'),

	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		assetModuleFilename: "[name][ext]",
	},
	performance: {
		hints: false,
		maxAssetSize: 512000,
		maxEntrypointSize: 512000,
	},
	devServer: {
		port: 3000,
		compress : true,
		hot: true,
		static: {
			directory: path.join(__dirname, "dist")
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/i,
				use: ["file-loader"],
			},

		]
	},

	plugins: [
		new htmlWebpackPlugin({
			title: "Quiz",
			filename: "index.html",
			template: "src/index.html"
		}),
	]
}