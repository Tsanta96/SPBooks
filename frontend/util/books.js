import axios from 'axios';

export const fetchBooks = () => (
    axios.get("https://servicepros-test-api.herokuapp.com/api/v1/books")
);