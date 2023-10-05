# simple-home-page

The simplest home page template for new projects

<img width="1680" alt="Screen Shot 2023-10-04 at 7 33 17 PM" src="https://github.com/jpbullalayao/simple-home-page/assets/3538024/983ebb86-dc03-40c0-9a74-7f68d7cd5a27">

# Prerequisites

In order to deploy your own simple home page, you need the following:

1. [npm](https://docs.npmjs.com/cli/v10) (or [yarn](https://classic.yarnpkg.com/lang/en/docs/cli/)) installed on your local machine
2. A [Vercel](https://vercel.com/) account (for project deployment & management)
3. A [SendGrid](https://sendgrid.com/) account, **if** you require e-mail notifications when generating leads

# How does it work?

simple-home-page contains a simple home page lead generation template for new projects (start-ups, individual side projects, etc.), that you can use to generate interest while you focus on what matters: building a product that people want.

To create and deploy your own simple home page with it, follow the steps below. This assumes you have already created Vercel & SendGrid accounts, and retrieved your SendGrid API Key.

1. Git clone this repo to your local machine

```
$ git@github.com:jpbullalayao/simple-home-page.git
```

2. `cd` into the project, then install project dependencies

```
$ cd simple-home-page
$ npm i
```

3. Search for `TODO` in the code to replace certain placeholders with values that make sense for your project. If you like, extend any HTML and CSS to implement what you want.

4. Deploy your application via Vercel, while setting your `SENDGRID_API_KEY`, `EMAIL_TO_ADDRESS`, and `EMAIL_FROM_ADDRESS` environment variables in the process.

If you need a video demo of how to deploy your application to Vercel, see below:

And that's all that you need in order to deploy your simple home page! Now go focus on building your product 🚀

# How do I run my application?

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
