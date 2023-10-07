# simple-home-page

Create simple home pages fast 🚀

<img width="1680" alt="Screen Shot 2023-10-04 at 7 33 17 PM" src="https://github.com/jpbullalayao/simple-home-page/assets/3538024/0e2c0b51-224e-4e54-b945-2ff2127206d9">

## Installation

`simple-home-page` is a CLI tool that you can use to create a simple home page fast, so that you can focus on what matters: building a product that people want.

To install this tool, run the following:

```
$ npm i -g simple-home-page
```

## Creating your simple home page

To create your home page, run the following (replaing `<appName>` with your desired app/folder name, like `my-app`)

```
$ simple-home-page init <appName>
```

This will create a [Next.js](https://nextjs.org/) application, in which you can `cd` into to install the dependencies and begin adjusting your home page.

```
$ cd <appName>
$ npm i
```

Open the application in your favorite IDE and search the code for `TODO` references, so that you can begin replacing certain placeholders with values that make sense for your project.

If you like, extend the existing HTML/CSS if you want a more feature-rich home page. This home page also serves as a starting point if you want to build your website with Next.js!

## How does lead generation work?

The generated home page contains an **optional** feature of collecting e-mail leads (which would be e-mailed to your specified e-mail address), if you would like to collect leads for your product when your home page is deployed to production.

`.env.local` is an auto-generated file in your application that contains 3 environment variables that are used for lead generation:

```
SENDGRID_API_KEY
EMAIL_TO_ADDRESS
EMAIL_FROM_ADDRESS
```

You can retrieve your `SENDBIRD_API_KEY` when creating a [SendGrid](https://sendgrid.com/) account. `EMAIL_TO_ADDRESS` and `EMAIL_FROM_ADDRESS` can be the same e-mail address - these are necessary to generate and send an e-mail to your `EMAIL_TO_ADDRESS` when someone adds their email on your home page.

**If you don't want to use the built-in lead generation feature**, simply delete `<LeadGen />` from `page.tsx` and ignore this section.

## How do I run my application?

When testing your application changes, you can use the following commands to run the project:

1. Running application in development mode

```
$ npm run dev
```

2. Running application in production mode

```
$ npm run build
$ npm run start
```

The application will be available at http://localhost:3000

## Deployment

Unfortunately, there is no CLI command to deploy your application (yet) - you have to do it manually.

In order to deploy your home page, you need the following:

1. Push your new home page project to your GitHub account
2. Create a [Vercel](https://vercel.com/) account (for project deployment & management)
3. (OPTIONAL) Create a [SendGrid](https://sendgrid.com/) account

Once you have handled the above and retrieved your SendGrid API Key, you can deploy your application on Vercel, while setting your `SENDGRID_API_KEY`, `EMAIL_TO_ADDRESS`, and `EMAIL_FROM_ADDRESS` environment variables in the process.

For a video demo of how to deploy your application to Vercel, see below:

And that's all that you need in order to deploy your simple home page! Now go focus on building your product 🚀

## Contact

If you'd like to contact me for any questions, issues, or if you'd just like to chat, you can tweet me [@professorragna](https://twitter.com/professorragna) or e-mail me at [professor.ragna@gmail.com](mailto:professor.ragna@gmail.com)

Please tweet me or e-mail me if you actually download and use this tool, I'd love to know who has used it! :)
