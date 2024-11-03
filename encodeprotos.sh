#!/bin/bash

PROTO_PATH="src/app/proto"
OUTPUT_PATH="./src/assets/data/products"
INPUT_PATH="./src/entities"
PROTO="dma.ProductContentProto"
TEMPLATE="./src/app/proto/template.proto"

echo "Decoding protos: "

for FILE in "$INPUT_PATH"/*.ascii; do
  BASE=$(basename "$FILE")
  NAME="${BASE%.*}"
  echo "$NAME"
  protoc --proto_path="$PROTO_PATH" --encode="$PROTO" "$TEMPLATE" < "$FILE" > "$OUTPUT_PATH"/"$NAME".pb
done

echo "...done."
