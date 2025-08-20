export function DiscoverRedirectButton() {
  const kibanaUrl =
    "https://openswdev.duckdns.org:5601/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:60000),time:(from:now-5d,to:now))&_a=(columns:!(),dataSource:(dataViewId:'960e8922-87d2-4149-a808-a73fb70c28e7',type:dataView),filters:!(),interval:auto,query:(language:kuery,query:''),sort:!(!(time,desc)))";

  return (
    <a
      href={kibanaUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "12px 20px",
        backgroundColor: "#0052CC",
        color: "#fff",
        borderRadius: "6px",
        textDecoration: "none",
        fontWeight: 600,
        textAlign: "center",
        maxWidth: "300px"
      }}
    >
      Kibana Discover로 이동
    </a>
  );
}