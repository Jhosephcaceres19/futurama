export type Character = {
  readonly id?: number;
  readonly name?: string;
  readonly gender?: string;
  readonly status?: string;
  readonly species?: string;
  readonly createdAt?: Date;
  readonly image?: string | null;
};
