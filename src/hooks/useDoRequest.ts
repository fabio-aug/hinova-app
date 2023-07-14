import { useRef, useState } from 'react';

import services from '../services';

export interface IUseDoRequest<input, output> {
  loading: boolean,
  reset: () => void,
  doRequest: (data: input) => Promise<output>
}

function useDoRequest<input, output>(
  request: (a: typeof services) => ((data: input) => Promise<output>)
): IUseDoRequest<input, output> {
  const [loading, setLoading] = useState(false);
  const requestParamsRef = useRef<input | null>(null);

  async function doRequest(data: input): Promise<output> {
    return new Promise((resolve, reject) => {
      try {
        requestParamsRef.current = data;
        setLoading(true);
        const result = request(services)(data);
        setTimeout(() => setLoading(false), 500);
        resolve(result);
      } catch (exception) {
        setLoading(false);
        reject(`Ocorreu um erro -> ${(exception)}`);
      }
    });
  }

  function reset() {
    setLoading(false);
    requestParamsRef.current = null;
  }

  return {
    loading,
    reset,
    doRequest,
  };
}

export default useDoRequest;
