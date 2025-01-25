import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import useApiHook from './api/useApiHook';
import { DEMO_API_FUNC } from './api/ApiFunctions';

const App = () => {

  const {
    apiData: firstApiData,
    loadingState: firstApiLoading,
    refetchingApiFunction: firstRefetchFunction,
    apiError: firstApiError
  } = useApiHook({
    apiCallingFunction: DEMO_API_FUNC,
    apiQuery: [{ "first": "first" }],
    apiPayload: [],
    runOnTimeOfScreenMount: true,
    initialLoadingState: true,
    apiCustomReturnFunction: (data: any) => {
      return data;
    },
    onErrorReturnFunction: (err: any) => {
      return err;
    },
  });

 useEffect(()=>{
  setTimeout(()=>{
    firstRefetchFunction({
      // refetchApiCallingFunctionQuery:[{"sec":"sec"}]
    })
  },5000)
 },[])
  

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App