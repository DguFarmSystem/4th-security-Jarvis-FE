export const mockUsers = [
  {
    "kind": "user",
    "version": "v2",
    "metadata": {
      "name": "CometWoo",
      "revision": "2aac1228-96b4-43b2-a717-e4e9f52a5587"
    },
    "spec": {
      "roles": ["basic-user"],
      "status": {
        "is_locked": false,
        "locked_time": "0001-01-01T00:00:00Z",
        "lock_expires": "0001-01-01T00:00:00Z"
      },
      "expires": "0001-01-01T00:00:00Z",
      "created_by": {
        "time": "2025-07-25T17:17:37.795644683Z",
        "user": {
          "name": "bot-jarvis-bot"
        }
      }
    },
    "status": {
      "password_state": 1,
      "mfa_weakest_device": 1
    }
  },
  {
    "kind": "user",
    "version": "v2",
    "metadata": {
      "name": "bot-jarvis-bot",
      "labels": {
        "teleport.internal/bot": "jarvis-bot",
        "teleport.internal/bot-generation": "37"
      },
      "revision": "b7b9ffd8-2597-45dd-9a92-73ffa41c53e7"
    },
    "spec": {
      "roles": ["bot-jarvis-bot"],
      "status": {
        "is_locked": false,
        "locked_time": "0001-01-01T00:00:00Z",
        "lock_expires": "0001-01-01T00:00:00Z"
      },
      "expires": "0001-01-01T00:00:00Z",
      "created_by": {
        "time": "2025-08-15T17:57:26.447390599Z",
        "user": {
          "name": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local"
        }
      }
    },
    "status": {
      "password_state": 1,
      "mfa_weakest_device": 1
    }
  },
  {
    "kind": "user",
    "version": "v2",
    "metadata": {
      "name": "clapppp",
      "revision": "4c3ed9d3-5664-4907-abb9-0bef55269933"
    },
    "spec": {
      "roles": ["basic-user"],
      "status": {
        "is_locked": false,
        "locked_time": "0001-01-01T00:00:00Z",
        "lock_expires": "0001-01-01T00:00:00Z"
      },
      "expires": "0001-01-01T00:00:00Z",
      "created_by": {
        "time": "2025-08-06T02:21:14.118202327Z",
        "user": {
          "name": "bot-jarvis-bot"
        }
      }
    },
    "status": {
      "password_state": 1,
      "mfa_weakest_device": 1
    }
  },
  {
    "kind": "user",
    "version": "v2",
    "metadata": {
      "name": "comet",
      "revision": "a8a86e0d-3c7a-4d49-a00e-f36db6f60b98"
    },
    "spec": {
      "roles": [
        "access",
        "api-impersonator",
        "editor",
        "web-terminal-bot-role",
        "teleport-event-handler-impersonator"
      ],
      "status": {
        "is_locked": false,
        "locked_time": "0001-01-01T00:00:00Z",
        "lock_expires": "0001-01-01T00:00:00Z"
      },
      "expires": "0001-01-01T00:00:00Z",
      "created_by": {
        "time": "2025-07-19T09:26:57.908543123Z",
        "user": {
          "name": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local"
        }
      }
    },
    "status": {
      "password_state": 2,
      "mfa_weakest_device": 1
    }
  },
  {
    "kind": "user",
    "version": "v2",
    "metadata": {
      "name": "jarvis-service-account",
      "revision": "303d0204-ceb5-4b4f-af5f-b5f091b4110e"
    },
    "spec": {
      "roles": ["api-impersonator"],
      "traits": {
        "aws_role_arns": null,
        "azure_identities": null,
        "db_names": null,
        "db_roles": null,
        "db_users": null,
        "gcp_service_accounts": null,
        "host_user_gid": [""],
        "host_user_uid": [""],
        "kubernetes_groups": null,
        "kubernetes_users": null,
        "logins": null,
        "windows_logins": null
      },
      "status": {
        "is_locked": false,
        "locked_time": "0001-01-01T00:00:00Z",
        "lock_expires": "0001-01-01T00:00:00Z"
      },
      "expires": "0001-01-01T00:00:00Z",
      "created_by": {
        "time": "2025-08-08T02:17:47.913575254Z",
        "user": {
          "name": "comet"
        }
      }
    },
    "status": {
      "password_state": 1,
      "mfa_weakest_device": 1
    }
  },
  {
    "kind": "user",
    "version": "v2",
    "metadata": {
      "name": "minij02",
      "revision": "937666a8-7bad-4070-a22c-2eb80450a4ae"
    },
    "spec": {
      "roles": ["basic-user"],
      "status": {
        "is_locked": false,
        "locked_time": "0001-01-01T00:00:00Z",
        "lock_expires": "0001-01-01T00:00:00Z"
      },
      "expires": "0001-01-01T00:00:00Z",
      "created_by": {
        "time": "2025-07-31T03:30:38.024506738Z",
        "user": {
          "name": "bot-jarvis-bot"
        }
      }
    },
    "status": {
      "password_state": 1,
      "mfa_weakest_device": 1
    }
  },
  {
    "kind": "user",
    "version": "v2",
    "metadata": {
      "name": "minju",
      "revision": "cbf496b0-8418-4020-909f-2e1ab6161186"
    },
    "spec": {
      "roles": ["editor"],
      "traits": {
        "aws_role_arns": null,
        "azure_identities": null,
        "db_names": null,
        "db_roles": null,
        "db_users": null,
        "gcp_service_accounts": null,
        "host_user_gid": [""],
        "host_user_uid": [""],
        "kubernetes_groups": null,
        "kubernetes_users": null,
        "logins": null,
        "windows_logins": null
      },
      "status": {
        "is_locked": false,
        "locked_time": "0001-01-01T00:00:00Z",
        "lock_expires": "0001-01-01T00:00:00Z"
      },
      "expires": "0001-01-01T00:00:00Z",
      "created_by": {
        "time": "2025-07-21T10:03:14.687842866Z",
        "user": {
          "name": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local"
        }
      }
    },
    "status": {
      "password_state": 2,
      "mfa_weakest_device": 1
    }
  },
  {
    "kind": "user",
    "version": "v2",
    "metadata": {
      "name": "psh",
      "revision": "a9f36097-7a54-4768-95b8-246a672afdee"
    },
    "spec": {
      "roles": ["editor"],
      "traits": {
        "aws_role_arns": null,
        "azure_identities": null,
        "db_names": null,
        "db_roles": null,
        "db_users": null,
        "gcp_service_accounts": null,
        "host_user_gid": [""],
        "host_user_uid": [""],
        "kubernetes_groups": null,
        "kubernetes_users": null,
        "logins": null,
        "windows_logins": null
      },
      "status": {
        "is_locked": false,
        "locked_time": "0001-01-01T00:00:00Z",
        "lock_expires": "0001-01-01T00:00:00Z"
      },
      "expires": "0001-01-01T00:00:00Z",
      "created_by": {
        "time": "2025-07-21T09:59:16.043336263Z",
        "user": {
          "name": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local"
        }
      }
    },
    "status": {
      "password_state": 2,
      "mfa_weakest_device": 1
    }
  },
  {
    "kind": "user",
    "version": "v2",
    "metadata": {
      "name": "teleport-event-handler",
      "revision": "04d068e1-d8d3-43fb-b4b2-2597cac03832"
    },
    "spec": {
      "roles": ["teleport-event-handler"],
      "status": {
        "is_locked": false,
        "locked_time": "0001-01-01T00:00:00Z",
        "lock_expires": "0001-01-01T00:00:00Z"
      },
      "expires": "0001-01-01T00:00:00Z",
      "created_by": {
        "time": "2025-08-05T06:42:05.559884684Z",
        "user": {
          "name": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local"
        }
      }
    },
    "status": {
      "password_state": 1,
      "mfa_weakest_device": 1
    }
  },
  {
    "kind": "user",
    "version": "v2",
    "metadata": {
      "name": "yunho_choi",
      "revision": "aeeee28e-c122-4c16-91f4-d8765916e64d"
    },
    "spec": {
      "roles": ["editor", "access"],
      "traits": {
        "aws_role_arns": null,
        "azure_identities": null,
        "db_names": null,
        "db_roles": null,
        "db_users": null,
        "gcp_service_accounts": null,
        "host_user_gid": [""],
        "host_user_uid": [""],
        "kubernetes_groups": null,
        "kubernetes_users": null,
        "logins": null,
        "windows_logins": null
      },
      "status": {
        "is_locked": false,
        "locked_time": "0001-01-01T00:00:00Z",
        "lock_expires": "0001-01-01T00:00:00Z"
      },
      "expires": "0001-01-01T00:00:00Z",
      "created_by": {
        "time": "2025-07-21T09:59:31.031305216Z",
        "user": {
          "name": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local"
        }
      }
    },
    "status": {
      "password_state": 2,
      "mfa_weakest_device": 1
    }
  }
];