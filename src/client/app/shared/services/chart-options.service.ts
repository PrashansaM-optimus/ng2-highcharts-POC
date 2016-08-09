export var lineChartOptions = {
	chart: {
		type: 'line'
	},
	title: {
		text: 'Bollywood Movie Earnings'
	},
	xAxis: {
		categories: ['3 Idiots', 'Sultan', 'Kabali']
	},
	yAxis: {
		title: {
			text: 'Earnings'
		}
	},
	series: [{
		name: 'Jane',
		data: [4, 6, 8]
	}, {
			name: 'John',
			data: [2, 4, 1]
		}]
};
export var columnchartOptions = {
	chart: {
		type: 'column'
	},
	title: {
		text: 'Hollywood Movie Earnings'
	},
	xAxis: {
		categories: ['Jason Bourne', 'Suicide Squad', 'Ice Age']
	},
	yAxis: {
		title: {
			text: 'Earnings'
		}
	},
	series: [{
		name: 'Jane',
		data: [6 ,3 ,7]
	}, {
			name: 'John',
			data: [9, 1, 6]
		}]
};

export var shakesOptions = {
	chart: {
		type: 'line'
	},
	title: {
		text: 'Milk Shakes'
	},
	xAxis: {
		categories: ['Strawberry', 'Choclate', 'Blackberry']
	},
	yAxis: {
		title: {
			text: 'shakes bought'
		}
	},
	series: [{
		name: 'Jane',
		data: [4, 7, 1]
	}, {
			name: 'John',
			data: [9, 5 ,2]
		}]
};

export var juicesOptions = {
	chart: {
		type: 'column'
	},
	title: {
		text: 'Juice Consumption'
	},
	xAxis: {
		categories: ['Apple', 'Banana', 'Orange']
	},
	yAxis: {
		title: {
			text: 'Glasses'
		}
	},
	series: [{
		name: 'Jane',
		data: [7, 4, 6]
	}, {
			name: 'John',
			data: [3, 1, 3]
		}]
};
