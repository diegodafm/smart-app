import Image from 'next/image'
import Head from 'next/head';

import styles from './Privacy.module.css'


export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Your Website Name</title>
      </Head>
      <div>
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. This privacy policy outlines how we collect, use, and protect your personal information.
        </p>
        <p>
          We may collect personal information from you when you:
        </p>
        <ul>
          <li>Visit our website</li>
          <li>Create an account with us</li>
          <li>Make a purchase from us</li>
          <li>Contact us for support</li>
        </ul>
        <p>
          The personal information we collect may include your name, email address, postal address, phone number, and payment information.
        </p>
        <p>
          We use your personal information to:
        </p>
        <ul>
          <li>Provide you with the products and services you request</li>
          <li>Process your transactions</li>
          <li>Send you marketing communications</li>
          <li>Provide customer support</li>
        </ul>
        <p>
          We will not share your personal information with third parties without your consent, except as required by law.
        </p>
        <p>
          You have the right to access, correct, and delete your personal information. You can also opt out of receiving marketing communications from us.
        </p>
        <p>
          If you have any questions about our privacy policy, please contact us.
        </p>
      </div>
    </>
  );
}
