import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Gifproject } from "../target/types/gifproject";

describe("gifproject", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Gifproject as Program<Gifproject>;

  it("startStuffOff!", async () => {
    console.log("🚀 Starting test...");
    const tx = await program.methods.startStuffOff().rpc();
    console.log("📝 Your transaction signature", tx);
  });
});
