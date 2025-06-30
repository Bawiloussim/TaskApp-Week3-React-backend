import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// Fetch all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Add a task
router.post('/', async (req, res) => {
    const newTask = new Task(req.body);
    const saved = await newTask.save();
    res.status(201).json(saved);
});

// Update a task
router.put('/:id', async (req, res) => {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// Delete a task
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

// GET all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find().select("-password"); // exclude password
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
}
});

export default router;
