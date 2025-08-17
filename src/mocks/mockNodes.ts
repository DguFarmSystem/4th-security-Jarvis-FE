export const mockNodes = [
  {
    "kind": "node",
    "version": "v2",
    "metadata": {
      "name": "863e1241-aa97-433d-812d-9ea93aeb8131",
      "expires": "2025-08-16T16:56:25.505858765Z",
      "revision": "6d3aee6a-9900-407c-9b90-4cfd1ce0dddd"
    },
    "spec": {
      "addr": "127.0.0.1:3022",
      "hostname": "28a6ee42ea10",
      "cmd_labels": {
        "hostname": {
          "period": "1m0s",
          "command": [
            "hostname"
          ],
          "result": "localhost"
        }
      },
      "rotation": {
        "current_id": "",
        "started": "0001-01-01T00:00:00Z",
        "last_rotated": "0001-01-01T00:00:00Z",
        "schedule": {
          "update_clients": "0001-01-01T00:00:00Z",
          "update_servers": "0001-01-01T00:00:00Z",
          "standby": "0001-01-01T00:00:00Z"
        }
      },
      "version": "17.5.4"
    }
  },
  {
    "kind": "node",
    "version": "v2",
    "metadata": {
      "name": "be13d7a6-2686-44d9-bd46-ed0dfb10caf1",
      "expires": "2025-08-16T16:56:30.534561273Z",
      "revision": "6d7ab52a-48a3-426b-b98e-9d76b97c8736"
    },
    "spec": {
      "addr": "172.18.0.2:3022",
      "hostname": "test-server",
      "rotation": {
        "current_id": "",
        "started": "0001-01-01T00:00:00Z",
        "last_rotated": "0001-01-01T00:00:00Z",
        "schedule": {
          "update_clients": "0001-01-01T00:00:00Z",
          "update_servers": "0001-01-01T00:00:00Z",
          "standby": "0001-01-01T00:00:00Z"
        }
      },
      "version": "17.5.4"
    }
  }
]