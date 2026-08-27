import React from "react";

/* ------------------------------------------------------------------
   FILL THIS IN. Every field left empty renders as a highlighted
   [MISSING: ...] marker on the page, so nothing ships unfilled.
------------------------------------------------------------------ */
const COMPANY = {
  effectiveDate: "27 August 2026", // e.g. "1 September 2026"
  udyamNumber: "UDYAM-MP-20-0108326", // e.g. "UDYAM-XX-00-0000000"
  registeredAddress: "Vaishnavi puram, D D Nagar 62 62 GWALIOR VAISHNAVI PURAM GWALIOR, MADHYA PRADESH 474005 India", // full registered address, one line
  privacyEmail: "thechubsmedia@gmail.com", // e.g. "privacy@chubsmedia.com"
  grievanceOfficerName: "Vivek Sharma", // a named person, required by the DPDP Act
  grievanceEmail: "thechubsmedia@gmail.com", // e.g. "grievance@chubsmedia.com"
};

function Fill({ value, name }) {
  if (value) return <>{value}</>;
  return <mark className="lp-missing">[MISSING: {name}]</mark>;
}

function Mail({ address, name }) {
  if (!address) return <Fill value="" name={name} />;
  return <a href={`mailto:${address}`}>{address}</a>;
}

export default function Privacy() {
  return (
    <div className="lp">
      <style>{css}</style>

      <article className="lp-body">
        <h1>Privacy Policy</h1>

        <p className="lp-meta">
          <strong>Effective date:</strong>{" "}
          <Fill value={COMPANY.effectiveDate} name="effective date" />
          <br />
          <strong>Last updated:</strong>{" "}
          <Fill value={COMPANY.effectiveDate} name="effective date" />
        </p>

        <h2>1. Who we are</h2>
        <p>
          This Privacy Policy explains how <strong>CHUBS MEDIA</strong> ("we",
          "us", "our") collects, uses, stores and protects personal data.
        </p>

        <div className="lp-scroll">
          <table>
            <tbody>
              <tr>
                <th>Legal entity</th>
                <td>CHUBS MEDIA</td>
              </tr>
              <tr>
                <th>Registration</th>
                <td>
                  Udyam (MSME), Government of India —{" "}
                  <Fill value={COMPANY.udyamNumber} name="Udyam number" />
                </td>
              </tr>
              <tr>
                <th>Registered address</th>
                <td>
                  <Fill
                    value={COMPANY.registeredAddress}
                    name="registered address"
                  />
                </td>
              </tr>
              <tr>
                <th>Product operated</th>
                <td>
                  <strong>Sahajo</strong> — a business messaging automation
                  platform
                </td>
              </tr>
              <tr>
                <th>Contact</th>
                <td>
                  <Mail address={COMPANY.privacyEmail} name="privacy email" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          We operate Sahajo, a software platform that lets businesses
          ("<strong>Clients</strong>") manage conversations with their own
          customers ("<strong>End Customers</strong>") on WhatsApp and Instagram,
          with automated and AI-assisted replies.
        </p>

        <h2>2. Our two roles — please read this first</h2>
        <p>
          We handle personal data in two distinct capacities, and your rights
          differ depending on which applies to you.
        </p>

        <h3>2.1 As a Data Processor — End Customer data</h3>
        <p>
          When a Client uses Sahajo to talk to their own customers,{" "}
          <strong>the Client is the Data Fiduciary</strong> (controller) for that
          conversation data. <strong>We are the Data Processor.</strong> We
          process End Customer data only on the Client's documented instructions,
          to provide the service.
        </p>
        <p>
          We do <strong>not</strong> sell End Customer data, do not use it for our
          own marketing, do not share it between Clients, and do not use it to
          build profiles across Clients.
        </p>
        <p>
          <strong>If you are an End Customer</strong> and you want your data
          accessed, corrected or deleted, the business you were messaging is your
          first point of contact. We will assist that business in fulfilling your
          request. You may also write to us directly at{" "}
          <Mail address={COMPANY.privacyEmail} name="privacy email" /> and we
          will route your request to the relevant Client and support them in
          answering it.
        </p>

        <h3>2.2 As a Data Fiduciary — Client account data</h3>
        <p>
          For the account data of our Clients — the business's name, contact
          details, billing information and administrator logins —{" "}
          <strong>we are the Data Fiduciary</strong> (controller), and this policy
          governs directly.
        </p>

        <h2>3. What data we process</h2>

        <h3>3.1 End Customer data (as Processor)</h3>
        <p>
          Received when an End Customer messages a Client's WhatsApp or Instagram
          account:
        </p>
        <div className="lp-scroll">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Examples</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contact identifiers</td>
                <td>
                  Phone number, WhatsApp profile name, Instagram handle and
                  username
                </td>
                <td>
                  Meta Platforms, via the WhatsApp Business Platform and
                  Instagram Messaging API
                </td>
              </tr>
              <tr>
                <td>Message content</td>
                <td>
                  Text, images, documents, voice notes, location shared in the
                  conversation
                </td>
                <td>The End Customer</td>
              </tr>
              <tr>
                <td>Conversation metadata</td>
                <td>
                  Timestamps, delivery and read status, message direction,
                  conversation state
                </td>
                <td>Meta Platforms</td>
              </tr>
              <tr>
                <td>Consent records</td>
                <td>
                  Whether and when the End Customer consented to marketing
                  messages, and any opt-out
                </td>
                <td>Captured in-conversation</td>
              </tr>
              <tr>
                <td>Transaction data</td>
                <td>
                  Order details, booking details, invoice references, payment
                  references — where the Client uses those features
                </td>
                <td>The End Customer and the Client</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We receive this data because the End Customer initiated or continued a
          conversation with a business that uses our platform. We do not obtain
          phone numbers from any other source and we do not purchase contact
          lists.
        </p>

        <h3>3.2 Client account data (as Data Fiduciary)</h3>
        <div className="lp-scroll">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Business details</td>
                <td>
                  Business name, address, GSTIN or other tax identifiers, website
                </td>
              </tr>
              <tr>
                <td>Administrator details</td>
                <td>
                  Name, email address, phone number, hashed password or federated
                  login identifier
                </td>
              </tr>
              <tr>
                <td>Connected account details</td>
                <td>
                  WhatsApp Business Account ID, business phone number ID,
                  Instagram account ID, and access tokens issued by Meta
                </td>
              </tr>
              <tr>
                <td>Billing data</td>
                <td>
                  Subscription tier, usage counts, invoices, payment references
                </td>
              </tr>
              <tr>
                <td>Technical logs</td>
                <td>
                  IP address, browser and device type, timestamps of
                  administrator actions
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>4. How we use it</h2>
        <p>
          <strong>End Customer data</strong> is used solely to: deliver and
          receive messages on the Client's behalf; generate automated and
          AI-assisted replies within the conversation; maintain conversation
          history so the Client can see it; fulfil the Client's own features such
          as bookings, orders and reminders; honour consent and opt-out choices;
          and produce aggregate statistics for that Client alone.
        </p>
        <p>
          <strong>Client account data</strong> is used to: create and administer
          the account; authenticate administrators; connect the Client's Meta
          assets; calculate usage and issue invoices; provide support; send
          service notices; and detect abuse or fraud.
        </p>
        <p>
          We do not use personal data for automated decision-making that produces
          legal or similarly significant effects.
        </p>

        <h2>5. AI processing</h2>
        <p>
          Sahajo generates replies using large language models provided by{" "}
          <strong>Amazon Web Services (Amazon Bedrock)</strong>, hosted in an
          India-available region.
        </p>
        <ul>
          <li>
            Message content is sent to the model in order to generate a reply.
          </li>
          <li>
            <strong>Your content is not used to train the models.</strong> Amazon
            Bedrock does not use customer inputs or outputs to train its base
            models, and we do not fine-tune models on Client or End Customer
            data.
          </li>
          <li>
            AI-generated replies can be inaccurate. Clients are responsible for
            supervising their automation, and human review remains available in
            every conversation.
          </li>
          <li>
            Where a reply is sent by a human rather than by automation, it is
            handled and labelled accordingly, as required by Meta's platform
            rules.
          </li>
        </ul>

        <h2>6. Who we share it with</h2>
        <p>
          We share personal data only with the following categories of recipient.
        </p>

        <h3>6.1 Sub-processors</h3>
        <div className="lp-scroll">
          <table>
            <thead>
              <tr>
                <th>Sub-processor</th>
                <th>Purpose</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazon Web Services, Inc.</td>
                <td>
                  Compute, storage, queuing, and AI model inference (Amazon
                  Bedrock)
                </td>
                <td>Asia Pacific (Mumbai), ap-south-1</td>
              </tr>
              <tr>
                <td>Supabase, Inc.</td>
                <td>Managed PostgreSQL database</td>
                <td>Mumbai, India</td>
              </tr>
              <tr>
                <td>Meta Platforms, Inc.</td>
                <td>
                  Message delivery over the WhatsApp Business Platform and
                  Instagram Messaging API
                </td>
                <td>Per Meta's own policies</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Each sub-processor is bound by contract to confidentiality and security
          obligations, and may process personal data only to provide its service
          to us.
        </p>

        <h3>6.2 Other recipients</h3>
        <ul>
          <li>
            <strong>The Client</strong>, for their own End Customers' data — this
            is the purpose of the service.
          </li>
          <li>
            <strong>Payment, calendar, logistics and invoicing providers</strong>{" "}
            that an individual Client chooses to connect, and only for that
            Client's data.
          </li>
          <li>
            <strong>Legal disclosure</strong>, where required by applicable law,
            court order, or a lawful request from a government authority.
          </li>
          <li>
            <strong>A successor entity</strong>, in the event of a merger,
            acquisition or sale of assets, subject to this policy continuing to
            apply.
          </li>
        </ul>
        <p>
          We do not sell personal data. We do not share personal data with
          advertising networks or data brokers.
        </p>

        <h2>7. Where it is stored — data residency</h2>
        <p>
          <strong>Personal data is stored in India.</strong> Our compute and
          storage run in the AWS Asia Pacific (Mumbai) region (ap-south-1) and
          our database is hosted in Mumbai, India. This is a design commitment,
          verified at provisioning time and re-checked on a recurring schedule,
          not an assumption.
        </p>
        <p>
          Limited transfers outside India may occur where Meta Platforms processes
          messages on its own global infrastructure in order to deliver them,
          which is inherent to using WhatsApp and Instagram, and where a Client
          chooses to connect a third-party provider that is located elsewhere.
        </p>

        <h2>8. How long we keep it</h2>
        <p>
          Retention is set per category of data, because different records carry
          different legal and operational obligations. We do not apply a single
          blanket period.
        </p>
        <div className="lp-scroll">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Message and conversation content</td>
                <td>
                  Kept for an operationally useful support and debugging window,
                  then deleted. Never retained indefinitely by default
                </td>
              </tr>
              <tr>
                <td>Consent records</td>
                <td>
                  Retained for the period required to evidence consent under the
                  DPDP Act, and deleted only through an explicit, audited process
                </td>
              </tr>
              <tr>
                <td>Invoices and tax records</td>
                <td>
                  Retained for the statutory period required by Indian tax law
                </td>
              </tr>
              <tr>
                <td>Audit logs</td>
                <td>
                  Append-only. Retained as a security and compliance control
                </td>
              </tr>
              <tr>
                <td>Usage records</td>
                <td>
                  Retained at least as long as the billing dispute window they
                  support
                </td>
              </tr>
              <tr>
                <td>Client account data</td>
                <td>
                  Retained while the account is active, and for a limited period
                  after closure to meet legal and accounting obligations
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          On an erasure request we delete the personal identifiers of the
          individual concerned. Where a record must be preserved for a Client's
          own legal obligations — an invoice, for example — the record is retained
          in anonymised form, with the personal identifiers removed rather than
          the financial record destroyed.
        </p>

        <h2>9. Your rights under the DPDP Act, 2023</h2>
        <p>
          If you are a Data Principal whose personal data we process, you have the
          right to:
        </p>
        <ul>
          <li>
            <strong>Access</strong> — obtain a summary of the personal data being
            processed and the processing activities undertaken.
          </li>
          <li>
            <strong>Correction and completion</strong> — have inaccurate or
            incomplete data corrected, completed or updated.
          </li>
          <li>
            <strong>Erasure</strong> — have personal data deleted, unless
            retention is required by law.
          </li>
          <li>
            <strong>Grievance redressal</strong> — raise a complaint with us
            (section 11), and escalate to the Data Protection Board of India if
            unsatisfied.
          </li>
          <li>
            <strong>Nominate</strong> — nominate another individual to exercise
            these rights in the event of death or incapacity.
          </li>
          <li>
            <strong>Withdraw consent</strong> — at any time, as easily as it was
            given. For marketing messages on WhatsApp or Instagram, replying with
            an opt-out in the conversation is honoured immediately and in the same
            exchange.
          </li>
        </ul>
        <p>
          <strong>How to exercise them:</strong> write to{" "}
          <Mail address={COMPANY.privacyEmail} name="privacy email" />. We respond
          within 30 days. If you are an End Customer, please tell us which
          business you were messaging, so we can route the request to the correct
          Data Fiduciary.
        </p>

        <h2>10. How we protect it</h2>
        <ul>
          <li>
            <strong>Strict tenant isolation.</strong> Every Client's data is
            separated at the database level using PostgreSQL row-level security,
            enforced on every query. A query that omits its scope returns nothing
            — it cannot return another Client's data.
          </li>
          <li>
            <strong>Encryption.</strong> Data is encrypted in transit using TLS
            and at rest by our infrastructure providers.
          </li>
          <li>
            <strong>Credential handling.</strong> Access tokens and secrets are
            held in a managed secrets store, never in application code or logs.
          </li>
          <li>
            <strong>Least privilege.</strong> Administrator access is role-based,
            and access to production data is limited to what is necessary to
            operate the service.
          </li>
          <li>
            <strong>Audit logging.</strong> Consent changes, bookings, payments,
            administrator actions and entitlement changes are written to an
            append-only audit log with no application-level path to alter or
            delete entries.
          </li>
          <li>
            <strong>Incident response.</strong> We will notify affected Clients
            and the Data Protection Board of India of a personal data breach as
            required by the DPDP Act.
          </li>
        </ul>
        <p>No system is perfectly secure, and we do not claim otherwise.</p>

        <h2>11. Grievance Officer</h2>
        <p>
          As required by the Digital Personal Data Protection Act, 2023:
        </p>
        <div className="lp-scroll">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>
                  <Fill
                    value={COMPANY.grievanceOfficerName}
                    name="grievance officer name"
                  />
                </td>
              </tr>
              <tr>
                <th>Designation</th>
                <td>Grievance Officer, CHUBS MEDIA</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>
                  <Mail
                    address={COMPANY.grievanceEmail}
                    name="grievance email"
                  />
                </td>
              </tr>
              <tr>
                <th>Address</th>
                <td>
                  <Fill
                    value={COMPANY.registeredAddress}
                    name="registered address"
                  />
                </td>
              </tr>
              <tr>
                <th>Response time</th>
                <td>Within 30 days of receipt</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          If your complaint is not resolved to your satisfaction, you may escalate
          it to the <strong>Data Protection Board of India</strong>.
        </p>

        <h2>12. Children</h2>
        <p>
          Sahajo is a business tool and is not directed at children. We do not
          knowingly process the personal data of a child except where an End
          Customer's data reaches us through a Client's conversation. Clients are
          responsible for obtaining verifiable parental consent where the DPDP Act
          requires it.
        </p>

        <h2>13. Cookies</h2>
        <p>
          Our administrator console uses strictly necessary cookies to keep you
          signed in and to protect against cross-site request forgery. We do not
          use advertising cookies and we do not run third-party trackers on the
          console.
        </p>

        <h2>14. Changes to this policy</h2>
        <p>
          We may update this policy. Material changes will be notified to Clients
          by email and by notice in the administrator console at least 14 days
          before they take effect. The "Last updated" date above always reflects
          the current version.
        </p>

        <h2>15. Contact</h2>
        <p>
          <strong>CHUBS MEDIA</strong>
          <br />
          <Fill value={COMPANY.registeredAddress} name="registered address" />
          <br />
          Email: <Mail address={COMPANY.privacyEmail} name="privacy email" />
        </p>

        <hr />
        <p className="lp-fine">
          WhatsApp and Instagram are trademarks of Meta Platforms, Inc. CHUBS
          MEDIA is an independent provider and is not endorsed by or affiliated
          with Meta Platforms, Inc.
        </p>
      </article>
    </div>
  );
}

const css = `
.lp {
  --lp-fg: #1a1a1a;
  --lp-muted: #5c5c5c;
  --lp-bg: #ffffff;
  --lp-rule: #e3e3e3;
  --lp-accent: #0b6b5f;
  --lp-th-bg: #f6f6f4;
  color: var(--lp-fg);
  background: var(--lp-bg);
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.65;
  -webkit-text-size-adjust: 100%;
}
@media (prefers-color-scheme: dark) {
  .lp {
    --lp-fg: #e8e8e6;
    --lp-muted: #a0a09c;
    --lp-bg: #131313;
    --lp-rule: #2e2e2e;
    --lp-accent: #57c9b6;
    --lp-th-bg: #1c1c1c;
  }
}
.lp-body {
  max-width: 46rem;
  margin: 0 auto;
  padding: 3rem 1.25rem 5rem;
}
.lp h1 {
  font-size: 2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
}
.lp h2 {
  font-size: 1.3rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 2.75rem 0 0.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--lp-rule);
}
.lp h3 {
  font-size: 1.05rem;
  margin: 1.75rem 0 0.5rem;
}
.lp p, .lp li { margin: 0 0 1rem; }
.lp ul { padding-left: 1.25rem; margin: 0 0 1rem; }
.lp li { margin-bottom: 0.6rem; }
.lp a { color: var(--lp-accent); }
.lp-meta {
  color: var(--lp-muted);
  font-size: 0.9rem;
  padding-bottom: 1.5rem;
}
.lp-fine { color: var(--lp-muted); font-size: 0.85rem; font-style: italic; }
.lp hr { border: 0; border-top: 1px solid var(--lp-rule); margin: 2.5rem 0 1.5rem; }
.lp-scroll { overflow-x: auto; margin: 0 0 1.5rem; }
.lp table {
  border-collapse: collapse;
  width: 100%;
  min-width: 32rem;
  font-size: 0.92rem;
}
.lp th, .lp td {
  border: 1px solid var(--lp-rule);
  padding: 0.6rem 0.75rem;
  text-align: left;
  vertical-align: top;
}
.lp th { background: var(--lp-th-bg); font-weight: 600; }
.lp-missing {
  background: #ffe27a;
  color: #4a3200;
  padding: 0 0.3em;
  border-radius: 3px;
  font-weight: 600;
}
`;
