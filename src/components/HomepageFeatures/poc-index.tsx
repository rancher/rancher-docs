import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Card, CardSection} from '../CardComponents';
import {
  ReadingModeMobileRegular, 
  QuestionRegular, 
  ArrowUpRegular,
  PlayRegular,
  FlowchartRegular,
  RocketRegular
} from '@fluentui/react-icons';
import { FaAws, FaGoogle, FaCloud } from "react-icons/fa";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <br></br>
        <CardSection
          id="Gettingstarted"
          icon={<RocketRegular />}
          title="Getting Started"
        >
          <Card
            title="What is Rancher?"
            icon={<QuestionRegular />}
            to="/intro"
            description="Understand what Rancher is and is not"
          />
          <Card
            title="Overview"
            icon={<ReadingModeMobileRegular />}
            to="/getting-started/overview"
            description="Learn about the core capabilities"
          />
          <Card
            title="Rancher Concepts"
            icon={<FlowchartRegular />}
            to="/pages-for-subheaders/rancher-manager-architecture"
            description="Learn about high level concepts, architectural elements of Rancher"
          />
          <Card
            title="Install Rancher"
            icon={<ArrowUpRegular />}
            to="/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"
            description="Quick way to helm install Rancher in a Kubernetes cluster"
          />
          <Card
            title="Deploy Workloads"
            icon={<PlayRegular />}
            to="/pages-for-subheaders/deploy-rancher-workloads"
            description="Deploy a sample workload"
          />
        </CardSection>
        <CardSection
          id="CloudDeployments"
          title="Cloud Deployment"
        >
          <Card
            icon={<FaAws />}
            to="/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"
            description="Deploy Rancher on an Amazon EKS cluster"
          />
          <Card
            icon={<FaCloud />}
            to="/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks"
            description="Deploy Rancher on Microsoft's Azure Kubernetes Service (AKS)"
          />
          <Card
            icon={<FaGoogle />}
            to="/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke"
            description="Deploy Rancher on Google Kubernetes Engine"
          />
        </CardSection>
      </div>
    </section>
  );
}
