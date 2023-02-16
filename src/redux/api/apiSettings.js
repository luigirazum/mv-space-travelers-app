import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.spacexdata.com';

// entry points
const entryPoints = {
  ROCKETS: 'v4/rockets',
  MISSIONS: 'v3/missions',
  DRAGONS: 'v4/dragons',
};

// headers
const headersList = { 'Content-Type': 'application/json' };

// request types
const GET_ROCKETS = 'GET_ROCKETS';
const GET_MISSIONS = 'GET_MISSIONS';

// create the request
const request = (request) => {
  const [requestType, entryPoint] = request.split('_');

  if (!entryPoints[entryPoint]) throw new Error(`${entryPoint} is not a valid entryPoint.`);

  switch (requestType) {
    case 'GET':
      return new Request(
        `${BASE_URL}/${entryPoints[entryPoint]}`,
        {
          method: requestType,
          headers: headersList,
        },
      );
    default:
      throw new Error(`Entry point ${BASE_URL}/${entryPoints[entryPoint]} doesn't accept ${requestType} requests.`);
  }
};

const asyncFetch = (
  actionType,
  fetchRequest,
) => createAsyncThunk(
  actionType,
  async () => {
    const response = await
    fetch(request(fetchRequest));
    return response.json();
  },
);

export { GET_ROCKETS, GET_MISSIONS };
export default asyncFetch;
