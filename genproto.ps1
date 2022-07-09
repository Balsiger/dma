$PROTO_OUT_DIR="./src/app/proto/generated"
$PROTO_PATH="./src/app/proto"
New-Item -Path $PROTO_OUT_DIR -ItemType Directory -Force
protoc `
       --plugin=protoc-gen-ts=node_modules\.bin\protoc-gen-ts.cmd `
       --proto_path=${PROTO_PATH} `
       --js_out="import_style=commonjs,binary:$PROTO_OUT_DIR" `
       --ts_out="$PROTO_OUT_DIR" `
       $PROTO_PATH/template.proto $PROTO_PATH/value.proto
