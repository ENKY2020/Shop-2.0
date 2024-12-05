import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types
export type User = {
  id: string;
  email: string;
  name: string;
  phone: string;
  created_at: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  seller_email: string;
  seller_phone: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
};

// Auth helpers
export const isAdmin = (email: string | undefined) => {
  return email === 'mugendievans10@gmail.com';
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
};

export const signUp = async (email: string, password: string, userData: Partial<User>) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData,
    },
  });

  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

// Product helpers
export const uploadProductImage = async (file: File) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `products/${fileName}`;

  const { error: uploadError, data } = await supabase.storage
    .from('products')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from('products')
    .getPublicUrl(filePath);

  return publicUrl;
};

export const createProduct = async (product: Omit<Product, 'id' | 'created_at' | 'status'>) => {
  const { data, error } = await supabase
    .from('products')
    .insert([{ ...product, status: 'pending' }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getApprovedProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('status', 'approved')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const getPendingProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('status', 'pending')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const updateProductStatus = async (id: string, status: Product['status']) => {
  const { error } = await supabase
    .from('products')
    .update({ status })
    .eq('id', id);

  if (error) throw error;
};