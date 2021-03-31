# Example TypeScript + Express project with auto-generating OpenAPI specification

This project is a simple demonstration of how you can set up Node.js + Express + TypeScript, adding a special endpoint which generates an OpenAPI schema as well as displays it using Swagger UI.

If you need to use something like this in production you can probably do a lot better than this demo, keep in mind it is as simple as possible for the purposes of demonstration.

## Installation / Getting it started

Just navigate to this folder and run

```
npm install
npm start
```

### Data

As a shortcut this project just stores its data as a `.json` file in the root directory using Node FS commands.

There is no `inventory.json` by default, please start the project and use the `addInventory` endpoint to add something.

If you'd like to set it up with something you can create the file manually and enter something like:

```
[
    {
        "id":"08f873e7-b8f3-43e0-b5d2-1aa0d7ad6fa3",
        "name":"New item name"
    }
]
```
