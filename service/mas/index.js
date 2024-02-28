import axios from "axios";

export async function _GET(datasend, path) {
  const url = `${
    import.meta.env.VITE_APP_TRR_API_URL
  }/${path}`;
  
  const datasent = {
    ...datasend,
  };

  try {
    const res = await axios.post(url, datasent);
    const data = res.data;
    return data;
  } catch {
    return false;
  }
}