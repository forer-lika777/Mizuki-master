import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gitPath = path.join(__dirname, "../dist/.git");
const backupPath = path.join(__dirname, "../.git-backup");

async function backupGit() {
	try {
		await fs.access(gitPath);
		await fs.cp(gitPath, backupPath, { recursive: true });
		console.log("已备份 .git 文件夹");
	} catch (error) {
		console.log(".git 文件夹不存在，跳过备份");
	}
}

backupGit();
