// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Phone: [
		{
			name: "XiaoMi 14",
			image: "/images/device/xiaomi14.jpg",
			specs: "White 16GB RAM / 512 GB Storage",
			description:
				"A simple phone.",
			link: "https://www.mi.com/xiaomi-14/specs",
		},
	]
};
