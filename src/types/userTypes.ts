export type User = {
  kind: string;
  metadata: {
    name: string;
  };
  spec: {
    roles: string[];
  };
};