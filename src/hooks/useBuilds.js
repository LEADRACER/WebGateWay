import { useState, useEffect, useCallback } from 'react';
import { buildService } from '../api/index.js';

export const useBuilds = () => {
  const [builds, setBuilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBuilds = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await buildService.getAll();
      setBuilds(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch builds');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBuilds();
  }, [fetchBuilds]);

  const createBuild = useCallback(async (buildData) => {
    try {
      const data = await buildService.create(buildData);
      setBuilds(prev => [data, ...prev]);
      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const updateBuild = useCallback(async (id, buildData) => {
    try {
      const data = await buildService.update(id, buildData);
      setBuilds(prev => prev.map(b => b.id === id ? data : b));
      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const deleteBuild = useCallback(async (id) => {
    try {
      await buildService.delete(id);
      setBuilds(prev => prev.filter(b => b.id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const refetch = fetchBuilds;

  return {
    builds,
    loading,
    error,
    refetch,
    createBuild,
    updateBuild,
    deleteBuild,
  };
};

export const useBuild = (id) => {
  const [build, setBuild] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBuild = useCallback(async () => {
    if (!id) return;
    try {
      setLoading(true);
      setError(null);
      const data = await buildService.getById(id);
      setBuild(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch build');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchBuild();
  }, [fetchBuild]);

  return { build, loading, error, refetch: fetchBuild };
};