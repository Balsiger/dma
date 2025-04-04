#!/bin/bash

MAGICK="/mnt/c/Program Files/ImageMagick-7.1.0-Q16-HDRI/magick.exe"

echo "Creating masks..."

for file in "$@"; do
  if [[ $file == *-* ]]; then
    dir=`dirname "$file"`
    name=`basename "$file"`
    name=${name%.*}

    echo $name
    "$MAGICK" convert "${dir}/${name}.webp" -channel a +channel -fill black -colorize 100 "${dir}/${name}.mask.webp"
  fi
done


