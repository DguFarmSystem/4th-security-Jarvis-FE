// mockRoles.ts
export const mockRoles = [
  {
    "kind": "role",
    "version": "v7",
    "metadata": {
      "name": "access",
      "description": "Access cluster resources",
      "labels": {
        "teleport.internal/resource-type": "preset"
      },
      "revision": "3476a1a4-e2f1-451b-8beb-e8c050e83a16"
    },
    "spec": {
      "options": {
        "forward_agent": true,
        "max_session_ttl": "30h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": { "desktop": true },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": { "saml": { "enabled": true } },
        "create_desktop_user": false,
        "create_db_user": false,
        "ssh_port_forwarding": {
          "local": { "enabled": true },
          "remote": { "enabled": true }
        }
      },
      "allow": {
        "logins": ["{{internal.logins}}"],
        "node_labels": { "*": "*" },
        "rules": [
          {
            "resources": ["event"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["session"],
            "verbs": ["read", "list"],
            "where": "contains(session.participants, user.metadata.name)"
          },
          {
            "resources": ["instance"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["cluster_maintenance_config"],
            "verbs": ["list", "read"]
          }
        ],
        "kubernetes_groups": ["{{internal.kubernetes_groups}}"],
        "kubernetes_users": ["{{internal.kubernetes_users}}"],
        "app_labels": { "*": "*" },
        "kubernetes_labels": { "*": "*" },
        "db_labels": { "*": "*" },
        "db_names": ["{{internal.db_names}}"],
        "db_users": ["{{internal.db_users}}"],
        "aws_role_arns": ["{{internal.aws_role_arns}}"],
        "windows_desktop_logins": ["{{internal.windows_logins}}"],
        "windows_desktop_labels": { "*": "*" },
        "azure_identities": ["{{internal.azure_identities}}"],
        "kubernetes_resources": [
          {
            "kind": "*",
            "namespace": "*",
            "name": "*",
            "verbs": ["*"]
          }
        ],
        "gcp_service_accounts": ["{{internal.gcp_service_accounts}}"],
        "db_service_labels": { "*": "*" },
        "db_roles": ["{{internal.db_roles}}"],
        "github_permissions": [
          {
            "orgs": ["{{internal.github_orgs}}"]
          }
        ]
      },
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v5",
    "metadata": {
      "name": "api-impersonator",
      "revision": "fcadb413-86cc-4d02-b18c-92a9cf6d291e"
    },
    "spec": {
      "options": {
        "forward_agent": false,
        "max_session_ttl": "30h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": {
          "desktop": true,
          "default": "best_effort"
        },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": { "saml": { "enabled": true } },
        "create_desktop_user": false,
        "create_db_user": false
      },
      "allow": {
        "logins": ["root"],
        "node_labels": { "*": "*" },
        "rules": [
          {
            "resources": ["session_tracker"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["role"],
            "verbs": ["read", "list", "create", "update", "delete"]
          },
          {
            "resources": ["user"],
            "verbs": ["read", "list", "create", "update", "delete"]
          },
          {
            "resources": ["node"],
            "verbs": ["read", "list", "create", "update", "delete"]
          },
          {
            "resources": ["app", "db", "kube_cluster"],
            "verbs": ["read", "list"]
          },
          {
            "resources": ["session", "event"],
            "verbs": ["read", "list"]
          },
          {
            "resources": ["token"],
            "verbs": ["read", "list", "create", "update", "delete"]
          }
        ],
        "impersonate": {
          "users": ["*"],
          "roles": ["*"]
        }
      },
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v7",
    "metadata": {
      "name": "auditor",
      "description": "Review cluster events and replay sessions",
      "labels": {
        "teleport.internal/resource-type": "preset"
      },
      "revision": "3945d43b-f73a-4af5-9d3c-58c312e1a019"
    },
    "spec": {
      "options": {
        "forward_agent": false,
        "max_session_ttl": "30h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": { "desktop": false },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": { "saml": { "enabled": true } },
        "create_desktop_user": false,
        "create_db_user": false
      },
      "allow": {
        "rules": [
          {
            "resources": ["session"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["event"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["session_tracker"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["cluster_alert"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["instance"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["security_report"],
            "verbs": ["list", "read", "use"]
          },
          {
            "resources": ["audit_query"],
            "verbs": ["list", "read", "use"]
          },
          {
            "resources": ["bot_instance"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["notification"],
            "verbs": ["list", "read"]
          }
        ]
      },
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v7",
    "metadata": {
      "name": "basic-user",
      "description": "리소스 조회 및 접속만 가능한 기본 사용자 역할입니다.",
      "revision": "dfe94082-f190-4854-b49f-9d80f52094e5"
    },
    "spec": {
      "options": {
        "forward_agent": false,
        "max_session_ttl": "30h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": {
          "desktop": true,
          "default": "best_effort"
        },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": { "saml": { "enabled": true } },
        "create_desktop_user": false,
        "create_db_user": false
      },
      "allow": {
        "logins": ["{{internal.logins}}", "ubuntu", "ec2-user", "root"],
        "node_labels": { "*": "*" },
        "rules": [
          {
            "resources": ["session_tracker"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["role"],
            "verbs": ["list", "create", "read", "update", "delete"]
          },
          {
            "resources": ["user"],
            "verbs": ["list", "create", "read", "update", "delete"]
          },
          {
            "resources": ["node"],
            "verbs": ["list", "create", "read", "update", "delete"]
          },
          {
            "resources": ["app", "db", "kube_cluster"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["session", "event"],
            "verbs": ["list", "read"]
          },
          {
            "resources": ["token"],
            "verbs": ["list", "create", "read", "update", "delete"]
          }
        ],
        "join_sessions": [
          {
            "name": "Join prod sessions",
            "roles": ["access"],
            "kinds": ["k8s", "ssh"],
            "modes": ["peer", "observer"]
          }
        ]
      },
      "deny": {
        "rules": [
          {
            "resources": ["oidc", "saml"],
            "verbs": ["*"]
          }
        ]
      }
    }
  },
  {
    "kind": "role",
    "version": "v7",
    "metadata": {
      "name": "bot-jarvis-bot",
      "description": "Automatically generated role for bot jarvis-bot",
      "labels": {
        "teleport.internal/bot": "jarvis-bot"
      },
      "revision": "f717b600-76b1-4332-abf9-1d8fe280304e"
    },
    "spec": {
      "options": {
        "forward_agent": false,
        "max_session_ttl": "12h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": {
          "desktop": true,
          "default": "best_effort"
        },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": { "saml": { "enabled": true } },
        "create_desktop_user": false,
        "create_db_user": false
      },
      "allow": {
        "rules": [
          {
            "resources": ["cert_authority"],
            "verbs": ["readnosecrets"]
          }
        ],
        "impersonate": {
          "roles": [
            "web-terminal-bot-role",
            "editor",
            "basic-user",
            "access",
            "api-impersonator",
            "teleport-event-handler"
          ]
        }
      },
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v7",
    "metadata": {
      "name": "editor",
      "description": "Edit cluster configuration",
      "labels": {
        "teleport.internal/resource-type": "preset"
      },
      "revision": "f270a42e-2536-44a9-97b8-00fc3afa6173"
    },
    "spec": {
      "options": {
        "forward_agent": true,
        "max_session_ttl": "30h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": { "desktop": false },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": { "saml": { "enabled": true } },
        "create_desktop_user": false,
        "create_db_user": false,
        "ssh_port_forwarding": {
          "local": { "enabled": true },
          "remote": { "enabled": true }
        }
      },
      "allow": {
        "logins": ["root", "ubuntu"],
        "node_labels": { "*": "*" },
        "rules": [
          { "resources": ["app"], "verbs": ["list", "read"] },
          { "resources": ["user"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["role"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["bot"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["crown_jewel"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["db_object_import_rule"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["oidc"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["saml"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["github"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["oidc_request"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["saml_request"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["github_request"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["cluster_audit_config"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["cluster_auth_preference"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["auth_connector"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["cluster_name"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["cluster_networking_config"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["session_recording_config"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["external_audit_storage"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["ui_config"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["trusted_cluster"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["remote_cluster"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["token"], "verbs": ["list", "create", "read", "update", "delete"] }
          // …중략 없이 계속…
        ]
      },
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v5",
    "metadata": {
      "name": "maintainer",
      "revision": "b2df06e1-c4af-433a-9963-63ee07bd6ba6"
    },
    "spec": {
      "options": {
        "forward_agent": true,
        "max_session_ttl": "72h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": {
          "desktop": true,
          "default": "best_effort"
        },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": {
          "saml": {
            "enabled": true
          }
        },
        "create_desktop_user": true,
        "create_db_user": false
      },
      "allow": {
        "logins": ["root", "ubuntu", "ec2-user", "admin"],
        "rules": [
          {
            "resources": ["role"],
            "verbs": ["create", "read", "update", "list", "delete"]
          },
          {
            "resources": ["certificate"],
            "verbs": ["create", "read", "reissue", "delete"]
          },
          {
            "resources": ["user_cert"],
            "verbs": ["create", "update", "reissue", "sign", "delete"]
          },
          {
            "resources": ["user"],
            "verbs": ["create", "read", "update", "list", "delete"]
          },
          {
            "resources": ["node"],
            "verbs": ["read", "list", "update", "delete"]
          },
          {
            "resources": ["session", "sessions"],
            "verbs": ["read", "list", "delete"]
          },
          {
            "resources": ["auth_server", "proxies", "cluster", "cluster_parameter"],
            "verbs": ["read", "update", "delete"]
          },
          {
            "resources": ["trusted_cluster", "remote_cluster"],
            "verbs": ["create", "read", "update", "delete"]
          }
        ],
        "impersonate": {}
      },
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v5",
    "metadata": {
      "name": "member",
      "revision": "d68aeb7a-2b58-4211-a627-f81f042dce43"
    },
    "spec": {
      "options": {
        "forward_agent": false,
        "max_session_ttl": "12h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command"],
        "record_session": {
          "desktop": false,
          "default": "best_effort"
        },
        "desktop_clipboard": true,
        "desktop_directory_sharing": false,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": {
          "saml": {
            "enabled": true
          }
        },
        "create_desktop_user": false,
        "create_db_user": false
      },
      "allow": {
        "logins": ["ubuntu"],
        "rules": [
          {
            "resources": ["node"],
            "verbs": ["read", "list"]
          },
          {
            "resources": ["session", "sessions"],
            "verbs": ["read", "list"]
          }
        ],
        "impersonate": {}
      },
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v5",
    "metadata": {
      "name": "teleport-event-handler-impersonator",
      "revision": "02a39e8c-5c7f-4fbf-8ce9-821881130b2b"
    },
    "spec": {
      "options": {
        "forward_agent": false,
        "max_session_ttl": "10h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": {
          "desktop": true,
          "default": "best_effort"
        },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": {
          "saml": {
            "enabled": true
          }
        },
        "create_desktop_user": false,
        "create_db_user": false
      },
      "allow": {
        "impersonate": {
          "users": ["teleport-event-handler"],
          "roles": ["teleport-event-handler"]
        }
      },
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v4",
    "metadata": {
      "name": "teleport-event-handler",
      "revision": "a5a2aab8-6e3b-499c-a448-02f46502858e"
    },
    "spec": {
      "options": {
        "forward_agent": false,
        "max_session_ttl": "30h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": {
          "desktop": true,
          "default": "best_effort"
        },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": {
          "saml": {
            "enabled": true
          }
        },
        "create_desktop_user": false,
        "create_db_user": false
      },
      "allow": {
        "rules": [
          {
            "resources": ["event", "session"],
            "verbs": ["list", "read"]
          }
        ]
      },
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v7",
    "metadata": {
      "name": "terraform-provider",
      "description": "Default Terraform provider role",
      "labels": {
        "teleport.internal/resource-type": "preset"
      },
      "revision": "14a39027-cb2b-41b6-b693-a6ec30003fa3"
    },
    "spec": {
      "options": {
        "forward_agent": false,
        "max_session_ttl": "30h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": {
          "desktop": true,
          "default": "best_effort"
        },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": {
          "saml": {
            "enabled": true
          }
        },
        "create_desktop_user": false,
        "create_db_user": false
      },
      "allow": {
        "node_labels": { "*": "*" },
        "rules": [
          { "resources": ["access_list"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["app"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["cluster_auth_preference"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["cluster_maintenance_config"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["cluster_networking_config"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["db"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["device"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["github"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["login_rule"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["node"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["oidc"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["okta_import_rule"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["role"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["saml"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["session_recording_config"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["token"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["trusted_cluster"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["user"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["bot"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["installer"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["access_monitoring_rule"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["dynamic_windows_desktop"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["static_host_user"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["workload_identity"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["git_server"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["autoupdate_config"], "verbs": ["list", "create", "read", "update", "delete"] },
          { "resources": ["autoupdate_version"], "verbs": ["list", "create", "read", "update", "delete"] }
        ],
        "app_labels": { "*": "*" },
        "db_labels": { "*": "*" },
        "windows_desktop_labels": { "*": "*" }
      },
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v7",
    "metadata": {
      "name": "test-role2",
      "revision": "0dfe937c-257d-4783-a840-181291e7c09f"
    },
    "spec": {
      "options": {
        "forward_agent": false,
        "max_session_ttl": "30h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": {
          "desktop": true,
          "default": "best_effort"
        },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": {
          "saml": {
            "enabled": true
          }
        },
        "create_desktop_user": false,
        "create_db_user": false
      },
      "allow": {},
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v5",
    "metadata": {
      "name": "web-terminal-bot-role",
      "revision": "22be6645-6ca8-43a7-ba86-01cfa33aa52d"
    },
    "spec": {
      "options": {
        "forward_agent": false,
        "max_session_ttl": "30h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": {
          "desktop": true,
          "default": "best_effort"
        },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": {
          "saml": {
            "enabled": true
          }
        },
        "create_desktop_user": false,
        "create_db_user": false
      },
      "allow": {
        "logins": ["root"],
        "rules": [
          { "resources": ["role"], "verbs": ["create", "read", "update", "list"] },
          { "resources": ["certificate"], "verbs": ["create", "read", "reissue"] },
          { "resources": ["user_cert"], "verbs": ["create", "update", "reissue", "sign"] },
          { "resources": ["user"], "verbs": ["create", "read", "update", "list"] },
          { "resources": ["node"], "verbs": ["read", "list"] }
        ]
      },
      "deny": {}
    }
  },
  {
    "kind": "role",
    "version": "v7",
    "metadata": {
      "name": "wildcard-workload-identity-issuer",
      "description": "Issue workload identities",
      "labels": {
        "teleport.internal/resource-type": "preset"
      },
      "revision": "cd2578e0-a9a6-413f-a8dd-629eca8799e4"
    },
    "spec": {
      "options": {
        "forward_agent": false,
        "max_session_ttl": "30h0m0s",
        "cert_format": "standard",
        "enhanced_recording": ["command", "network"],
        "record_session": {
          "desktop": true,
          "default": "best_effort"
        },
        "desktop_clipboard": true,
        "desktop_directory_sharing": true,
        "pin_source_ip": false,
        "ssh_file_copy": true,
        "idp": {
          "saml": {
            "enabled": true
          }
        },
        "create_desktop_user": false,
        "create_db_user": false
      },
      "allow": {
        "rules": [
          {
            "resources": ["workload_identity"],
            "verbs": ["list", "read"]
          }
        ],
        "workload_identity_labels": {
          "*": "*"
        }
      },
      "deny": {}
    }
  }
]