export type Rule = {
  resources: string[];
  verbs: string[];
};

export type Role = {
  kind: string;
  version?: string;
  metadata?: {
    name: string;
    description?: string;
    labels?: Record<string, string>;
    revision?: string;
  };
  spec?: {
    allow?: {
      rules?: Rule[];
      logins?: string[];
      node_labels?: Record<string, string>;
      app_labels?: Record<string, string>;
      db_labels?: Record<string, string>;
      kubernetes_labels?: Record<string, string>;
      kubernetes_groups?: string[];
      kubernetes_users?: string[];
      impersonate?: {
        roles?: string[];
        users?: string[];
      };
      windows_desktop_labels?: Record<string, string>;
      aws_role_arns?: string[];
      azure_identities?: string[];
      gcp_service_accounts?: string[];
      db_users?: string[];
      db_names?: string[];
      db_roles?: string[];
      db_service_labels?: Record<string, string>;
      kubernetes_resources?: any[]; // 실제 스펙 맞게 정의해도 됨
      github_permissions?: any[];
      join_sessions?: any[];
      workload_identity_labels?: Record<string, string>;
      [key: string]: any; // 기타 미정의 필드 대응
    };
    deny?: {
      rules?: Rule[];
      [key: string]: any;
    };
  };
};