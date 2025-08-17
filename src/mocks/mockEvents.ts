export const mockEvents = [
  {
    "ei": 0,
    "event": "role.updated",
    "uid": "4e5c463f-6e04-4af2-adb7-d8c10a99cdda",
    "code": "T9002I",
    "time": "2025-08-16T16:50:25.956Z",
    "cluster_name": "mycluster.local",
    "name": "basic-user",
    "expires": "0001-01-01T00:00:00Z",
    "user": "yunho_choi",
    "user_kind": 1,
    "addr.remote": "112.152.93.207:61362"
  },
  {
    "ei": 0,
    "event": "session.recording.access",
    "uid": "6cb8c61c-0155-4a11-9e7e-73d454650271",
    "code": "T2012I",
    "time": "2025-08-16T16:48:23.941Z",
    "cluster_name": "mycluster.local",
    "sid": "0",
    "user": "bot-jarvis-bot",
    "impersonator": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
  },
  {
    "ei": 0,
    "event": "session.recording.access",
    "uid": "14c8a426-71d2-4f4e-be55-0efe4505a4ea",
    "code": "T2012I",
    "time": "2025-08-16T16:47:43.655Z",
    "cluster_name": "mycluster.local",
    "sid": "3",
    "user": "bot-jarvis-bot",
    "impersonator": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
  },
  {
    "ei": 0,
    "event": "session.recording.access",
    "uid": "01b39db7-7c5e-43cc-b2c5-d1165c27f110",
    "code": "T2012I",
    "time": "2025-08-16T16:47:43.073Z",
    "cluster_name": "mycluster.local",
    "sid": "3",
    "user": "bot-jarvis-bot",
    "impersonator": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "296c96ef-8809-47f5-aba1-004327bf91e2",
    "code": "TC000I",
    "time": "2025-08-16T16:47:04.556Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "yunho_choi",
      "roles": [
        "access",
        "editor"
      ],
      "logins": [
        "root",
        "ubuntu",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-17T04:16:34.96334678Z",
      "route_to_cluster": "mycluster.local",
      "traits": {
        "aws_role_arns": null,
        "azure_identities": null,
        "db_names": null,
        "db_roles": null,
        "db_users": null,
        "gcp_service_accounts": null,
        "host_user_gid": [
          ""
        ],
        "host_user_uid": [
          ""
        ],
        "kubernetes_groups": null,
        "kubernetes_users": null,
        "logins": null,
        "windows_logins": null
      },
      "teleport_cluster": "mycluster.local",
      "client_ip": "112.152.93.207",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none"
    },
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "34956546-e828-404d-874e-fad5156a7187",
    "code": "TC000I",
    "time": "2025-08-16T16:41:00.295Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "roles": [
        "bot-jarvis-bot"
      ],
      "logins": [
        "-teleport-nologin-25acc4bf-912f-4fb1-b6a1-b2f80cf6729b",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:41:00.292965283Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "user.update",
    "uid": "f4c3ecbf-e196-4856-8062-08af05ad55d5",
    "code": "T1003I",
    "time": "2025-08-16T16:41:00.289Z",
    "cluster_name": "mycluster.local",
    "user": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7",
    "name": "bot-jarvis-bot",
    "expires": "0001-01-01T00:00:00Z",
    "roles": [
      "bot-jarvis-bot"
    ],
    "connector": "local"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "968b4a06-3dd3-4e02-aac5-2e8a5c895a26",
    "code": "TC000I",
    "time": "2025-08-16T16:41:00.258Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "cert-admin-role",
        "web-terminal-bot-role",
        "editor",
        "basic-user",
        "access",
        "api-impersonator",
        "teleport-event-handler"
      ],
      "logins": [
        "root",
        "ubuntu",
        "ec2-user",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:41:00.253033072Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "846aa910-dbcf-4e91-9474-bda8a4d3bc34",
    "code": "TC000I",
    "time": "2025-08-16T16:41:00.255Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "teleport-event-handler"
      ],
      "logins": [
        "-teleport-nologin-296bcc64-641c-4df7-96a7-ea039f073a1e",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:41:00.248969423Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "disallow_reissue": true,
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "8150ab60-013e-48ef-85eb-b34866623a67",
    "code": "TC000I",
    "time": "2025-08-16T16:41:00.253Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "api-impersonator"
      ],
      "logins": [
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:41:00.248253893Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "df0583d3-0a46-4e33-9976-e979e4cf277e",
    "code": "TC000I",
    "time": "2025-08-16T16:41:00.253Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "basic-user"
      ],
      "logins": [
        "ubuntu",
        "ec2-user",
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:41:00.249971343Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "user.login",
    "uid": "458d578e-0a7e-473a-87fc-35beed83fd13",
    "code": "T1000W",
    "time": "2025-08-16T16:40:42.365Z",
    "cluster_name": "mycluster.local",
    "user": "yunho",
    "success": false,
    "error": "invalid username or password",
    "method": "local"
  },
  {
    "ei": 0,
    "event": "mfa_auth_challenge.create",
    "uid": "da453cba-bf46-498a-a641-8a80375cdd55",
    "code": "T1015I",
    "time": "2025-08-16T16:39:34.125Z",
    "cluster_name": "mycluster.local",
    "user": "yunho_choi",
    "user_kind": 1,
    "challenge_scope": "CHALLENGE_SCOPE_CHANGE_PASSWORD",
    "challenge_allow_reuse": false
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "8a9ffb30-3ebc-44c0-9da1-d096bcf471c1",
    "code": "TC000I",
    "time": "2025-08-16T16:39:02.133Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "yunho_choi",
      "roles": [
        "access",
        "editor"
      ],
      "logins": [
        "root",
        "ubuntu",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-17T04:16:34.96164055Z",
      "route_to_cluster": "mycluster.local",
      "traits": {
        "aws_role_arns": null,
        "azure_identities": null,
        "db_names": null,
        "db_roles": null,
        "db_users": null,
        "gcp_service_accounts": null,
        "host_user_gid": [
          ""
        ],
        "host_user_uid": [
          ""
        ],
        "kubernetes_groups": null,
        "kubernetes_users": null,
        "logins": null,
        "windows_logins": null
      },
      "teleport_cluster": "mycluster.local",
      "client_ip": "112.152.93.207",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none"
    },
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "user.login",
    "uid": "db7da782-6ba9-4a5a-98d5-33725516ad2c",
    "code": "T1000W",
    "time": "2025-08-16T16:37:03.885Z",
    "cluster_name": "mycluster.local",
    "user": "yunho",
    "success": false,
    "error": "invalid username or password",
    "method": "local"
  },
  {
    "ei": 0,
    "event": "user.login",
    "uid": "14b1ad11-f72d-4d14-bd18-e85c75cf4f26",
    "code": "T1000W",
    "time": "2025-08-16T16:36:51.355Z",
    "cluster_name": "mycluster.local",
    "user": "yunho",
    "success": false,
    "error": "invalid username or password",
    "method": "local"
  },
  {
    "ei": 0,
    "event": "user.login",
    "uid": "717fa154-be99-4ccf-bbda-db57d1ba3a16",
    "code": "T1000W",
    "time": "2025-08-16T16:32:35.091Z",
    "cluster_name": "mycluster.local",
    "user": "yunho",
    "success": false,
    "error": "invalid username or password",
    "method": "local"
  },
  {
    "ei": 0,
    "event": "user.login",
    "uid": "9252bcb5-cec5-4c20-8da1-cf7fcd7d1f4f",
    "code": "T1000W",
    "time": "2025-08-16T16:32:18.428Z",
    "cluster_name": "mycluster.local",
    "user": "yunho",
    "success": false,
    "error": "invalid username or password",
    "method": "local"
  },
  {
    "ei": 0,
    "event": "user.login",
    "uid": "c443dbc5-7f59-43c4-a91f-bd10800ded1a",
    "code": "T1000W",
    "time": "2025-08-16T16:32:04.12Z",
    "cluster_name": "mycluster.local",
    "user": "yunho",
    "success": false,
    "error": "invalid username or password",
    "method": "local"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "51bb9599-ef57-4255-9e2d-315f948d5939",
    "code": "TC000I",
    "time": "2025-08-16T16:31:51.529Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "yunho_choi",
      "roles": [
        "access",
        "editor"
      ],
      "logins": [
        "root",
        "ubuntu",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-17T04:16:34.960033909Z",
      "route_to_cluster": "mycluster.local",
      "traits": {
        "aws_role_arns": null,
        "azure_identities": null,
        "db_names": null,
        "db_roles": null,
        "db_users": null,
        "gcp_service_accounts": null,
        "host_user_gid": [
          ""
        ],
        "host_user_uid": [
          ""
        ],
        "kubernetes_groups": null,
        "kubernetes_users": null,
        "logins": null,
        "windows_logins": null
      },
      "teleport_cluster": "mycluster.local",
      "client_ip": "112.152.93.207",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none"
    },
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "fd06f4f7-ed6f-4690-8a05-d4e251d2e78a",
    "code": "TC000I",
    "time": "2025-08-16T16:24:07.039Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "yunho_choi",
      "roles": [
        "access",
        "editor"
      ],
      "logins": [
        "root",
        "ubuntu",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-17T04:16:34.958420549Z",
      "route_to_cluster": "mycluster.local",
      "traits": {
        "aws_role_arns": null,
        "azure_identities": null,
        "db_names": null,
        "db_roles": null,
        "db_users": null,
        "gcp_service_accounts": null,
        "host_user_gid": [
          ""
        ],
        "host_user_uid": [
          ""
        ],
        "kubernetes_groups": null,
        "kubernetes_users": null,
        "logins": null,
        "windows_logins": null
      },
      "teleport_cluster": "mycluster.local",
      "client_ip": "112.152.93.207",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none"
    },
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "session.start",
    "uid": "e87aa05e-5188-4d3e-8bfd-89d0d8234fcd",
    "code": "T2000I",
    "time": "2025-08-16T16:23:08.148Z",
    "cluster_name": "mycluster.local",
    "user": "bot-jarvis-bot",
    "login": "root",
    "impersonator": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7",
    "sid": "5f348b4a-56eb-4ed5-a136-1cdb81ca7e54",
    "private_key_policy": "none",
    "namespace": "default",
    "server_id": "be13d7a6-2686-44d9-bd46-ed0dfb10caf1",
    "server_hostname": "test-server",
    "server_addr": "[::]:3022",
    "server_version": "17.5.4",
    "addr.local": "127.0.0.1:3080",
    "addr.remote": "172.18.0.4:35242",
    "proto": "ssh",
    "size": "80:25",
    "initial_command": [
      "bash -lc echo yunhoch0i; exec bash"
    ],
    "session_recording": "proxy"
  },
  {
    "ei": 0,
    "event": "session.start",
    "uid": "98083b01-efb8-4ba9-b1c8-7a4a71225039",
    "code": "T2000I",
    "time": "2025-08-16T16:23:08.148Z",
    "cluster_name": "mycluster.local",
    "user": "bot-jarvis-bot",
    "login": "root",
    "impersonator": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7",
    "sid": "e8005182-0164-43b6-9bed-46cccd4dc81b",
    "private_key_policy": "none",
    "namespace": "default",
    "server_id": "be13d7a6-2686-44d9-bd46-ed0dfb10caf1.mycluster.local",
    "server_hostname": "test-server",
    "server_addr": "172.18.0.2:3022",
    "forwarded_by": "863e1241-aa97-433d-812d-9ea93aeb8131",
    "server_sub_kind": "teleport",
    "server_version": "17.5.4",
    "addr.local": "172.18.0.2:3022",
    "addr.remote": "172.18.0.4:35242",
    "proto": "ssh",
    "size": "80:25",
    "initial_command": [
      "bash -lc echo yunhoch0i; exec bash"
    ],
    "session_recording": "proxy"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "40d48d23-07d7-454c-8499-ced7e6067d37",
    "code": "TC000I",
    "time": "2025-08-16T16:21:00.274Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "roles": [
        "bot-jarvis-bot"
      ],
      "logins": [
        "-teleport-nologin-632aae0b-9a89-4604-9eab-4591a4747197",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:21:00.272919823Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "user.update",
    "uid": "cb02c223-c8a5-4dc8-ab33-35ca6d817573",
    "code": "T1003I",
    "time": "2025-08-16T16:21:00.268Z",
    "cluster_name": "mycluster.local",
    "user": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7",
    "name": "bot-jarvis-bot",
    "expires": "0001-01-01T00:00:00Z",
    "roles": [
      "bot-jarvis-bot"
    ],
    "connector": "local"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "0cc63653-43cf-4bdf-94b8-e8ca1e350114",
    "code": "TC000I",
    "time": "2025-08-16T16:21:00.238Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "cert-admin-role",
        "web-terminal-bot-role",
        "editor",
        "basic-user",
        "access",
        "api-impersonator",
        "teleport-event-handler"
      ],
      "logins": [
        "root",
        "ubuntu",
        "ec2-user",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:21:00.233943884Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "b89fa828-5336-4c4d-bdf3-7a069a3afa20",
    "code": "TC000I",
    "time": "2025-08-16T16:21:00.236Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "api-impersonator"
      ],
      "logins": [
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:21:00.232164265Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "3e6296f4-24d3-4b18-8b61-8d5e95ec9ded",
    "code": "TC000I",
    "time": "2025-08-16T16:21:00.236Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "teleport-event-handler"
      ],
      "logins": [
        "-teleport-nologin-3fafc0ad-75b6-4a7b-b670-3d353e3c62b5",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:21:00.232181585Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "disallow_reissue": true,
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "667173d9-d50d-4979-bf92-5f76df50bf1a",
    "code": "TC000I",
    "time": "2025-08-16T16:21:00.236Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "basic-user"
      ],
      "logins": [
        "ubuntu",
        "ec2-user",
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:21:00.232018765Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "fa14b619-0f42-4d71-94a2-124215e74fef",
    "code": "TC000I",
    "time": "2025-08-16T16:16:34.968Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "yunho_choi",
      "roles": [
        "editor",
        "access"
      ],
      "logins": [
        "root",
        "ubuntu",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-17T04:16:34.967567529Z",
      "route_to_cluster": "mycluster.local",
      "traits": {
        "aws_role_arns": null,
        "azure_identities": null,
        "db_names": null,
        "db_roles": null,
        "db_users": null,
        "gcp_service_accounts": null,
        "host_user_gid": [
          ""
        ],
        "host_user_uid": [
          ""
        ],
        "kubernetes_groups": null,
        "kubernetes_users": null,
        "logins": null,
        "windows_logins": null
      },
      "teleport_cluster": "mycluster.local",
      "client_ip": "112.152.93.207",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none"
    },
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "user.login",
    "uid": "abe38e60-9741-427b-84dd-6acde2c15f89",
    "code": "T1000I",
    "time": "2025-08-16T16:16:34.957Z",
    "cluster_name": "mycluster.local",
    "user": "yunho_choi",
    "required_private_key_policy": "none",
    "user_origin": 1,
    "success": true,
    "method": "local",
    "mfa_device": {
      "mfa_device_name": "otp-device",
      "mfa_device_uuid": "3c4b87b0-1f27-45ae-a8b6-dfc746d89c71",
      "mfa_device_type": "TOTP"
    },
    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Safari/605.1.15",
    "addr.remote": "112.152.93.207:60882"
  },
  {
    "ei": 0,
    "event": "user.create",
    "uid": "e4672057-ab16-4862-aa19-a46b65f8cebe",
    "code": "T1002I",
    "time": "2025-08-16T16:14:52.468Z",
    "cluster_name": "mycluster.local",
    "user": "bot-jarvis-bot",
    "impersonator": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7",
    "name": "yunhoch0i",
    "expires": "0001-01-01T00:00:00Z",
    "roles": [
      "basic-user"
    ],
    "connector": "local",
    "addr.remote": "172.18.0.4:50848"
  },
  {
    "ei": 0,
    "event": "session.recording.access",
    "uid": "6f85b803-acde-4bed-bb76-23a870ab6eac",
    "code": "T2012I",
    "time": "2025-08-16T16:01:49.37Z",
    "cluster_name": "mycluster.local",
    "sid": "7209f14f-5218-4083-ad13-3cd00c5177f8",
    "user": "bot-jarvis-bot",
    "impersonator": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7",
    "session_type": "ssh",
    "format": "text"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "7b187545-235d-412e-b64c-6ff11c5dd663",
    "code": "TC000I",
    "time": "2025-08-16T16:01:00.269Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "cert-admin-role",
        "web-terminal-bot-role",
        "editor",
        "basic-user",
        "access",
        "api-impersonator",
        "teleport-event-handler"
      ],
      "logins": [
        "root",
        "ubuntu",
        "ec2-user",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:01:00.263638876Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "a33138f3-6862-49d6-9b65-e477305321ae",
    "code": "TC000I",
    "time": "2025-08-16T16:01:00.268Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "api-impersonator"
      ],
      "logins": [
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:01:00.232105645Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "5ab2f191-198e-46b9-8222-00fffc6b4520",
    "code": "TC000I",
    "time": "2025-08-16T16:01:00.267Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "basic-user"
      ],
      "logins": [
        "ubuntu",
        "ec2-user",
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:01:00.231693385Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "0db8e52f-1489-4407-bb24-b7aba5cdc26f",
    "code": "TC000I",
    "time": "2025-08-16T16:01:00.267Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "teleport-event-handler"
      ],
      "logins": [
        "-teleport-nologin-48c2ff5f-d86c-4054-ab7d-d7991fbc71d6",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:01:00.231727565Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "disallow_reissue": true,
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "bot.join",
    "uid": "483219ea-9707-4d2c-bb81-eeecd4fa9c36",
    "code": "TJ001I",
    "time": "2025-08-16T16:01:00.228Z",
    "cluster_name": "mycluster.local",
    "success": true,
    "bot_name": "jarvis-bot",
    "method": "token",
    "token_name": "************************59bc5130",
    "user_name": "bot-jarvis-bot",
    "addr.remote": "172.18.0.4",
    "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "7286710d-075f-4542-b482-5cc1101fbf15",
    "code": "TC000I",
    "time": "2025-08-16T16:01:00.222Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "roles": [
        "bot-jarvis-bot"
      ],
      "logins": [
        "-teleport-nologin-d3ee6cdb-a3fb-42c1-8ce8-3b74bf4f676d",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T17:01:00.166518336Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "6dd675ef-907f-4538-8ce5-eeaf38a77db7"
    },
    "user_agent": "grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "bot.create",
    "uid": "868e8923-141c-423a-9661-a20538c26afd",
    "code": "TB001I",
    "time": "2025-08-16T16:00:57.319Z",
    "cluster_name": "mycluster.local",
    "name": "jarvis-bot",
    "expires": "0001-01-01T00:00:00Z",
    "user": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user_kind": 3
  },
  {
    "ei": 0,
    "event": "join_token.create",
    "uid": "7a61df15-caeb-48c9-b3ff-c55a54fe840e",
    "code": "TJT00I",
    "time": "2025-08-16T16:00:57.306Z",
    "cluster_name": "mycluster.local",
    "name": "************************59bc5130",
    "expires": "2025-08-16T16:05:57.299478852Z",
    "updated_by": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user_kind": 3,
    "roles": [
      "Bot"
    ],
    "join_method": "token"
  },
  {
    "ei": 0,
    "event": "bot.delete",
    "uid": "5f33fdf2-dcf0-4813-9723-33c78e6567ba",
    "code": "TB003I",
    "time": "2025-08-16T16:00:57.145Z",
    "cluster_name": "mycluster.local",
    "name": "jarvis-bot",
    "expires": "0001-01-01T00:00:00Z",
    "user": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user_kind": 3
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "6f93eae1-7718-4350-b19e-dbe29d107eac",
    "code": "TC000I",
    "time": "2025-08-16T14:48:56.017Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "teleport-event-handler"
      ],
      "logins": [
        "-teleport-nologin-74f8c6bb-c3f2-48d4-b78d-1886ca7e3348",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T15:48:55.986970828Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "disallow_reissue": true,
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "69fc0e36-3e62-41ac-9cf3-ce3bd304bc06"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "9ebf5c88-6c4c-4c0d-867f-2be58a259dab",
    "code": "TC000I",
    "time": "2025-08-16T14:48:56.017Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "cert-admin-role",
        "web-terminal-bot-role",
        "editor",
        "basic-user",
        "access",
        "api-impersonator",
        "teleport-event-handler"
      ],
      "logins": [
        "root",
        "ubuntu",
        "ec2-user",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T15:48:56.012744138Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "69fc0e36-3e62-41ac-9cf3-ce3bd304bc06"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "691b8360-913d-46a4-86af-5b8023e75f1e",
    "code": "TC000I",
    "time": "2025-08-16T14:48:56.017Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "api-impersonator"
      ],
      "logins": [
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T15:48:55.987375818Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "69fc0e36-3e62-41ac-9cf3-ce3bd304bc06"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "15f6d2df-ff7c-4188-9c6c-b07bc7e4ed5b",
    "code": "TC000I",
    "time": "2025-08-16T14:48:56.017Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "basic-user"
      ],
      "logins": [
        "ubuntu",
        "ec2-user",
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T15:48:55.987194178Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "69fc0e36-3e62-41ac-9cf3-ce3bd304bc06"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "bot.join",
    "uid": "60f4e79e-447a-488d-814b-807a83740236",
    "code": "TJ001I",
    "time": "2025-08-16T14:48:55.981Z",
    "cluster_name": "mycluster.local",
    "success": true,
    "bot_name": "jarvis-bot",
    "method": "token",
    "token_name": "************************19842363",
    "user_name": "bot-jarvis-bot",
    "addr.remote": "172.18.0.4",
    "bot_instance_id": "69fc0e36-3e62-41ac-9cf3-ce3bd304bc06"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "47bfbaf1-4eda-4865-b6dc-05dbccfe2535",
    "code": "TC000I",
    "time": "2025-08-16T14:48:55.976Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "roles": [
        "bot-jarvis-bot"
      ],
      "logins": [
        "-teleport-nologin-cf70fce3-b1cb-4a85-b76a-9da331c986c0",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T15:48:55.932884529Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "69fc0e36-3e62-41ac-9cf3-ce3bd304bc06"
    },
    "user_agent": "grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "bot.create",
    "uid": "87ff7398-51dd-4fc0-afdc-f23b006dcb0a",
    "code": "TB001I",
    "time": "2025-08-16T14:48:52.974Z",
    "cluster_name": "mycluster.local",
    "name": "jarvis-bot",
    "expires": "0001-01-01T00:00:00Z",
    "user": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user_kind": 3
  },
  {
    "ei": 0,
    "event": "join_token.create",
    "uid": "2736d33d-7fea-4ce1-a09f-a05311a9d194",
    "code": "TJT00I",
    "time": "2025-08-16T14:48:52.959Z",
    "cluster_name": "mycluster.local",
    "name": "************************19842363",
    "expires": "2025-08-16T14:53:52.950852684Z",
    "updated_by": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user_kind": 3,
    "roles": [
      "Bot"
    ],
    "join_method": "token"
  },
  {
    "ei": 0,
    "event": "bot.delete",
    "uid": "a437c7ae-cc8b-4d7c-9a45-9b01577d7f4f",
    "code": "TB003I",
    "time": "2025-08-16T14:48:52.732Z",
    "cluster_name": "mycluster.local",
    "name": "jarvis-bot",
    "expires": "0001-01-01T00:00:00Z",
    "user": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user_kind": 3
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "62242f28-5fe1-4ec3-bf83-c7141c5915e0",
    "code": "TC000I",
    "time": "2025-08-16T14:16:40.475Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "yunho_choi",
      "roles": [
        "access",
        "editor"
      ],
      "logins": [
        "root",
        "ubuntu",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-17T02:09:06.189917295Z",
      "route_to_cluster": "mycluster.local",
      "traits": {
        "aws_role_arns": null,
        "azure_identities": null,
        "db_names": null,
        "db_roles": null,
        "db_users": null,
        "gcp_service_accounts": null,
        "host_user_gid": [
          ""
        ],
        "host_user_uid": [
          ""
        ],
        "kubernetes_groups": null,
        "kubernetes_users": null,
        "logins": null,
        "windows_logins": null
      },
      "teleport_cluster": "mycluster.local",
      "client_ip": "112.152.93.207",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none"
    },
    "certificate_authority": null
  },
  {
    "ei": 2147483646,
    "event": "session.data",
    "uid": "8b2e5551-9f02-4704-8e5c-ec0f729335ad",
    "code": "T2006I",
    "time": "2025-08-16T14:11:57.855Z",
    "cluster_name": "mycluster.local",
    "user": "yunho_choi",
    "login": "root",
    "user_kind": 1,
    "sid": "7209f14f-5218-4083-ad13-3cd00c5177f8",
    "private_key_policy": "none",
    "namespace": "default",
    "server_id": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "server_hostname": "28a6ee42ea10",
    "server_addr": "127.0.0.1:3022",
    "forwarded_by": "863e1241-aa97-433d-812d-9ea93aeb8131",
    "server_sub_kind": "teleport",
    "server_version": "17.5.4",
    "addr.local": "127.0.0.1:3022",
    "addr.remote": "112.152.93.207:60544",
    "tx": 4420,
    "rx": 3488
  },
  {
    "ei": 4,
    "event": "session.leave",
    "uid": "48dbcd33-5b46-4e43-b534-a7ce9b54a920",
    "code": "T2003I",
    "time": "2025-08-16T14:11:57.849Z",
    "cluster_name": "mycluster.local",
    "user": "yunho_choi",
    "login": "root",
    "user_kind": 1,
    "sid": "7209f14f-5218-4083-ad13-3cd00c5177f8",
    "private_key_policy": "none",
    "namespace": "default",
    "server_id": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "server_hostname": "28a6ee42ea10",
    "server_addr": "127.0.0.1:3022",
    "forwarded_by": "863e1241-aa97-433d-812d-9ea93aeb8131",
    "server_sub_kind": "teleport",
    "server_version": "17.5.4"
  },
  {
    "ei": 0,
    "event": "session.leave",
    "uid": "a0afbedc-5c3e-401c-8caa-b1a33cb1c5ba",
    "code": "T2003I",
    "time": "2025-08-16T14:11:57.844Z",
    "cluster_name": "mycluster.local",
    "user": "yunho_choi",
    "login": "root",
    "user_kind": 1,
    "sid": "8a396874-3756-4a50-b2f6-d1d464f86a5f",
    "private_key_policy": "none",
    "namespace": "default",
    "server_id": "863e1241-aa97-433d-812d-9ea93aeb8131",
    "server_hostname": "28a6ee42ea10",
    "server_addr": "[::]:3022",
    "server_labels": {
      "hostname": "localhost"
    },
    "server_version": "17.5.4"
  },
  {
    "ei": 3,
    "event": "session.end",
    "uid": "2bda0edb-c202-4b16-aa5d-b4c4aa4d7d9b",
    "code": "T2004I",
    "time": "2025-08-16T14:11:57.843Z",
    "cluster_name": "mycluster.local",
    "user": "yunho_choi",
    "login": "root",
    "user_kind": 1,
    "sid": "7209f14f-5218-4083-ad13-3cd00c5177f8",
    "private_key_policy": "none",
    "addr.remote": "112.152.93.207:60544",
    "proto": "ssh",
    "namespace": "default",
    "server_id": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "server_hostname": "28a6ee42ea10",
    "server_addr": "127.0.0.1:3022",
    "forwarded_by": "863e1241-aa97-433d-812d-9ea93aeb8131",
    "server_sub_kind": "teleport",
    "server_version": "17.5.4",
    "enhanced_recording": false,
    "interactive": true,
    "participants": [
      "yunho_choi"
    ],
    "session_start": "2025-08-16T14:11:57.703641264Z",
    "session_stop": "2025-08-16T14:11:57.843047043Z",
    "session_recording": "proxy"
  },
  {
    "ei": 0,
    "event": "session.end",
    "uid": "828475e5-4934-46d8-8e57-6af41aa8593f",
    "code": "T2004I",
    "time": "2025-08-16T14:11:57.842Z",
    "cluster_name": "mycluster.local",
    "user": "yunho_choi",
    "login": "root",
    "user_kind": 1,
    "sid": "8a396874-3756-4a50-b2f6-d1d464f86a5f",
    "private_key_policy": "none",
    "addr.remote": "112.152.93.207:60544",
    "proto": "ssh",
    "namespace": "default",
    "server_id": "863e1241-aa97-433d-812d-9ea93aeb8131",
    "server_hostname": "28a6ee42ea10",
    "server_addr": "[::]:3022",
    "server_labels": {
      "hostname": "localhost"
    },
    "server_version": "17.5.4",
    "enhanced_recording": false,
    "interactive": true,
    "participants": [
      "yunho_choi"
    ],
    "session_start": "2025-08-16T14:11:57.714489134Z",
    "session_stop": "2025-08-16T14:11:57.842316483Z",
    "session_recording": "proxy"
  },
  {
    "ei": 0,
    "event": "session.start",
    "uid": "21594f4c-f920-4841-86eb-50e621acb35c",
    "code": "T2000I",
    "time": "2025-08-16T14:11:57.716Z",
    "cluster_name": "mycluster.local",
    "user": "yunho_choi",
    "login": "root",
    "user_kind": 1,
    "sid": "7209f14f-5218-4083-ad13-3cd00c5177f8",
    "private_key_policy": "none",
    "namespace": "default",
    "server_id": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "server_hostname": "28a6ee42ea10",
    "server_addr": "127.0.0.1:3022",
    "forwarded_by": "863e1241-aa97-433d-812d-9ea93aeb8131",
    "server_sub_kind": "teleport",
    "server_version": "17.5.4",
    "addr.local": "127.0.0.1:3022",
    "addr.remote": "112.152.93.207:60544",
    "proto": "ssh",
    "size": "80:25",
    "initial_command": [
      ""
    ],
    "session_recording": "proxy"
  },
  {
    "ei": 0,
    "event": "session.start",
    "uid": "142379d3-6232-4536-8157-5d80d85a86d4",
    "code": "T2000I",
    "time": "2025-08-16T14:11:57.715Z",
    "cluster_name": "mycluster.local",
    "user": "yunho_choi",
    "login": "root",
    "user_kind": 1,
    "sid": "8a396874-3756-4a50-b2f6-d1d464f86a5f",
    "private_key_policy": "none",
    "namespace": "default",
    "server_id": "863e1241-aa97-433d-812d-9ea93aeb8131",
    "server_hostname": "28a6ee42ea10",
    "server_addr": "[::]:3022",
    "server_labels": {
      "hostname": "localhost"
    },
    "server_version": "17.5.4",
    "addr.local": "172.18.0.3:3080",
    "addr.remote": "112.152.93.207:60544",
    "proto": "ssh",
    "size": "80:25",
    "initial_command": [
      ""
    ],
    "session_recording": "proxy"
  },
  {
    "ei": 0,
    "event": "user.update",
    "uid": "40fbbb6c-0103-4247-a7f3-594a03d1b552",
    "code": "T1003I",
    "time": "2025-08-16T14:09:58.293Z",
    "cluster_name": "mycluster.local",
    "user": "comet",
    "user_kind": 1,
    "name": "CometWoo",
    "expires": "0001-01-01T00:00:00Z",
    "roles": [
      "basic-user"
    ],
    "connector": "local",
    "addr.remote": "59.5.55.211:57895"
  },
  {
    "ei": 0,
    "event": "user.update",
    "uid": "afefcbea-e968-4b84-8bd0-fd8e7c4f2b66",
    "code": "T1003I",
    "time": "2025-08-16T14:09:17.568Z",
    "cluster_name": "mycluster.local",
    "user": "comet",
    "user_kind": 1,
    "name": "CometWoo",
    "expires": "0001-01-01T00:00:00Z",
    "roles": [
      "basic-user",
      "editor"
    ],
    "connector": "local",
    "addr.remote": "59.5.55.211:57895"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "73adf8d8-d869-440c-95b5-fd4b01d6383f",
    "code": "TC000I",
    "time": "2025-08-16T14:09:06.199Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "yunho_choi",
      "roles": [
        "editor",
        "access"
      ],
      "logins": [
        "root",
        "ubuntu",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-17T02:09:06.197873235Z",
      "route_to_cluster": "mycluster.local",
      "traits": {
        "aws_role_arns": null,
        "azure_identities": null,
        "db_names": null,
        "db_roles": null,
        "db_users": null,
        "gcp_service_accounts": null,
        "host_user_gid": [
          ""
        ],
        "host_user_uid": [
          ""
        ],
        "kubernetes_groups": null,
        "kubernetes_users": null,
        "logins": null,
        "windows_logins": null
      },
      "teleport_cluster": "mycluster.local",
      "client_ip": "112.152.93.207",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none"
    },
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "user.login",
    "uid": "1b4985af-1346-4943-966c-bacb8a7f918e",
    "code": "T1000I",
    "time": "2025-08-16T14:09:06.189Z",
    "cluster_name": "mycluster.local",
    "user": "yunho_choi",
    "required_private_key_policy": "none",
    "user_origin": 1,
    "success": true,
    "method": "local",
    "mfa_device": {
      "mfa_device_name": "otp-device",
      "mfa_device_uuid": "3c4b87b0-1f27-45ae-a8b6-dfc746d89c71",
      "mfa_device_type": "TOTP"
    },
    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Safari/605.1.15",
    "addr.remote": "112.152.93.207:60527"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "de217a12-5f9d-4d85-8380-cd1923ceb251",
    "code": "TC000I",
    "time": "2025-08-16T14:08:42.726Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "comet",
      "roles": [
        "access",
        "editor",
        "api-impersonator",
        "web-terminal-bot-role",
        "teleport-event-handler-impersonator"
      ],
      "logins": [
        "root",
        "ubuntu",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-17T00:01:42.83449955Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "59.5.55.211",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none"
    },
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "role.updated",
    "uid": "70eab898-97e5-49c2-aa98-2a83e1f7e3fa",
    "code": "T9002I",
    "time": "2025-08-16T14:08:29.703Z",
    "cluster_name": "mycluster.local",
    "name": "basic-user",
    "expires": "0001-01-01T00:00:00Z",
    "user": "comet",
    "user_kind": 1,
    "addr.remote": "59.5.55.211:57804"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "eedc6239-6756-405f-9169-54875a301589",
    "code": "TC000I",
    "time": "2025-08-16T14:01:42.844Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "comet",
      "roles": [
        "access",
        "api-impersonator",
        "editor",
        "web-terminal-bot-role",
        "teleport-event-handler-impersonator"
      ],
      "logins": [
        "root",
        "ubuntu",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-17T00:01:42.8428072Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "59.5.55.211",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none"
    },
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "user.login",
    "uid": "5d451c83-f064-4c7d-bf0c-bff1b48e3bdc",
    "code": "T1000I",
    "time": "2025-08-16T14:01:42.832Z",
    "cluster_name": "mycluster.local",
    "user": "comet",
    "required_private_key_policy": "none",
    "user_origin": 1,
    "success": true,
    "method": "local",
    "mfa_device": {
      "mfa_device_name": "otp-device",
      "mfa_device_uuid": "8903aca9-b1b9-4430-a246-3590ef2c7833",
      "mfa_device_type": "TOTP"
    },
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
    "addr.remote": "59.5.55.211:57804"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "7a24abe8-32ba-477d-8ca1-8cde27063a48",
    "code": "TC000I",
    "time": "2025-08-16T13:52:10.801Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "cert-admin-role",
        "web-terminal-bot-role",
        "editor",
        "basic-user",
        "access",
        "api-impersonator",
        "teleport-event-handler"
      ],
      "logins": [
        "root",
        "ubuntu",
        "ec2-user",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:52:10.796615363Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "4e74571c-43bb-46e4-acab-fcb70419f0c9"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "6f4da59b-4440-4300-81b7-204567359f3c",
    "code": "TC000I",
    "time": "2025-08-16T13:52:10.799Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "basic-user"
      ],
      "logins": [
        "ubuntu",
        "ec2-user",
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:52:10.770746213Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "4e74571c-43bb-46e4-acab-fcb70419f0c9"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "cc18d2ef-1e28-4145-ae55-9f0779f58923",
    "code": "TC000I",
    "time": "2025-08-16T13:52:10.799Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "api-impersonator"
      ],
      "logins": [
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:52:10.771243743Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "4e74571c-43bb-46e4-acab-fcb70419f0c9"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "190384a2-12da-440e-a938-61f24551ca5d",
    "code": "TC000I",
    "time": "2025-08-16T13:52:10.799Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "teleport-event-handler"
      ],
      "logins": [
        "-teleport-nologin-91e0055e-bd62-43bd-989d-ad67a9548a06",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:52:10.770654183Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "disallow_reissue": true,
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "4e74571c-43bb-46e4-acab-fcb70419f0c9"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "bot.join",
    "uid": "eb7ddd5c-dce3-411b-89f5-eeea0801c917",
    "code": "TJ001I",
    "time": "2025-08-16T13:52:10.767Z",
    "cluster_name": "mycluster.local",
    "success": true,
    "bot_name": "jarvis-bot",
    "method": "token",
    "token_name": "************************72bd46ab",
    "user_name": "bot-jarvis-bot",
    "addr.remote": "172.18.0.4",
    "bot_instance_id": "4e74571c-43bb-46e4-acab-fcb70419f0c9"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "1ba2847f-a72c-4a61-be4c-7d0c518000c5",
    "code": "TC000I",
    "time": "2025-08-16T13:52:10.762Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "roles": [
        "bot-jarvis-bot"
      ],
      "logins": [
        "-teleport-nologin-15cee511-b383-41ac-a39e-b8ee80bdcf64",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:52:10.725234684Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "4e74571c-43bb-46e4-acab-fcb70419f0c9"
    },
    "user_agent": "grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "bot.create",
    "uid": "47e4695c-4125-4c66-8ae4-bcdb8ed1f217",
    "code": "TB001I",
    "time": "2025-08-16T13:52:10.373Z",
    "cluster_name": "mycluster.local",
    "name": "jarvis-bot",
    "expires": "0001-01-01T00:00:00Z",
    "user": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user_kind": 3
  },
  {
    "ei": 0,
    "event": "join_token.create",
    "uid": "bc7c44da-e9b6-4aa5-98cc-e8f76d5f6f18",
    "code": "TJT00I",
    "time": "2025-08-16T13:52:10.363Z",
    "cluster_name": "mycluster.local",
    "name": "************************72bd46ab",
    "expires": "2025-08-16T13:57:10.357468627Z",
    "updated_by": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user_kind": 3,
    "roles": [
      "Bot"
    ],
    "join_method": "token"
  },
  {
    "ei": 0,
    "event": "bot.delete",
    "uid": "7e117213-c407-4c7f-92a0-81bd20c97669",
    "code": "TB003I",
    "time": "2025-08-16T13:52:10.211Z",
    "cluster_name": "mycluster.local",
    "name": "jarvis-bot",
    "expires": "0001-01-01T00:00:00Z",
    "user": "863e1241-aa97-433d-812d-9ea93aeb8131.mycluster.local",
    "user_kind": 3
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "1aa6695b-1a10-4645-bac9-49223be657c7",
    "code": "TC000I",
    "time": "2025-08-16T13:32:48.949Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "roles": [
        "bot-jarvis-bot"
      ],
      "logins": [
        "-teleport-nologin-675d4c12-9ce7-4da8-a456-17f6e46721dd",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:32:48.947316976Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "user.update",
    "uid": "073f829e-b9b8-438d-9417-57f19881ec3c",
    "code": "T1003I",
    "time": "2025-08-16T13:32:48.944Z",
    "cluster_name": "mycluster.local",
    "user": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6",
    "name": "bot-jarvis-bot",
    "expires": "0001-01-01T00:00:00Z",
    "roles": [
      "bot-jarvis-bot"
    ],
    "connector": "local"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "c66efcfe-5e0c-493a-8f55-8105405fb639",
    "code": "TC000I",
    "time": "2025-08-16T13:32:48.917Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "cert-admin-role",
        "web-terminal-bot-role",
        "editor",
        "basic-user",
        "access",
        "api-impersonator",
        "teleport-event-handler"
      ],
      "logins": [
        "root",
        "ubuntu",
        "ec2-user",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:32:48.912204396Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "2134339e-00f0-47e3-97fb-d393d14ba1e5",
    "code": "TC000I",
    "time": "2025-08-16T13:32:48.915Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "api-impersonator"
      ],
      "logins": [
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:32:48.910796006Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "5398941b-3194-4570-a433-9780af885401",
    "code": "TC000I",
    "time": "2025-08-16T13:32:48.915Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "basic-user"
      ],
      "logins": [
        "ubuntu",
        "ec2-user",
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:32:48.910655526Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "b0f9aa16-77c3-4f0b-a627-ca8e954c549b",
    "code": "TC000I",
    "time": "2025-08-16T13:32:48.915Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "teleport-event-handler"
      ],
      "logins": [
        "-teleport-nologin-e6b90d31-6229-4308-9112-7f1712c77a3a",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:32:48.910938256Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "disallow_reissue": true,
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "9c94f3e4-7651-421d-8f8b-6f0f760c158d",
    "code": "TC000I",
    "time": "2025-08-16T13:12:48.967Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "roles": [
        "bot-jarvis-bot"
      ],
      "logins": [
        "-teleport-nologin-734ae99e-b508-45c5-ae02-f206c4fda821",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:12:48.964932746Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "user.update",
    "uid": "bce8a357-765e-4111-a300-0f6ef82c737f",
    "code": "T1003I",
    "time": "2025-08-16T13:12:48.961Z",
    "cluster_name": "mycluster.local",
    "user": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6",
    "name": "bot-jarvis-bot",
    "expires": "0001-01-01T00:00:00Z",
    "roles": [
      "bot-jarvis-bot"
    ],
    "connector": "local"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "5f74dd53-a896-4c72-bfd7-71dbd69f92b6",
    "code": "TC000I",
    "time": "2025-08-16T13:12:48.932Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "cert-admin-role",
        "web-terminal-bot-role",
        "editor",
        "basic-user",
        "access",
        "api-impersonator",
        "teleport-event-handler"
      ],
      "logins": [
        "root",
        "ubuntu",
        "ec2-user",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:12:48.925825937Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "292d5573-71ea-40ab-9d1a-feeff50755a5",
    "code": "TC000I",
    "time": "2025-08-16T13:12:48.928Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "api-impersonator"
      ],
      "logins": [
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:12:48.924118226Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "efb18276-7f2b-461e-b30e-4529e9b5331e",
    "code": "TC000I",
    "time": "2025-08-16T13:12:48.928Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "basic-user"
      ],
      "logins": [
        "ubuntu",
        "ec2-user",
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:12:48.924214697Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "067ef401-6be6-483d-b184-b881067c41ab",
    "code": "TC000I",
    "time": "2025-08-16T13:12:48.928Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "teleport-event-handler"
      ],
      "logins": [
        "-teleport-nologin-f087081d-042f-4cc5-bc3d-dcc247afbdf6",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T14:12:48.924120457Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "disallow_reissue": true,
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "96a682ae-6f35-4d4d-acb0-8dff44b7b144",
    "code": "TC000I",
    "time": "2025-08-16T12:52:48.951Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "roles": [
        "bot-jarvis-bot"
      ],
      "logins": [
        "-teleport-nologin-1f1f5dfc-116c-4bd2-ab77-ba5112e9119a",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T13:52:48.949127003Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "user.update",
    "uid": "4d29a234-617c-4ac4-b7fd-fec5fd49e5fd",
    "code": "T1003I",
    "time": "2025-08-16T12:52:48.945Z",
    "cluster_name": "mycluster.local",
    "user": "bot-jarvis-bot",
    "user_kind": 2,
    "bot_name": "jarvis-bot",
    "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6",
    "name": "bot-jarvis-bot",
    "expires": "0001-01-01T00:00:00Z",
    "roles": [
      "bot-jarvis-bot"
    ],
    "connector": "local"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "ecdc8f7a-15a7-4eb7-878e-cb6f657aaa50",
    "code": "TC000I",
    "time": "2025-08-16T12:52:48.918Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "cert-admin-role",
        "web-terminal-bot-role",
        "editor",
        "basic-user",
        "access",
        "api-impersonator",
        "teleport-event-handler"
      ],
      "logins": [
        "root",
        "ubuntu",
        "ec2-user",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T13:52:48.913292523Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "ee7e0e26-fc00-45bf-bd9f-dabbddf34d88",
    "code": "TC000I",
    "time": "2025-08-16T12:52:48.916Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "teleport-event-handler"
      ],
      "logins": [
        "-teleport-nologin-74842f27-ca76-41b5-bac5-bc4063775f19",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T13:52:48.911105143Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "disallow_reissue": true,
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "94c5e997-22be-4564-a64a-f2c63354ba28",
    "code": "TC000I",
    "time": "2025-08-16T12:52:48.916Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "api-impersonator"
      ],
      "logins": [
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T13:52:48.910552733Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "d99e4b0f-c4c9-4cf2-8bc4-7d05011b3884",
    "code": "TC000I",
    "time": "2025-08-16T12:52:48.916Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "basic-user"
      ],
      "logins": [
        "ubuntu",
        "ec2-user",
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T13:52:48.910494244Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "c2b61827-3d0f-40ef-8078-e4902c4d9434",
    "code": "TC000I",
    "time": "2025-08-16T12:32:48.938Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "cert-admin-role",
        "web-terminal-bot-role",
        "editor",
        "basic-user",
        "access",
        "api-impersonator",
        "teleport-event-handler"
      ],
      "logins": [
        "root",
        "ubuntu",
        "ec2-user",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T13:32:48.934076171Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "f17bda9d-00ac-4142-82b6-2c7569bf9826",
    "code": "TC000I",
    "time": "2025-08-16T12:32:48.936Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "basic-user"
      ],
      "logins": [
        "ubuntu",
        "ec2-user",
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T13:32:48.909827641Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "8c6c000e-fff4-42d3-a9a4-01aa097b0856",
    "code": "TC000I",
    "time": "2025-08-16T12:32:48.936Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "api-impersonator"
      ],
      "logins": [
        "root",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T13:32:48.909781291Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "b3bbb6c9-4ff5-4a37-b42c-358d4b6fa298",
    "code": "TC000I",
    "time": "2025-08-16T12:32:48.936Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "impersonator": "bot-jarvis-bot",
      "roles": [
        "teleport-event-handler"
      ],
      "logins": [
        "-teleport-nologin-50ef5d0f-bd06-4672-952a-1fec4851f0c9",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T13:32:48.910189961Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "disallow_reissue": true,
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "tbot/17.5.4 grpc-go/1.71.0",
    "certificate_authority": null
  },
  {
    "ei": 0,
    "event": "bot.join",
    "uid": "93db0e1c-4731-4f61-9567-d7ff3bb270fe",
    "code": "TJ001I",
    "time": "2025-08-16T12:32:48.905Z",
    "cluster_name": "mycluster.local",
    "success": true,
    "bot_name": "jarvis-bot",
    "method": "token",
    "token_name": "************************8afc801b",
    "user_name": "bot-jarvis-bot",
    "addr.remote": "172.18.0.4",
    "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
  },
  {
    "ei": 0,
    "event": "cert.create",
    "uid": "e66c3f78-bf78-43e8-997c-c5b1c8eb3c7c",
    "code": "TC000I",
    "time": "2025-08-16T12:32:48.9Z",
    "cluster_name": "mycluster.local",
    "cert_type": "user",
    "identity": {
      "user": "bot-jarvis-bot",
      "roles": [
        "bot-jarvis-bot"
      ],
      "logins": [
        "-teleport-nologin-90aab7b3-17fd-4a9a-88f8-1d27db48ec5c",
        "-teleport-internal-join"
      ],
      "expires": "2025-08-16T13:32:48.856161481Z",
      "route_to_cluster": "mycluster.local",
      "teleport_cluster": "mycluster.local",
      "client_ip": "172.18.0.4",
      "prev_identity_expires": "0001-01-01T00:00:00Z",
      "private_key_policy": "none",
      "bot_name": "jarvis-bot",
      "bot_instance_id": "e8dbb805-ab13-4bd1-b26a-80ced8e07ec6"
    },
    "user_agent": "grpc-go/1.71.0",
    "certificate_authority": null
  }
]