import { NativeModules } from 'react-native';
import Reactotron, { trackGlobalErrors, asyncStorage, overlay } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({ name: 'wbooks', host: scriptHostname })
    .use(trackGlobalErrors())
    .use(
      reactotronRedux({
        onRestore: state =>
          Object.entries(state).reduce(
            (prev, [key, value]) => ({ ...prev, [key]: key === 'nav' ? value : Immutable(value) }),
            {}
          )
      })
    )
    .use(asyncStorage())
    .use(overlay())
    .connect();
  // eslint-disable-next-line no-console
  console.tron = {
    log: (...args) => Reactotron.logImportant(...args),
    clear: () => Reactotron.clear(),
    customCommand: ({ command, handler, title, description }) =>
      Reactotron.onCustomCommand({
        command,
        handler,
        title,
        description
      }),
    display: ({ name, value, preview, image }) =>
      Reactotron.display({
        name: name || 'DISPLAY',
        value,
        preview: preview || 'Click para mostrar detalle',
        important: true,
        image
      })
  };
 }

 export default Reactotron;
 