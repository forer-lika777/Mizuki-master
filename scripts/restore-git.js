import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gitPath = path.join(__dirname, "../dist/.git");
const backupPath = path.join(__dirname, "../.git-backup");

async function restoreGit() {
	try {
		await fs.access(backupPath);
		await fs.cp(backupPath, gitPath, { recursive: true });
		await fs.rm(backupPath, { recursive: true, force: true });
		console.log("已恢复 .git 文件夹");
	} catch (error) {
		console.log("没有找到备份的 .git 文件夹");
	}
}

restoreGit();
