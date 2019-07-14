const SHA256 = require('crypto-js/sha256');

class Block{
	constructor(index, timestamp, data, previousHash=''){
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash =  previousHash;
		this.Hash = this.calculateHash();
	}
	calculateHash(){
		return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash).toString();
	}
}
class BlockChain{
	constructor(){
		this.chain = [this.createGenesisBlock()];
	}

	createGenesisBlock(){
		return new Block(0,'12/07/19','This is Genesis Block','0');
	}

	getLatestBlock(){
		return this.chain[this.chain.length - 1];	
	}
	addBlock(newBlock){
		newBlock.previousHash = this.getLatestBlock().Hash;
		newBlock.Hash = newBlock.calculateHash();
		this.chain.push(newBlock);
	}
}

let block = new BlockChain();
block.addBlock(new Block(1, '12/07/19','This is Second Block'));
block.addBlock(new Block(2, '12/07/19',{ amount :1000 }));

console.log(JSON.stringify(block, null, 4));