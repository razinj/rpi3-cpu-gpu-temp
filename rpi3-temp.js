'use strict';
const { exec } = require('child_process');
const fs = require('fs');

const current_date = new Date();
let gpu_temp = null;
let cpu_temp = null;

const getGpuTemp = () => {
	return new Promise((resolve, reject) => {
		exec('vcgencmd measure_temp', (error, stdout, stderr) => {
    		if(error) { reject() }
    		gpu_temp = stdout.replace(/^\D*/g, '');
			resolve();
		});
	});
}

const getCpuTemp = () => {
	return new Promise((resolve, reject) => {
		exec('cat /sys/class/thermal/thermal_zone0/temp', (error, stdout, stderr) => {
			if(error) { reject() }
			cpu_temp = stdout/1000 + '\'C';
			resolve();
		});
	});
}

const logData = async () => {
	try {
		await getCpuTemp();
		await getGpuTemp();
		const log = `${current_date} | CPU: ${cpu_temp} | GPU: ${gpu_temp}`;
		fs.appendFile('rpi3-temp-log-v2', log, error => { if (error) throw error });
	}
	catch(err) { if (error) throw error }
}

logData();
