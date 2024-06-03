import { loadData } from "./fsFunctionality.js";

export async function timeFormat( time ) {
	const secondsInt = parseInt(time / 1000)
	const seconds = secondsInt % 60
	
	const minutesInt = parseInt(secondsInt / 60)
	const minutes = minutesInt % 60
	
	const hoursInt = parseInt(minutesInt / 60)
	const hours = hoursInt % 60

	const daysInt = parseInt(hoursInt / 24)
	const days = daysInt / 24

	return `days: ${days} hours: ${hours} minutes: ${minutes} seconds: ${seconds}`
}