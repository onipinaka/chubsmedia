import React from "react";

/* ------------------------------------------------------------------
   FILL THIS IN. Every field left empty renders as a highlighted
   [MISSING: ...] marker on the page, so nothing ships unfilled.
------------------------------------------------------------------ */
const COMPANY = {
  effectiveDate: "27 August 2026", // e.g. "1 September 2026"
  registeredAddress: "", // full registered address, one line
  legalEmail: "", // e.g. "legal@chubsmedia.com"
  jurisdictionCity: "", // e.g. "Mumbai"
  jurisdictionState: "", // e.g. "Maharashtra"
  privacyUrl: "https://chubsmedia.com/privacy",
};

function Fill({ value, name }) {
  if (value) return <>{value}</>;
  return <mark className="lp-missing">[MISSING: {name}]</mark>;
}

function Mail({ address, name }) {
  if (!address) return <Fill value="" name={name} />;
  return <a href={`mailto:${address}`}>{address}</a>;
}

function Venue() {
  const { jurisdictionCity: city, jurisdictionState: state } = COMPANY;
  if (!city) return <Fill value="" name="jurisdiction city" />;
  return <>{state ? `${city}, ${state}` : city}</>;
}

export default function Terms() {
  return (
    <div className="lp">
      <style>{css}</style>

      <article className="lp-body">
        <h1>Terms of Service</h1>

        <p className="lp-meta">
          <strong>Effective date:</strong>{" "}
          <Fill value={COMPANY.effectiveDate} name="effective date" />
          <br />
          <strong>Last updated:</strong>{" "}
          <Fill value={COMPANY.effectiveDate} name="effective date" />
        </p>

        <p>
          These Terms of Service ("<strong>Terms</strong>") govern your use of{" "}
          <strong>Sahajo</strong>, a business messaging automation platform
          operated by <strong>CHUBS MEDIA</strong>, a proprietorship registered
          under Udyam (MSME), Government of India, with its registered office at{" "}
          <Fill value={COMPANY.registeredAddress} name="registered address" /> ("
          <strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>").
        </p>
        <p>
          By creating an account, connecting a WhatsApp or Instagram account, or
          using the Service, you agree to these Terms. If you do not agree, do not
          use the Service.
        </p>

        <h2>1. Definitions</h2>
        <div className="lp-scroll">
          <table>
            <thead>
              <tr>
                <th>Term</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Service</strong>
                </td>
                <td>
                  The Sahajo platform, including the administrator console, APIs,
                  and automated messaging features
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Client</strong>, "you"
                </td>
                <td>The business entity that has registered for an account</td>
              </tr>
              <tr>
                <td>
                  <strong>End Customer</strong>
                </td>
                <td>
                  An individual who messages the Client through a connected
                  WhatsApp or Instagram account
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Connected Account</strong>
                </td>
                <td>
                  A WhatsApp Business Account, business phone number, or Instagram
                  professional account that the Client authorises us to manage on
                  their behalf
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Meta</strong>
                </td>
                <td>Meta Platforms, Inc. and its affiliates</td>
              </tr>
              <tr>
                <td>
                  <strong>Meta Terms</strong>
                </td>
                <td>
                  Meta's Platform Terms, the WhatsApp Business Messaging Policy,
                  the WhatsApp Business Solution Terms, and the Instagram Platform
                  Policy, each as updated by Meta from time to time
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>2. The Service</h2>
        <p>
          We provide software that lets you send, receive, automate and analyse
          conversations with your End Customers on WhatsApp and Instagram,
          including AI-generated replies, message templates, scheduling, and
          related business features according to your subscription.
        </p>
        <p>
          We act as a technology provider.{" "}
          <strong>We do not own or control WhatsApp or Instagram.</strong> Message
          delivery depends on Meta's platforms, and is subject to Meta's policies,
          pricing, rate limits and availability, none of which we control.
        </p>

        <h2>3. Eligibility and account registration</h2>
        <p>
          You must be a business or an individual acting for business purposes, at
          least 18 years old, and legally capable of entering a contract in India.
          You agree to provide accurate registration information and keep it
          current.
        </p>
        <p>
          You are responsible for all activity under your account, for keeping
          login credentials confidential, and for promptly notifying us of any
          unauthorised access. We recommend enabling two-factor authentication on
          every administrator account.
        </p>

        <h2>4. Connecting your WhatsApp and Instagram accounts</h2>
        <p>
          To use the Service you authorise us, through Meta's own onboarding flow,
          to access and manage your Connected Accounts on your behalf. You confirm
          that you are authorised to grant that access for the business and phone
          number concerned.
        </p>
        <p>
          You may revoke that access at any time through Meta's Business Manager
          or by closing your account with us. Revoking access stops the Service
          from functioning.
        </p>
        <p>
          <strong>Number ownership stays yours.</strong> Your WhatsApp Business
          Account and business phone number remain your assets. We hold delegated
          access, not ownership.
        </p>

        <h2>5. Your responsibilities</h2>
        <p>
          These are conditions of use, not suggestions. Breach of this section may
          result in immediate suspension, because a violation on your account can
          put every other Client on our platform at risk.
        </p>

        <h3>5.1 Consent and opt-out</h3>
        <ul>
          <li>
            You must obtain valid, informed, specific consent from every End
            Customer before sending them marketing or promotional messages, and
            you must be able to evidence that consent.
          </li>
          <li>
            You must honour opt-out requests immediately. The Service captures and
            enforces opt-outs; you must not circumvent that enforcement.
          </li>
          <li>
            You must not upload or message contact lists that were purchased,
            scraped, or obtained without consent.
          </li>
        </ul>

        <h3>5.2 Compliance with Meta's rules</h3>
        <p>
          You must comply with the Meta Terms at all times. In particular, you
          must not use the Service to send messages that Meta's WhatsApp Business
          Messaging Policy prohibits. Meta may restrict, suspend or terminate your
          Connected Account for violations, and{" "}
          <strong>we cannot reverse a Meta enforcement action.</strong>
        </p>

        <h3>5.3 Lawful and acceptable use</h3>
        <p>You must not use the Service to:</p>
        <ul>
          <li>
            send unsolicited bulk messages, spam, phishing, or fraudulent content;
          </li>
          <li>
            transmit unlawful, defamatory, obscene, harassing or infringing
            material;
          </li>
          <li>impersonate another person or business;</li>
          <li>
            sell or promote goods and services prohibited by Meta's Commerce
            Policies or by Indian law;
          </li>
          <li>
            attempt to gain unauthorised access to the Service, another Client's
            data, or our infrastructure;
          </li>
          <li>
            reverse engineer, decompile, or resell the Service without our written
            consent;
          </li>
          <li>exceed rate limits, or use automation to evade them.</li>
        </ul>

        <h3>5.4 Your data protection obligations</h3>
        <p>
          For your End Customers' personal data,{" "}
          <strong>
            you are the Data Fiduciary and we are your Data Processor
          </strong>{" "}
          under the Digital Personal Data Protection Act, 2023. You are
          responsible for having a lawful basis for the processing you instruct,
          for providing your own privacy notice to your End Customers, and for
          designating a grievance officer where the Act requires it. Our
          processing is described in our{" "}
          <a href={COMPANY.privacyUrl}>Privacy Policy</a>, which forms part of
          these Terms.
        </p>

        <h2>6. Artificial intelligence — what it does and does not guarantee</h2>
        <p>The Service generates replies using large language models.</p>
        <ul>
          <li>
            <strong>AI output can be wrong.</strong> It may be inaccurate,
            incomplete, or unsuitable for a given conversation. You are
            responsible for reviewing and supervising your automation and for the
            content sent from your Connected Accounts.
          </li>
          <li>
            <strong>You are the sender.</strong> Every message sent through your
            Connected Account is attributed to your business, including
            AI-generated messages.
          </li>
          <li>
            <strong>Do not rely on it for regulated advice.</strong> The Service
            is not a substitute for medical, legal, financial or other
            professional advice, and must not be configured to give such advice in
            a manner requiring a licensed professional.
          </li>
          <li>
            We enforce in software that Meta's human-agent handling is applied
            only to genuinely human-handled replies, never to automated ones. You
            must not attempt to configure the Service otherwise.
          </li>
        </ul>

        <h2>7. Fees, messaging charges and taxes</h2>
        <ul>
          <li>
            Subscription fees are as stated in your order or on our pricing page,
            and are payable in advance for each billing period unless agreed
            otherwise.
          </li>
          <li>
            <strong>Meta charges separately for message delivery.</strong> Meta's
            conversation-based pricing applies to messages sent through your
            Connected Account, is set and changed by Meta, and is passed through
            to you at cost or billed by Meta directly. We do not control those
            rates.
          </li>
          <li>
            All fees are exclusive of GST and other applicable taxes, which you
            are responsible for paying.
          </li>
          <li>
            Fees paid are non-refundable except where required by law. We may
            change our fees on 30 days' notice, effective from your next billing
            period.
          </li>
          <li>
            We may suspend the Service if an invoice remains unpaid 15 days after
            its due date, after giving you notice.
          </li>
        </ul>

        <h2>8. Intellectual property</h2>
        <p>
          The Service, including its software, design, and documentation, is owned
          by us and protected by law. We grant you a limited, non-exclusive,
          non-transferable, revocable licence to use the Service for your own
          business during your subscription.
        </p>
        <p>
          <strong>You retain ownership of your content</strong> — your business
          data, your message content, your templates, and your End Customer data.
          You grant us the limited licence necessary to host, process and transmit
          it in order to provide the Service.
        </p>

        <h2>9. Availability, support and changes</h2>
        <p>
          We aim to provide a reliable Service but do not guarantee uninterrupted
          availability. Planned maintenance will be notified in advance where
          practicable.
        </p>
        <p>
          <strong>
            We are not responsible for outages, policy changes, price changes,
            rate limits, account restrictions or feature removals originating from
            Meta.
          </strong>{" "}
          Those are outside our control, and their occurrence is not a breach of
          these Terms by us.
        </p>
        <p>
          We may modify or discontinue features. We will give at least 30 days'
          notice before removing a material feature you rely on, unless a change
          is required urgently for security, legal compliance, or by Meta.
        </p>

        <h2>10. Suspension and termination</h2>
        <p>
          <strong>By you:</strong> you may terminate at any time from the console
          or by written notice. Termination takes effect at the end of the current
          billing period, and prepaid fees are not refunded.
        </p>
        <p>
          <strong>By us:</strong> we may suspend or terminate your account
          immediately if you materially breach these Terms, violate the Meta
          Terms, fail to pay after notice, or use the Service in a way that risks
          harm to End Customers, to Meta's platform, or to other Clients. Where
          the circumstances allow, we will give notice and an opportunity to cure
          first.
        </p>
        <p>
          <strong>On termination:</strong> your access ends, and we delete or
          anonymise your data according to the retention periods in our Privacy
          Policy.{" "}
          <strong>
            You may export your data at any time before termination, and for 30
            days afterwards
          </strong>{" "}
          — after that period it is deleted and cannot be recovered.
        </p>

        <h2>11. Warranties and disclaimers</h2>
        <p>
          To the maximum extent permitted by law, the Service is provided{" "}
          <strong>"as is" and "as available"</strong>, without warranties of any
          kind, whether express or implied, including implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
        <p>
          We do not warrant that the Service will be uninterrupted or error-free,
          that AI output will be accurate, or that messages will be delivered —
          delivery depends on Meta and on the End Customer's device and network.
        </p>

        <h2>12. Limitation of liability</h2>
        <p>To the maximum extent permitted by law:</p>
        <ul>
          <li>
            Neither party is liable for indirect, incidental, special,
            consequential or punitive damages, or for loss of profits, revenue,
            data, goodwill or business opportunity.
          </li>
          <li>
            <strong>Our total aggregate liability</strong> arising out of or
            relating to these Terms or the Service, in any 12-month period,{" "}
            <strong>
              is limited to the total fees you paid us in the 12 months
              immediately preceding the event giving rise to the claim.
            </strong>
          </li>
        </ul>
        <p>
          Nothing in these Terms excludes liability that cannot lawfully be
          excluded, including liability for fraud or for death or personal injury
          caused by negligence.
        </p>

        <h2>13. Indemnity</h2>
        <p>
          You will indemnify and hold us harmless against claims, damages, losses
          and reasonable costs arising from: your content or messages; your breach
          of these Terms or the Meta Terms; your failure to obtain valid consent
          from End Customers; your breach of applicable data protection law; or
          your infringement of a third party's rights.
        </p>

        <h2>14. Confidentiality</h2>
        <p>
          Each party will protect the other's non-public information with at least
          reasonable care and will use it only to perform under these Terms. This
          does not apply to information that is public, independently developed,
          lawfully received from a third party, or required to be disclosed by
          law.
        </p>

        <h2>15. Changes to these Terms</h2>
        <p>
          We may update these Terms. Material changes will be notified by email
          and by notice in the console at least 30 days before they take effect.
          Continuing to use the Service after that date constitutes acceptance. If
          you do not accept, you may terminate before the change takes effect.
        </p>

        <h2>16. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of <strong>India</strong>. The
          courts at <Venue /> have exclusive jurisdiction, subject to the
          following.
        </p>
        <p>
          Before starting proceedings, the parties will attempt in good faith to
          resolve the dispute by discussion for 30 days after written notice. Any
          dispute not so resolved will be referred to arbitration by a sole
          arbitrator under the Arbitration and Conciliation Act, 1996. The seat
          and venue is{" "}
          <Fill value={COMPANY.jurisdictionCity} name="jurisdiction city" />, and
          the language is English.
        </p>

        <h2>17. General</h2>
        <ul>
          <li>
            <strong>Entire agreement.</strong> These Terms and the Privacy Policy
            are the entire agreement between us on this subject.
          </li>
          <li>
            <strong>Severability.</strong> If a provision is unenforceable, the
            rest remains in force.
          </li>
          <li>
            <strong>No waiver.</strong> Failure to enforce a provision is not a
            waiver of it.
          </li>
          <li>
            <strong>Assignment.</strong> You may not assign these Terms without
            our written consent. We may assign them to a successor in a merger or
            sale of assets.
          </li>
          <li>
            <strong>Force majeure.</strong> Neither party is liable for failure
            caused by events beyond its reasonable control.
          </li>
          <li>
            <strong>Independent contractors.</strong> Nothing here creates a
            partnership, joint venture, agency or employment relationship.
          </li>
        </ul>

        <h2>18. Contact</h2>
        <p>
          <strong>CHUBS MEDIA</strong>
          <br />
          <Fill value={COMPANY.registeredAddress} name="registered address" />
          <br />
          Email: <Mail address={COMPANY.legalEmail} name="legal email" />
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
