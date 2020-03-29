#!/bin/bash
# Author : RAZINJ
# Description : Display Raspberry Pi 3 CPU & GPU temperature.

cpuTemp=$(</sys/class/thermal/thermal_zone0/temp)
echo "$(date '+%d-%m-%Y %H:%M:%S') | GPU : $(/opt/vc/bin/vcgencmd measure_temp) | CPU : temp=$((cpuTemp / 1000))'C" >>rpi3-temperature-log
