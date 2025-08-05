import api from '@/lib/axios';

type ErrorResponse = {
  response?: {
    data?: {
      message?: string;
    };
  };
};

export const registerUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post('/auth/register', { name, email, password });

    return res.data;
  } catch (error: any) {
    const errorTyped: ErrorResponse = error;
    const message: string =
      errorTyped.response?.data?.message || 'Failed to register';
    throw new Error(message);
  }
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post('/auth/login', credentials);

    return res.data;
  } catch (error: any) {
    const errorTyped: ErrorResponse = error;
    const message: string =
      errorTyped.response?.data?.message || 'Failed to login';
    throw new Error(message);
  }
};

export const logoutUser = async () => {
  try {
    await api.post('/auth/logout')
  } catch (error: any) {
    const errorTyped: ErrorResponse = error;
    const message: string =
      errorTyped.response?.data?.message || 'Failed to logout';
    throw new Error(message);
  }
}
