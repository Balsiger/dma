#!/usr/bin/bash

echo "Creating masks..."

for file in "$@"; do
  if [[ "$file" == *-* ]]; then
    dir=`dirname "$file"`
    name=`basename "$file"`
    name=${name%.*}

    echo $name
    convert "${dir}/${name}.webp" -channel a +channel -fill black -colorize 100 "${dir}/${name}.mask.webp"
  fi
done


