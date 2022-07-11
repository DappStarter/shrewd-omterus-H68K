require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift response remind million include process slot gesture'; 
let testAccounts = [
"0x72d4ab2dc8632f48c79e4d4674c1fb84d3eda22c80e3ae0e2e51e383b33cd360",
"0xd939ca2745311b15b95154356b10af2cdfb103816a0a5626fe6b093e7370d94a",
"0xded62336fe767f223c4c7614cdae086cb4914559b1ad6424b990f13cad2b6175",
"0x4a18e829d6cec61c935692820e700418850acc9a04bdd4dac00f7357939b1eec",
"0x16e716867d700430574978d5a05cc83032d38390f88d4ac84e836ab9bfd1187a",
"0x7dbfe0fcc782325b3379fb791a712c7af1366a069431c4ea36a5d7a26325b371",
"0xd493318b2fe0ddf24a40a5df085e1ab1f72a3680e4f3728c55101e6e7d749440",
"0xe692a49b2b3a26301ca0925989c3609d430ad0e037ef80a4a63f6d7ea9bb1df7",
"0x68aa684289f44a965a6fba9c3e7b718775d80511c659be060a9cc5ec84fd887f",
"0x0f6eddbddae9ea18a4d1735fd2e53abc676a78aaf25ffb2306dc8e0daeee0a41"
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
            version: '^0.8.0'
        }
    }
};

