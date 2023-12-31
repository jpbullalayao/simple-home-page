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
      // Create a copy of the existing template directory.
      await fs.copy(`${__dirname}/templates/app`, appName); // __dirname gets the absolute path of the directory from where this script is being executed from
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return;
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
      return;
    }

    // Create README.md
    const readmeContent = `# ${appName}`;
    const readmeFilePath = path.join(`./${appName}/`, "README.md");
    fs.writeFileSync(readmeFilePath, readmeContent, "utf-8");

    try {
      // Copy env.local template to generated app
      await fs.copy(
        `${__dirname}/templates/env.local.template`,
        `${appName}/.env.local`
      );
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return;
    }

    try {
      // Copy gitignore template to generated app
      await fs.copy(
        `${__dirname}/templates/gitignore.template`,
        `${appName}/.gitignore`
      );
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return;
    }

    console.log(`Successfully generated ${appName}`);
  });

program.parse(process.argv);
