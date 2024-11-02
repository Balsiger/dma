#!/bin/bash

INPUT_PATH="src/entities"
PROTO_PATH="src/app/proto"
OUTPUT_PATH="src/assets/data/products"

concat() {
  local PATH=$1
  local OUTPUT_FILE=$2
  local HEADER_FILE=$3

  echo -n "" > "$OUTPUT_FILE"

  echo -en "\radding header $HEADER_FILE                                                  "
  while IFS="\n" read -r LINE;
    do
      echo "$LINE" >> "$OUTPUT_FILE"
    done < "$HEADER_FILE"

  for DIR in "$PATH"*/; do
    local TYPE=$(/usr/bin/basename "$DIR")

    for FILE in "$DIR"*; do
      echo "" >> "$OUTPUT_FILE"


      echo -en "\radding $FILE                                                         "
      echo "$TYPE {" >> "$OUTPUT_FILE"
      while IFS="\n" read -r LINE;
        do
          echo "  $LINE" >> "$OUTPUT_FILE"
        done < "$FILE"
      echo "}" >> "$OUTPUT_FILE"
    done
    echo ""
  done

  for FILE in "$PATH"*.ascii; do
    echo -en "\radding $FILE                                                         "
    while IFS="\n" read -r LINE;
      do
        echo "  $LINE" >> "$OUTPUT_FILE"
      done < "$FILE"
  done
}

for FILE in "$INPUT_PATH"/*/; do
  BASE=$(basename "$FILE")
  DIR=$(dirname "$FILE")
  echo $BASE
  concat "$FILE" "$DIR/$BASE.ascii" "$DIR/$BASE.product"
done

for FILE in "$INPUT_PATH"/*.ascii; do
  BASE=$(basename "$FILE" .ascii)
  echo converting $BASE
  protoc --proto_path="$PROTO_PATH" --encode=dma.ProductContentProto "$PROTO_PATH"/template.proto < "$FILE" > "$OUTPUT_PATH"/"$BASE".pb
done

echo -en "\rAll files converted                                           \n"

