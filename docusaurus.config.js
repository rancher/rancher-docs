
/** @type {import('@docusaurus/types').DocusaurusConfig} */
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

module.exports = {
  title: "Rancher",
  tagline: "",
  url: "https://ranchermanager.docs.rancher.com/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "rancher", // Usually your GitHub org/user name.
  projectName: "rancher-docs", // Usually your repo name.
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
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
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
      appId: "30NEY6C9UY",

      // Public API key: it is safe to commit it
      apiKey: "8df59222c0ad79fdacb4d45d11e21d2e",

      indexName: "docs_ranchermanager_rancher_io",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      //... other Algolia params
    },
    colorMode: {
      // 'light' | 'dark'
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ["rust"],
    },
    navbar: {
      title: "",
      logo: {
        alt: "logo",
        src: "img/rancher-logo-horiz-color.svg",
        // href: 'en',
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownItemsAfter: [{ to: "/versions", label: "All versions" }],
          dropdownActiveClassDisabled: false,
        },
        {
          type: "localeDropdown",
          position: "left",
        },
        {
          type: "search",
          position: "left",
        },
        {
          type: "dropdown",
          label: "Quick Links",
          position: "right",
          items: [
            {
              href: "https://github.com/rancher/rancher",
              label: "GitHub",
            },
            {
              href: "https://github.com/rancher/rancher-docs",
              label: "Docs GitHub",
            },
          ],
        },
        {
          type: "dropdown",
          label: "More from SUSE",
          position: "right",
          items: [
            {
              href: "https://www.rancher.com",
              label: "Rancher",
              className: "navbar__icon navbar__rancher",
            },
            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: "https://elemental.docs.rancher.com/",
              label: "Elemental",
              className: "navbar__icon navbar__elemental",
            },
            {
              href: "https://fleet.rancher.io/",
              label: "Fleet",
              className: "navbar__icon navbar__fleet",
            },
            {
              href: "https://harvesterhci.io",
              label: "Harvester",
              className: "navbar__icon navbar__harvester",
            },
            {
              href: "https://rancherdesktop.io/",
              label: "Rancher Desktop",
              className: "navbar__icon navbar__rancher__desktop",
            },
            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: "https://opensource.suse.com",
              label: "More Projects...",
              className: "navbar__icon navbar__suse",
            },
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} SUSE Rancher. All Rights Reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          /* other docs plugin options */
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          editUrl: "https://github.com/rancher/rancher-docs/edit/main/",
          lastVersion: "current",
          versions: {
            current: {
              label: "Latest",
            },
            '2.13': {
              label: 'v2.13 (Preview)',
              path: 'v2.13',
              banner: 'unreleased'
            },
            '2.12': {
              label: "v2.12",
              path: "v2.12",
              banner: "none"
            },
            2.11: {
              label: "v2.11",
              path: "v2.11",
              banner: "none",
            },
            "2.10": {
              label: "v2.10",
              path: "v2.10",
              banner: "none",
            },
            2.9: {
              label: "v2.9",
              path: "v2.9",
              banner: "none",
            },
            2.8: {
              label: "v2.8 (Archived)",
              path: "v2.8",
              banner: `none`,
              noIndex: true,
            },
            2.7: {
              label: "v2.7 (Archived)",
              path: "v2.7",
              banner: `none`,
              noIndex: true,
            },
            2.6: {
              label: "v2.6 (Archived)",
              path: "v2.6",
              banner: `none`,
              noIndex: true,
            },
            2.5: {
              label: "v2.5 (Archived)",
              path: "v2.5",
              banner: `none`,
              noIndex: true,
            },
            "2.0-2.4": {
              label: "v2.0-v2.4 (Archived)",
              path: "v2.0-v2.4",
              banner: "none",
              noIndex: true,
            },
          },
        },
        blog: false, // Optional: disable the blog plugin
        // ...
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        googleTagManager: {
          containerId: "GTM-57KS2MW",
        },
      },
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: "rancher-api-v2-12",
            spec: "openapi/swagger-v2.12.json",
            // route: '/api/',
          },
          {
            id: "rancher-api-v2-11",
            spec: "openapi/swagger-v2.11.json",
            // route: '/api/',
          },
          {
            id: "rancher-api-v2-10",
            spec: "openapi/swagger-v2.10.json",
            // route: '/api/',
          },
          {
            id: "rancher-api-v2-9",
            spec: "openapi/swagger-v2.9.json",
            // route: '/api/',
          },
          {
            id: "rancher-api-v2-8",
            spec: "openapi/swagger-v2.8.json",
            // route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
    ],
  ],
  plugins: [
    tailwindPlugin,
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html", "htm"],
        redirects: [
          {
            // Redirects for multi-cluster apps removal (rancher-docs/issues/734)
            to: "/integrations-in-rancher/fleet",
            from: [
              "/pages-for-subheaders/deploy-apps-across-clusters",
              "/how-to-guides/new-user-guides/deploy-apps-across-clusters",
              "/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet",
              "/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",
            ],
          }, // Redirects for multi-cluster apps removal (rancher-docs/issues/734) (end)
          {
            to: "/faq/deprecated-features",
            from: "/faq/deprecated-features-in-v2.5",
          },
          {
            // Redirects for pages-for-subheaders removal [latest]
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers",
            from: "/pages-for-subheaders/about-provisioning-drivers",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",
            from: "/pages-for-subheaders/about-rke1-templates",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/access-clusters",
            from: "/pages-for-subheaders/access-clusters",
          },
          {
            to: "/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration",
            from: "/pages-for-subheaders/advanced-configuration",
          },
          {
            to: "/how-to-guides/advanced-user-guides",
            from: "/pages-for-subheaders/advanced-user-guides",
          },
          {
            to: "/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",
            from: "/pages-for-subheaders/air-gapped-helm-cli-install",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",
            from: "/pages-for-subheaders/authentication-config",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration",
            from: "/pages-for-subheaders/authentication-permissions-and-global-configuration",
          },
          {
            to: "/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace",
            from: "/pages-for-subheaders/aws-cloud-marketplace",
          },
          {
            to: "/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",
            from: "/pages-for-subheaders/backup-restore-and-disaster-recovery",
          },
          {
            to: "/reference-guides/backup-restore-configuration",
            from: "/pages-for-subheaders/backup-restore-configuration",
          },
          {
            to: "/reference-guides/best-practices",
            from: "/pages-for-subheaders/best-practices",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters",
            from: "/pages-for-subheaders/checklist-for-production-ready-clusters",
          },
          {
            to: "/reference-guides/cli-with-rancher",
            from: "/pages-for-subheaders/cli-with-rancher",
          },
          {
            to: "/integrations-in-rancher/cloud-marketplace",
            from: "/pages-for-subheaders/cloud-marketplace",
          },
          {
            to: "/reference-guides/cluster-configuration",
            from: "/pages-for-subheaders/cluster-configuration",
          },
          {
            to: "/integrations-in-rancher/istio/configuration-options",
            from: "/pages-for-subheaders/configuration-options",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml",
            from: "/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap",
            from: "/pages-for-subheaders/configure-openldap",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-shibboleth-saml",
            from: "/pages-for-subheaders/configure-shibboleth-saml",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage",
            from: "/pages-for-subheaders/create-kubernetes-persistent-storage",
          },
          {
            to: "/integrations-in-rancher/logging/custom-resource-configuration",
            from: "/pages-for-subheaders/custom-resource-configuration",
          },
          {
            to: "/getting-started/quick-start-guides/deploy-rancher-manager",
            from: "/pages-for-subheaders/deploy-rancher-manager",
          },
          {
            to: "/getting-started/quick-start-guides/deploy-workloads",
            from: "/pages-for-subheaders/deploy-rancher-workloads",
          },
          {
            to: "/reference-guides/cluster-configuration/downstream-cluster-configuration",
            from: "/pages-for-subheaders/downstream-cluster-configuration",
          },
          {
            to: "/how-to-guides/advanced-user-guides/enable-experimental-features",
            from: "/pages-for-subheaders/enable-experimental-features",
          },
          {
            to: "/reference-guides/cluster-configuration/rancher-server-configuration/gke-cluster-configuration",
            from: "/pages-for-subheaders/gke-cluster-configuration",
          },
          {
            to: "/how-to-guides/new-user-guides/helm-charts-in-rancher",
            from: "/pages-for-subheaders/helm-charts-in-rancher",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler",
            from: "/pages-for-subheaders/horizontal-pod-autoscaler",
          },
          {
            to: "/how-to-guides/new-user-guides/infrastructure-setup",
            from: "/pages-for-subheaders/infrastructure-setup",
          },
          {
            to: "/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",
            from: "/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster",
          },
          {
            to: "/getting-started/installation-and-upgrade",
            from: "/pages-for-subheaders/installation-and-upgrade",
          },
          {
            to: "/getting-started/installation-and-upgrade/installation-references",
            from: "/pages-for-subheaders/installation-references",
          },
          {
            to: "/getting-started/installation-and-upgrade/installation-requirements",
            from: "/pages-for-subheaders/installation-requirements",
          },
          {
            to: "/how-to-guides/advanced-user-guides/istio-setup-guide",
            from: "/pages-for-subheaders/istio-setup-guide",
          },
          {
            to: "/integrations-in-rancher/istio",
            from: "/pages-for-subheaders/istio",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-cluster-setup",
            from: "/pages-for-subheaders/kubernetes-cluster-setup",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup",
            from: "/pages-for-subheaders/kubernetes-clusters-in-rancher-setup",
          },
          {
            to: "/troubleshooting/kubernetes-components",
            from: "/pages-for-subheaders/kubernetes-components",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-resources-setup",
            from: "/pages-for-subheaders/kubernetes-resources-setup",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher",
            from: "/pages-for-subheaders/launch-kubernetes-with-rancher",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller",
            from: "/pages-for-subheaders/load-balancer-and-ingress-controller",
          },
          {
            to: "/integrations-in-rancher/logging",
            from: "/pages-for-subheaders/logging",
          },
          {
            to: "/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration",
            from: "/pages-for-subheaders/machine-configuration",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters",
            from: "/pages-for-subheaders/manage-clusters",
          },
          {
            to: "/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",
            from: "/pages-for-subheaders/manage-project-resource-quotas",
          },
          {
            to: "/how-to-guides/advanced-user-guides/manage-projects",
            from: "/pages-for-subheaders/manage-projects",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac",
            from: "/pages-for-subheaders/manage-role-based-access-control-rbac",
          },
          {
            to: "/how-to-guides/advanced-user-guides/monitoring-alerting-guides",
            from: "/pages-for-subheaders/monitoring-alerting-guides",
          },
          {
            to: "/integrations-in-rancher/monitoring-and-alerting",
            from: "/pages-for-subheaders/monitoring-and-alerting",
          },
          {
            to: "/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides",
            from: "/pages-for-subheaders/monitoring-v2-configuration-guides",
          },
          {
            to: "/reference-guides/monitoring-v2-configuration",
            from: "/pages-for-subheaders/monitoring-v2-configuration",
          },
          {
            to: "/how-to-guides/new-user-guides",
            from: "/pages-for-subheaders/new-user-guides",
          },
          {
            to: "/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",
            from: "/pages-for-subheaders/node-template-configuration",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix",
            from: "/pages-for-subheaders/nutanix",
          },
          {
            to: "/getting-started/installation-and-upgrade/other-installation-methods",
            from: "/pages-for-subheaders/other-installation-methods",
          },
          {
            to: "/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides",
            from: "/pages-for-subheaders/prometheus-federator-guides",
          },
          {
            to: "/reference-guides/prometheus-federator",
            from: "/pages-for-subheaders/prometheus-federator",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples",
            from: "/pages-for-subheaders/provisioning-storage-examples",
          },
          {
            to: "/getting-started/quick-start-guides",
            from: "/pages-for-subheaders/quick-start-guides",
          },
          {
            to: "/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy",
            from: "/pages-for-subheaders/rancher-behind-an-http-proxy",
          },
          {
            to: "/reference-guides/best-practices/rancher-managed-clusters",
            from: "/pages-for-subheaders/rancher-managed-clusters",
          },
          {
            to: "/reference-guides/rancher-manager-architecture",
            from: "/pages-for-subheaders/rancher-manager-architecture",
          },
          {
            to: "/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker",
            from: "/pages-for-subheaders/rancher-on-a-single-node-with-docker",
          },
          {
            to: "/reference-guides/rancher-security",
            from: "/pages-for-subheaders/rancher-security",
          },
          {
            to: "/reference-guides/cluster-configuration/rancher-server-configuration",
            from: "/pages-for-subheaders/rancher-server-configuration",
          },
          {
            to: "/reference-guides/best-practices/rancher-server",
            from: "/pages-for-subheaders/rancher-server",
          },
          {
            to: "/getting-started/installation-and-upgrade/resources",
            from: "/pages-for-subheaders/resources",
          },
          {
            to: "/reference-guides/rancher-security/selinux-rpm",
            from: "/pages-for-subheaders/selinux-rpm",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers",
            from: "/pages-for-subheaders/set-up-cloud-providers",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",
            from: "/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",
          },
          {
            to: "/reference-guides/single-node-rancher-in-docker",
            from: "/pages-for-subheaders/single-node-rancher-in-docker",
          },
          {
            to: "/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes",
            from: "/pages-for-subheaders/use-existing-nodes",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider",
            from: "/pages-for-subheaders/use-new-nodes-in-an-infra-provider",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters",
            from: "/pages-for-subheaders/use-windows-clusters",
          },
          {
            to: "/reference-guides/user-settings",
            from: "/pages-for-subheaders/user-settings",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere",
            from: "/pages-for-subheaders/vsphere",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",
            from: "/pages-for-subheaders/workloads-and-pods",
          }, // Redirects for pages-for-subheaders removal [latest] (end)
          {
            // Redirects for dashboard v2.11 Preview (start)
            to: "/v2.11/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth",
            from: "/v2.11/admin-settings/authentication/google",
          },
          {
            to: "/v2.11/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides",
            from: "/v2.11/monitoring-alerting/configuration",
          },
          {
            to: "/v2.11/integrations-in-rancher/monitoring-and-alerting",
            from: "/v2.11/monitoring-alerting",
          }, // Redirects for dashboard v2.11 Preview (end)
          {
            // Redirects for dashboard#11114 (start)
            to: "/v2.10/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth",
            from: "/v2.10/admin-settings/authentication/google",
          },
          {
            to: "/v2.10/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides",
            from: "/v2.10/monitoring-alerting/configuration",
          },
          {
            to: "/v2.10/integrations-in-rancher/monitoring-and-alerting",
            from: "/v2.10/monitoring-alerting",
          }, // Redirects for dashboard#11114 (end)
          {
            // Redirects for dashboard#12040 (start)
            to: "/v2.9/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth",
            from: "/v2.9/admin-settings/authentication/google",
          },
          {
            to: "/v2.9/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides",
            from: "/v2.9/monitoring-alerting/configuration",
          },
          {
            to: "/v2.9/integrations-in-rancher/monitoring-and-alerting",
            from: "/v2.9/monitoring-alerting",
          }, // Redirects for dashboard#12040 (end)
          {
            // Redirects for restructure from PR #234 (start)
            to: "/faq/general-faq",
            from: "/faq",
          },
          {
            to: "/troubleshooting/general-troubleshooting",
            from: "/troubleshooting",
          },
          {
            to: "/getting-started/overview",
            from: "/getting-started/introduction/overview",
          },
          {
            to: "/how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64",
            from: "/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",
          },
          {
            to: "/how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers",
            from: "/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers",
          },
          {
            to: "/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features",
            from: "/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features",
          },
          {
            to: "/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery",
            from: "/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery",
          },
          {
            to: "/getting-started/installation-and-upgrade/installation-references/helm-chart-options",
            from: "/reference-guides/installation-references/helm-chart-options",
          },
          {
            to: "/getting-started/installation-and-upgrade/installation-references/tls-settings",
            from: "/reference-guides/installation-references/tls-settings",
          },
          {
            to: "/getting-started/installation-and-upgrade/installation-references/feature-flags",
            from: "/reference-guides/installation-references/feature-flags",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/manage-users-and-groups",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/create-local-users",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/create-local-users",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-google-oauth",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-google-oauth",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-freeipa",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-oidc",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-saml",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-pingidentity",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-shibboleth-saml/about-group-permissions",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-shibboleth-saml/about-group-permissions",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap/openldap-config-reference",
            from: "/reference-guides/configure-openldap/openldap-config-reference",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry",
          },
          {
            to: "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/custom-branding",
            from: "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/custom-branding",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/persistent-storage-in-amazon-ebs",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/nfs-storage",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/nfs-storage",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/vsphere-storage",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/rotate-certificates",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/rotate-encryption-key",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/manage-cluster-templates",
            from: [
              "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates",
              "/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates",
            ],
          },
          {
            to: "/v2.10/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools",
            from: "/v2.10/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",
          },
          {
            to: "/v2.11/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools",
            from: "/v2.11/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes",
            from: "/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos",
          },
          {
            to: "/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/azure-storageclass-configuration",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/windows-linux-cluster-feature-parity",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/network-requirements-for-host-gateway",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/use-windows-clusters/workload-migration-guidance",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/amazon",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-amazon",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-to-out-of-tree-amazon",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/azure",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/google-compute-engine",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-vsphere",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-vsphere",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-to-out-of-tree-vsphere",
          },
          {
            to: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/migrate-to-an-out-of-tree-cloud-provider/migrate-to-out-of-tree-vsphere",
            from: "/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree",
          },
          {
            to: "/how-to-guides/new-user-guides/add-users-to-projects",
            from: "/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects",
          },
          {
            to: "/how-to-guides/new-user-guides/manage-namespaces",
            from: "/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces",
          },
          {
            to: "/how-to-guides/advanced-user-guides/open-ports-with-firewalld",
            from: "/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld",
          },
          {
            to: "/how-to-guides/advanced-user-guides/tune-etcd-for-large-installs",
            from: "/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs",
          },
          {
            to: "/how-to-guides/advanced-user-guides/enable-api-audit-log",
            from: "/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log",
          },
          {
            to: "/how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer",
            from: "/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer",
          },
          {
            to: "/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements",
            from: "/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements",
          },
          {
            to: "/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter",
            from: "/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter",
          },
          {
            to: "/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter",
            from: "/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter",
          },
          {
            to: "/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues",
            from: "/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues",
          },
          {
            to: "/integrations-in-rancher/cloud-marketplace/supportconfig",
            from: "/explanations/integrations-in-rancher/cloud-marketplace/supportconfig",
          },
          {
            to: "/integrations-in-rancher/fleet/architecture",
            from: "/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture",
          },
          {
            to: "/integrations-in-rancher/fleet/windows-support",
            from: "/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support",
          },
          {
            to: "/integrations-in-rancher/fleet/use-fleet-behind-a-proxy",
            from: "/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy",
          },
          {
            to: "/integrations-in-rancher/harvester",
            from: "/explanations/integrations-in-rancher/harvester",
          },
          {
            to: "/integrations-in-rancher/istio/cpu-and-memory-allocations",
            from: "/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",
          },
          {
            to: "/integrations-in-rancher/istio/rbac-for-istio",
            from: "/explanations/integrations-in-rancher/istio/rbac-for-istio",
          },
          {
            to: "/integrations-in-rancher/istio/disable-istio",
            from: "/explanations/integrations-in-rancher/istio/disable-istio",
          },
          {
            to: "/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",
            from: "/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",
          },
          {
            to: "/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",
            from: "/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",
          },
          {
            to: "/integrations-in-rancher/istio/configuration-options/project-network-isolation",
            from: "/explanations/integrations-in-rancher/istio/configuration-options/project-network-isolation",
          },
          {
            to: "/integrations-in-rancher/longhorn",
            from: "/explanations/integrations-in-rancher/longhorn",
          },
          {
            to: "/integrations-in-rancher/logging/logging-architecture",
            from: "/explanations/integrations-in-rancher/logging/logging-architecture",
          },
          {
            to: "/integrations-in-rancher/logging/rbac-for-logging",
            from: "/explanations/integrations-in-rancher/logging/rbac-for-logging",
          },
          {
            to: "/integrations-in-rancher/logging/logging-helm-chart-options",
            from: "/explanations/integrations-in-rancher/logging/logging-helm-chart-options",
          },
          {
            to: "/integrations-in-rancher/logging/taints-and-tolerations",
            from: "/explanations/integrations-in-rancher/logging/taints-and-tolerations",
          },
          {
            to: "/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",
            from: "/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",
          },
          {
            to: "/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",
            from: "/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",
          },
          {
            to: "/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works",
            from: "/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works",
          },
          {
            to: "/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",
            from: "/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",
          },
          {
            to: "/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",
            from: "/explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",
          },
          {
            to: "/integrations-in-rancher/monitoring-and-alerting/windows-support",
            from: "/explanations/integrations-in-rancher/monitoring-and-alerting/windows-support",
          },
          {
            to: "/integrations-in-rancher/monitoring-and-alerting/promql-expressions",
            from: "/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions",
          },
          {
            to: "/integrations-in-rancher/neuvector",
            from: "/explanations/integrations-in-rancher/neuvector",
          },
          {
            to: "/reference-guides/best-practices/rancher-server/tuning-and-best-practices-for-rancher-at-scale",
            from: "/reference-guides/best-practices/rancher-server/tips-for-scaling-rancher",
          },
          // Redirects for restructure from PR #1147 (start)
          {
            to: "/api/v3-rancher-api-guide",
            from: [
              "/reference-guides/about-the-api",
              "/pages-for-subheaders/about-the-api",
            ],
          },
          {
            to: "/api/api-tokens",
            from: "/reference-guides/about-the-api/api-tokens",
          },
          // Redirects for restructure from PR #1147 (end)
          {
            from: "/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark",
            to: "/how-to-guides/advanced-user-guides/compliance-scan-guides/install-rancher-compliance",
          },
          {
            from: "/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",
            to: "/how-to-guides/advanced-user-guides/compliance-scan-guides/uninstall-rancher-compliance",
          },
          {
            from: "/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark",
            to: "/how-to-guides/advanced-user-guides/compliance-scan-guides/enable-alerting-for-rancher-compliance",
          },
          {
            from: "/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan",
            to: "/how-to-guides/advanced-user-guides/compliance-scan-guides/run-a-scan",
          },
          {
            from: "/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule",
            to: "/how-to-guides/advanced-user-guides/compliance-scan-guides/run-a-scan-periodically-on-a-schedule",
          },
          {
            from: "/how-to-guides/advanced-user-guides/cis-scan-guides/view-reports",
            to: "/how-to-guides/advanced-user-guides/compliance-scan-guides/view-reports",
          },
          {
            from: "/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",
            to: "/how-to-guides/advanced-user-guides/compliance-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule",
          },
          {
            from: "/how-to-guides/advanced-user-guides/cis-scan-guides/create-a-custom-benchmark-version-to-run",
            to: "/how-to-guides/advanced-user-guides/compliance-scan-guides/create-a-custom-compliance-version-to-run",
          },
          {
            from: "/integrations-in-rancher/cis-scans/configuration-reference",
            to: "/integrations-in-rancher/compliance-scans/configuration-reference",
          },
          {
            from: "/integrations-in-rancher/cis-scans/rbac-for-cis-scans",
            to: "/integrations-in-rancher/compliance-scans/rbac-for-compliance-scans",
          },
          {
            from: "/integrations-in-rancher/cis-scans/custom-benchmark",
            to: "/integrations-in-rancher/compliance-scans/custom-benchmark",
          },
          // Redirects for renaming nodes-and-machine-pools.md (start)
          {
            to: "/v2.12/how-to-guides/new-user-guides/manage-clusters/nodes-and-machine-pools",
            from: "/v2.12/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools",
          },
          {
            to: "/v2.13/how-to-guides/new-user-guides/manage-clusters/nodes-and-machine-pools",
            from: "/v2.13/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools",
          },
          // Redirects for renaming nodes-and-machine-pools.md (end)
        ],
      },
    ],
  ],
  scripts: [
    {
      src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
      type: "text/javascript",
      charset: "UTF-8",
      "data-domain-script": "0f98beb0-fc4c-417d-a42e-564e2cae42d2",
      async: true,
    },
    {
      src: "/scripts/optanonwrapper.js",
      type: "text/javascript",
      async: true,
    },
  ],
};
