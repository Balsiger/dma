$PROTO_OUT_DIR="./src/app/proto/generated"
$PROTO_PATH="./src/app/proto"
$DATA_PATH="./src/assets/data"
New-Item -Path $PROTO_OUT_DIR -ItemType Directory -Force
C:/Users/balsi/Tools/protoc-3.20.1-win64/bin/protoc `
       --plugin=protoc-gen-ts=node_modules\.bin\protoc-gen-ts.cmd `
       --proto_path=${PROTO_PATH} `
       --js_out="import_style=commonjs,binary:$PROTO_OUT_DIR" `
       --ts_out="$PROTO_OUT_DIR" `
       --descriptor_set_out=$DATA_PATH\descriptor.pb `
       $PROTO_PATH/template.proto $PROTO_PATH/value.proto $PROTO_PATH/descriptor.proto
