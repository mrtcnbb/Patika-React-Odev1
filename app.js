import axios from 'axios';

const getData = async (number) => {
  const getUsers = () => {
    return new Promise(async (resolve, reject) => {
      const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);

      resolve(data);
    });
  };

  const getPost = () => {
    return new Promise(async (resolve, reject) => {
      const { data } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);

      resolve(data);
    });
  };

  return { user: await getUsers(), post: await getPost() };
};

export default getData;
