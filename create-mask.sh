#!/usr/bin/sh

FILE=$1
convert "${FILE}.webp" -channel a +channel -fill black -colorize 100 "${FILE}.mask.webp"
