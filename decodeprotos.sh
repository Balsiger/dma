#!/bin/bash

PROTO_PATH="src/app/proto"
INPUT_PATH="./src/assets/data/products"
OUTPUT_PATH="./src/temp"
PROTO="dma.ProductContentProto"
TEMPLATE="./src/app/proto/template.proto"

echo "Decoding protos: "

for FILE in "$INPUT_PATH"/*.pb; do
  BASE=$(basename "$FILE")
  NAME="${BASE%.*}"
  echo "$NAME"
  protoc --proto_path="$PROTO_PATH" --decode="$PROTO" "$TEMPLATE" < "$FILE" > "$OUTPUT_PATH"/"$NAME".ascii
done

echo "...done."
