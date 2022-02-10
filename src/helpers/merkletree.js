const { ethers } = require("ethers");

const { MerkleTree } = require("merkletreejs");

const {whitelist} = require('./whitelist');
const keccak256 = require('keccak256');

 const {Buffer} = require('buffer');

export function getProofs  (address) {
    // console.log(0);
    let tree, leaves;
    try {
         leaves =  whitelist.map(x => keccak256(x));
    }
    catch(err){
        console.log(err)
    }
    try {
        tree = new MerkleTree(leaves , keccak256 , {sortPairs: true});
        //  console.log(tree);
    }
    catch(err){
        console.log(err)
    }
    let root = tree.getRoot();
    // console.log(root.toString('hex'))
    return tree.getHexProof(ethers.utils.keccak256(address.toString('hex')));
}


