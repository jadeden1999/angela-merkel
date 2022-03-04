const {MerkleTree} = require('merkletreejs')
const keccak256 = require('keccak256')
let whitelistAddresses = ["0x84c79bc7BC3aBcD354a21ce63988388383fdCD94","0x12DB4b58e05a53A9A9aa34C3748A7DeC4817B616", "0xF6eBd66c6D3849508BA5fda52CfCF21B289E8E07", "0x7515543F251222C2046222BEE9caa95Af59097b3","0xBa7Cd318b0860052eBB1AD8E7475D1319f90558F"]

const leafNodes = whitelistAddresses.map(addr => keccak256(addr))

const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true})



// leaves, merkleTree, and rootHash are all determined prior to claim. The project
// would have some form of whitelist process where whitelisted addresses are collected
// and known beforehand.
// Creates a new array 'leafNodes' by hashing all indexes of the 'whitelistAddresses'
// using keccak256. Then creates a new Merkle Tree object using keccak256 as the
// desired hashing algorithm.


const rootHash = merkleTree.getRoot();
const claimingAddress = keccak256("0x7515543F251222C2046222BEE9caa95Af59097b3");

const hexProof = merkleTree.getHexProof(claimingAddress);


console.log('hex',JSON.stringify(hexProof))

console.log('Whitelist Merkle Tree', rootHash.toString('hex'))
exports.handler =  async function(event, context) {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    return context.logStreamName
  }