import axios from 'axios';
const PER_PAGE = 12;

const galleryApi = axios.create({
  baseURL: `https://pixabay.com/api/`,
  params: {
    key: '29356445-da33425b54a4f653a6afa2bba',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PER_PAGE,
  },
});

export const fetchImages = async (searchQuery, page) => {
  const params = {
    q: searchQuery,
    page,
  };
  try {
    const response = await galleryApi.get('/', { params });
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
  }
};
