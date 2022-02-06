import axios from "axios";

const server = axios.create({
  baseURL: "http://3.135.237.248:5222/v0.0.1",
  headers: {
    "cb-client-api-key": "6df22a6a-c971-493f-9161-6ecfc72ddc35",
  },
});

export { server };
