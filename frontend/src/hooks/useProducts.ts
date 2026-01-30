import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  category: string;
  type?: 'package' | 'flower';
  includes?: string[];
  perfectFor?: string[];
  popular?: boolean;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
