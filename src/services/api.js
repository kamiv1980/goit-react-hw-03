import axios from 'axios';

const key = '21768307-080db5f9e0b30805274214867';

const baseUrl = 'https://pixabay.com/api/?key=' + key + '&';
const images = ({ value = '', page = 1 }) => baseUrl + `q=${value}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;

export const api = {
    getImages: (props) => axios.get(images(props)),
};
