import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Gifproject } from "../target/types/gifproject";

const { SystemProgram } = anchor.web3;

describe("gifproject", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Gifproject as Program<Gifproject>;
  const baseAccount = anchor.web3.Keypair.generate();

  it("startStuffOff!", async () => {
    console.log("🚀 Starting test...");
    let tx = await program.rpc.startStuffOff({
      accounts: {
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [baseAccount],
    });

    console.log("📝 Your transaction signature", tx);
  });

  it("Retrieve account data", async () => {
    let account = await program.account.baseAccount.fetch(
      baseAccount.publicKey
    );
    console.log("👀 GIF Count", account.totalGifs.toString());
  });

  it("add gif", async () => {
    await program.rpc.addGif(
      "https://media3.giphy.com/media/Sw6G80NHeUEP4k5N0g/giphy.gif",
      {
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
        },
      }
    );

    // Get the account again to see what changed.
    let account = await program.account.baseAccount.fetch(
      baseAccount.publicKey
    );
    console.log("👀 GIF Count", account.totalGifs.toString());
    console.log("👀 GIF List", account.gifList);
  });
});
