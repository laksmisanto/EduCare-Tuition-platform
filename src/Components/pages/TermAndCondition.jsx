import Container from "../Container";

const TermAndCondition = () => {
  return (
    <>
      <Container className="py-12">
        <div className="w-4/5 mx-auto font-nunito text-gray">
          <h2 className="font-nunito text-2xl md:text-3xl lg:text-4xl font-extrabold text-black">
            Terms of Use
          </h2>
          <div>
            <h4>Introduction</h4>
            <p>
              Welcome to{" "}
              <a href="/" className="text-primary underline">
                EduCare
              </a>
              . These Terms of Use (Terms) govern your use of our website,
              products, and services. By accessing or using our website, you
              agree to comply with these Terms. If you do not agree with any
              part of these Terms, please do not use our website.
            </p>
          </div>
          <div>
            <h4>Use of the Website</h4>
            <ul>
              <li>
                You must be at least [Minimum Age] years old to use this
                website.
              </li>
              <li>
                You agree to use the website only for lawful purposes and in
                accordance with these Terms.
              </li>
              <li>
                Unauthorized use, including but not limited to scraping,
                hacking, or any other malicious activity, is strictly
                prohibited.
              </li>
            </ul>
          </div>
          <div>
            <h4>Intellectual Property</h4>
            <ul>
              <li>
                All content on this website, including text, graphics, logos,
                and software, is the property of{" "}
                <a href="/" className="text-primary underline">
                  EduCare
                </a>{" "}
                or its licensors and is protected by applicable copyright and
                trademark laws.
              </li>
              <li>
                You may not reproduce, distribute, or create derivative works
                from the content without prior written consent.
              </li>
            </ul>
          </div>
          <div>
            <h4>Limitation of Liability</h4>
            <ul>
              <li>
                <a href="/" className="text-primary underline">
                  EduCare
                </a>{" "}
                is not liable for any direct, indirect, incidental, or
                consequential damages arising from your use of the website.
              </li>
              <li>
                We do not guarantee the accuracy, completeness, or reliability
                of any content provided on the website.
              </li>
            </ul>
          </div>
          <div>
            <h4>Changes to the Terms</h4>
            <ul>
              <li>
                We reserve the right to update these Terms at any time. Any
                changes will be effective immediately upon posting.
              </li>
              <li>
                Continued use of the website following the posting of changes
                constitutes acceptance of those changes.
              </li>
            </ul>
          </div>
          <h2>Privacy Policy</h2>
          <div>
            <h4>Introduction</h4>
            <p>
              <a href="/" className="text-primary underline">
                EduCare
              </a>{" "}
              is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and protect your personal
              information when you visit our website.
            </p>
          </div>
          <div>
            <h4>Information We Collect</h4>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                **Personal Information**: Name, email address, phone number,
                etc., provided voluntarily.
              </li>
              <li>
                **Usage Data**: Information about how you use our website,
                including IP address, browser type, and pages visited.
              </li>
            </ul>
          </div>
          <div>
            <h4>How We Use Your Information</h4>
            <ul>
              <li>To provide and improve our services.</li>
              <li>
                To communicate with you, including responding to inquiries and
                sending updates.
              </li>
              <li>To analyze website usage and improve performance.</li>
            </ul>
          </div>
          <div>
            <h4>Sharing Your Information</h4>
            <ul>
              <li>
                We do not sell your personal information to third parties.
              </li>
              <li>
                We may share information with trusted partners who assist in
                operating our website, provided they agree to keep your
                information confidential
              </li>
              <li>
                We may disclose information if required by law or to protect our
                legal rights.
              </li>
            </ul>
          </div>
          <div>
            <h4>Cookies</h4>
            <ul>
              <li>
                We use cookies to enhance user experience and analyze website
                traffic.
              </li>
              <li>
                You can adjust your browser settings to disable cookies, but
                some features of the website may not function properly.
              </li>
            </ul>
          </div>
          <div>
            <h4>Data Security</h4>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              alteration, or disclosure.
            </p>
          </div>
          <div>
            <h4>Changes to the Privacy Policy</h4>
            <ul>
              <li>
                We may update this Privacy Policy periodically. Changes will be
                posted on this page with an updated revision date.
              </li>
              <li>
                Your continued use of the website after changes are made
                indicates your acceptance of the updated policy.
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>
              If you have any questions or concerns about these Terms of Use or
              the Privacy Policy, please contact us at [Your Contact Email].
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndCondition;
