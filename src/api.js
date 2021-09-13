import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const mlopsAPI = {
    sayHello: () => api.get(""),
    makePrediction: ({model_name, age, bmi, children, sex, smoker, region}) => api.put("predict/insurance", {
      params: {
          query: model_name
      },
      data:{
        age,
        bmi,
        children,
        sex,
        smoker,
        region
      }
  }),
};
