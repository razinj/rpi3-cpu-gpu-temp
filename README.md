# RPI3 - Get CPU/GPU Temperatures Scripts

Raspberry Pi 3 - Get CPU/GPU temperatures scripts.

Run any of the scripts they both serve the same purpose, The result will be outputted into a file in the same directory.

Shell script :

```bash
bash rpi3-temp.sh
```

Javascript script :

```bash
node rpi3-temp.js
```

## Notice

It would be better to use the script with a cronjob for monitoring purposes.

Example:

This will run the script every hour.

```bash
crontab -e
```

```bash
0 * * * * /home/${USER}/.nodejs/bin/node /home/${USER}/rpi3-temp.js
```

Or

```bash
0 * * * * /bin/bash /home/${USER}/rpi3-temp.sh
```
