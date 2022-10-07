import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog, getLogin } from '../controllers/BlogController.js'
import { getAllPart, createPart, updatePart } from '../controllers/PartController.js'
const router = express.Router()

router.get('/',getAllBlogs)
router.get('/:id',getBlog)
router.post('/',createBlog)
router.put('/:id', updateBlog)
router.delete('/:id',deleteBlog)
router.post('/login', getLogin)
router.get('/usuarios/part', getAllPart)
router.post('/usuarios/Crear', createPart)
router.put('/usuarios/Editar/:id', updatePart)

export default router