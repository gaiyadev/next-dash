import "../styles/globals.css";
import Default from "../layouts/default";
import Dashboard from "../layouts/dashboard";

const layouts = {
  defaultLayout: Default,
  DashboardLayout: Dashboard,
};
function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
