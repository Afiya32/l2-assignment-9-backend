import { Request, Response } from 'express';
import { orderItemService } from './orderitem.service';

// Get all order items
const getAllOrderItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderItems = await orderItemService.getAllOrderItems();
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order items' });
  }
};

// Get an order item by ID
const getOrderItemById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const orderItem = await orderItemService.getOrderItemById(Number(id));
    if (!orderItem) {
      res.status(404).json({ error: 'Order item not found' });
      return;
    }
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order item' });
  }
};

// Create a new order item
const createOrderItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { orderId, productId, quantity, price } = req.body;

    const orderItem = await orderItemService.createOrderItem({
      orderId,
      productId,
      quantity,
      price,
    });

    res.status(201).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order item' });
  }
};

// Update an existing order item
const updateOrderItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedOrderItem = await orderItemService.updateOrderItem(Number(id), updateData);
    res.status(200).json(updatedOrderItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order item' });
  }
};

// Delete an order item
const deleteOrderItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await orderItemService.deleteOrderItem(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete order item' });
  }
};

export const orderItemController = {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
