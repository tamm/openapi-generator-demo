import * as express from 'express';
import fs from 'fs';
import { InventoryItem } from '../InventoryItem';

export const register = (app: express.Application) => {
  /**
   * @openapi
   * /inventory:
   *   get:
   *     description: Get a list of items in our inventory.
   *     tags: [Inventory]
   *     operationId: getInventory
   *     responses:
   *       404:
   *         description: There was no list to render.
   *       200:
   *         description: Returns a list of InventoryItem(s).
   *         content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/InventoryItem'
   */
  app.get('/inventory', (req, res) => {
    // This is a terrible way to read a file to an endpoint and is only done for brevity.
    const fileName = './inventory.json';

    if (!fs.existsSync(fileName)) {
      console.log(`${req.path}: Inventory file '${fileName}' not found`);
      res.status(404);
      // Send an empty list to be friendly
      res.send('[]');
    }

    const file = fs.readFileSync(fileName, 'utf8');
    res.send(JSON.parse(file));
  });

  /**
   * @openapi
   * /inventory:
   *   post:
   *     description: Add an item to our inventory.
   *     tags: [Inventory]
   *     operationId: addInventory
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/InventoryItem'
   *       description: Inventory item to add.
   *     responses:
   *       201:
   *         description: Item was added to the list.
   *       400:
   *         description: Bad input data.
   */
  app.post('/inventory', (req, res) => {
    // This is a terrible way to write a file based on input from an endpoint and is only done for brevity.
    const fileName = './inventory.json';
    const { body }: { body: InventoryItem } = req;
    let data;

    if (!body || !body.name) {
      console.log(`${req.path}: Bad input data.`);
      res.status(400);
      res.send();
      return;
    }

    if (!fs.existsSync(fileName)) {
      console.log(
        `${req.path}: Inventory file '${fileName}' not found, substituting empty list.`
      );
      data = [];
    } else {
      data = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    }

    data.push(body);
    fs.writeFileSync(fileName, JSON.stringify(data));

    res.status(201);
    res.send();
  });
};
