import {Component, OnInit} from '@angular/core';
import {Ng2Highcharts} from 'ng2-highcharts/directives/ng2-highcharts';
import {Ng2Highstocks} from 'ng2-highcharts/directives/ng2-highstocks';
import {Ng2Highmaps} from 'ng2-highcharts/directives/ng2-highmaps';
import * as charts from '../../shared/services/chart-options.service';

@Component({
  selector: 'charts',
  templateUrl: 'app/charts/components/charts.component.html',
  directives: [Ng2Highcharts, Ng2Highmaps, Ng2Highstocks]
})
export class ChartsCmpComponent implements OnInit {
	bollywoodMovieEarnings = charts.lineChartOptions;
	hollywoodEarnings = charts.columnchartOptions;
	shakes = charts.shakesOptions;
	juices = charts.juicesOptions;
	ngOnInit(): any {
		setInterval(() => {
			this.bollywoodMovieEarnings = {
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
					data: [Math.floor(Math.random() * 60), Math.floor(Math.random() * 60), Math.floor(Math.random() * 60)]
				}, {
						name: 'John',
						data: [Math.floor(Math.random() * 60), Math.floor(Math.random() * 60), Math.floor(Math.random() * 60)]
					}]
			};
		}, 5000);

		setInterval(() => {
			this.hollywoodEarnings = {
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
					data: [Math.floor(Math.random() * 30), Math.floor(Math.random() * 30), Math.floor(Math.random() * 30)]
				}, {
						name: 'John',
						data: [Math.floor(Math.random() * 30), Math.floor(Math.random() * 30), Math.floor(Math.random() * 30)]
					}]
			};
		}, 5000);

		setInterval(() => {
			this.shakes = {
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
					data: [Math.floor(Math.random() * 70), Math.floor(Math.random() * 70), Math.floor(Math.random() * 70)]
				}, {
						name: 'John',
						data: [Math.floor(Math.random() * 70), Math.floor(Math.random() * 70), Math.floor(Math.random() * 70)]
					}]
			};
		}, 5000);

		setInterval(() => {
			this.juices = {
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
					data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
				}, {
						name: 'John',
						data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
					}]
			};
		}, 5000);
	}
}
