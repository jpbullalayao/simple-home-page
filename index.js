#!/usr/bin/env node

const { Command } = require("commander");
const packageInfo = require("./package.json");

const program = new Command();
program.version(packageInfo.version);

program
  .command("init")
  .description("Initialize the simple home page")
  .action(() => {
    // Your code to perform the 'init' action goes here
    console.log("Simple home page initialized.");
  });

program.parse(process.argv);
