import useLogOutRedirect from 'hooks/useLogOutRedirect';

const DashboardPage = () => {
  useLogOutRedirect();

  return <div>Dashboard Page</div>;
};

export default DashboardPage;
