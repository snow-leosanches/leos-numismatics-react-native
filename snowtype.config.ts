import { SnowtypeConfig } from "@snowplow/snowtype/types";
const config: SnowtypeConfig = {
  igluCentralSchemas: [],
  dataStructures: [],
  repositories: [],
  eventSpecificationIds: [],
  dataProductIds: [],
  organizationId: 'b12539df-a711-42bd-bdfa-175308c55fd5',
  tracker: '@snowplow/react-native-tracker',
  language: 'typescript',
  outpath: './snowtype'
}

export default config;