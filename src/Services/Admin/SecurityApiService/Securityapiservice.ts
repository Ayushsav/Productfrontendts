import apiInstance from "../../apiservice/apiInstance";

// add  security
export const createsecurityapicall = async (data: any) => {
  const response: string | any = await apiInstance.post(
    "/security/create",
    data
  );
  return response.data;
};

// fetch  security
export const fetchsecurityapicall = async () => {
  const response = await apiInstance.get("/security/fetch");
  return response.data;
};

// remove  security
export const removesecurityapicall = async (
  id: Axios.AxiosXHRConfigBase<unknown> | undefined
) => {
  const response = await apiInstance.delete(`/security/remove/${id}`);
  return response.data;
};

export const updatesecurityapicall = async (id:number,data: any) => {
  console.log(data, "data", id, "id");
  const response = await apiInstance.put(
    `/security/update/${id}`,
    data
  );

  return response.data;
};
