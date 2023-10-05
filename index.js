#!/usr/bin/env node

const { Command } = require("commander");
const fs = require("fs-extra");
const path = require("path");
const packageInfo = require("./package.json");

const program = new Command();
program.version(packageInfo.version);

program
  .command("init [appName]")
  .description("Initialize the simple home page")
  .action(async (appName) => {
    if (!appName) {
      console.error("Please specify the name of your application.");
      return;
    }

    try {
      // Create a copy of the existing template directory
      await fs.copy("template", appName);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }

    // Update package.json name property to user-specified appName
    const packageJsonPath = path.join(`./${appName}/`, "package.json"); // Path to package.json
    try {
      // Read the existing package.json file
      const packageJson = await fs.readJson(packageJsonPath);

      // Modify the "name" property
      packageJson.name = appName;

      // Write the modified package.json back to the file
      await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }

    console.log(`Successfully generated ${appName}`);
  });

program.parse(process.argv);
