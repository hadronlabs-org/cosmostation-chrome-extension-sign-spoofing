import Lock from '~/Popup/components/Lock';

import Entry from './entry';
import Layout from './layout';

export default function Fake() {
  return (
    <Lock>
      <Layout>
        <Entry />
      </Layout>
    </Lock>
  );
}
