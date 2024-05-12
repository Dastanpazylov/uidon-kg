import axios from 'axios';

const $api = axios.create({
  baseURL: 'http://16.171.21.135/api/',
});

$api.defaults.headers.post['Content-Type'] = 'application/json';

export const signUp = async (userData) => {
  console.log(userData);
  try {
    const response = await $api.post('auth/signup/', JSON.stringify(userData));
    console.log('response', response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createSkill = async (name) => {
  try {
    const response = await $api.post('qualifications/skills/', {
      name: name,
    });
    if (response.status === 201) {
      console.log('response.data:', response.data);
      return response.data;
    } else {
      console.error('response.statusText:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('error:', error);
    return null;
  }
};

export const deleteSkill = async (id) => {
  try {
    const response = await $api.delete(`qualifications/skills/${id}`);
    if (response.status === 204) {
      return id; 
    } else {
      console.error('response.statusText:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('error:', error);
    return null;
  }
};

