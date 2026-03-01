// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
		icon: "logos:javascript",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: [ "mizuki-blog", ],
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"A type-safe superset of JavaScript that enhances code quality and development efficiency.",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: ["mizuki-blog", ],
		color: "#3178C6",
	},
	{
		id: "maui",
		name: "MAUI",
		description:
			"A cross-platform UI framework for building native applications on multiple platforms using C# and .NET.",
		icon: "logos:dotnet",
		category: "frontend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["personal-project"],
		color: "#61DAFB",
	},
	{
		id: "astro",
		name: "Astro",
		description:
			"A modern static site generator supporting multi-framework integration and excellent performance.",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: ["mizuki-blog", ],
		color: "#FF5D01",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description:
			"A utility-first CSS framework for rapidly building modern user interfaces.",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: ["mizuki-blog", ],
		color: "#06B6D4",
	},

	// Backend Skills
	{
		id: "csharp",
		name: "C#",
		description:
			"A modern object-oriented programming language developed by Microsoft, suitable for the .NET ecosystem.",
		icon: "devicon:csharp",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["desktop-application", ],
		color: "#239120",
	},
	{
		id: "python",
		name: "Python",
		description:
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 10 },
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description:
			"A mainstream programming language for enterprise application development, cross-platform and object-oriented.",
		icon: "logos:java",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#ED8B00",
	},
	{
		id: "cpp",
		name: "C++",
		description:
			"A high-performance systems programming language widely used in game development, system software, and embedded development.",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["game-engine", "system-optimization"],
		color: "#00599C",
	},
	{
		id: "c",
		name: "C",
		description:
			"A low-level systems programming language, the foundation for operating systems and embedded systems development.",
		icon: "logos:c",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["embedded-system", "kernel-module"],
		color: "#A8B9CC",
	},

	// Database Skills

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		color: "#F05032",
	},
	{
		id: "adobe-xd",
		name: "Adobe XD",
		description:
			"A powerful design and prototyping tool for UI/UX design, supporting collaborative design workflows.",
		icon: "logos:adobe-xd",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#FF61F6",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#007ACC",
	},
	{
		id: "intellij",
		name: "IntelliJ IDEA",
		description:
			"JetBrains flagship IDE, the preferred tool for Java development with powerful intelligent coding assistance.",
		icon: "logos:intellij-idea",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#616161", // 更改为深灰色，避免纯黑色
	},
	{
		id: "nginx",
		name: "Nginx",
		description: "A high-performance web server and reverse proxy server.",
		icon: "logos:nginx",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 4 },
		projects: ["web-server-config", ],
		color: "#009639",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"An open-source operating system, the preferred choice for server deployment and development environments.",
		icon: "logos:linux-tux",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 2 },
		projects: ["server-management", ],
		color: "#FCC624",
	},
	{
		id: "figma",
		name: "Figma",
		description:
			"A collaborative interface design tool for UI/UX design and prototyping.",
		icon: "logos:figma",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#F24E1E",
	},

	// Other Skills
	{
		id: "osu",
		name: "Osu!",
		description:
			"Rhythm is just a click away!",
		icon: "simple-icons:osu",
		category: "other",
		level: "advanced",
		experience: { years: 3, months: 8 },
		color: "#F15DA0",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate")
			.length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
