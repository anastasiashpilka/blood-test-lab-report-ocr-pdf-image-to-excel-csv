import handler from '../../pages/api/interpret-results';

jest.mock('@google/generative-ai', () => ({
  GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
    getGenerativeModel: jest.fn().mockReturnValue({
      generateContent: jest.fn().mockResolvedValue({
        response: {
          text: () =>
            JSON.stringify({
              summary: 'Most values are within normal range.',
              flaggedValues: [{ name: 'Glucose', value: '6.5', note: 'Slightly above normal.' }],
            }),
        },
      }),
    }),
  })),
}));

const mockReq = (body) => ({ method: 'POST', body });
const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('interpret-results API', () => {
  it('returns 405 for non-POST', async () => {
    const req = { method: 'GET' };
    const res = mockRes();
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(405);
  });

  it('returns 400 when headers or rows are missing', async () => {
    const req = mockReq({ headers: ['Test'] });
    const res = mockRes();
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('returns parsed interpretation on valid input', async () => {
    const req = mockReq({
      headers: ['Test', 'Result', 'Reference Range'],
      rows: [['Glucose', '6.5', '3.9-6.1']],
    });
    const res = mockRes();
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        summary: expect.any(String),
        flaggedValues: expect.any(Array),
      })
    );
  });
});
