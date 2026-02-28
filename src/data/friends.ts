// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Mizuki Docs",
		imgurl: "http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
		desc: "Mizuki User Manual",
		siteurl: "https://docs.mizuki.mysqil.com",
		tags: ["Docs"],
	},
	{
		id: 2,
		title: "Tailwind CSS",
		imgurl: "/assets/icon/tailwind-css-icon.png",
		desc: "A utility-first CSS framework for rapidly building custom designs",
		siteurl: "https://tailwindcss.com",
		tags: ["CSS", "Framework"],
	},
	{
		id: 3,
		title: "TypeScript",
		imgurl: "/assets/icon/microsoft-icon.png",
		desc: "TypeScript is JavaScript with syntax for types",
		siteurl: "https://www.typescriptlang.org",
		tags: ["Language", "JavaScript"],
	},
	{
		id: 4,
		title: "GitHub",
		imgurl: "/assets/icon/github-icon.png",
		desc: "Where the world builds software",
		siteurl: "https://github.com",
		tags: ["Development", "Platform"],
	},
	{
		id: 5,
		title: ".NET",
		imgurl: "/assets/icon/dotnet-icon.png",
		desc: "A free, cross-platform, open source developer platform for building many different types of applications",
		siteurl: "https://dotnet.microsoft.com",
		tags: ["Framework", "Microsoft"],
	},
	{
		id: 6,
		title: "Osu!",
		imgurl: "/assets/icon/osu-icon.png",
		desc: "Rhythm is just a click away!",
		siteurl: "https://osu.ppy.sh",
		tags: ["Osu!", "Game", "Rhythm"],
	}
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
