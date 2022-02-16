import { useState, useEffect } from "react";
import axios from "axios";

const useAjax = (url) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  // const mainState = useState([]);
  // const loadingState = useState(true);
  async function request() {
    try {
      let res = [];
      console.log(url);
      res = await axios.get(url);
      setState(res.data);
    }
    catch (e) {
      console.error(e);
    }
    finally {
      // console.log(state);
      setLoading(false);
    }
  }

  useEffect(request, []);
  console.log([state, loading]);
  return [state, loading];
  // return [mainState, loadingState];
};

export default useAjax;
