#!/bin/bash

FILE=$1
MAGICK="/mnt/c/Program Files/ImageMagick-7.1.0-Q16-HDRI/magick.exe"

"$MAGICK" convert "${FILE}.webp" -channel a +channel -fill black -colorize 100 "${FILE}.mask.webp"
