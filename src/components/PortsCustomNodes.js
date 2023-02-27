import React from 'react';
const PortsCustomNodes = () => (
<table>
    <thead>
        <tr>
          <th>From / To</th>
          <th>Rancher Nodes</th>
          <th>etcd Plane Nodes</th>
          <th>Control Plane Nodes</th>
          <th>Worker Plane Nodes</th>
          <th>External Rancher Load Balancer</th>
          <th>Internet</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td >Rancher Nodes <sup>(1)</sup></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>git.rancher.io</td>
        </tr>
        <tr>
          <td rowspan="6">etcd Plane Nodes</td>
          <td rowspan="6" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>443 TCP <sup>(3)</sup></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>2379 TCP</td>
          <td></td>
          <td></td>
          <td rowspan="5" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>443 TCP</td>
          <td></td>
        </tr>
        <tr>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>2380 TCP</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>6443 TCP</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>8472 UDP</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>4789 UDP <sup>(6)</sup></td>
          <td></td>
        </tr>
        <tr>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>9099 TCP <sup>(4)</sup></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="8">Control Plane Nodes</td>
          <td rowspan="8" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>443 TCP <sup>(3)</sup></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>2379 TCP</td>
          <td></td>
          <td></td>
          <td rowspan="7" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>443 TCP</td>
          <td></td>
        </tr>
        <tr>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>2380 TCP</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>6443 TCP</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>8472 UDP</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>4789 UDP <sup>(6)</sup></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>10250 TCP</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>9099 TCP <sup>(4)</sup></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>10254 TCP <sup>(4)</sup></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="5">Worker Plane Nodes</td>
          <td rowspan="5" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>443 TCP <sup>(3)</sup></td>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>6443 TCP</td>
          <td></td>
          <td rowspan="4" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>443 TCP</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>8472 UDP</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>4789 UDP <sup>(6)</sup></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>9099 TCP <sup>(4)</sup></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>10254 TCP <sup>(4)</sup></td>
          <td></td>
        </tr>
        <tr>
          <td>Kubernetes API Clients</td>
          <td></td>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>6443 TCP <sup>(5)</sup></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="3">Workload Clients or Load Balancer</td>
          <td></td>
          <td></td>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>30000-32767 TCP / UDP<br/>(nodeport)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>80 TCP (Ingress)</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>443 TCP (Ingress)</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="7">Notes:<br/><br/>1. Nodes running standalone server or Rancher HA deployment.<br/>2. Required to fetch Rancher chart library.<br/>3. Only without external load balancer in front of Rancher.<br/>4. Local traffic to the node itself (not across nodes), if you've enabled optional features such as Rancher Monitoring.<br/>5. Only if Authorized Cluster Endpoints are activated.<br/>6. Only if using Overlay mode on Windows cluster.
          </td>
        </tr>
    </tbody>
</table>
)
export default PortsCustomNodes;