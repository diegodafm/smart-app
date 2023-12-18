import Image from 'next/image'
import Head from 'next/head';

import styles from './Terms.module.css'


export default function Terms() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Privacy Policy | Your Website Name</title>
      </Head>
      <div className={styles.description}>
        <h2>Privacy Policy</h2>
        <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and
            be bound by the following terms and conditions of use, which together with our privacy policy govern [Your
            Company]'s relationship with you in relation to this website. If you disagree with any part of these terms
            and conditions, please do not use our website.</p>

        <h2>1. Terms</h2>
        <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all
            applicable laws, and regulations, and agree that you are responsible for compliance with any applicable
            local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this
            site. The materials contained in this website are protected by applicable copyright and trademark law.</p>

        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on [Your
            Company]'s website for personal, non-commercial transitory viewing only. This is the grant of a license,
            not a transfer of title, and under this license, you may not:</p>
        <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display (commercial or
                non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on [Your Company]'s website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
      </div>
    </div>
  );
}
