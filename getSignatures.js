const regex_solidity_signatures = /63([0-9a-f]{8})1461([0-9a-f]{4})57/ig

function getFunctionSignatures(bytecode) {
	let groups = bytecode.matchAll(regex_solidity_signatures)
	let signatures = Array.from(groups).map(g => g[1]) // g[2] holds function IP (instruction pointer)
	return signatures
}

module.exports = getFunctionSignatures
