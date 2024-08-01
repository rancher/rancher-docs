
/** @type {import('@docusaurus/types').DocusaurusConfig} */
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

module.exports = {
  title: 'Rancher',
  tagline: '',
  url: 'https://ranchermanager.docs.rancher.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'rancher', // Usually your GitHub org/user name.
  projectName: 'rancher-docs', // Usually your repo name.
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
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
      // 'light' | 'dark'
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ['rust'],
    },
    navbar: {
      title: '',
      logo: {
        alt: 'logo',
        src: 'img/rancher-logo-horiz-color.svg',
        // href: 'en',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: false,
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          type: 'search',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Quick Links',
          position: 'right',
          items: [
            {
              href: 'https://github.com/rancher/rancher',
              label: 'GitHub',
            },
            {
              href: 'https://github.com/rancher/rancher-docs',
              label: 'Docs GitHub',
            },
          ]
        },
        {
          type: 'dropdown',
          label: 'More from SUSE',
          position: 'right',
          items: [
            {
              href: 'https://www.rancher.com',
              label: 'Rancher',
              className: 'navbar__icon navbar__rancher'
            },
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: 'https://elemental.docs.rancher.com/',
              label: 'Elemental',
              className: 'navbar__icon navbar__elemental'
            },
            {
              href: 'https://fleet.rancher.io/',
              label: 'Fleet',
              className: 'navbar__icon navbar__fleet'
            },
            {
              href: 'https://harvesterhci.io',
              label: 'Harvester',
              className: 'navbar__icon navbar__harvester'
            },
            {
              href: 'https://rancherdesktop.io/',
              label: 'Rancher Desktop',
              className: 'navbar__icon navbar__rancher__desktop'
            },
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: 'https://opensource.suse.com',
              label: 'More Projects...',
              className: 'navbar__icon navbar__suse'
            },
          ]
        }
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
              label: 'Latest',
            },
            2.9: {
              label: 'v2.9',
              path: 'v2.9',
              banner: 'none'
            },
            2.8: {
              label: 'v2.8',
              path: 'v2.8',
              banner: 'none'
            },
            2.7: {
              label: 'v2.7',
              path: 'v2.7',
              banner: 'none'
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
          customCss: [require.resolve('./src/css/custom.css')],
        },
        googleTagManager: {
          containerId: 'GTM-57KS2MW',
        },
      },
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: 'rancher-api',
            spec: 'openapi/swagger.json',
            // route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
  ],
  plugins: [
   tailwindPlugin,
   [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'],
        redirects: [
          { // Redirects for multi-cluster apps removal (rancher-docs/issues/734)
            to: '/integrations-in-rancher/fleet',
            from: ['/pages-for-subheaders/deploy-apps-across-clusters', '/how-to-guides/new-user-guides/deploy-apps-across-clusters', '/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet', '/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps']
          },
          {
            to: '/v2.8/integrations-in-rancher/fleet',
            from: ['/v2.8/pages-for-subheaders/deploy-apps-across-clusters', '/v2.8/how-to-guides/new-user-guides/deploy-apps-across-clusters', '/v2.8/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet', '/v2.8/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps']
          }, 
          {
            to: '/v2.7/integrations-in-rancher/fleet-gitops-at-scale',
            from: ['/v2.7/pages-for-subheaders/deploy-apps-across-clusters', '/v2.7/how-to-guides/new-user-guides/deploy-apps-across-clusters', '/v2.7/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet', '/v2.7/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps']
          },// Redirects for multi-cluster apps removal (rancher-docs/issues/734) (end)
          {
            to: '/faq/deprecated-features',
            from: '/faq/deprecated-features-in-v2.5'
          },
          {
            to: '/v2.8/faq/deprecated-features',
            from: '/v2.8/faq/deprecated-features-in-v2.5'
          },
          {
            to: '/v2.7/faq/deprecated-features',
            from: '/v2.7/faq/deprecated-features-in-v2.5'
          },
          {
            to: '/v2.6/faq/deprecated-features',
            from: '/v2.6/faq/deprecated-features-in-v2.5'
          },
          {
            to: '/v2.5/faq/deprecated-features',
            from: '/v2.5/faq/deprecated-features-in-v2.5'
          },
          { // Redirects for pages-for-subheaders removal [2.0-2.4]
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication',
            from: '/v2.0-v2.4/pages-for-subheaders/about-authentication'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers',
            from: '/v2.0-v2.4/pages-for-subheaders/about-provisioning-drivers'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates',
            from: '/v2.0-v2.4/pages-for-subheaders/about-rke1-templates'
          },
          {
            to: '/v2.0-v2.4/reference-guides/about-the-api',
            from: '/v2.0-v2.4/pages-for-subheaders/about-the-api'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters',
            from: '/v2.0-v2.4/pages-for-subheaders/access-clusters'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options',
            from: '/v2.0-v2.4/pages-for-subheaders/advanced-options'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides',
            from: '/v2.0-v2.4/pages-for-subheaders/advanced-user-guides'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2',
            from: '/v2.0-v2.4/pages-for-subheaders/air-gap-helm2'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install',
            from: '/v2.0-v2.4/pages-for-subheaders/air-gapped-helm-cli-install'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config',
            from: '/v2.0-v2.4/pages-for-subheaders/authentication-config'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration',
            from: '/v2.0-v2.4/pages-for-subheaders/authentication-permissions-and-global-configuration'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery',
            from: '/v2.0-v2.4/pages-for-subheaders/backup-restore-and-disaster-recovery'
          },
          {
            to: '/v2.0-v2.4/reference-guides/best-practices',
            from: '/v2.0-v2.4/pages-for-subheaders/best-practices'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters',
            from: '/v2.0-v2.4/pages-for-subheaders/checklist-for-production-ready-clusters'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides',
            from: '/v2.0-v2.4/pages-for-subheaders/cis-scan-guides'
          },
          {
            to: '/v2.0-v2.4/explanations/integrations-in-rancher/cis-scans',
            from: '/v2.0-v2.4/pages-for-subheaders/cis-scans'
          },
          {
            to: '/v2.0-v2.4/reference-guides/cli-with-rancher',
            from: '/v2.0-v2.4/pages-for-subheaders/cli-with-rancher'
          },
          {
            to: '/v2.0-v2.4/explanations/integrations-in-rancher/cluster-alerts',
            from: '/v2.0-v2.4/pages-for-subheaders/cluster-alerts'
          },
          {
            to: '/v2.0-v2.4/reference-guides/cluster-configuration',
            from: '/v2.0-v2.4/pages-for-subheaders/cluster-configuration'
          },
          {
            to: '/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging',
            from: '/v2.0-v2.4/pages-for-subheaders/cluster-logging'
          },
          {
            to: '/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring',
            from: '/v2.0-v2.4/pages-for-subheaders/cluster-monitoring'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates',
            from: '/v2.0-v2.4/pages-for-subheaders/cluster-yml'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml',
            from: '/v2.0-v2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml'
          },
          {
            to: '/v2.0-v2.4/reference-guides/configure-openldap',
            from: '/v2.0-v2.4/pages-for-subheaders/configure-openldap'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml',
            from: '/v2.0-v2.4/pages-for-subheaders/configure-shibboleth-saml'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage',
            from: '/v2.0-v2.4/pages-for-subheaders/create-kubernetes-persistent-storage'
          },
          {
            to: '/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere',
            from: '/v2.0-v2.4/pages-for-subheaders/creating-a-vsphere-cluster'
          },
          {
            to: '/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager',
            from: '/v2.0-v2.4/pages-for-subheaders/deploy-rancher-manager'
          },
          {
            to: '/v2.0-v2.4/getting-started/quick-start-guides/deploy-workloads',
            from: '/v2.0-v2.4/pages-for-subheaders/deploy-rancher-workloads'
          },
          {
            to: '/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration',
            from: '/v2.0-v2.4/pages-for-subheaders/downstream-cluster-configuration'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features',
            from: '/v2.0-v2.4/pages-for-subheaders/enable-experimental-features'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb',
            from: '/v2.0-v2.4/pages-for-subheaders/helm2-create-nodes-lb'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-init',
            from: '/v2.0-v2.4/pages-for-subheaders/helm2-helm-init'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke',
            from: '/v2.0-v2.4/pages-for-subheaders/helm2-kubernetes-rke'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2',
            from: '/v2.0-v2.4/pages-for-subheaders/helm2'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-4-lb',
            from: '/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-layer-4-lb'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb',
            from: '/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-layer-7-lb'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on',
            from: '/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting',
            from: '/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-troubleshooting'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher',
            from: '/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher',
            from: '/v2.0-v2.4/pages-for-subheaders/helm-rancher'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler',
            from: '/v2.0-v2.4/pages-for-subheaders/horizontal-pod-autoscaler'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup',
            from: '/v2.0-v2.4/pages-for-subheaders/infrastructure-setup'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade',
            from: '/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade'
          },
          {
            to: '/v2.0-v2.4/reference-guides/installation-references',
            from: '/v2.0-v2.4/pages-for-subheaders/installation-references'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements',
            from: '/v2.0-v2.4/pages-for-subheaders/installation-requirements'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/install-cluster-autoscaler',
            from: '/v2.0-v2.4/pages-for-subheaders/install-cluster-autoscaler'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster',
            from: '/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster'
          },
          {
            to: '/v2.0-v2.4/explanations/integrations-in-rancher',
            from: '/v2.0-v2.4/pages-for-subheaders/integrations-in-rancher'
          },
          {
            to: '/v2.0-v2.4/getting-started/introduction',
            from: '/v2.0-v2.4/pages-for-subheaders/introduction'
          },
          {
            to: '/v2.0-v2.4/explanations/integrations-in-rancher/istio',
            from: '/v2.0-v2.4/pages-for-subheaders/istio'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide',
            from: '/v2.0-v2.4/pages-for-subheaders/istio-setup-guide'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup',
            from: '/v2.0-v2.4/pages-for-subheaders/kubernetes-cluster-setup'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup',
            from: '/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup'
          },
          {
            to: '/v2.0-v2.4/troubleshooting/kubernetes-components',
            from: '/v2.0-v2.4/pages-for-subheaders/kubernetes-components'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup',
            from: '/v2.0-v2.4/pages-for-subheaders/kubernetes-resources-setup'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher',
            from: '/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller',
            from: '/v2.0-v2.4/pages-for-subheaders/load-balancer-and-ingress-controller'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters',
            from: '/v2.0-v2.4/pages-for-subheaders/manage-clusters'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage',
            from: '/v2.0-v2.4/pages-for-subheaders/manage-persistent-storage'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas',
            from: '/v2.0-v2.4/pages-for-subheaders/manage-project-resource-quotas'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects',
            from: '/v2.0-v2.4/pages-for-subheaders/manage-projects'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac',
            from: '/v2.0-v2.4/pages-for-subheaders/manage-role-based-access-control-rbac'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x',
            from: '/v2.0-v2.4/pages-for-subheaders/migrate-from-v1.6-v2.x'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides',
            from: '/v2.0-v2.4/pages-for-subheaders/new-user-guides'
          },
          {
            to: '/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration',
            from: '/v2.0-v2.4/pages-for-subheaders/node-template-configuration'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers',
            from: '/v2.0-v2.4/pages-for-subheaders/other-cloud-providers'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install',
            from: '/v2.0-v2.4/pages-for-subheaders/other-installation-methods'
          },
          {
            to: '/v2.0-v2.4/troubleshooting/other-troubleshooting-tips',
            from: '/v2.0-v2.4/pages-for-subheaders/other-troubleshooting-tips'
          },
          {
            to: '/v2.0-v2.4/reference-guides/pipelines',
            from: '/v2.0-v2.4/pages-for-subheaders/pipelines'
          },
          {
            to: '/v2.0-v2.4/reference-guides/rancher-project-tools',
            from: '/v2.0-v2.4/pages-for-subheaders/project-tools'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples',
            from: '/v2.0-v2.4/pages-for-subheaders/provisioning-storage-examples'
          },
          {
            to: '/v2.0-v2.4/getting-started/quick-start-guides',
            from: '/v2.0-v2.4/pages-for-subheaders/quick-start-guides'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy',
            from: '/v2.0-v2.4/pages-for-subheaders/rancher-behind-an-http-proxy'
          },
          {
            to: '/v2.0-v2.4/reference-guides/rancher-manager-architecture',
            from: '/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker',
            from: '/v2.0-v2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker'
          },
          {
            to: '/v2.0-v2.4/reference-guides/rancher-security',
            from: '/v2.0-v2.4/pages-for-subheaders/rancher-security'
          },
          {
            to: '/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration',
            from: '/v2.0-v2.4/pages-for-subheaders/rancher-server-configuration'
          },
          {
            to: '/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.1-hardening-guides',
            from: '/v2.0-v2.4/pages-for-subheaders/rancher-v2.1-hardening-guides'
          },
          {
            to: '/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.2-hardening-guides',
            from: '/v2.0-v2.4/pages-for-subheaders/rancher-v2.2-hardening-guides'
          },
          {
            to: '/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.3-hardening-guides',
            from: '/v2.0-v2.4/pages-for-subheaders/rancher-v2.3-hardening-guides'
          },
          {
            to: '/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.4-hardening-guides',
            from: '/v2.0-v2.4/pages-for-subheaders/rancher-v2.4-hardening-guides'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/resources',
            from: '/v2.0-v2.4/pages-for-subheaders/resources'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on',
            from: '/v2.0-v2.4/pages-for-subheaders/rke-add-on'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers',
            from: '/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers',
            from: '/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers'
          },
          {
            to: '/v2.0-v2.4/reference-guides/single-node-rancher-in-docker',
            from: '/v2.0-v2.4/pages-for-subheaders/single-node-rancher-in-docker'
          },
          {
            to: '/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades',
            from: '/v2.0-v2.4/pages-for-subheaders/upgrades'
          },
          {
            to: '/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes',
            from: '/v2.0-v2.4/pages-for-subheaders/use-existing-nodes'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider',
            from: '/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider'
          },
          {
            to: '/v2.0-v2.4/reference-guides/user-settings',
            from: '/v2.0-v2.4/pages-for-subheaders/user-settings'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters',
            from: '/v2.0-v2.4/pages-for-subheaders/use-windows-clusters'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere',
            from: '/v2.0-v2.4/pages-for-subheaders/vsphere'
          },
          {
            to: '/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods',
            from: '/v2.0-v2.4/pages-for-subheaders/workloads-and-pods'
          }, // Redirects for pages-for-subheaders removal [2.0-2.4] (end)
          { // Redirects for pages-for-subheaders removal [2.5]
            to: '/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication',
            from: '/v2.5/pages-for-subheaders/about-authentication'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers',
            from: '/v2.5/pages-for-subheaders/about-provisioning-drivers'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates',
            from: '/v2.5/pages-for-subheaders/about-rke1-templates'
          },
          {
            to: '/v2.5/reference-guides/about-the-api',
            from: '/v2.5/pages-for-subheaders/about-the-api'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters',
            from: '/v2.5/pages-for-subheaders/access-clusters'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration',
            from: '/v2.5/pages-for-subheaders/advanced-configuration'
          },
          {
            to: '/v2.5/getting-started/installation-and-upgrade/advanced-options',
            from: '/v2.5/pages-for-subheaders/advanced-options'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides',
            from: '/v2.5/pages-for-subheaders/advanced-user-guides'
          },
          {
            to: '/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install',
            from: '/v2.5/pages-for-subheaders/air-gapped-helm-cli-install'
          },
          {
            to: '/v2.5/reference-guides/amazon-eks-permissions',
            from: '/v2.5/pages-for-subheaders/amazon-eks-permissions'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config',
            from: '/v2.5/pages-for-subheaders/authentication-config'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration',
            from: '/v2.5/pages-for-subheaders/authentication-permissions-and-global-configuration'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery',
            from: '/v2.5/pages-for-subheaders/backup-restore-and-disaster-recovery'
          },
          {
            to: '/v2.5/reference-guides/backup-restore-configuration',
            from: '/v2.5/pages-for-subheaders/backup-restore-configuration'
          },
          {
            to: '/v2.5/reference-guides/best-practices',
            from: '/v2.5/pages-for-subheaders/best-practices'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters',
            from: '/v2.5/pages-for-subheaders/checklist-for-production-ready-clusters'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides',
            from: '/v2.5/pages-for-subheaders/cis-scan-guides'
          },
          {
            to: '/v2.5/explanations/integrations-in-rancher/cis-scans',
            from: '/v2.5/pages-for-subheaders/cis-scans'
          },
          {
            to: '/v2.5/reference-guides/cli-with-rancher',
            from: '/v2.5/pages-for-subheaders/cli-with-rancher'
          },
          {
            to: '/v2.5/reference-guides/cluster-configuration',
            from: '/v2.5/pages-for-subheaders/cluster-configuration'
          },
          {
            to: '/v2.5/explanations/integrations-in-rancher/istio/configuration-options',
            from: '/v2.5/pages-for-subheaders/configuration-options'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml',
            from: '/v2.5/pages-for-subheaders/configure-microsoft-ad-federation-service-saml'
          },
          {
            to: '/v2.5/reference-guides/configure-openldap',
            from: '/v2.5/pages-for-subheaders/configure-openldap'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml',
            from: '/v2.5/pages-for-subheaders/configure-shibboleth-saml'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage',
            from: '/v2.5/pages-for-subheaders/create-kubernetes-persistent-storage'
          },
          {
            to: '/v2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration',
            from: '/v2.5/pages-for-subheaders/custom-resource-configuration'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters',
            from: '/v2.5/pages-for-subheaders/deploy-apps-across-clusters'
          },
          {
            to: '/v2.5/getting-started/quick-start-guides/deploy-rancher-manager',
            from: '/v2.5/pages-for-subheaders/deploy-rancher-manager'
          },
          {
            to: '/v2.5/getting-started/quick-start-guides/deploy-workloads',
            from: '/v2.5/pages-for-subheaders/deploy-rancher-workloads'
          },
          {
            to: '/v2.5/reference-guides/cluster-configuration/downstream-cluster-configuration',
            from: '/v2.5/pages-for-subheaders/downstream-cluster-configuration'
          },
          {
            to: '/v2.5/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features',
            from: '/v2.5/pages-for-subheaders/enable-experimental-features'
          },
          {
            to: '/v2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale',
            from: '/v2.5/pages-for-subheaders/fleet-gitops-at-scale'
          },
          {
            to: '/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration',
            from: '/v2.5/pages-for-subheaders/gke-cluster-configuration'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides',
            from: '/v2.5/pages-for-subheaders/helm-charts-in-rancher'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler',
            from: '/v2.5/pages-for-subheaders/horizontal-pod-autoscaler'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/infrastructure-setup',
            from: '/v2.5/pages-for-subheaders/infrastructure-setup'
          },
          {
            to: '/v2.5/getting-started/installation-and-upgrade',
            from: '/v2.5/pages-for-subheaders/installation-and-upgrade'
          },
          {
            to: '/v2.5/reference-guides/installation-references',
            from: '/v2.5/pages-for-subheaders/installation-references'
          },
          {
            to: '/v2.5/getting-started/installation-and-upgrade/installation-requirements',
            from: '/v2.5/pages-for-subheaders/installation-requirements'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/manage-clusters/install-cluster-autoscaler',
            from: '/v2.5/pages-for-subheaders/install-cluster-autoscaler'
          },
          {
            to: '/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux',
            from: '/v2.5/pages-for-subheaders/install-rancher-on-linux'
          },
          {
            to: '/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster',
            from: '/v2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster'
          },
          {
            to: '/v2.5/explanations/integrations-in-rancher',
            from: '/v2.5/pages-for-subheaders/integrations-in-rancher'
          },
          {
            to: '/v2.5/getting-started/introduction',
            from: '/v2.5/pages-for-subheaders/introduction'
          },
          {
            to: '/v2.5/explanations/integrations-in-rancher/istio',
            from: '/v2.5/pages-for-subheaders/istio'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide',
            from: '/v2.5/pages-for-subheaders/istio-setup-guide'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup',
            from: '/v2.5/pages-for-subheaders/kubernetes-cluster-setup'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup',
            from: '/v2.5/pages-for-subheaders/kubernetes-clusters-in-rancher-setup'
          },
          {
            to: '/v2.5/troubleshooting/kubernetes-components',
            from: '/v2.5/pages-for-subheaders/kubernetes-components'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup',
            from: '/v2.5/pages-for-subheaders/kubernetes-resources-setup'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher',
            from: '/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller',
            from: '/v2.5/pages-for-subheaders/load-balancer-and-ingress-controller'
          },
          {
            to: '/v2.5/explanations/integrations-in-rancher/logging',
            from: '/v2.5/pages-for-subheaders/logging'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/manage-clusters',
            from: '/v2.5/pages-for-subheaders/manage-clusters'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage',
            from: '/v2.5/pages-for-subheaders/manage-persistent-storage'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas',
            from: '/v2.5/pages-for-subheaders/manage-project-resource-quotas'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/manage-projects',
            from: '/v2.5/pages-for-subheaders/manage-projects'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac',
            from: '/v2.5/pages-for-subheaders/manage-role-based-access-control-rbac'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides',
            from: '/v2.5/pages-for-subheaders/monitoring-alerting-guides'
          },
          {
            to: '/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting',
            from: '/v2.5/pages-for-subheaders/monitoring-and-alerting'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides',
            from: '/v2.5/pages-for-subheaders/monitoring-v2-configuration-guides'
          },
          {
            to: '/v2.5/reference-guides/monitoring-v2-configuration',
            from: '/v2.5/pages-for-subheaders/monitoring-v2-configuration'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides',
            from: '/v2.5/pages-for-subheaders/new-user-guides'
          },
          {
            to: '/v2.5/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration',
            from: '/v2.5/pages-for-subheaders/node-template-configuration'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers',
            from: '/v2.5/pages-for-subheaders/other-cloud-providers'
          },
          {
            to: '/v2.5/getting-started/installation-and-upgrade/other-installation-methods',
            from: '/v2.5/pages-for-subheaders/other-installation-methods'
          },
          {
            to: '/v2.5/troubleshooting/other-troubleshooting-tips',
            from: '/v2.5/pages-for-subheaders/other-troubleshooting-tips'
          },
          {
            to: '/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples',
            from: '/v2.5/pages-for-subheaders/provisioning-storage-examples'
          },
          {
            to: '/v2.5/getting-started/quick-start-guides',
            from: '/v2.5/pages-for-subheaders/quick-start-guides'
          },
          {
            to: '/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy',
            from: '/v2.5/pages-for-subheaders/rancher-behind-an-http-proxy'
          },
          {
            to: '/v2.5/reference-guides/best-practices/rancher-managed-clusters',
            from: '/v2.5/pages-for-subheaders/rancher-managed-clusters'
          },
          {
            to: '/v2.5/reference-guides/rancher-manager-architecture',
            from: '/v2.5/pages-for-subheaders/rancher-manager-architecture'
          },
          {
            to: '/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker',
            from: '/v2.5/pages-for-subheaders/rancher-on-a-single-node-with-docker'
          },
          {
            to: '/v2.5/reference-guides/rancher-security',
            from: '/v2.5/pages-for-subheaders/rancher-security'
          },
          {
            to: '/v2.5/reference-guides/cluster-configuration/rancher-server-configuration',
            from: '/v2.5/pages-for-subheaders/rancher-server-configuration'
          },
          {
            to: '/v2.5/reference-guides/best-practices/rancher-server',
            from: '/v2.5/pages-for-subheaders/rancher-server'
          },
          {
            to: '/v2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides',
            from: '/v2.5/pages-for-subheaders/rancher-v2.5-hardening-guides'
          },
          {
            to: '/v2.5/getting-started/installation-and-upgrade/resources',
            from: '/v2.5/pages-for-subheaders/resources'
          },
          {
            to: '/v2.5/reference-guides/rancher-security/selinux-rpm',
            from: '/v2.5/pages-for-subheaders/selinux-rpm'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers',
            from: '/v2.5/pages-for-subheaders/set-up-cloud-providers'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers',
            from: '/v2.5/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers'
          },
          {
            to: '/v2.5/reference-guides/single-node-rancher-in-docker',
            from: '/v2.5/pages-for-subheaders/single-node-rancher-in-docker'
          },
          {
            to: '/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes',
            from: '/v2.5/pages-for-subheaders/use-existing-nodes'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider',
            from: '/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider'
          },
          {
            to: '/v2.5/reference-guides/user-settings',
            from: '/v2.5/pages-for-subheaders/user-settings'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters',
            from: '/v2.5/pages-for-subheaders/use-windows-clusters'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere',
            from: '/v2.5/pages-for-subheaders/vsphere-cloud-provider'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere',
            from: '/v2.5/pages-for-subheaders/vsphere'
          },
          {
            to: '/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods',
            from: '/v2.5/pages-for-subheaders/workloads-and-pods'
          }, // Redirects for pages-for-subheaders removal [2.5] (end)
          { // Redirects for pages-for-subheaders removal [2.6]
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers',
            from: '/v2.6/pages-for-subheaders/about-provisioning-drivers'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates',
            from: '/v2.6/pages-for-subheaders/about-rke1-templates'
          },
          {
            to: '/v2.6/reference-guides/about-the-api',
            from: '/v2.6/pages-for-subheaders/about-the-api'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters',
            from: '/v2.6/pages-for-subheaders/access-clusters'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration',
            from: '/v2.6/pages-for-subheaders/advanced-configuration'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides',
            from: '/v2.6/pages-for-subheaders/advanced-user-guides'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install',
            from: '/v2.6/pages-for-subheaders/air-gapped-helm-cli-install'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config',
            from: '/v2.6/pages-for-subheaders/authentication-config'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration',
            from: '/v2.6/pages-for-subheaders/authentication-permissions-and-global-configuration'
          },
          {
            to: '/v2.6/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace',
            from: '/v2.6/pages-for-subheaders/aws-cloud-marketplace'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery',
            from: '/v2.6/pages-for-subheaders/backup-restore-and-disaster-recovery'
          },
          {
            to: '/v2.6/reference-guides/backup-restore-configuration',
            from: '/v2.6/pages-for-subheaders/backup-restore-configuration'
          },
          {
            to: '/v2.6/reference-guides/best-practices',
            from: '/v2.6/pages-for-subheaders/best-practices'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters',
            from: '/v2.6/pages-for-subheaders/checklist-for-production-ready-clusters'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides',
            from: '/v2.6/pages-for-subheaders/cis-scan-guides'
          },
          {
            to: '/v2.6/integrations-in-rancher/cis-scans',
            from: '/v2.6/pages-for-subheaders/cis-scans'
          },
          {
            to: '/v2.6/reference-guides/cli-with-rancher',
            from: '/v2.6/pages-for-subheaders/cli-with-rancher'
          },
          {
            to: '/v2.6/integrations-in-rancher/cloud-marketplace',
            from: '/v2.6/pages-for-subheaders/cloud-marketplace'
          },
          {
            to: '/v2.6/reference-guides/cluster-configuration',
            from: '/v2.6/pages-for-subheaders/cluster-configuration'
          },
          {
            to: '/v2.6/integrations-in-rancher/istio/configuration-options',
            from: '/v2.6/pages-for-subheaders/configuration-options'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml',
            from: '/v2.6/pages-for-subheaders/configure-microsoft-ad-federation-service-saml'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap',
            from: '/v2.6/pages-for-subheaders/configure-openldap'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-shibboleth-saml',
            from: '/v2.6/pages-for-subheaders/configure-shibboleth-saml'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage',
            from: '/v2.6/pages-for-subheaders/create-kubernetes-persistent-storage'
          },
          {
            to: '/v2.6/integrations-in-rancher/logging/custom-resource-configuration',
            from: '/v2.6/pages-for-subheaders/custom-resource-configuration'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters',
            from: '/v2.6/pages-for-subheaders/deploy-apps-across-clusters'
          },
          {
            to: '/v2.6/getting-started/quick-start-guides/deploy-rancher-manager',
            from: '/v2.6/pages-for-subheaders/deploy-rancher-manager'
          },
          {
            to: '/v2.6/getting-started/quick-start-guides/deploy-workloads',
            from: '/v2.6/pages-for-subheaders/deploy-rancher-workloads'
          },
          {
            to: '/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration',
            from: '/v2.6/pages-for-subheaders/downstream-cluster-configuration'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features',
            from: '/v2.6/pages-for-subheaders/enable-experimental-features'
          },
          {
            to: '/v2.6/integrations-in-rancher/fleet-gitops-at-scale',
            from: '/v2.6/pages-for-subheaders/fleet-gitops-at-scale'
          },
          {
            to: '/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration',
            from: '/v2.6/pages-for-subheaders/gke-cluster-configuration'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/helm-charts-in-rancher',
            from: '/v2.6/pages-for-subheaders/helm-charts-in-rancher'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler',
            from: '/v2.6/pages-for-subheaders/horizontal-pod-autoscaler'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/infrastructure-setup',
            from: '/v2.6/pages-for-subheaders/infrastructure-setup'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade',
            from: '/v2.6/pages-for-subheaders/installation-and-upgrade'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade/installation-references',
            from: '/v2.6/pages-for-subheaders/installation-references'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade/installation-requirements',
            from: '/v2.6/pages-for-subheaders/installation-requirements'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/install-cluster-autoscaler',
            from: '/v2.6/pages-for-subheaders/install-cluster-autoscaler'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster',
            from: '/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster'
          },
          {
            to: '/v2.6/integrations-in-rancher/istio',
            from: '/v2.6/pages-for-subheaders/istio'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide',
            from: '/v2.6/pages-for-subheaders/istio-setup-guide'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-cluster-setup',
            from: '/v2.6/pages-for-subheaders/kubernetes-cluster-setup'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup',
            from: '/v2.6/pages-for-subheaders/kubernetes-clusters-in-rancher-setup'
          },
          {
            to: '/v2.6/troubleshooting/kubernetes-components',
            from: '/v2.6/pages-for-subheaders/kubernetes-components'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup',
            from: '/v2.6/pages-for-subheaders/kubernetes-resources-setup'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher',
            from: '/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller',
            from: '/v2.6/pages-for-subheaders/load-balancer-and-ingress-controller'
          },
          {
            to: '/v2.6/integrations-in-rancher/logging',
            from: '/v2.6/pages-for-subheaders/logging'
          },
          {
            to: '/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration',
            from: '/v2.6/pages-for-subheaders/machine-configuration'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters',
            from: '/v2.6/pages-for-subheaders/manage-clusters'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas',
            from: '/v2.6/pages-for-subheaders/manage-project-resource-quotas'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/manage-projects',
            from: '/v2.6/pages-for-subheaders/manage-projects'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac',
            from: '/v2.6/pages-for-subheaders/manage-role-based-access-control-rbac'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides',
            from: '/v2.6/pages-for-subheaders/monitoring-alerting-guides'
          },
          {
            to: '/v2.6/integrations-in-rancher/monitoring-and-alerting',
            from: '/v2.6/pages-for-subheaders/monitoring-and-alerting'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides',
            from: '/v2.6/pages-for-subheaders/monitoring-v2-configuration-guides'
          },
          {
            to: '/v2.6/reference-guides/monitoring-v2-configuration',
            from: '/v2.6/pages-for-subheaders/monitoring-v2-configuration'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides',
            from: '/v2.6/pages-for-subheaders/new-user-guides'
          },
          {
            to: '/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration',
            from: '/v2.6/pages-for-subheaders/node-template-configuration'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix',
            from: '/v2.6/pages-for-subheaders/nutanix'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade/other-installation-methods',
            from: '/v2.6/pages-for-subheaders/other-installation-methods'
          },
          {
            to: '/v2.6/reference-guides/pipelines',
            from: '/v2.6/pages-for-subheaders/pipelines'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides',
            from: '/v2.6/pages-for-subheaders/prometheus-federator-guides'
          },
          {
            to: '/v2.6/reference-guides/prometheus-federator',
            from: '/v2.6/pages-for-subheaders/prometheus-federator'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples',
            from: '/v2.6/pages-for-subheaders/provisioning-storage-examples'
          },
          {
            to: '/v2.6/getting-started/quick-start-guides',
            from: '/v2.6/pages-for-subheaders/quick-start-guides'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy',
            from: '/v2.6/pages-for-subheaders/rancher-behind-an-http-proxy'
          },
          {
            to: '/v2.6/reference-guides/best-practices/rancher-managed-clusters',
            from: '/v2.6/pages-for-subheaders/rancher-managed-clusters'
          },
          {
            to: '/v2.6/reference-guides/rancher-manager-architecture',
            from: '/v2.6/pages-for-subheaders/rancher-manager-architecture'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker',
            from: '/v2.6/pages-for-subheaders/rancher-on-a-single-node-with-docker'
          },
          {
            to: '/v2.6/reference-guides/rancher-security',
            from: '/v2.6/pages-for-subheaders/rancher-security'
          },
          {
            to: '/v2.6/reference-guides/cluster-configuration/rancher-server-configuration',
            from: '/v2.6/pages-for-subheaders/rancher-server-configuration'
          },
          {
            to: '/v2.6/reference-guides/best-practices/rancher-server',
            from: '/v2.6/pages-for-subheaders/rancher-server'
          },
          {
            to: '/v2.6/reference-guides/rancher-security/rancher-v2.6-hardening-guides',
            from: '/v2.6/pages-for-subheaders/rancher-v2.6-hardening-guides'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade/resources',
            from: '/v2.6/pages-for-subheaders/resources'
          },
          {
            to: '/v2.6/reference-guides/rancher-security/selinux-rpm',
            from: '/v2.6/pages-for-subheaders/selinux-rpm'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers',
            from: '/v2.6/pages-for-subheaders/set-up-cloud-providers'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers',
            from: '/v2.6/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers'
          },
          {
            to: '/v2.6/reference-guides/single-node-rancher-in-docker',
            from: '/v2.6/pages-for-subheaders/single-node-rancher-in-docker'
          },
          {
            to: '/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes',
            from: '/v2.6/pages-for-subheaders/use-existing-nodes'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider',
            from: '/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider'
          },
          {
            to: '/v2.6/reference-guides/user-settings',
            from: '/v2.6/pages-for-subheaders/user-settings'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters',
            from: '/v2.6/pages-for-subheaders/use-windows-clusters'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere',
            from: '/v2.6/pages-for-subheaders/vsphere'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods',
            from: '/v2.6/pages-for-subheaders/workloads-and-pods'
          }, // Redirects for pages-for-subheaders removal [2.6] (end)
          { // Redirects for pages-for-subheaders removal [2.7]
            to: '/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers',
            from: '/v2.7/pages-for-subheaders/about-provisioning-drivers'
          },
          {
            to: '/v2.7/integrations-in-rancher/cloud-marketplace/aws-marketplace-payg-integration',
            from: '/v2.7/pages-for-subheaders/aws-marketplace-payg-integration'
          }, // Redirect for aws pages-for-subheader removal
          {
            to: '/v2.7/integrations-in-rancher/cloud-marketplace/azure-marketplace-payg-integration',
            from: '/v2.7/pages-for-subheaders/azure-marketplace-payg-integration'
          }, // Redirect for azure pages-for-subheader removal
          {
            to: '/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates',
            from: '/v2.7/pages-for-subheaders/about-rke1-templates'
          },
          {
            to: '/v2.7/reference-guides/about-the-api',
            from: '/v2.7/pages-for-subheaders/about-the-api'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/manage-clusters/access-clusters',
            from: '/v2.7/pages-for-subheaders/access-clusters'
          },
          {
            to: '/v2.7/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration',
            from: '/v2.7/pages-for-subheaders/advanced-configuration'
          },
          {
            to: '/v2.7/how-to-guides/advanced-user-guides',
            from: '/v2.7/pages-for-subheaders/advanced-user-guides'
          },
          {
            to: '/v2.7/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install',
            from: '/v2.7/pages-for-subheaders/air-gapped-helm-cli-install'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config',
            from: '/v2.7/pages-for-subheaders/authentication-config'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration',
            from: '/v2.7/pages-for-subheaders/authentication-permissions-and-global-configuration'
          },
          {
            to: '/v2.7/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace',
            from: '/v2.7/pages-for-subheaders/aws-cloud-marketplace'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery',
            from: '/v2.7/pages-for-subheaders/backup-restore-and-disaster-recovery'
          },
          {
            to: '/v2.7/reference-guides/backup-restore-configuration',
            from: '/v2.7/pages-for-subheaders/backup-restore-configuration'
          },
          {
            to: '/v2.7/reference-guides/best-practices',
            from: '/v2.7/pages-for-subheaders/best-practices'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters',
            from: '/v2.7/pages-for-subheaders/checklist-for-production-ready-clusters'
          },
          {
            to: '/v2.7/how-to-guides/advanced-user-guides/cis-scan-guides',
            from: '/v2.7/pages-for-subheaders/cis-scan-guides'
          },
          {
            to: '/v2.7/integrations-in-rancher/cis-scans',
            from: '/v2.7/pages-for-subheaders/cis-scans'
          },
          {
            to: '/v2.7/reference-guides/cli-with-rancher',
            from: '/v2.7/pages-for-subheaders/cli-with-rancher'
          },
          {
            to: '/v2.7/integrations-in-rancher/cloud-marketplace',
            from: '/v2.7/pages-for-subheaders/cloud-marketplace'
          },
          {
            to: '/v2.7/reference-guides/cluster-configuration',
            from: '/v2.7/pages-for-subheaders/cluster-configuration'
          },
          {
            to: '/v2.7/integrations-in-rancher/istio/configuration-options',
            from: '/v2.7/pages-for-subheaders/configuration-options'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml',
            from: '/v2.7/pages-for-subheaders/configure-microsoft-ad-federation-service-saml'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap',
            from: '/v2.7/pages-for-subheaders/configure-openldap'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-shibboleth-saml',
            from: '/v2.7/pages-for-subheaders/configure-shibboleth-saml'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage',
            from: '/v2.7/pages-for-subheaders/create-kubernetes-persistent-storage'
          },
          {
            to: '/v2.7/integrations-in-rancher/logging/custom-resource-configuration',
            from: '/v2.7/pages-for-subheaders/custom-resource-configuration'
          },
          {
            to: '/v2.7/getting-started/quick-start-guides/deploy-rancher-manager',
            from: '/v2.7/pages-for-subheaders/deploy-rancher-manager'
          },
          {
            to: '/v2.7/getting-started/quick-start-guides/deploy-workloads',
            from: '/v2.7/pages-for-subheaders/deploy-rancher-workloads'
          },
          {
            to: '/v2.7/reference-guides/cluster-configuration/downstream-cluster-configuration',
            from: '/v2.7/pages-for-subheaders/downstream-cluster-configuration'
          },
          {
            to: '/v2.7/how-to-guides/advanced-user-guides/enable-experimental-features',
            from: '/v2.7/pages-for-subheaders/enable-experimental-features'
          },
          {
            to: '/v2.7/integrations-in-rancher/fleet-gitops-at-scale',
            from: '/v2.7/pages-for-subheaders/fleet-gitops-at-scale'
          },
          {
            to: '/v2.7/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration',
            from: '/v2.7/pages-for-subheaders/gke-cluster-configuration'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/helm-charts-in-rancher',
            from: '/v2.7/pages-for-subheaders/helm-charts-in-rancher'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler',
            from: '/v2.7/pages-for-subheaders/horizontal-pod-autoscaler'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/infrastructure-setup',
            from: '/v2.7/pages-for-subheaders/infrastructure-setup'
          },
          {
            to: '/v2.7/getting-started/installation-and-upgrade',
            from: '/v2.7/pages-for-subheaders/installation-and-upgrade'
          },
          {
            to: '/v2.7/getting-started/installation-and-upgrade/installation-references',
            from: '/v2.7/pages-for-subheaders/installation-references'
          },
          {
            to: '/v2.7/getting-started/installation-and-upgrade/installation-requirements',
            from: '/v2.7/pages-for-subheaders/installation-requirements'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/manage-clusters/install-cluster-autoscaler',
            from: '/v2.7/pages-for-subheaders/install-cluster-autoscaler'
          },
          {
            to: '/v2.7/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster',
            from: '/v2.7/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster'
          },
          {
            to: '/v2.7/integrations-in-rancher/istio',
            from: '/v2.7/pages-for-subheaders/istio'
          },
          {
            to: '/v2.7/how-to-guides/advanced-user-guides/istio-setup-guide',
            from: '/v2.7/pages-for-subheaders/istio-setup-guide'
          },
          {
            to: '/v2.7/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide',
            from: '/v2.7/pages-for-subheaders/k3s-hardening-guide'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/kubernetes-cluster-setup',
            from: '/v2.7/pages-for-subheaders/kubernetes-cluster-setup'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup',
            from: '/v2.7/pages-for-subheaders/kubernetes-clusters-in-rancher-setup'
          },
          {
            to: '/v2.7/troubleshooting/kubernetes-components',
            from: '/v2.7/pages-for-subheaders/kubernetes-components'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/kubernetes-resources-setup',
            from: '/v2.7/pages-for-subheaders/kubernetes-resources-setup'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/launch-kubernetes-with-rancher',
            from: '/v2.7/pages-for-subheaders/launch-kubernetes-with-rancher'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller',
            from: '/v2.7/pages-for-subheaders/load-balancer-and-ingress-controller'
          },
          {
            to: '/v2.7/integrations-in-rancher/logging',
            from: '/v2.7/pages-for-subheaders/logging'
          },
          {
            to: '/v2.7/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration',
            from: '/v2.7/pages-for-subheaders/machine-configuration'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/manage-clusters',
            from: '/v2.7/pages-for-subheaders/manage-clusters'
          },
          {
            to: '/v2.7/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas',
            from: '/v2.7/pages-for-subheaders/manage-project-resource-quotas'
          },
          {
            to: '/v2.7/how-to-guides/advanced-user-guides/manage-projects',
            from: '/v2.7/pages-for-subheaders/manage-projects'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac',
            from: '/v2.7/pages-for-subheaders/manage-role-based-access-control-rbac'
          },
          {
            to: '/v2.7/how-to-guides/advanced-user-guides/monitoring-alerting-guides',
            from: '/v2.7/pages-for-subheaders/monitoring-alerting-guides'
          },
          {
            to: '/v2.7/integrations-in-rancher/monitoring-and-alerting',
            from: '/v2.7/pages-for-subheaders/monitoring-and-alerting'
          },
          {
            to: '/v2.7/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides',
            from: '/v2.7/pages-for-subheaders/monitoring-v2-configuration-guides'
          },
          {
            to: '/v2.7/reference-guides/monitoring-v2-configuration',
            from: '/v2.7/pages-for-subheaders/monitoring-v2-configuration'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/new-user-guides',
            from: '/v2.7/pages-for-subheaders/new-user-guides'
          },
          {
            to: '/v2.7/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration',
            from: '/v2.7/pages-for-subheaders/node-template-configuration'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix',
            from: '/v2.7/pages-for-subheaders/nutanix'
          },
          {
            to: '/v2.7/getting-started/installation-and-upgrade/other-installation-methods',
            from: '/v2.7/pages-for-subheaders/other-installation-methods'
          },
          {
            to: '/v2.7/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides',
            from: '/v2.7/pages-for-subheaders/prometheus-federator-guides'
          },
          {
            to: '/v2.7/reference-guides/prometheus-federator',
            from: '/v2.7/pages-for-subheaders/prometheus-federator'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples',
            from: '/v2.7/pages-for-subheaders/provisioning-storage-examples'
          },
          {
            to: '/v2.7/getting-started/quick-start-guides',
            from: '/v2.7/pages-for-subheaders/quick-start-guides'
          },
          {
            to: '/v2.7/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy',
            from: '/v2.7/pages-for-subheaders/rancher-behind-an-http-proxy'
          },
          {
            to: '/v2.7/reference-guides/rancher-security/hardening-guides/',
            from: '/v2.7/pages-for-subheaders/rancher-hardening-guides'
          },
          {
            to: '/v2.7/reference-guides/best-practices/rancher-managed-clusters',
            from: '/v2.7/pages-for-subheaders/rancher-managed-clusters'
          },
          {
            to: '/v2.7/reference-guides/rancher-manager-architecture',
            from: '/v2.7/pages-for-subheaders/rancher-manager-architecture'
          },
          {
            to: '/v2.7/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker',
            from: '/v2.7/pages-for-subheaders/rancher-on-a-single-node-with-docker'
          },
          {
            to: '/v2.7/reference-guides/rancher-security',
            from: '/v2.7/pages-for-subheaders/rancher-security'
          },
          {
            to: '/v2.7/reference-guides/cluster-configuration/rancher-server-configuration',
            from: '/v2.7/pages-for-subheaders/rancher-server-configuration'
          },
          {
            to: '/v2.7/reference-guides/best-practices/rancher-server',
            from: '/v2.7/pages-for-subheaders/rancher-server'
          },
          {
            to: '/v2.7/getting-started/installation-and-upgrade/resources',
            from: '/v2.7/pages-for-subheaders/resources'
          },
          {
            to: '/v2.7/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide',
            from: '/v2.7/pages-for-subheaders/rke1-hardening-guide'
          },
          {
            to: '/v2.7/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide',
            from: '/v2.7/pages-for-subheaders/rke2-hardening-guide'
          },
          {
            to: '/v2.7/reference-guides/rancher-security/selinux-rpm',
            from: '/v2.7/pages-for-subheaders/selinux-rpm'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers',
            from: '/v2.7/pages-for-subheaders/set-up-cloud-providers'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers',
            from: '/v2.7/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers'
          },
          {
            to: '/v2.7/reference-guides/single-node-rancher-in-docker',
            from: '/v2.7/pages-for-subheaders/single-node-rancher-in-docker'
          },
          {
            to: '/v2.7/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes',
            from: '/v2.7/pages-for-subheaders/use-existing-nodes'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider',
            from: '/v2.7/pages-for-subheaders/use-new-nodes-in-an-infra-provider'
          },
          {
            to: '/v2.7/reference-guides/user-settings',
            from: '/v2.7/pages-for-subheaders/user-settings'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters',
            from: '/v2.7/pages-for-subheaders/use-windows-clusters'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere',
            from: '/v2.7/pages-for-subheaders/vsphere'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods',
            from: '/v2.7/pages-for-subheaders/workloads-and-pods'
          }, // Redirects for pages-for-subheaders removal [2.7] (end)
          { // Redirects for pages-for-subheaders removal [2.8]
            to: '/v2.8/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers',
            from: '/v2.8/pages-for-subheaders/about-provisioning-drivers'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates',
            from: '/v2.8/pages-for-subheaders/about-rke1-templates'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/manage-clusters/access-clusters',
            from: '/v2.8/pages-for-subheaders/access-clusters'
          },
          {
            to: '/v2.8/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration',
            from: '/v2.8/pages-for-subheaders/advanced-configuration'
          },
          {
            to: '/v2.8/how-to-guides/advanced-user-guides',
            from: '/v2.8/pages-for-subheaders/advanced-user-guides'
          },
          {
            to: '/v2.8/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install',
            from: '/v2.8/pages-for-subheaders/air-gapped-helm-cli-install'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config',
            from: '/v2.8/pages-for-subheaders/authentication-config'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration',
            from: '/v2.8/pages-for-subheaders/authentication-permissions-and-global-configuration'
          },
          {
            to: '/v2.8/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace',
            from: '/v2.8/pages-for-subheaders/aws-cloud-marketplace'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery',
            from: '/v2.8/pages-for-subheaders/backup-restore-and-disaster-recovery'
          },
          {
            to: '/v2.8/reference-guides/backup-restore-configuration',
            from: '/v2.8/pages-for-subheaders/backup-restore-configuration'
          },
          {
            to: '/v2.8/reference-guides/best-practices',
            from: '/v2.8/pages-for-subheaders/best-practices'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters',
            from: '/v2.8/pages-for-subheaders/checklist-for-production-ready-clusters'
          },
          {
            to: '/v2.8/how-to-guides/advanced-user-guides/cis-scan-guides',
            from: '/v2.8/pages-for-subheaders/cis-scan-guides'
          },
          {
            to: '/v2.8/integrations-in-rancher/cis-scans',
            from: '/v2.8/pages-for-subheaders/cis-scans'
          },
          {
            to: '/v2.8/reference-guides/cli-with-rancher',
            from: '/v2.8/pages-for-subheaders/cli-with-rancher'
          },
          {
            to: '/v2.8/integrations-in-rancher/cloud-marketplace',
            from: '/v2.8/pages-for-subheaders/cloud-marketplace'
          },
          {
            to: '/v2.8/reference-guides/cluster-configuration',
            from: '/v2.8/pages-for-subheaders/cluster-configuration'
          },
          {
            to: '/v2.8/integrations-in-rancher/istio/configuration-options',
            from: '/v2.8/pages-for-subheaders/configuration-options'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml',
            from: '/v2.8/pages-for-subheaders/configure-microsoft-ad-federation-service-saml'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap',
            from: '/v2.8/pages-for-subheaders/configure-openldap'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-shibboleth-saml',
            from: '/v2.8/pages-for-subheaders/configure-shibboleth-saml'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage',
            from: '/v2.8/pages-for-subheaders/create-kubernetes-persistent-storage'
          },
          {
            to: '/v2.8/integrations-in-rancher/logging/custom-resource-configuration',
            from: '/v2.8/pages-for-subheaders/custom-resource-configuration'
          },
          {
            to: '/v2.8/getting-started/quick-start-guides/deploy-rancher-manager',
            from: '/v2.8/pages-for-subheaders/deploy-rancher-manager'
          },
          {
            to: '/v2.8/getting-started/quick-start-guides/deploy-workloads',
            from: '/v2.8/pages-for-subheaders/deploy-rancher-workloads'
          },
          {
            to: '/v2.8/reference-guides/cluster-configuration/downstream-cluster-configuration',
            from: '/v2.8/pages-for-subheaders/downstream-cluster-configuration'
          },
          {
            to: '/v2.8/how-to-guides/advanced-user-guides/enable-experimental-features',
            from: '/v2.8/pages-for-subheaders/enable-experimental-features'
          },
          {
            to: '/v2.8/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration',
            from: '/v2.8/pages-for-subheaders/gke-cluster-configuration'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/helm-charts-in-rancher',
            from: '/v2.8/pages-for-subheaders/helm-charts-in-rancher'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler',
            from: '/v2.8/pages-for-subheaders/horizontal-pod-autoscaler'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/infrastructure-setup',
            from: '/v2.8/pages-for-subheaders/infrastructure-setup'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/manage-clusters/install-cluster-autoscaler',
            from: '/v2.8/pages-for-subheaders/install-cluster-autoscaler'
          },
          {
            to: '/v2.8/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster',
            from: '/v2.8/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster'
          },
          {
            to: '/v2.8/getting-started/installation-and-upgrade',
            from: '/v2.8/pages-for-subheaders/installation-and-upgrade'
          },
          {
            to: '/v2.8/getting-started/installation-and-upgrade/installation-references',
            from: '/v2.8/pages-for-subheaders/installation-references'
          },
          {
            to: '/v2.8/getting-started/installation-and-upgrade/installation-requirements',
            from: '/v2.8/pages-for-subheaders/installation-requirements'
          },
          {
            to: '/v2.8/how-to-guides/advanced-user-guides/istio-setup-guide',
            from: '/v2.8/pages-for-subheaders/istio-setup-guide'
          },
          {
            to: '/v2.8/integrations-in-rancher/istio/',
            from: '/v2.8/pages-for-subheaders/istio'
          },
          {
            to: '/v2.8/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide',
            from: '/v2.8/pages-for-subheaders/k3s-hardening-guide'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/kubernetes-cluster-setup',
            from: '/v2.8/pages-for-subheaders/kubernetes-cluster-setup'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup',
            from: '/v2.8/pages-for-subheaders/kubernetes-clusters-in-rancher-setup'
          },
          {
            to: '/v2.8/troubleshooting/kubernetes-components',
            from: '/v2.8/pages-for-subheaders/kubernetes-components'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/kubernetes-resources-setup/',
            from: '/v2.8/pages-for-subheaders/kubernetes-resources-setup'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/launch-kubernetes-with-rancher',
            from: '/v2.8/pages-for-subheaders/launch-kubernetes-with-rancher'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller',
            from: '/v2.8/pages-for-subheaders/load-balancer-and-ingress-controller'
          },
          {
            to: '/v2.8/integrations-in-rancher/logging/',
            from: '/v2.8/pages-for-subheaders/logging'
          },
          {
            to: '/v2.8/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration',
            from: '/v2.8/pages-for-subheaders/machine-configuration'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/manage-clusters',
            from: '/v2.8/pages-for-subheaders/manage-clusters'
          },
          {
            to: '/v2.8/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas',
            from: '/v2.8/pages-for-subheaders/manage-project-resource-quotas'
          },
          {
            to: '/v2.8/how-to-guides/advanced-user-guides/manage-projects',
            from: '/v2.8/pages-for-subheaders/manage-projects'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac',
            from: '/v2.8/pages-for-subheaders/manage-role-based-access-control-rbac'
          },
          {
            to: '/v2.8/how-to-guides/advanced-user-guides/monitoring-alerting-guides',
            from: '/v2.8/pages-for-subheaders/monitoring-alerting-guides'
          },
          {
            to: '/v2.8/integrations-in-rancher/monitoring-and-alerting',
            from: '/v2.8/pages-for-subheaders/monitoring-and-alerting'
          },
          {
            to: '/v2.8/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides',
            from: '/v2.8/pages-for-subheaders/monitoring-v2-configuration-guides'
          },
          {
            to: '/v2.8/reference-guides/monitoring-v2-configuration',
            from: '/v2.8/pages-for-subheaders/monitoring-v2-configuration'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides',
            from: '/v2.8/pages-for-subheaders/new-user-guides'
          },
          {
            to: '/v2.8/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration',
            from: '/v2.8/pages-for-subheaders/node-template-configuration'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix',
            from: '/v2.8/pages-for-subheaders/nutanix'
          },
          {
            to: '/v2.8/getting-started/installation-and-upgrade/other-installation-methods',
            from: '/v2.8/pages-for-subheaders/other-installation-methods'
          },
          {
            to: '/v2.8/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides',
            from: '/v2.8/pages-for-subheaders/prometheus-federator-guides'
          },
          {
            to: '/v2.8/reference-guides/prometheus-federator',
            from: '/v2.8/pages-for-subheaders/prometheus-federator'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples',
            from: '/v2.8/pages-for-subheaders/provisioning-storage-examples'
          },
          {
            to: '/v2.8/getting-started/quick-start-guides',
            from: '/v2.8/pages-for-subheaders/quick-start-guides'
          },
          {
            to: '/v2.8/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy',
            from: '/v2.8/pages-for-subheaders/rancher-behind-an-http-proxy'
          },
          {
            to: '/v2.8/reference-guides/rancher-security/hardening-guides',
            from: '/v2.8/pages-for-subheaders/rancher-hardening-guides'
          },
          {
            to: '/v2.8/reference-guides/best-practices/rancher-managed-clusters',
            from: '/v2.8/pages-for-subheaders/rancher-managed-clusters'
          },
          {
            to: '/v2.8/reference-guides/rancher-manager-architecture',
            from: '/v2.8/pages-for-subheaders/rancher-manager-architecture'
          },
          {
            to: '/v2.8/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker',
            from: '/v2.8/pages-for-subheaders/rancher-on-a-single-node-with-docker'
          },
          {
            to: '/v2.8/reference-guides/rancher-security',
            from: '/v2.8/pages-for-subheaders/rancher-security'
          },
          {
            to: '/v2.8/reference-guides/cluster-configuration/rancher-server-configuration',
            from: '/v2.8/pages-for-subheaders/rancher-server-configuration'
          },
          {
            to: '/v2.8/reference-guides/best-practices/rancher-server',
            from: '/v2.8/pages-for-subheaders/rancher-server'
          },
          {
            to: '/v2.8/getting-started/installation-and-upgrade/resources',
            from: '/v2.8/pages-for-subheaders/resources'
          },
          {
            to: '/v2.8/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide',
            from: '/v2.8/pages-for-subheaders/rke1-hardening-guide'
          },
          {
            to: '/v2.8/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide',
            from: '/v2.8/pages-for-subheaders/rke2-hardening-guide'
          },
          {
            to: '/v2.8/reference-guides/rancher-security/selinux-rpm',
            from: '/v2.8/pages-for-subheaders/selinux-rpm'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers',
            from: '/v2.8/pages-for-subheaders/set-up-cloud-providers'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers',
            from: '/v2.8/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers'
          },
          {
            to: '/v2.8/reference-guides/single-node-rancher-in-docker',
            from: '/v2.8/pages-for-subheaders/single-node-rancher-in-docker'
          },
          {
            to: '/v2.8/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes',
            from: '/v2.8/pages-for-subheaders/use-existing-nodes'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider',
            from: '/v2.8/pages-for-subheaders/use-new-nodes-in-an-infra-provider'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters',
            from: '/v2.8/pages-for-subheaders/use-windows-clusters'
          },
          {
            to: '/v2.8/reference-guides/user-settings',
            from: '/v2.8/pages-for-subheaders/user-settings'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere',
            from: '/v2.8/pages-for-subheaders/vsphere'
          },
          {
            to: '/v2.8/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods',
            from: '/v2.8/pages-for-subheaders/workloads-and-pods'
          }, // Redirects for pages-for-subheaders removal [2.8] (end)
          { // Redirects for pages-for-subheaders removal [latest]
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers',
            from: '/pages-for-subheaders/about-provisioning-drivers'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates',
            from: '/pages-for-subheaders/about-rke1-templates'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/access-clusters',
            from: '/pages-for-subheaders/access-clusters'
          },
          {
            to: '/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration',
            from: '/pages-for-subheaders/advanced-configuration'
          },
          {
            to: '/how-to-guides/advanced-user-guides',
            from: '/pages-for-subheaders/advanced-user-guides'
          },
          {
            to: '/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install',
            from: '/pages-for-subheaders/air-gapped-helm-cli-install'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config',
            from: '/pages-for-subheaders/authentication-config'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration',
            from: '/pages-for-subheaders/authentication-permissions-and-global-configuration'
          },
          {
            to: '/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace',
            from: '/pages-for-subheaders/aws-cloud-marketplace'
          },
          {
            to: '/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery',
            from: '/pages-for-subheaders/backup-restore-and-disaster-recovery'
          },
          {
            to: '/reference-guides/backup-restore-configuration',
            from: '/pages-for-subheaders/backup-restore-configuration'
          },
          {
            to: '/reference-guides/best-practices',
            from: '/pages-for-subheaders/best-practices'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters',
            from: '/pages-for-subheaders/checklist-for-production-ready-clusters'
          },
          {
            to: '/how-to-guides/advanced-user-guides/cis-scan-guides',
            from: '/pages-for-subheaders/cis-scan-guides'
          },
          {
            to: '/integrations-in-rancher/cis-scans',
            from: '/pages-for-subheaders/cis-scans'
          },
          {
            to: '/reference-guides/cli-with-rancher',
            from: '/pages-for-subheaders/cli-with-rancher'
          },
          {
            to: '/integrations-in-rancher/cloud-marketplace',
            from: '/pages-for-subheaders/cloud-marketplace'
          },
          {
            to: '/reference-guides/cluster-configuration',
            from: '/pages-for-subheaders/cluster-configuration'
          },
          {
            to: '/integrations-in-rancher/istio/configuration-options',
            from: '/pages-for-subheaders/configuration-options'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml',
            from: '/pages-for-subheaders/configure-microsoft-ad-federation-service-saml'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap',
            from: '/pages-for-subheaders/configure-openldap'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-shibboleth-saml',
            from: '/pages-for-subheaders/configure-shibboleth-saml'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage',
            from: '/pages-for-subheaders/create-kubernetes-persistent-storage'
          },
          {
            to: '/integrations-in-rancher/logging/custom-resource-configuration',
            from: '/pages-for-subheaders/custom-resource-configuration'
          },
          {
            to: '/getting-started/quick-start-guides/deploy-rancher-manager',
            from: '/pages-for-subheaders/deploy-rancher-manager'
          },
          {
            to: '/getting-started/quick-start-guides/deploy-workloads',
            from: '/pages-for-subheaders/deploy-rancher-workloads'
          },
          {
            to: '/reference-guides/cluster-configuration/downstream-cluster-configuration',
            from: '/pages-for-subheaders/downstream-cluster-configuration'
          },
          {
            to: '/how-to-guides/advanced-user-guides/enable-experimental-features',
            from: '/pages-for-subheaders/enable-experimental-features'
          },
          {
            to: '/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration',
            from: '/pages-for-subheaders/gke-cluster-configuration'
          },
          {
            to: '/how-to-guides/new-user-guides/helm-charts-in-rancher',
            from: '/pages-for-subheaders/helm-charts-in-rancher'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler',
            from: '/pages-for-subheaders/horizontal-pod-autoscaler'
          },
          {
            to: '/how-to-guides/new-user-guides/infrastructure-setup',
            from: '/pages-for-subheaders/infrastructure-setup'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/install-cluster-autoscaler',
            from: '/pages-for-subheaders/install-cluster-autoscaler'
          },
          {
            to: '/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster',
            from: '/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster'
          },
          {
            to: '/getting-started/installation-and-upgrade',
            from: '/pages-for-subheaders/installation-and-upgrade'
          },
          {
            to: '/getting-started/installation-and-upgrade/installation-references',
            from: '/pages-for-subheaders/installation-references'
          },
          {
            to: '/getting-started/installation-and-upgrade/installation-requirements',
            from: '/pages-for-subheaders/installation-requirements'
          },
          {
            to: '/how-to-guides/advanced-user-guides/istio-setup-guide',
            from: '/pages-for-subheaders/istio-setup-guide'
          },
          {
            to: '/integrations-in-rancher/istio',
            from: '/pages-for-subheaders/istio'
          },
          {
            to: '/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide',
            from: '/pages-for-subheaders/k3s-hardening-guide'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-cluster-setup',
            from: '/pages-for-subheaders/kubernetes-cluster-setup'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup',
            from: '/pages-for-subheaders/kubernetes-clusters-in-rancher-setup'
          },
          {
            to: '/troubleshooting/kubernetes-components',
            from: '/pages-for-subheaders/kubernetes-components'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-resources-setup',
            from: '/pages-for-subheaders/kubernetes-resources-setup'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher',
            from: '/pages-for-subheaders/launch-kubernetes-with-rancher'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller',
            from: '/pages-for-subheaders/load-balancer-and-ingress-controller'
          },
          {
            to: '/integrations-in-rancher/logging',
            from: '/pages-for-subheaders/logging'
          },
          {
            to: '/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration',
            from: '/pages-for-subheaders/machine-configuration'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters',
            from: '/pages-for-subheaders/manage-clusters'
          },
          {
            to: '/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas',
            from: '/pages-for-subheaders/manage-project-resource-quotas'
          },
          {
            to: '/how-to-guides/advanced-user-guides/manage-projects',
            from: '/pages-for-subheaders/manage-projects'
          },
          {
            to: '/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac',
            from: '/pages-for-subheaders/manage-role-based-access-control-rbac'
          },
          {
            to: '/how-to-guides/advanced-user-guides/monitoring-alerting-guides',
            from: '/pages-for-subheaders/monitoring-alerting-guides'
          },
          {
            to: '/integrations-in-rancher/monitoring-and-alerting',
            from: '/pages-for-subheaders/monitoring-and-alerting'
          },
          {
            to: '/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides',
            from: '/pages-for-subheaders/monitoring-v2-configuration-guides'
          },
          {
            to: '/reference-guides/monitoring-v2-configuration',
            from: '/pages-for-subheaders/monitoring-v2-configuration'
          },
          {
            to: '/how-to-guides/new-user-guides',
            from: '/pages-for-subheaders/new-user-guides'
          },
          {
            to: '/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration',
            from: '/pages-for-subheaders/node-template-configuration'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix',
            from: '/pages-for-subheaders/nutanix'
          },
          {
            to: '/getting-started/installation-and-upgrade/other-installation-methods',
            from: '/pages-for-subheaders/other-installation-methods'
          },
          {
            to: '/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides',
            from: '/pages-for-subheaders/prometheus-federator-guides'
          },
          {
            to: '/reference-guides/prometheus-federator',
            from: '/pages-for-subheaders/prometheus-federator'
          },
          {
            to: '/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples',
            from: '/pages-for-subheaders/provisioning-storage-examples'
          },
          {
            to: '/getting-started/quick-start-guides',
            from: '/pages-for-subheaders/quick-start-guides'
          },
          {
            to: '/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy',
            from: '/pages-for-subheaders/rancher-behind-an-http-proxy'
          },
          {
            to: '/reference-guides/rancher-security/hardening-guides',
            from: '/pages-for-subheaders/rancher-hardening-guides'
          },
          {
            to: '/reference-guides/best-practices/rancher-managed-clusters',
            from: '/pages-for-subheaders/rancher-managed-clusters'
          },
          {
            to: '/reference-guides/rancher-manager-architecture',
            from: '/pages-for-subheaders/rancher-manager-architecture'
          },
          {
            to: '/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker',
            from: '/pages-for-subheaders/rancher-on-a-single-node-with-docker'
          },
          {
            to: '/reference-guides/rancher-security',
            from: '/pages-for-subheaders/rancher-security'
          },
          {
            to: '/reference-guides/cluster-configuration/rancher-server-configuration',
            from: '/pages-for-subheaders/rancher-server-configuration'
          },
          {
            to: '/reference-guides/best-practices/rancher-server',
            from: '/pages-for-subheaders/rancher-server'
          },
          {
            to: '/getting-started/installation-and-upgrade/resources',
            from: '/pages-for-subheaders/resources'
          },
          {
            to: '/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide',
            from: '/pages-for-subheaders/rke1-hardening-guide'
          },
          {
            to: '/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide',
            from: '/pages-for-subheaders/rke2-hardening-guide'
          },
          {
            to: '/reference-guides/rancher-security/selinux-rpm',
            from: '/pages-for-subheaders/selinux-rpm'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers',
            from: '/pages-for-subheaders/set-up-cloud-providers'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers',
            from: '/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers'
          },
          {
            to: '/reference-guides/single-node-rancher-in-docker',
            from: '/pages-for-subheaders/single-node-rancher-in-docker'
          },
          {
            to: '/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes',
            from: '/pages-for-subheaders/use-existing-nodes'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider',
            from: '/pages-for-subheaders/use-new-nodes-in-an-infra-provider'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters',
            from: '/pages-for-subheaders/use-windows-clusters'
          },
          {
            to: '/reference-guides/user-settings',
            from: '/pages-for-subheaders/user-settings'
          },
          {
            to: '/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere',
            from: '/pages-for-subheaders/vsphere'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods',
            from: '/pages-for-subheaders/workloads-and-pods'
          }, // Redirects for pages-for-subheaders removal [latest] (end)
          { // Redirects for dashboard#9970
            to: '/v2.8/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences',
            from: '/v2.8/cluster-provisioning/rke-clusters/behavior-differences-between-rke1-and-rke2/'
          },
          {
            to: '/v2.7/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences',
            from: '/v2.7/cluster-provisioning/rke-clusters/behavior-differences-between-rke1-and-rke2/'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences',
            from: '/v2.6/cluster-provisioning/rke-clusters/behavior-differences-between-rke1-and-rke2/'
          }, // Redirects for dashboard#9970 (end)
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
            to: '/how-to-guides/new-user-guides/manage-clusters/manage-cluster-templates',
            from: ['/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates', '/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates']
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
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-amazon',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-to-out-of-tree-amazon'
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
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-vsphere',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree'
          },
          {
            to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-vsphere',
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-to-out-of-tree-vsphere',
          },
          { to: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-vsphere', 
            from: '/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree'
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
            to: '/integrations-in-rancher/fleet/architecture',
            from: '/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture'
          },
          {
            to: '/integrations-in-rancher/fleet/windows-support',
            from: '/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support'
          },
          {
            to: '/integrations-in-rancher/fleet/use-fleet-behind-a-proxy',
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
          },
          {
            to: '/v2.6/faq/general-faq',
            from: '/v2.6/faq'
          },
          {
            to: '/v2.6/troubleshooting/general-troubleshooting',
            from: '/v2.6/troubleshooting'
          },
          {
            to: '/v2.6/getting-started/overview',
            from: '/v2.6/getting-started/introduction/overview'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64',
            from: '/v2.6/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers',
            from: '/v2.6/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features',
            from: '/v2.6/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery',
            from: '/v2.6/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade/installation-references/helm-chart-options',
            from: '/v2.6/reference-guides/installation-references/helm-chart-options'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade/installation-references/tls-settings',
            from: '/v2.6/reference-guides/installation-references/tls-settings'
          },
          {
            to: '/v2.6/getting-started/installation-and-upgrade/installation-references/feature-flags',
            from: '/v2.6/reference-guides/installation-references/feature-flags'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-google-oauth'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-freeipa',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-oidc',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-saml'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-pingidentity',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-shibboleth-saml/about-group-permissions',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap/openldap-config-reference',
            from: '/v2.6/reference-guides/configure-openldap/openldap-config-reference'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/custom-branding',
            from: '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/custom-branding'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/install-cluster-autoscaler/use-aws-ec2-auto-scaling-groups',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/install-cluster-autoscaler/use-aws-ec2-auto-scaling-groups'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/nfs-storage',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/nfs-storage'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/vsphere-storage',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/rotate-certificates',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/rotate-encryption-key'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/manage-cluster-templates',
            from: ['/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates', '/v2.6/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates']
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-clusters/assign-pod-security-policies',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/rke1-vs-rke2-differences'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/azure-storageclass-configuration',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/windows-linux-cluster-feature-parity',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/network-requirements-for-host-gateway',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/workload-migration-guidance',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/amazon',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/azure',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/google-compute-engine'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree',
            from: '/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/add-users-to-projects',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects'
          },
          {
            to: '/v2.6/how-to-guides/new-user-guides/manage-namespaces',
            from: '/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/open-ports-with-firewalld',
            from: '/v2.6/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/tune-etcd-for-large-installs',
            from: '/v2.6/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/enable-api-audit-log',
            from: '/v2.6/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log'
          },
          {
            to: '/v2.6/how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer',
            from: '/v2.6/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer'
          },
          {
            to: '/v2.6/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements',
            from: '/v2.6/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements'
          },
          {
            to: '/v2.6/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter',
            from: '/v2.6/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter'
          },
          {
            to: '/v2.6/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter',
            from: '/v2.6/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter'
          },
          {
            to: '/v2.6/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues',
            from: '/v2.6/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues'
          },
          {
            to: '/v2.6/integrations-in-rancher/cloud-marketplace/supportconfig',
            from: '/v2.6/explanations/integrations-in-rancher/cloud-marketplace/supportconfig'
          },
          {
            to: '/v2.6/integrations-in-rancher/cis-scans/configuration-reference',
            from: '/v2.6/explanations/integrations-in-rancher/cis-scans/configuration-reference'
          },
          {
            to: '/v2.6/integrations-in-rancher/cis-scans/rbac-for-cis-scans',
            from: '/v2.6/explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans'
          },
          {
            to: '/v2.6/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests',
            from: '/v2.6/explanations/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests'
          },
          {
            to: '/v2.6/integrations-in-rancher/cis-scans/custom-benchmark',
            from: '/v2.6/explanations/integrations-in-rancher/cis-scans/custom-benchmark'
          },
          {
            to: '/v2.6/integrations-in-rancher/fleet-gitops-at-scale/architecture',
            from: '/v2.6/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture'
          },
          {
            to: '/v2.6/integrations-in-rancher/fleet-gitops-at-scale/windows-support',
            from: '/v2.6/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support'
          },
          {
            to: '/v2.6/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy',
            from: '/v2.6/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy'
          },
          {
            to: '/v2.6/integrations-in-rancher/harvester',
            from: '/v2.6/explanations/integrations-in-rancher/harvester'
          },
          {
            to: '/v2.6/integrations-in-rancher/istio/cpu-and-memory-allocations',
            from: '/v2.6/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations'
          },
          {
            to: '/v2.6/integrations-in-rancher/istio/rbac-for-istio',
            from: '/v2.6/explanations/integrations-in-rancher/istio/rbac-for-istio'
          },
          {
            to: '/v2.6/integrations-in-rancher/istio/disable-istio',
            from: '/v2.6/explanations/integrations-in-rancher/istio/disable-istio'
          },
          {
            to: '/v2.6/integrations-in-rancher/istio/configuration-options/pod-security-policies',
            from: '/v2.6/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies'
          },
          {
            to: '/v2.6/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations',
            from: '/v2.6/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations'
          },
          {
            to: '/v2.6/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster',
            from: '/v2.6/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster'
          },
          {
            to: '/v2.6/integrations-in-rancher/istio/configuration-options/project-network-isolation',
            from: '/v2.6/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation'
          },
          {
            to: '/v2.6/integrations-in-rancher/longhorn',
            from: '/v2.6/explanations/integrations-in-rancher/longhorn'
          },
          {
            to: '/v2.6/integrations-in-rancher/logging/logging-architecture',
            from: '/v2.6/explanations/integrations-in-rancher/logging/logging-architecture'
          },
          {
            to: '/v2.6/integrations-in-rancher/logging/rbac-for-logging',
            from: '/v2.6/explanations/integrations-in-rancher/logging/rbac-for-logging'
          },
          {
            to: '/v2.6/integrations-in-rancher/logging/logging-helm-chart-options',
            from: '/v2.6/explanations/integrations-in-rancher/logging/logging-helm-chart-options'
          },
          {
            to: '/v2.6/integrations-in-rancher/logging/taints-and-tolerations',
            from: '/v2.6/explanations/integrations-in-rancher/logging/taints-and-tolerations'
          },
          {
            to: '/v2.6/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows',
            from: '/v2.6/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows'
          },
          {
            to: '/v2.6/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs',
            from: '/v2.6/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs'
          },
          {
            to: '/v2.6/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works',
            from: '/v2.6/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works'
          },
          {
            to: '/v2.6/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring',
            from: '/v2.6/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring'
          },
          {
            to: '/v2.6/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards',
            from: '/v2.6/explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards'
          },
          {
            to: '/v2.6/integrations-in-rancher/monitoring-and-alerting/windows-support',
            from: '/v2.6/explanations/integrations-in-rancher/monitoring-and-alerting/windows-support'
          },
          {
            to: '/v2.6/integrations-in-rancher/monitoring-and-alerting/promql-expressions',
            from: '/v2.6/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions'
          },
          {
            to: '/v2.6/integrations-in-rancher/neuvector',
            from: '/v2.6/explanations/integrations-in-rancher/neuvector'
          },
          {
            to: '/v2.6/integrations-in-rancher/opa-gatekeeper',
            from: '/v2.6/explanations/integrations-in-rancher/opa-gatekeeper'
          }, // Redirects for restructure from PR #234 (end)
          {
            to: '/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.24-k8s-v1.24',
            from: '/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.23-k8s-v1.24'
          },
          {
            to: '/v2.7/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.24-k8s-v1.24',
            from: '/2.7/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.23-k8s-v1.24'
          },
          {
            to: '/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.7-k8s-v1.25-v1.26-v1.27',
            from: '/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.23-k8s-v1.25'
          },
          {
            to: '/v2.7/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.7-k8s-v1.25-v1.26-v1.27',
            from: '/v2.7/reference-guides/rancher-security/hardening-guides/k3s-hardening-guide/k3s-self-assessment-guide-with-cis-v1.23-k8s-v1.25'

          },
          {
            to: '/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.24-k8s-v1.24',
            from: '/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.24'
          },
          {
            to: '/v2.7/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.24-k8s-v1.24',
            from: '/v2.7/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.24'
          },
          {
            to: '/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.7-k8s-v1.25-v1.26-v1.27',
            from: '/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.25'
          },
          {
            to: '/v2.7/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.7-k8s-v1.25-v1.26-v1.27',
            from: '/v2.7/reference-guides/rancher-security/hardening-guides/rke1-hardening-guide/rke1-self-assessment-guide-with-cis-v1.23-k8s-v1.25'
          },
          {
            to: '/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.24-k8s-v1.24',
            from: '/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.23-k8s-v1.24'
          },
          {
            to: '/v2.7/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.24-k8s-v1.24',
            from: '/v2.7/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.23-k8s-v1.24'
          },
          {
            to: '/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.7-k8s-v1.25-v1.26-v1.27',
            from: '/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.23-k8s-v1.25'
          },
          {
            to: '/v2.7/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.7-k8s-v1.25-v1.26-v1.27',
            from: '/v2.7/reference-guides/rancher-security/hardening-guides/rke2-hardening-guide/rke2-self-assessment-guide-with-cis-v1.23-k8s-v1.25'
          },
          {
            to: '/reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale',
            from: '/reference-guides/best-practices/rancher-server/tips-for-scaling-rancher'
          },
          {
            to: '/v2.7/reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale',
            from: '/v2.7/reference-guides/best-practices/rancher-server/tips-for-scaling-rancher'
          },
          // Redirects for restructure from PR #1147 (start)
          {
            to: '/v2.8/api/v3-rancher-api-guide',
            from: ['/v2.8/reference-guides/about-the-api', '/v2.8/pages-for-subheaders/about-the-api']
          },
          {
            to: '/v2.8/api/api-tokens',
            from: '/v2.8/reference-guides/about-the-api/api-tokens'
          },
          {
            to: '/api/v3-rancher-api-guide',
            from: ['/reference-guides/about-the-api', '/pages-for-subheaders/about-the-api']
          },
          {
            to: '/api/api-tokens',
            from: '/reference-guides/about-the-api/api-tokens'
          }
          // Redirects for restructure from PR #1147 (end)
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
  ],
};
