require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember equip gloom globe foster ten'; 
let testAccounts = [
"0xd603fcf0a7847a33000736dc9cd28c1b7ef3e4e1f697ff6d43b83b9b7d360383",
"0xb06ad57df8710a2ab87a0a6ae6db1f83cc7a387a046a7b1e4ee889717e7fbcc6",
"0x06247af704b526c6bcde1a8e79655bbd03db13289a765ea87e865f4099f54e6d",
"0x8d3829f71e8fdf45d701a024796de24e0fa938ba5b1655fb2cdeae6b4115c0d6",
"0xad3e97c5a72453950de02a068fa92707ee5bd70169ed7cbf330d69eb12483e5b",
"0x98f2aaef7bb91991c96a4d9b7996cebecac9c95eda135c5e077d3a4a3cd3f578",
"0x5f7360619bb6dc08503bd4b68a851a8037b1b60c4724571a0be2cb610f7f2759",
"0x3b55b877eb3bd2e6e1d26dfa7f1bca518fac866ddbff55ea5d2a6307f09ea2ee",
"0x5a6d39fa79ce391b8b1c824f58ebd52c951f057e174165f720ed3205bb22d4fe",
"0x45d77609fec8f8315b4c8b0505f585ac0816865806ed26727b78818198f8b983"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
