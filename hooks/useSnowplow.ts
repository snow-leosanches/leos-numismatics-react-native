import { useEffect, useState } from "react";
import { newTracker, ReactNativeTracker } from '@snowplow/react-native-tracker';

export const useSnowplow = () => {
  const [tracker, setTracker] = useState<ReactNativeTracker>();

  useEffect(() => {
    // Initialize the Snowplow tracker.
    newTracker({
      namespace: 'leos-numismatics-react-native',
      endpoint: String(process.env['SNOWPLOW_COLLECTOR_URI']),
      appId: 'leos-numismatics-react-native',
    }).then(_tracker => setTracker(_tracker)).catch((error: any) => console.error('Error initializing Snowplow:', error));
  }, [])

  return tracker;
}