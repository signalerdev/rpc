
generate:
	npx protoc --ts_out=v1 --ts_opt=client_generic --go_out=paths=source_relative:./v1 --twirp_out=paths=source_relative:./v1 --proto_path v1 ./v1/tunnel.proto
	deno run -A patch_deno.ts

install:
	go install github.com/twitchtv/twirp/protoc-gen-twirp@latest
	go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
	npm install
