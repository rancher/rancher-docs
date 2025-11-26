// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { CardSection, Card } from '../components/CardComponents';

import CNIPopularityTable from '/shared-files/_cni-popularity.md';
import DeprecationOPAGatekeeper from '/shared-files/_deprecation-opa-gatekeeper.md';
import DeprecationWeave from '/shared-files/_deprecation-weave.md';
import DeprecationHelm2 from '/shared-files/_deprecation-helm2.md';
import DockerSupportWarning from '/shared-files/_docker-support-warning.md';
import ConfigureSLO from '/shared-files/_configure-slo.md';
import ConfigureSLOOidc from '/shared-files/_configure-slo-oidc.md';
import EOLRKE1Warning from '/shared-files/_eol-rke1-warning.md';
import PermissionsWarning from '/shared-files/_permissions-warning.md';

export default {
  // Re-use the default mapping
  ...MDXComponents,

  Tabs: Tabs,
  TabItem: TabItem,

  CardSection,
  Card,

  CNIPopularityTable,
  ConfigureSLO,
  ConfigureSLOOidc,
  DeprecationOPAGatekeeper,
  DeprecationWeave,
  DeprecationHelm2,
  DockerSupportWarning,
  EOLRKE1Warning,
  PermissionsWarning,
};
