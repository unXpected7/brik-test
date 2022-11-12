import 'react-native-gesture-handler';
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'https://95d6924f2f54435c9efbfe4c2225f203@o4503965668737024.ingest.sentry.io/4503965673783296',
  enableInExpoDevelopment: true,
  debug: true,
});

import App from './src';

export default App;
