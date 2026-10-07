export type UserRole = 'student' | 'instructor' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructorId: string;
}
