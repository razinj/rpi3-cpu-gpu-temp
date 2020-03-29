'use strict';

const { exec } = require('child_process');
const fs = require('fs');

const current_date = new Date();
let gpu_temp = null;
let cpu_temp = null;

const getGpuTemp = () => {
	return new Promise((resolve, reject) => {
		exec('vcgencmd measure_temp', (error, stdout, stderr) => {
			if (error) reject();
			gpu_temp = stdout.replace(/^\D*/g, '');
			resolve();
		});
	});
}

const getCpuTemp = () => {
	return new Promise((resolve, reject) => {
		exec('cat /sys/class/thermal/thermal_zone0/temp', (error, stdout, stderr) => {
			if (error) reject();
			cpu_temp = stdout / 1000 + '\'C';
			resolve();
		});
	});
}

(async () => {
	try {
		await Promise.all([
			getCpuTemp(),
			getGpuTemp()
		]);
		const dateFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
		const log = `${dateFormat.format(current_date)} | CPU: ${cpu_temp} | GPU: ${gpu_temp}`;
		fs.appendFile('rpi3-temp-log-v2', log, error => { if (error) throw error });
	} catch (error) {
		throw error
	}
})();
