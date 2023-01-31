
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Rancher Manager',
  tagline: '',
  url: 'http://ranchermanager.docs.rancher.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'rancher', // Usually your GitHub org/user name.
  projectName: 'rancher-docs', // Usually your repo name.
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        label: "English",
      },
      zh: {
        label: "简体中文",
      },
    },
  },
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '30NEY6C9UY',

      // Public API key: it is safe to commit it
      apiKey: '8df59222c0ad79fdacb4d45d11e21d2e',

      indexName: 'docs_ranchermanager_rancher_io',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ['rust'],
    },
    navbar: {
      title: "",
      logo: {
        alt: 'logo',
        src: 'img/rancher-logo-horiz-color.svg',
        // href: 'en',
      },
      items: [
        {
            type: "localeDropdown",
            position: "right",
        },
        {
          href: 'https://github.com/rancher/rancher-docs',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__github',
        },
        {
          href: 'https://rancher.com',
          label: 'Rancher Home',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: false,
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} SUSE Rancher. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/rancher/rancher-docs/edit/main/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v2.7'
            },
            2.6: {
              label: 'v2.6',
              path: 'v2.6',
              banner: 'none'
            },
            2.5: {
              label: 'v2.5',
              path: 'v2.5'
            },
            '2.0-2.4': {
              label: 'v2.0-v2.4',
              path: 'v2.0-v2.4'
            },
          },
        },
        blog: false, // Optional: disable the blog plugin
        // ...
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-57KS2MW', // GTM Container ID
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'],
        redirects: [
          { // Redirects for links in UI (start)
            to: '/faq/telemetry/',
            from: '/v2.7/faq/telemetry/'
          },
          {
            to: '/pages-for-subheaders/monitoring-v2-configuration',
            from: '/v2.7/pages-for-subheaders/monitoring-v2-configuration'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences',
            from: '/v2.7/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences'
          },
          {
            to: '/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager',
            from: '/v2.7/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth',
            from: '/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth'
          }, // Redirects for links in UI (end)
          { // Redirects for AWS Marketplace (start)
            to: '/integrations-in-rancher/cloud-marketplace/supportconfig',
            from: '/v2.7/integrations-in-rancher/cloud-marketplace/supportconfig'
          },
          {
            to: '/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements',
            from: '/v2.7/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements'
          },
          {
            to: '/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter',
            from: '/v2.7/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter'
          }, // Redirects for AWS Marketplace (end)
          { // Redirects for restructure from PR #234 (start)
            to: '/faq/general-faq',
            from: '/faq'
          },
          {
            to: '/troubleshooting/general-troubleshooting',
            from: '/troubleshooting'
          },
          {
            to: '/getting-started/overview',
            from: '/getting-started/introduction/overview'
          },
          {
            to: '/how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64',
            from: '/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64'
          },
          {
            to: '/how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers',
            from: '/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers'
          },
          {
            to: '/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features',
            from: '/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features'
          },
          {
            to: '/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery',
            from: '/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery'
          },
          {
            to: '/getting-started/installation-and-upgrade/installation-references/helm-chart-options',
            from: '/reference-guides/installation-references/helm-chart-options'
          },
          {
            to: '/getting-started/installation-and-upgrade/installation-references/tls-settings',
            from: '/reference-guides/installation-references/tls-settings'
          },
          {
            to: '/getting-started/installation-and-upgrade/installation-references/feature-flags',
            from: '/reference-guides/installation-references/feature-flags'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-google-oauth'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-freeipa',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-oidc',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-saml'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-pingidentity',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-shibboleth-saml/about-group-permissions',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap/openldap-config-reference',
            from: '/reference-guides/configure-openldap/openldap-config-reference'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/custom-branding',
            from: '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/custom-branding'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/install-cluster-autoscaler/use-aws-ec2-auto-scaling-groups',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/install-cluster-autoscaler/use-aws-ec2-auto-scaling-groups'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/nfs-storage',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/nfs-storage'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/vsphere-storage',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/rotate-certificates',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/rotate-encryption-key'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/assign-pod-security-policies',
            from: '/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/rke1-vs-rke2-differences'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/azure-storageclass-configuration',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/windows-linux-cluster-feature-parity',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/network-requirements-for-host-gateway',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/workload-migration-guidance',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/amazon',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/azure',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/google-compute-engine'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree'
          },
          {
            to: '/how-to-guides/new-user-guides/add-users-to-projects',
            from: '/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-namespaces',
            from: '/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces'
          },
          {
            to: '/how-to-guides/advanced-user-guides/open-ports-with-firewalld',
            from: '/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld'
          },
          {
            to: '/how-to-guides/advanced-user-guides/tune-etcd-for-large-installs',
            from: '/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs'
          },
          {
            to: '/how-to-guides/advanced-user-guides/enable-api-audit-log',
            from: '/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log'
          },
          {
            to: '/how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer',
            from: '/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer'
          },
          {
            to: '/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements',
            from: '/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements'
          },
          {
            to: '/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter',
            from: '/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter'
          },
          {
            to: '/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter',
            from: '/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter'
          },
          {
            to: '/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues',
            from: '/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues'
          },
          {
            to: '/integrations-in-rancher/cloud-marketplace/supportconfig',
            from: '/explanations/integrations-in-rancher/cloud-marketplace/supportconfig'
          },
          {
            to: '/integrations-in-rancher/cis-scans/configuration-reference',
            from: '/explanations/integrations-in-rancher/cis-scans/configuration-reference'
          },
          {
            to: '/integrations-in-rancher/cis-scans/rbac-for-cis-scans',
            from: '/explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans'
          },
          {
            to: '/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests',
            from: '/explanations/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests'
          },
          {
            to: '/integrations-in-rancher/cis-scans/custom-benchmark',
            from: '/explanations/integrations-in-rancher/cis-scans/custom-benchmark'
          },
          {
            to: '/integrations-in-rancher/fleet-gitops-at-scale/architecture',
            from: '/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture'
          },
          {
            to: '/integrations-in-rancher/fleet-gitops-at-scale/windows-support',
            from: '/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support'
          },
          {
            to: '/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy',
            from: '/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy'
          },
          {
            to: '/integrations-in-rancher/harvester',
            from: '/explanations/integrations-in-rancher/harvester'
          },
          {
            to: '/integrations-in-rancher/istio/cpu-and-memory-allocations',
            from: '/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations'
          },
          {
            to: '/integrations-in-rancher/istio/rbac-for-istio',
            from: '/explanations/integrations-in-rancher/istio/rbac-for-istio'
          },
          {
            to: '/integrations-in-rancher/istio/disable-istio',
            from: '/explanations/integrations-in-rancher/istio/disable-istio'
          },
          {
            to: '/integrations-in-rancher/istio/configuration-options/pod-security-policies',
            from: '/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies'
          },
          {
            to: '/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations',
            from: '/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations'
          },
          {
            to: '/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster',
            from: '/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster'
          },
          {
            to: '/integrations-in-rancher/istio/configuration-options/project-network-isolation',
            from: '/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation'
          },
          {
            to: '/integrations-in-rancher/longhorn',
            from: '/explanations/integrations-in-rancher/longhorn'
          },
          {
            to: '/integrations-in-rancher/logging/logging-architecture',
            from: '/explanations/integrations-in-rancher/logging/logging-architecture'
          },
          {
            to: '/integrations-in-rancher/logging/rbac-for-logging',
            from: '/explanations/integrations-in-rancher/logging/rbac-for-logging'
          },
          {
            to: '/integrations-in-rancher/logging/logging-helm-chart-options',
            from: '/explanations/integrations-in-rancher/logging/logging-helm-chart-options'
          },
          {
            to: '/integrations-in-rancher/logging/taints-and-tolerations',
            from: '/explanations/integrations-in-rancher/logging/taints-and-tolerations'
          },
          {
            to: '/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows',
            from: '/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows'
          },
          {
            to: '/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs',
            from: '/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs'
          },
          {
            to: '/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works',
            from: '/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works'
          },
          {
            to: '/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring',
            from: '/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring'
          },
          {
            to: '/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards',
            from: '/explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards'
          },
          {
            to: '/integrations-in-rancher/monitoring-and-alerting/windows-support',
            from: '/explanations/integrations-in-rancher/monitoring-and-alerting/windows-support'
          },
          {
            to: '/integrations-in-rancher/monitoring-and-alerting/promql-expressions',
            from: '/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions'
          },
          {
            to: '/integrations-in-rancher/neuvector',
            from: '/explanations/integrations-in-rancher/neuvector'
          },
          {
            to: '/integrations-in-rancher/opa-gatekeeper',
            from: '/explanations/integrations-in-rancher/opa-gatekeeper'
          }, // Redirects for restructure from PR #234 (end)
        ],
      },
    ],
  ],
  scripts: [
    {
      src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
      type:'text/javascript',
      charset: 'UTF-8',
      'data-domain-script': '0f98beb0-fc4c-417d-a42e-564e2cae42d2',
      async: true
    },
    {
      src: '/scripts/optanonwrapper.js',
      type:'text/javascript',
      async: true
    },
    // "/scripts/optanonwrapper.js"
  ],
};
