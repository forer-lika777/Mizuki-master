// scripts/deploy.js
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

s;
const rootDir = path.resolve(__dirname, "..");

const SERVER = process.env.DEPLOY_SERVER || "root@vista233.top";
const DEPLOY_PATH = process.env.DEPLOY_PATH || "./www/wwwroot/www.vista233.top";

console.log("开始部署到服务器...");

// 检查 dist 是否存在
if (!fs.existsSync(path.join(rootDir, "dist"))) {
	console.error("dist 目录不存在，请先运行构建");
	process.exit(1);
}

try {
	// 使用 rsync 同步
	execSync(
		`rsync -avz --delete \
      --exclude='.git*' \
      --exclude='*.log' \
      ${path.join(rootDir, "dist/")} \
      ${SERVER}:${DEPLOY_PATH}`,
		{ stdio: "inherit" },
	);
	console.log("部署完成");
} catch (error) {
	console.error("部署失败:", error.message);
	process.exit(1);
}
