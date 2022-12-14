import React from 'react';
const SslFaqHa = () => (
<div>

    <h3 id="pem">How Do I Know if My Certificates are in PEM Format?</h3>

    <p>You can recognize the PEM format by the following traits:</p>
    <ul>
    <li>The file begins with the following header:<br /> <code>-----BEGIN CERTIFICATE-----</code></li>
    <li>The header is followed by a long string of characters. Like, really long.</li>
    <li>The file ends with a footer:<br /> <code>-----END CERTIFICATE-----</code></li>
    </ul>

    <p><strong>PEM Certificate Example:</strong></p>

    <pre style={{
            color: "#f8f8f2",
            "background-color": "#272822",
            "-moz-tab-size" :4,
            "-o-tab-size" :4,
            "tab-size":4
        }}>
    ----BEGIN CERTIFICATE-----
    MIIGVDCCBDygAwIBAgIJAMiIrEm29kRLMA0GCSqGSIb3DQEBCwUAMHkxCzAJBgNV
    ... more lines
    VWQqljhfacYPgp8KJUJENQ9h5hZ2nSCrI+W00Jcw4QcEdCI8HL5wmg==
    -----END CERTIFICATE-----
    </pre>

    <h3 id="base64">How Can I Encode My PEM Files in base64?</h3>

    <p>To encode your certificates in base64:</p>

    <ol>
    <li>Change directory to where the PEM file resides.</li>
    <li>Run one of the following commands. Replace <code>FILENAME</code> with the name of your certificate.
        <pre style={{
            color: "#f8f8f2",
            "background-color": "#272822",
            "-moz-tab-size" :4,
            "-o-tab-size" :4,
            "tab-size":4
        }}>
    # MacOS
    cat FILENAME | base64
    # Linux
    cat FILENAME | base64 -w0
    # Windows
    certutil -encode FILENAME FILENAME.base64
    </pre>
    </li>
    </ol>

    <h3 id="base64">How Can I Verify My Generated base64 String For The Certificates?</h3>

    <p>To decode your certificates in base64:</p>

    <ol>
    <li>Copy the generated base64 string.</li>
    <li>Run one of the following commands. Replace <code>YOUR_BASE64_STRING</code> with the previously copied base64
        string.
        <pre style={{
            color: "#f8f8f2",
            "background-color": "#272822",
            "-moz-tab-size" :4,
            "-o-tab-size" :4,
            "tab-size":4
        }}>
    # MacOS
    echo YOUR_BASE64_STRING | base64 -D
    # Linux
    echo YOUR_BASE64_STRING | base64 -d
    # Windows
    certutil -decode FILENAME.base64 FILENAME.verify
    </pre>
    </li>
    </ol>


    <h3 id="cert-order">What is the Order of Certificates if I Want to Add My Intermediate(s)?</h3>

    <p>The order of adding certificates is as follows:</p>

    <pre style={{
            color: "#f8f8f2",
            "background-color": "#272822",
            "-moz-tab-size" :4,
            "-o-tab-size" :4,
            "tab-size":4
        }}>
    -----BEGIN CERTIFICATE-----
    %YOUR_CERTIFICATE%
    -----END CERTIFICATE-----
    -----BEGIN CERTIFICATE-----
    %YOUR_INTERMEDIATE_CERTIFICATE%
    -----END CERTIFICATE-----
    </pre>

    <h3 id="validate-cert-chain">How Do I Validate My Certificate Chain?</h3>

    <p>You can validate the certificate chain by using the <code>openssl</code> binary. If the output of the command (see
    the command example below) ends with <code>Verify return code: 0 (ok)</code>, your certificate chain is valid. The
    <code>ca.pem</code> file must be the same as you added to the <code>rancher/rancher</code> container. When using a
    certificate signed by a recognized Certificate Authority, you can omit the <code>-CAfile</code> parameter.</p>

    <p>Command:</p>
    <pre style={{
            color: "#f8f8f2",
            "background-color": "#272822",
            "-moz-tab-size" :4,
            "-o-tab-size" :4,
            "tab-size":4
        }}>
    openssl s_client -CAfile ca.pem -connect rancher.yourdomain.com:443 -servername rancher.yourdomain.com
    ...
        Verify return code: 0 (ok)
    </pre>
</div>
)
export default SslFaqHa