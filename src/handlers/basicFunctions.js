import { loadData, saveData } from "./fsFunctionality.js";
import { timeFormat } from "./timeFormat.js";

export async function start() {
	const timestamp = Date.now()
	const variables = await loadData()
	variables.start = variables.start != 0 ?  0 : timestamp
	console.log('time started');
	saveData(variables)
}

export async function end() {
	const timestamp = Date.now()
	const variables = await loadData()

	if(variables.start != 0) {
		const timeCount = parseInt((timestamp - variables.start) / 1000)
	
		variables.start = 0
		variables.timeSpent += timeCount
		
		console.log('time ended');
		saveData(variables)
	} else {
		console.log('no start stamp');
	}
}

export async function time() {
	const timestamp = Date.now()
	const variables = await loadData()
	const timeSpent = timestamp - variables.start

	console.log(`Time spent in this session ${await timeFormat(timeSpent)}`);
}