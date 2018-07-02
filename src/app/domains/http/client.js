import axios from "axios";

const factory = () => axios.create();
const http = factory();

export { http, factory };
