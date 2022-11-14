import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Anchordemo2 } from "../target/types/anchordemo2";

describe("anchordemo2", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Anchordemo2 as Program<Anchordemo2>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
