// const topics = Array.from(Array(100).keys());
// topics[0] = `All`;

// topics.forEach(function (i) {
// 	let e = document.createElement(`p`);
// 	e.innerText = i;
// 	e.className = `topic`;
// 	document.querySelector(`.topics`).insertAdjacentElement("beforeend", e);
// });

const videos = [
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
	{
		thumbnail: `https://i.ytimg.com/vi/IzJIpR8g9c4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWYwDRWwbjQcGV78-cZCtL2V7lKA`,
		photo: `https://yt3.ggpht.com/G9hf0lyXaBaqkEYXoHipe9SfvCsn_FDpTk-VkqrzIWuNXW6qnXpaonxje2NtDqrMIQVmJKLYuQ=s68-c-k-c0x00ffffff-no-rj`,
		title: `Day2 | Neymar, Gabriel Jesus & Martinelli CRAZY SKILLS in Brazil Training Today`,
		author: `Arsenal HQ Live`,
	},
];

videos.forEach(i => {
	document.querySelector(`.cards`).insertAdjacentHTML(
		`afterbegin`,
		`
	<div class="card">
		<img class="thumbnail" src="${i.thumbnail}">
		<div class="details">
		<img class="photo" src="${i.photo}">
			<p class="title">${i.title}</p>
			<p class="author">${i.author}</p>
		</div>
	</div>`
	);
});
