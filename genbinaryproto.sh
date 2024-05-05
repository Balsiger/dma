

#!/bin/bash
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
    while IFS="\n" read -r line;
    do
      echo "  $line" >> $OUTPUT
    done < "$FILE"
    #cat "$FILE" >> $OUTPUT
    echo "}" >> $OUTPUT
    echo "" >> $OUTPUT
  done
}

process() {
  local NAME=$1
  local PROTO=$2
  echo "converting $NAME..."
  merge "$ENTITIES/$NAME" "$ENTITIES/$NAME.ascii" "$NAME"
  convert "$ENTITIES/$NAME.ascii" "$PROTO" "$OUTPUT_PATH/$NAME.pb"
}

while getopts "minsaptcu" option; do
  case $option in
    m)
      process "monsters" "dma.MonstersProto"
      ;;
    i)
      process "items" "dma.ItemsProto"
      ;;
    n)
      process "npcs" "dma.NPCsProto"
      ;;
    s)
      process "spells" "dma.SpellsProto"
      ;;
    p)
      process "products" "dma.ProductsProto"
      ;;
    a)
      process "maps" "dma.MapsProto"
      ;;
    t)
      process "tokens" "dma.TokensProto"
      ;;
    u)
      process "miniatures" "dma.MiniaturesProto"
      ;;
    c)
      process "conditions" "dma.ConditionsProto"
      ;;
    *)
      echo "Invalid option, use"
      echo " -m: Monsters"
      echo " -i: Items"
      echo " -n: NPCs"
      echo " -s: Spells"
      echo " -p: Products"
      echo " -a: Maps"
      echo " -u: Miniatures"
      echo " -c: Conditions"
      echo " -t: Tokens"
      ;;
  esac
done

if [ $OPTIND -eq 1 ]; then
  echo "No options passed, processing all entities...";
  process "monsters" "dma.MonstersProto"
  process "items" "dma.ItemsProto"
  process "npcs" "dma.NPCsProto"
  process "spells" "dma.SpellsProto"
  process "products" "dma.ProductsProto"
  convert "$ENTITIES/maps.ascii" "dma.MapsProto" "$OUTPUT_PATH/maps.pb"
  process "miniatures" "dma.MiniaturesProto"
  process "conditions" "dma.ConditionsProto"
fi

echo "protos converted :-)"

