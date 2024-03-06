const rooms = [
	{
		"name": "Outside",
		"lights": [
			"back porch",
			"front porch",
			"garage"
		],
		"defaultOn": [
			"back porch",
			"garage"
		]
	},
	{
		"name": "Balcony",
		"lights": [
			"main"
		]
	},
	{
		"name": "Garage",
		"adjacentRooms": [
			"barn"
		],
		"lights": [
			"main",
			"entrance",
			"work"
		]
	},
	{
		"name": "Barn",
		"adjacentRooms": [
			"garage"
		],
		"lights": [
			"main",
			"stair",
			"upper",
			"string"
		]
	},
	{
		"name": "Basement",
		"lights": [
			"main",
			"tool chest",
			"server",
			"workbench",
			"stairs"
		]
	},
	{
		"name": "Main Bathroom",
		"lights": [
			"main"
		]
	},
	{
		"name": "Family Room",
		"lights": [
			"main",
			"back entrance"
		],
		"shortNames": {
			"bathroom": "main bathroom",
			"office": "main office"
		},
		"media": {
			"devices": [
				"tv"
			]
		}
	},
	{
		"name": "Laundry Room",
		"lights": [
			"main"
		]
	},
	{
		"name": "Guest Bedroom",
		"lights": [
			"main",
			"desk",
			"lamp"
		],
		"shortNames": {
			"bathroom": "guest bathroom",
			"office": "upstairs office"
		},
		"media": {
			"devices": [
				"tv"
			]
		}
	},
	{
		"name": "Living Room",
		"lights": [
			"main",
			"lamp"
		]
	},
	{
		"name": "Master Bedroom",
		"adjacentRooms": [
			"master bathroom"
		],
		"lights": [
			"main",
			"beam",
			"ryan's lamp",
			"sierra's lamp"
		],
		"wleds": [
			"beam"
		],
		"shortNames": {
			"bedroom": "master bedroom",
			"bathroom": "master bathroom",
			"closet": "master closet"
		},
		"media": {
			"devices": [
				"tv"
			]
		},
		"fans": [
			"main"
		]
	},
	{
		"name": "Master Bathroom",
		"adjacentRooms": [
			"master bedroom"
		],
		"lights": [
			"main",
			"vanity",
			"toilet"
		],
		"shortNames": {
			"bedroom": "master bedroom",
			"bathroom": "master bathroom",
			"closet": "master closet"
		},
		"fans": [
			"main",
			"toilet"
		]
	},
	{
		"name": "Master Closet",
		"lights": [
			"main"
		]
	},
	{
		"name": "Kitchen",
		"lights": [
			"main",
			"chandelier"
		]
	},
	{
		"name": "Attic",
		"lights": [
			"main",
			"bathroom"
		]
	},
	{
		"name": "Hallway",
		"lights": [
			"main",
			"chandelier"
		]
	},
	{
		"name": "Guest Bathroom",
		"lights": [
			"main"
		],
		"shortNames": {
			"bedroom": "guest bedroom",
			"office": "upstairs office"
		}
	},
	{
		"name": "Main Office",
		"lights": [
			"main",
			"lamp"
		]
	},
	{
		"name": "Upstairs Office",
		"lights": [
			"main",
			"lamp"
		]
	}
]

const roomNames = rooms.map(r => r.name)
const roomsWithTv = rooms.filter(r => r?.media?.devices.includes('tv'))
const roomsWithFans = rooms.filter(r => r?.fans).map(rwf => rwf.name).sort()
const allLights = rooms.reduce((prev, curr) => {
    return [... new Set([...prev,...curr.lights])]
}, [])
const roomSlugs = rooms.reduce((prev, {name}) => {
    prev[name] = name.toLowerCase().replaceAll(" ", '-')
    return prev
}, {})

console.log(roomSlugs)