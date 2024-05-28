import  fs from "node:fs/promises"
import fsc from "node:fs"

let variablesData
const dirName = "./src/data/variables.json"

export async function loadData() {
	let data = {}
	if (!fsc.existsSync((dirName))) await fs.writeFile((dirName), JSON.stringify(data))
	
	try {
		variablesData = JSON.parse(
			await fs.readFile(dirName)
		)
	} catch(e) {
		console.log(e);
	}
	
	variablesData = variablesData != undefined ? variablesData : {}
	console.log(variablesData);

}

export async function saveData(data) {
	await fs.writeFile(dirname, JSON.stringify(data))
}