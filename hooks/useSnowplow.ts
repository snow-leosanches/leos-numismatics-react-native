import { useEffect, useState } from "react";
import { newTracker, ReactNativeTracker } from '@snowplow/react-native-tracker';

export const useSnowplow = () => {
  const [tracker, setTracker] = useState<ReactNativeTracker>();

  useEffect(() => {
    // Initialize the Snowplow tracker.
    newTracker({
      namespace: 'leos-numismatics-react-native',
      endpoint: 'https://collector-sales-aws.snowplow.io',
      appId: 'leos-numismatics-react-native',
    }).then(_tracker => setTracker(_tracker)).catch((error: any) => console.error('Error initializing Snowplow:', error));
  }, [])

  return tracker;
}