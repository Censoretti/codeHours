#!/usr/bin/env node

import { loadData, saveData } from "./handlers/fsFunctionality.js"
import yargs from "yargs";

const { argv } = yargs(process.argv)


if(argv.start){
	const timestamp = Date.now()
	const variables = await loadData()
	variables.start = variables.start != 0 ?  0 : timestamp
	console.log('time started');
	saveData(variables)
}

if(argv.end){
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
