# Converting of ascii to binary protos has to happen in bash/linux, because Windows 
# insert 0D characters after each 0A in the binary result of protoc, and I did not manage
# to prevent that.

PROTO_PATH="./src/app/proto"
OUTPUT_PATH="./src/assets/data"
ENTITIES="src/entities"

convert() {
  local INPUT=$1
  local PROTO=$2
  local OUTPUT=$3
  echo "Converting $INPUT to $OUTPUT ($PROTO)"
  protoc --proto_path="$PROTO_PATH" --encode="$PROTO" "src/app/proto/template.proto" < "$INPUT" > "$OUTPUT"
}

merge() {
  local INPUT_DIR=$1
  local OUTPUT=$2
  local NAME=$3
  echo -n "" > $OUTPUT

  for FILE in $INPUT_DIR/*.ascii
  do
    local BASE=`basename "$FILE" ".ascii"`
    echo -en "\r  $BASE                            "
    
    echo "$NAME {" >> $OUTPUT
    cat "$FILE" >> $OUTPUT
    echo -e "}\n" >> $OUTPUT
  done   
}

process() {
  local NAME=$1
  local PROTO=$2
  echo "converting $NAME..."
  merge "$ENTITIES/$NAME" "$ENTITIES/$NAME.ascii" "$NAME"
  convert "$ENTITIES/$NAME.ascii" "$PROTO" "$OUTPUT_PATH/$NAME.pb"
}

process "miniatures" "dma.MiniaturesProto"

echo "all protos converted :-)"

