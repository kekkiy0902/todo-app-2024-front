export const useFetch = async (url: string, options: RequestInit = {}) => {
  const baseUrl = 'http://localhost:4000';
  const fullUrl = `${baseUrl}${url}`;

  try {
    const response = await fetch(fullUrl, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
