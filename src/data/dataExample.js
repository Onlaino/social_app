const data = [
	{
		id: '1',
		name: 'Alex',
		surname: 'Gushchin',
		avatar:
			'https://sun9-9.userapi.com/impg/4gUPVa4ZRN8apELad6neO-dHdHfAatZZDIY3gg/AvfTtFfvmHM.jpg?size=1440x1800&quality=96&sign=6bdf6fa517271c503c1179b18aa219c0&type=album',
		age: '23',
		posts:  {
			id: '1',
			text: {
				header: 'HeaderText',
				body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum recusandae beatae. Voluptatem adipisci, facere voluptatibus eveniet, consequatur praesentium quo tenetur omnis, nulla labore nihil dicta sint animi qui reprehenderit.' 
			},
			images: {
				'1': 'https:sun9-52.userapi.com/impg/RMUAO_RMSUXamLMLnK82MDRGnC5ht_ghen5LxQ/Cy_EyAuQm0s.jpg?size=453x604&quality=95&sign=4bf29300be1cecb414116a2f8542797e&c_uniq_tag=4gs4NVNKcoY9SjoqU2K-u9vRhLz7UmLw-a5ApsBBqbk&type=album'
			} 
		},
		friends: [
			{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},
		],
	},
	{
		id: '2',
		name: 'Oleg',
		surname: 'Vasilev',
		avatar:
			'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
		age: '23',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		id: '3',
		name: 'Rinat',
		surname: 'Mazafakov',
		avatar:
			'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
		age: '43',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		id: '4',
		name: 'Svetlana',
		surname: 'Petrova',
		avatar:
			'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
		age: '12',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		id: '5',
		name: 'Danya',
		surname: 'SlavchenkoFedorov',
		avatar:
			'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
			friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		createdAt: '2024-03-02T01:54:30.814Z',
		name: 'Forrest Stoltenberg',
		avatar:
			'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
		id: '6',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		createdAt: '2024-03-02T02:46:46.773Z',
		name: 'Byron Ernser',
		avatar:
			'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
		id: '7',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		createdAt: '2024-03-02T00:34:18.098Z',
		name: 'Trevor Boehm',
		avatar:
			'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
		id: '8',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		createdAt: '2024-03-01T16:36:57.260Z',
		name: 'Roosevelt Kerluke',
		avatar:
			'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
		id: '9',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		createdAt: '2024-03-01T20:25:28.611Z',
		name: 'Shelley Graham',
		avatar:
			'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
		id: '10',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		createdAt: '2024-03-02T05:49:00.212Z',
		name: 'Mae Maggio',
		avatar:
			'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
		id: '11',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		createdAt: '2024-03-02T07:29:33.349Z',
		name: 'Gerard Harvey',
		avatar:
			'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
		id: '12',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		createdAt: '2024-03-01T23:31:35.109Z',
		name: "Carol O'Keefe",
		avatar:
			'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
		id: '13',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
	{
		createdAt: '2024-03-01T19:06:42.180Z',
		name: 'Sylvia Smith',
		avatar:
			'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
		id: '14',
		friends: [{
			id: '2',
			name: 'Oleg',
			surname: 'Vasilev',
			avatar:
				'https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album',
			age: '23',
		},
		{
			id: '3',
			name: 'Rinat',
			surname: 'Mazafakov',
			avatar:
				'https://sun9-61.userapi.com/impf/c824502/v824502294/13096d/zxqPWHXL48c.jpg?size=1280x766&quality=96&sign=5e7d906633cce52b870831aa904ee80e&type=album',
			age: '43',
		},
		{
			id: '4',
			name: 'Svetlana',
			surname: 'Petrova',
			avatar:
				'https://sun9-4.userapi.com/impg/ynZjgyXrK2tcsLUZdDWXb1bfH7_pvPWfgel2uw/EODxw-6ZkqM.jpg?size=2560x1920&quality=95&sign=6131d8fbbbe8a667ac467e4d60a46e7e&type=album',
			age: '12',
		},
		{
			id: '5',
			name: 'Danya',
			surname: 'SlavchenkoFedorov',
			avatar:
				'https://sun9-38.userapi.com/impg/oWTjxu87Cwkd-O1l4DvBma8UWkM9pxMD8vb7Fw/OqiqVrozSmg.jpg?size=640x698&quality=95&sign=49d396195fa9d95b1b39b2983493714e&type=album',
		},
		{
			createdAt: '2024-03-02T01:54:30.814Z',
			name: 'Forrest Stoltenberg',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg',
			id: '6',
		},
		{
			createdAt: '2024-03-02T02:46:46.773Z',
			name: 'Byron Ernser',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg',
			id: '7',
		},
		{
			createdAt: '2024-03-02T00:34:18.098Z',
			name: 'Trevor Boehm',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg',
			id: '8',
		},
		{
			createdAt: '2024-03-01T16:36:57.260Z',
			name: 'Roosevelt Kerluke',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
			id: '9',
		},
		{
			createdAt: '2024-03-01T20:25:28.611Z',
			name: 'Shelley Graham',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
			id: '10',
		},
		{
			createdAt: '2024-03-02T05:49:00.212Z',
			name: 'Mae Maggio',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg',
			id: '11',
		},
		{
			createdAt: '2024-03-02T07:29:33.349Z',
			name: 'Gerard Harvey',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
			id: '12',
		},
		{
			createdAt: '2024-03-01T23:31:35.109Z',
			name: "Carol O'Keefe",
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg',
			id: '13',
		},
		{
			createdAt: '2024-03-01T19:06:42.180Z',
			name: 'Sylvia Smith',
			avatar:
				'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg',
			id: '14',
		},]
	},
];

console.log(JSON.stringify(data));
