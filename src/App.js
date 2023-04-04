import Layout from 'components/Layout'

import Banner from 'components/containers/Banner'
import About from 'components/containers/About'
import Experience from 'components/containers/Experience';

function App() {
  return (
    <Layout>
      <Banner />
      <About />
      <Experience />
    </Layout> 
  );
}

export default App;
