#!/bin/bash
OUTPUT=$1

echo $OUTPUT

echo -n "" > "$OUTPUT"

for file in *.ascii; do
  echo "$file"
  echo "monsters {" >> "$OUTPUT"
    while IFS="\n" read -r line;
    do
      echo "  $line" >> "$OUTPUT"
    done < "$file"
    echo "}" >> "$OUTPUT"
    echo "" >> "$OUTPUT"
done
