use anchor_lang::prelude::*;

declare_id!("5XVaDKogWKxc5nSfgCtZCGnYzTWn55xxgqzqtHeFhPCC");

#[program]
pub mod anchordemo2 {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
