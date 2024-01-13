import Community from "../models/createCommunity.model.js";

export const createCommunity = async (req,res,next) => {
  try {
    const community = await Community.create(req.body);
    return res.status(201).json(community)
  } catch (error) {
    next(error);
  }
}