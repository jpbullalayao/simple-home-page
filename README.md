# simple-home-page

Create simple home pages fast 🚀

<img width="1680" alt="Screen Shot 2023-10-04 at 7 33 17 PM" src="https://github.com/jpbullalayao/simple-home-page/assets/3538024/79c415ae-18a7-4375-b472-e3de618be7ea">

## Installation

`simple-home-page` is a CLI tool that you can use to create your simple home page fast with little effort, so that you can focus on what matters: building a product that people want.

To install this tool, run the following:

```
$ npm i -g simple-home-page
```

## Creating your home page

To create your home page, run the following (replaing `<appName>` with your desired app/folder name, like `my-app`)

```
$ simple-home-page init <appName>
```

This will create an application (templated with the [Next.js](https://nextjs.org/) framework) on your local machine, in which you can `cd` into to begin
adjusting your home page.

```
$ cd <appName>
```

## Okay, now what?

You now have an application created on your local machine that contains a templated home page with placeholder values. Open the application in your favorite IDE and search the code for `TODO` references, so that you can begin replacing certain placeholders with values that make sense for your project.

If you like, extend the existing HTML and CSS if you want a more feature-rich home page. This home page also serves as a starting point if you want to build your website with Next.js!

## Deployment

Unfortunately, there is no CLI command to easily deploy your application (yet) - you have to do it manually.

In order to deploy your own simple home page, you need the following:

1. A [Vercel](https://vercel.com/) account (for project deployment & management)
2. (OPTIONAL) A [SendGrid](https://sendgrid.com/) account, **if** you require e-mail notifications when generating leads

The templated home page contains an e-mail field that you can use to gather interest for your upcoming project, which is why SendGrid is an optional requirement. Feel free to use it, or feel free to delete it if you prefer not to have it!

Once you have the above accounts setup and retrieved your SendGrid API Key, you can deploy your application on Vercel, while setting your `SENDGRID_API_KEY`, `EMAIL_TO_ADDRESS`, and `EMAIL_FROM_ADDRESS` environment variables in the process.

If you need a video demo of how to deploy your application to Vercel, see below:

And that's all that you need in order to deploy your simple home page! Now go focus on building your product 🚀

## How do I run my application?

When testing your application changes before you deploy, you can use the following commands to run the project:

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

## Contact

If you'd like to contact me for any questions, issues, or if you'd just like to chat, you can tweet me [@professorragna](https://twitter.com/professorragna) or e-mail me at [professor.ragna@gmail.com](mailto:professor.ragna@gmail.com)

Please tweet me or e-mail me if you actually download and use this tool, I'd love to know who has used it! :)
