const regex_solidity_selectors = /63([0-9a-f]{8})1461([0-9a-f]{4})57/ig

function getFunctionSelectors(bytecode) {
	let groups = bytecode.matchAll(regex_solidity_selectors)
	let selectors = Array.from(groups).map(g => g[1]) // g[2] holds function IP (instruction pointer)
	return selectors
}

module.exports = getFunctionSelectors
