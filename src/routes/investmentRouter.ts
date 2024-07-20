// eslint-disable-next-line import/no-import-module-exports
import express from 'express';

import { getAll } from '../controllers/investmentController';

// const router = express.Router({ mergeParams: true }); // mergeparams?? -------------
const router = express.Router(); // mergeparams?? -------------

router.route('/').get(getAll);
// .post(orderController.createOrder);

// router
//   .route('/getOrdersByProductName')
//   .get(orderProductController.getOrdersByProductNames);
// router
//   .route('/:id')
//   .get(orderController.getOrder)
//   .patch(orderController.updateOrder)
//   .delete(orderController.deleteOrder);

// import express from 'express';
// import type { Request, Response } from 'express';
// import { body, validationResult } from 'express-validator';

// const investmentRouter = express.Router();

// // GET: List of all Investments
// investmentRouter.get('/', async (request: Request, response: Response) => {
//   try {
//     const investments = await AuthorService.listAuthors();
//     return response.status(200).json(authors);
//   } catch (error: any) {
//     return response.status(500).json(error.message);
//   }
// });

// export default investmentRouter;

// // GET: A single author by ID
// authorRouter.get('/:id', async (request: Request, response: Response) => {
//   const id: number = parseInt(request.params.id, 10);
//   try {
//     const author = await AuthorService.getAuthor(id);
//     if (author) {
//       return response.status(200).json(author);
//     }
//     return response.status(404).json('Author could not be found');
//   } catch (error: any) {
//     return response.status(500).json(error.message);
//   }
// });

// // POST: Create a Author
// // Params: firstName, lastName
// authorRouter.post(
//   '/',
//   body('firstName').isString(),
//   body('lastName').isString(),
//   async (request: Request, response: Response) => {
//     const errors = validationResult(request);
//     if (!errors.isEmpty()) {
//       return response.status(400).json({ errors: errors.array() });
//     }
//     try {
//       const author = request.body;
//       const newAuthor = await AuthorService.createAuthor(author);
//       return response.status(201).json(newAuthor);
//     } catch (error: any) {
//       return response.status(500).json(error.message);
//     }
//   },
// );

// // PUT: Updating an Author
// // Params: firstName, lastName
// authorRouter.put(
//   '/:id',
//   body('firstName').isString(),
//   body('lastName').isString(),
//   async (request: Request, response: Response) => {
//     const errors = validationResult(request);
//     if (!errors.isEmpty()) {
//       return response.status(400).json({ errors: errors.array() });
//     }
//     const id: number = parseInt(request.params.id, 10);
//     try {
//       const author = request.body;
//       const updatedAuthor = await AuthorService.updateAuthor(author, id);
//       return response.status(200).json(updatedAuthor);
//     } catch (error: any) {
//       return response.status(500).json(error.message);
//     }
//   },
// );

// // DELETE: Delete an author based on the id
// authorRouter.delete('/:id', async (request: Request, response: Response) => {
//   const id: number = parseInt(request.params.id, 10);
//   try {
//     await AuthorService.deleteAuthor(id);
//     return response.status(204).json('Author has been successfully deleted');
//   } catch (error: any) {
//     return response.status(500).json(error.message);
//   }
// });

export default router;
