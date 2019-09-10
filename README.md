# RPI3 - Get CPU/GPU Temperatures Scripts
Raspberry Pi 3 - Get CPU/GPU temperatures scripts.

Run any of the scripts they both serve the same purpose.

Bash script : `bash rpi3-temp.sh`

Javascript script : `node rpi3-temp.js`

## Notice:

It would be better to use the script with a cronjob for monitoring purposes.

Example:

This will run the script (JS one) every hour.

```bash
crontab -e
```

```bash
0 * * * * /home/pi/.nodejs/bin/node /home/pi/rpi3-temp.js
```
