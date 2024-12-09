import { Request, Response } from 'express';
import { shopService } from './shop.service';

// Get all shops
const getAllShops = async (req: Request, res: Response): Promise<void> => {
  try {
    const shops = await shopService.getAllShops();
    res.status(200).json(shops);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shops' });
  }
};

// Get a shop by ID
const getShopById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const shop = await shopService.getShopById(Number(id));
    if (!shop) {
      res.status(404).json({ error: 'Shop not found' });
      return;
    }
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shop' });
  }
};

// Create a new shop
const createShop = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, logo, description, vendor } = req.body; // Fixed property name from 'vendorId' to 'vendor'

    const shop = await shopService.createShop({
      name,
      logo,
      description,
      vendor, // Fixed property name from 'vendor' to 'vendor'
    });

    res.status(201).json(shop);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create shop' });
  }
};


// Update a shop
const updateShop = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedShop = await shopService.updateShop(Number(id), updateData);
    res.status(200).json(updatedShop);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update shop' });
  }
};

// Delete a shop
const deleteShop = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await shopService.deleteShop(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete shop' });
  }
};

export const shopController = {
  getAllShops,
  getShopById,
  createShop,
  updateShop,
  deleteShop,
};
