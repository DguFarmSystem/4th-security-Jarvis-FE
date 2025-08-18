export const mockDbSessions = [
  {
    event: "session.end",
    proto: "postgres",
    session_start: "2025-08-16T14:11:57.843Z",
  },
  {
    event: "session.end",
    proto: "postgres",
    session_start: "2025-08-16T14:21:00.000Z",
  },
];

export const mockAppSessions = [
  {
    event: "session.end",
    proto: "https",
    session_start: "2025-08-16T13:00:00.000Z",
  },
  {
    event: "session.end",
    proto: "https",
    session_start: "2025-08-16T14:30:00.000Z",
  },
];

export const mockApps = [
  {
    kind: "app",
    version: "v3",
    metadata: {
      name: "grafana",
      description: "Grafana dashboard",
      labels: {
        env: "prod",
        team: "devops"
      }
    },
    spec: {
      uri: "http://localhost:3000",
      public_addr: "grafana.example.com",
      protocol: "http",
      insecure_skip_verify: false,
      cluster_name: "example-cluster",
    }
  },
  {
    kind: "app",
    version: "v3",
    metadata: {
      name: "internal-docs",
      description: "Internal documentation site",
      labels: {
        env: "dev",
        team: "docs"
      }
    },
    spec: {
      uri: "https://docs.internal.local",
      public_addr: "docs.example.com",
      protocol: "https",
      insecure_skip_verify: true,
      cluster_name: "example-cluster",
    }
  }
];

export const mockDatabases = [
  {
    kind: "db",
    version: "v3",
    metadata: {
      name: "postgres-prod",
      description: "Production PostgreSQL database",
      labels: {
        env: "prod",
        db: "postgres"
      }
    },
    spec: {
      protocol: "postgres",
      uri: "postgres.example.com:5432",
      hostname: "postgres.example.com",
      port: "5432",
      cluster_name: "example-cluster",
    }
  },
  {
    kind: "db",
    version: "v3",
    metadata: {
      name: "mysql-dev",
      description: "Development MySQL database",
      labels: {
        env: "dev",
        db: "mysql"
      }
    },
    spec: {
      protocol: "mysql",
      uri: "mysql.dev.local:3306",
      hostname: "mysql.dev.local",
      port: "3306",
      cluster_name: "example-cluster",
    }
  }
];