import { getHandler } from '../src/handlers/get-handler';

describe('getHandler', () => {
  it('should send json on query', () => {
    const mockReq = {
      query: {
        incomeRange: '0-12000',
        ageRange: '65+',
        isStudent: 'yes'
      }
    };

    const mockRes = {
      json: jest.fn()
    }

    getHandler(mockReq as any, mockRes as any);
    expect(mockRes.json).toHaveBeenCalledTimes(1);
  });

  it('should send 400 response on missing query parameters', () => {
    const mockRes: any = {
      status: jest.fn(() => mockRes),
      send: jest.fn()
    };

    const mockReq1 = {
      query: {
        incomeRange: '',
        ageRange: '',
        isStudent: ''
      }
    };

    const mockReq2 = {
      query: {
        incomeRange: '12000',
        ageRange: '0-18',
        isStudent: ''
      }
    };

    const mockReq3 = {
      query: {
        incomeRange: '',
        ageRange: '50-60',
        isStudent: 'yes'
      }
    };

    const mockReq4 = {
      query: {
        incomeRange: '1-1000',
        ageRange: '',
        isStudent: 'no'
      }
    };

    const mockReqs: any[] = [mockReq1, mockReq2, mockReq3, mockReq4];

    for (let i = 0; i < mockReqs.length; i++) {
      getHandler(mockReqs[i], mockRes);
      expect(mockRes.status).toHaveBeenCalledTimes(i + 1);
      expect(mockRes.send).toHaveBeenCalledTimes(i + 1);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('Wrong query');
    }
  });

  it('should send 400 response on bad query parameters', () => {
    const mockRes: any = {
      status: jest.fn(() => mockRes),
      send: jest.fn()
    };

    const mockReq1 = {
      query: {
        incomeRange: '0-452',
        ageRange: '5+',
        isStudent: 'yesno'
      }
    };

    const mockReq2 = {
      query: {
        incomeRange: '1200a0',
        ageRange: '0-18',
        isStudent: 'yes'
      }
    };

    const mockReq3 = {
      query: {
        incomeRange: '50-100',
        ageRange: '50-60+',
        isStudent: 'yes'
      }
    };

    const mockReq4 = {
      query: {
        incomeRange: '01-1000',
        ageRange: '0-30',
        isStudent: 'no'
      }
    };

    const mockReqs: any[] = [mockReq1, mockReq2, mockReq3, mockReq4];

    for (let i = 0; i < mockReqs.length; i++) {
      getHandler(mockReqs[i], mockRes);
      expect(mockRes.status).toHaveBeenCalledTimes(i + 1);
      expect(mockRes.send).toHaveBeenCalledTimes(i + 1);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('Wrong query');
    }
  });
});