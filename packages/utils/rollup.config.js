import createConfig from '../../scripts/createConfig';
import pkg from './package.json';

export default createConfig({ basePath: __dirname, pkg, input: 'src/utils.ts' });
