// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { CardSection, Card } from '../components/CardComponents';

import CNIPopularityTable from '/shared-files/_cni-popularity.md';

export default {
  // Re-use the default mapping
  ...MDXComponents,

  Tabs: Tabs,
  TabItem: TabItem,

  CardSection,
  Card,

  CNIPopularityTable,
};
