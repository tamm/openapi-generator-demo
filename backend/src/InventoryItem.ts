// The schema for out InventoryItem is simply dumped here in order to be included in the OpenAPI spec.
/**
 * @swagger
 * components:
 *   schemas:
 *     InventoryItem:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: d290f1ee-6c54-4b01-90e6-d701748f0851
 *         name:
 *           type: string
 *           example: Widget Adapter
 */

export interface InventoryItem {
  id: string;
  name: string;
}
