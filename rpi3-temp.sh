#!/bin/bash
# Author : RAZINJ
# Description : Display Raspberry Pi 3 CPU & GPU temperature.

cpuTemp=$(</sys/class/thermal/thermal_zone0/temp)
echo "$(date) @ $(hostname)" >> rpi3-temp-log
echo "GPU : $(/opt/vc/bin/vcgencmd measure_temp)" >> rpi3-temp-log
echo "CPU : temp=$((cpuTemp/1000))'C" >> rpi3-temp-log
echo "--------------------------------------------------------" >> rpi3-temp-log
