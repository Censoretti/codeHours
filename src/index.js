#!/usr/bin/env node

import { start, end, time } from "./handlers/basicFunctions.js";
import yargs from "yargs";

const { argv } = yargs(process.argv)

if(argv.start) start()
if(argv.end) end()
if(argv.time) time()
