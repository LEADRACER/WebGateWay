const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data = await response.json().catch(() => ({}));
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async get(endpoint) {
    return this.request(endpoint);
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);

export const buildService = {
  getAll: async () => {
    const response = await apiClient.get('/builds');
    return response.data || [];
  },

  getById: async (id) => {
    const response = await apiClient.get(`/builds/${id}`);
    return response.data;
  },

  create: async (buildData) => {
    const response = await apiClient.post('/builds', buildData);
    return response.data;
  },

  update: async (id, buildData) => {
    const response = await apiClient.put(`/builds/${id}`, buildData);
    return response.data;
  },

  delete: async (id) => {
    const response = await apiClient.delete(`/builds/${id}`);
    return response.data;
  },
};

export const healthService = {
  check: async () => {
    const response = await apiClient.get('/health');
    return response;
  },
};