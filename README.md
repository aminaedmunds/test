# Intro to Node.js

Node.js empowers developers to build scalable server-side and network applications using JavaScript, all outside the traditional browser environment. In this workshop, we'll demystify key concepts, including Node.js installation and the creation, importing, and exporting of modules.

## 🎯 Workshop Objectives

- Installation: Set up Node.js and confirm its version.
- Data Creation: Create a structured JSON file.
- Module Management: Practice importing and exporting modules using ECMAScript Modules (ESM).
- Data Handling: Learn to import, manipulate, and display JSON data.
- Application Development: Build a simple interactive CLI app.

## 🎫 Workshop Tickets

🧪 If you encounter a ticket with a test icon next to it, this indicates that you can run the corresponding test command to receive immediate feedback on your solution.

For convenience, we've added scripts to the package.json for each ticket:

```json
{
  "scripts": {
    "test:ticket1": "vitest run __tests__/ticket1.test.js",
    "test:ticket2": "vitest run __tests__/ticket2.test.js",
    "test:ticket3": "vitest run __tests__/ticket3.test.js"
  }
}
```

For example, to run the test for Ticket1, use:

```
npm run test:ticket1
```

### 🧪🎫 Ticket 1 - Install Node.js

Navigate to the [official Node.js website](https://nodejs.org/en) to download and install the LTS (Long Term Support) version.

After installation, ensure you've set it up correctly by verifying the version. Open your terminal or command prompt and type:

```
node --version
```

The output should resemble:

```
v18.17.0
```

💡 Your installed version may be newer from the one mentioned above, and that's perfectly fine.

🧪 Before moving on, run the tests for this ticket to ensure your solution is accurate:

```
npm run test:ticket1
```

### 🧪🎫 Ticket 2 - Create a bootcamper list

Create a `bootcampers.json` file in your project's root.

In this file, create an array containing the bootcampers currently in your breakout room (this week's partners).

Each bootcamper should be an object with the following properties:

- firstName (String)
- lastName (String)
- age (Number)
- hasPets (Boolean)

For example:

```json
[
  {
    "firstName": "John",
    "lastName": "Doe",
    "age": 32,
    "hasPets": false
  },
  {
    "firstName": "Jane",
    "lastName": "Doe",
    "age": 25,
    "hasPets": true
  }
]
```

💡 Remember, JSON (JavaScript Object Notation) and JavaScript objects, while visually similar, aren't the same. All property names in JSON must be strings. If needed, use [this website](https://jsonformatter.org/) to validate and format your JSON data.

🧪 Before moving on, run the tests for this ticket to ensure your solution is accurate:

```
npm run test:ticket2
```

### 🧪🎫 Ticket 3 - Create "introduce" functionality

Now that you have a bootcamper list, let's create a helper function for export, so you can utilize it in your app later on.

In your project's root, create a `bootcamper.js` file.

Inside `bootcamper.js`, define a function called `introduce`.

Ensure that you export this function, as you'll use it in another file.

The introduce function should accept a bootcamper object and return a formatted string, like:

```
"Hi, my name is John Doe. I'm 32 years old and I have no pets."
```

Or if the bootcamper owns pets:

```
"Hi, my name is Jane Doe. I'm 25 years old and I'm a pet owner."
```

🧪 Before moving on, run the tests for this ticket to ensure your solution is accurate:

```
npm run test:ticket3
```

### 🎫 Ticket 4 - Create a simple interactive CLI (Command-Line Interface) app

🚀 The following task will require you to venture beyond what we've covered so far and do some independent research, particularly on the `readline` module and importing JSON files, which we haven't touched upon. Embrace the challenge and remember that this mimics real-world scenarios where developers often need to research topics they're unfamiliar with.

Let's build an app that allows the user to select a bootcamper from a list and then get an introduction based on their selection.

Create an `app.js` file in your project's root.

Import your JSON data from `bootcampers.json` and assign it to a `bootcamperData` variable.

Next, import the `introduce` function from `bootcamper.js`.

Display a bootcamper list. Print the bootcampers, each with a number, to the console, like:

```
1. John Doe
2. Jane Doe
```

Leverage Node.js's in-built `readline` module to prompt users to select a bootcamper by their corresponding number.

Upon a user's selection, call the introduce function for the selected bootcamper and display the result.

✔️ Verification - There are no tests for this ticket. Please manually test your solution against the following criteria:

- You can run the app using the `node app.js` command.
- After you run the app, the output shows a numbered list of bootcampers.
- After selecting a bootcamper by number, the correct introduction for the selected bootcamper is displayed.

## 🥳🏁🔥 Congratulations!

You've accomplished a lot in this workshop:

1. Node.js Setup: You've successfully set up Node.js on your machine, ensuring you have the tools to start building powerful server-side applications.
2. Data Management: You've mastered the art of managing JSON data, a ubiquitous format in the web world.
3. Module Handling: Through importing and exporting, you've seen how Node.js allows for modular and organized code.
4. Building Simple Apps: By creating a CLI app, you've taken your first step into the world of Node.js applications.

This foundation sets the stage for more advanced topics in Node.js. As you progress, you'll explore deeper aspects of backend development, from building RESTful APIs to deploying scalable apps. Great job, and here's to more coding adventures ahead! 🚀
