import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={325}
    height={260}
    viewBox="0 0 325 260"
    backgroundColor="#c7c7c7"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="325" height="260" />
  </ContentLoader>
);

export default Skeleton;
