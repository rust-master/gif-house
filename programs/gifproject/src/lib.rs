use anchor_lang::prelude::*;

declare_id!("moVEyHNEpBWAyqYssYR8MBjtSdaWutU6igYrrKJiikA");

#[program]
pub mod gifproject {
    use super::*;

    pub fn start_stuff_off(ctx: Context<StartStuffOff>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct StartStuffOff {}
