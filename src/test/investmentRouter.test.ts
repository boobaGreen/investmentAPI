// src/test/investmentRouter.test.ts
import request from './setupTest'; // Importa il client di test configurato

describe('Investment Router', () => {
  // Test per ottenere tutti gli investimenti
  //   it('should return all investments', async () => {
  //     // Utilizza un token di accesso valido (potrebbe essere necessario configurarli nei tuoi test o nei tuoi setup)
  //     const response = await request
  //       .get('/api/investment')
  //       .set('Cookie', `authToken=validTokenForRead`) // Imposta un token di accesso valido
  //       .expect(200);
  //     expect(response.body).toHaveProperty('status', 'success');
  //     expect(response.body).toHaveProperty('doc');
  //     expect(Array.isArray(response.body.doc)).toBe(true);
  //   });
  //   // Test per creare un nuovo investimento
  //   it('should create a new investment', async () => {
  //     const response = await request
  //       .post('/api/investment')
  //       .set('Cookie', `authToken=validTokenForWrite`) // Imposta un token di accesso valido
  //       .send({ value: 1000, annualInterestRate: 5 })
  //       .expect(201);
  //     expect(response.body).toHaveProperty('status', 'success');
  //     expect(response.body).toHaveProperty('data');
  //     expect(response.body.data).toHaveProperty('value', 1000);
  //     expect(response.body.data).toHaveProperty('annualInterestRate', 5);
  //   });
  //   // Test per ottenere le statistiche sugli investimenti
  //   it('should return investment statistics', async () => {
  //     const response = await request
  //       .get('/api/investment/stats')
  //       .set('Cookie', `authToken=validTokenForRead`) // Imposta un token di accesso valido
  //       .query({
  //         startDate: '2024-01-01',
  //         endDate: '2024-12-31',
  //         granularity: 'month',
  //       })
  //       .expect(200);
  //     expect(response.body).toHaveProperty('status', 'success');
  //     expect(response.body).toHaveProperty('data');
  //     expect(response.body.data).toHaveProperty('totalInvestments');
  //     expect(response.body.data).toHaveProperty('totalValue');
  //     expect(response.body.data).toHaveProperty('details');
  //   });
  //   // Test per gestire la creazione di un investimento senza campi obbligatori
  //   it('should return an error when creating an investment without required fields', async () => {
  //     const response = await request
  //       .post('/api/investment')
  //       .set('Cookie', `authToken=validTokenForWrite`) // Imposta un token di accesso valido
  //       .send({ value: 1000 }) // Missing annualInterestRate
  //       .expect(400);
  //     expect(response.body).toHaveProperty('status', 'fail');
  //     expect(response.body).toHaveProperty(
  //       'message',
  //       'Missing value or annualInterestRate in request body',
  //     );
  //   });
  // Test per gestire la mancanza di token di autenticazione
  //   it('should return an error when missing authentication token', async () => {
  //     const response = await request
  //       .post('/api/investment')
  //       .send({ value: 1000, annualInterestRate: 5 })
  //       .expect(401);
  //     expect(response.body).toHaveProperty('status', 'fail');
  //     expect(response.body).toHaveProperty('message', 'Authentication failed');
  //   });
});
