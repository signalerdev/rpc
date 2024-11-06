import { walk } from "https://deno.land/std@0.181.0/fs/walk.ts";

const protoRoot = "v1";

// https://github.com/timostamm/protobuf-ts/pull/233
async function patchProtoFiles() {
  for await (
    const entry of walk(protoRoot, { exts: ["ts"], includeFiles: true })
  ) {
    const filePath = entry.path;

    // Read the file content
    let content = await Deno.readTextFile(filePath);

    // Perform the replacement
    content = content.split("\n").map((line) =>
      line.replace(/^(import .+? from ["']\..+?)(["'];)$/, "$1.ts$2")
    ).join("\n");

    // Write the modified content back to the file
    await Deno.writeTextFile(filePath, content);
  }
}

// Run the function
await patchProtoFiles();
