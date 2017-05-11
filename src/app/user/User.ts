export class User {
  id: string;
  name: string;
  email: string;
  dob: Date;
  avatar: string;
  address: string;
  phone?: string;
}

export class ListUser {
  totalPages: number;
  users: User[];
}
