const {MerkleTree} = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelistAddresses =["0x7515543F251222C2046222BEE9caa95Af59097b3",
"0x84c79bc7BC3aBcD354a21ce63988388383fdCD94",
"0xea3209d91237db4E5955BF93465eaC543879997a"
];

const leafNodes = whitelistAddresses.map(addr => keccak256(addr))

const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true})


const rootHash = merkleTree.getRoot();
const claimingAddress = keccak256("0x84c79bc7BC3aBcD354a21ce63988388383fdCD94");

const hexProof = merkleTree.getHexProof(claimingAddress);

console.log('hex', hexProof)

console.log('Whitelist Merkle Tree', rootHash.toString('hex'))
